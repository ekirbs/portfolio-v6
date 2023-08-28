import { useEffect, useRef } from "react";
import "./style.css";
// import * as faceapi from 'face-api.js';
// import tophatImage from '../../assets/images/tophat-image.png';
// import { drawTophat } from './utils';

export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let videoStream;

    const startVideo = async () => {
      try {
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = videoRef.current;
        video.srcObject = videoStream;
        video.play();
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    // const loadFaceDetectionModels = async () => {
    //   await Promise.all([
    //     faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    //     faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
    //   ]);
    // };

    // const drawTophat = (face) => {
    //   const canvas = canvasRef.current;
    //   const ctx = canvas.getContext('2d');

    //   const x = face.boundingBox.x;
    //   const y = face.boundingBox.y;
    //   const width = face.boundingBox.width;
    //   const height = face.boundingBox.height;

    //   ctx.drawImage(tophatImage, x, y - height * 0.8, width, height);
    // };

    // const processFrame = async () => {
    //   const video = videoRef.current;
    //   const canvas = canvasRef.current;
    //   const ctx = canvas.getContext('2d');

    //   ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    //   const detections = await faceapi.detectAllFaces(canvas);
    //   detections.forEach(drawTophat);

    //   requestAnimationFrame(processFrame);
    // };

    startVideo();
    // loadFaceDetectionModels();
    // processFrame();

    return () => {
      // Cleanup: Stop the video stream when the component unmounts
      if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const takePicture = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL('image/png');
    // console.log(imageUrl);

    const img = document.createElement('img');
    img.src = imageUrl;

    const pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');
    pictureContainer.appendChild(img);

    const videoContainer = document.querySelector('.video-container');
    videoContainer.appendChild(pictureContainer);
  };

  // const applyFilter = async () => {
  //   const video = videoRef.current;
  //   const detections = await faceapi.detectAllFaces(video);
  //   detections.forEach(drawTophat);
  // };

  return (
    <div id="camera" className="camera">
      <h6>This is the video page.</h6>
      <video ref={videoRef} autoPlay></video>

      <button id="take-picture-btn" onClick={takePicture}>
        Take Picture
      </button>
{/* 
      <button id="apply-filter-btn" onClick={applyFilter}>
        Apply Filter
      </button> */}

      <div className="video-container">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

// import { useEffect, useRef } from "react";
// import * as faceapi from 'face-api.js';
// import tophatImage from '../../assets/images/tophat-image.png';
// import { drawTophat } from './utils';
// import "./style.css";

// export default function Camera() {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let videoStream;

//     const startVideo = async () => {
//       try {
//         videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
//         const video = videoRef.current;
//         video.srcObject = videoStream;
//         video.play();
//       } catch (error) {
//         console.error('Error accessing camera:', error);
//       }
//     };

//     const loadFaceDetectionModels = async () => {
//       await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
//     };

//     const drawTophat = (face) => {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');

//       const x = face.boundingBox.x;
//       const y = face.boundingBox.y;
//       const width = face.boundingBox.width;
//       const height = face.boundingBox.height;

//       ctx.drawImage(tophatImage, x, y - height * 0.8, width, height);
//     };

//     const processFrame = async () => {
//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');

//       ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

//       const detections = await faceapi.detectAllFaces(canvas);
//       detections.forEach(drawTophat);

//       requestAnimationFrame(processFrame);
//     };

//     startVideo();
//     loadFaceDetectionModels();
//     processFrame();

//     return () => {
//       // Cleanup: Stop the video stream when the component unmounts
//       if (videoStream) {
//         videoStream.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, []);

//   const takePicture = () => {
//     const video = videoRef.current;
//     const canvas = document.createElement('canvas');
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//     const imageUrl = canvas.toDataURL('image/png');
//     // console.log(imageUrl);

//     const img = document.createElement('img');
//     img.src = imageUrl;

//     const pictureContainer = document.createElement('div');
//     pictureContainer.classList.add('picture-container');
//     pictureContainer.appendChild(img);

//     const videoContainer = document.querySelector('.video-container');
//     videoContainer.appendChild(pictureContainer);
//   };

//   const applyFilter = async () => {
//     const video = videoRef.current;
//     const detections = await faceapi.detectAllFaces(video);
//     detections.forEach(drawTophat);
//   };

//   return (
//     <div id="camera" className="camera">
//       <h6>This is the video page.</h6>
//       <video ref={videoRef} autoPlay></video>

//       <button id="take-picture-btn" onClick={takePicture}>
//         Take Picture
//       </button>

//       <button id="apply-filter-btn" onClick={applyFilter}>
//         Apply Filter
//       </button>

//       <div className="video-container">
//         <canvas ref={canvasRef}></canvas>
//       </div>
//     </div>
//   );
// }
