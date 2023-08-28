export function drawTophat(face) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const x = face.boundingBox.x;
  const y = face.boundingBox.y;
  const width = face.boundingBox.width;
  const height = face.boundingBox.height;

  ctx.drawImage(tophatImage, x, y - height * 0.8, width, height);
}