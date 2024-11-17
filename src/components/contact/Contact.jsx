import { faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send function
    emailjs
      .send(
        "service_5e5a5dq", // Replace with your EmailJS service ID
        "template_tlgb35w", // Replace with your EmailJS template ID
        formData,
        "tkeNgYATXv6mypkOA" // Replace with your EmailJS user ID (found in EmailJS dashboard)
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!"); // Alert message for success
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again."); // Alert message for failure
      });
  };

  return (
    <div>
      <div className="contact" id="contact">
        <div className="get-in-touch">
          <p>Get in touch</p>
          <h2>contact Me</h2>
        </div>
        <Row className="dm row d-flex align-items-center justify-content-center">
          <Col md={5} lg={6} className="contact-me">
            <h2 className="talk-to-me">Talk to me</h2>
            <div className="on">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <h3>Email</h3>
              <p>manjesus1556@gmail.com</p>
              <p>
                <a href="mailto:manjesus1556@gmail.com">
                  Write Me <FontAwesomeIcon className="icon" icon={faPlay} />
                </a>
              </p>
            </div>
            <div className="on">
              <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              <h3>Whatsapp</h3>
              <p>+2349014511157</p>
              <p>
                <a href="https://wa.me/+2349014511157">
                  Write Me <FontAwesomeIcon className="icon" icon={faPlay} />
                </a>
              </p>
            </div>
            <div className="on">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
              <h3>Twitter</h3>
              <p>@ManJesus7</p>
              <p>
                <a href="https://x.com/ManJesus7?t=m4vgJ6-tOVIf5quSzsBtbA&s=09">
                  Write Me <FontAwesomeIcon className="icon" icon={faPlay} />
                </a>
              </p>
            </div>
          </Col>
          <Col md={7} lg={6} className="write-to-me">
            <h3>Write Me your Message</h3>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
              <br />
              <br />
              <label>Mail</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
              <br />
              <br />
              <label>Message</label>
              <br />
              <textarea
                name="message"
                placeholder="Write your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <br />
              <br />
              <button type="submit">Send Message</button>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
