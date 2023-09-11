import { useState, useEffect, useRef } from "react";
import { send } from "emailjs-com";
import { Row, Col } from "react-bootstrap";
import { Map } from "../";
import { validateEmail } from "../../utils/helpers";
import { AiFillMail, AiFillPhone, AiFillSound } from "react-icons/ai";
import "./contact.css";
import "./contactButton.scss";
import HereWeGo from "./sounds/HereWeGo.mp3";

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formInput, setFormInput] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (submitted) {
      audioRef.current.play();
    }
  }, [submitted]);

  const SendButton = () => (
    <button
      type="button"
      className="slideButton contact-button"
      onClick={handleFormSubmit}
    >
      <AiFillSound className="sound-icon-left" />
      Send It
      <AiFillSound className="sound-icon-right" />
    </button>
  );

  const handleInputChange = (e) =>
    setFormInput({ ...formInput, [e.target.name]: e.target.value });

  const handleValidation = () => {
    if (!validateEmail(formInput.reply_to) || !formInput.from_name) {
      setErrorMessage(
        "Either you didn't enter a name, or the email address you entered is invalid."
      );
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!handleValidation()) {
      return;
    }

    console.log("Sending... 📨");

    send(
      "service_3khjmam",
      "template_ikuskwe",
      formInput,
      // User ID
      "Kpewq1Vl2d7aSMnL3"
    )
      .then((response) => {
        alert(`Welcome to the jungle, ${formInput.from_name}!`);
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
        setFormInput({
          from_name: "",
          reply_to: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      <div className="contact-card">
        <Row className="contact-row">
          <Col className="map-col">
            <Map />
          </Col>
          <Col>
            <div className="contact-container">
              <div className="contact-info-container">
                <div>
                  <AiFillMail className="contact-info-icon" />
                  <p className="contact-card-content">
                    {" "}
                    erickirberger@gmail.com
                  </p>
                </div>
                <div>
                  <AiFillPhone className="contact-info-icon" />
                  <p className="contact-card-content"> 908 229 0170</p>
                </div>
              </div>
              {submitted ? (
                <h2 className="contact-success-greeting">
                  "Here We Go!" Thank you {formInput.from_name}.
                </h2>
              ) : (
                <>
                  <div>
                    <p className="contact-card-content contact-form-content">
                      Let's go grab a cup of coffee!
                    </p>
                  </div>
                  <form className="contact-form">
                    <input
                      value={formInput.from_name}
                      name="from_name"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Your Name"
                      className="contact-area"
                    />
                    <input
                      value={formInput.reply_to}
                      name="reply_to"
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Your Email"
                      className="contact-area"
                    />
                    <textarea
                      value={formInput.message}
                      name="message"
                      onChange={handleInputChange}
                      type="textArea"
                      placeholder="Text Area"
                      className="contact-area text-area"
                    />
                    <div className="contact-button-div">
                      <SendButton onClick={handleFormSubmit} />
                    </div>
                    <div>
                      <p className="contact-card-content contact-form-content">
                        (A sound will play when you send it)
                      </p>
                    </div>
                  </form>
                  {errorMessage && (
                    <div className="error-div">
                      <p className="error-text">{errorMessage}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>
      <audio ref={audioRef} src={HereWeGo}></audio>
    </>
  );
}
