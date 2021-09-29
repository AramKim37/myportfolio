import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="sent-message">Your message has been successfully sent.</p>
  );
};
export default function Contact() {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_85spf0b",
        "template_8cv9vy2",
        e.target,
        "user_pqY2HOcDJk40pvjNFciVc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <form className="email-container" action="" onSubmit={sendEmail}>
      <div className="email-form">
        <div className="form-container">
          <div className="formWord">
            <h2 className="contactme">Contact me</h2>
            <div className="email-name">
              <span className="contact-form">Full Name</span>
              <br />
              <input
                className="input100"
                type="text"
                name="fullName"
                required
              ></input>
            </div>
            <br />
            <div className="email-number">
              <span className="contact-form">Phone Number</span>
              <br />
              <input
                className="input100"
                type="text"
                name="phone"
                required
              ></input>
            </div>
            <br />
            <div className="email-email">
              <span className="contact-form">Enter Email</span>
              <br />
              <input
                className="input100"
                type="text"
                name="email"
                required
              ></input>
            </div>
            <br />
          </div>
          <div className="formWord">
            <span className="email-message">Message</span>
            <br />
            <textarea name="message" required></textarea>
            <br />
            <button className="sendbtn">SEND</button>

            <div className="row">{result ? <Result /> : null}</div>
          </div>
        </div>
      </div>
    </form>
  );
}
