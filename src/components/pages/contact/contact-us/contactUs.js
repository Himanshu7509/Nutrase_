import React, { useState } from "react";
import "./contact.css";
import ContactImg from "../../../../assets/contact.jpg";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";



const ContactUs = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = { fname, lname, email, city, message };
    localStorage.setItem("contactData", JSON.stringify(contactData)); 
    setFname("");
    setLname("");
    setEmail("");
    setCity("");
    setMessage("");
    
    alert("Your message has been submitted!");
  };

  return (
    <>
  
      <div className="contact-main-container">
        
        <div className="contact-content-cont">
          <div className="contact-left-cont">
            <div className="contact-left-cont-title">Get in Touch</div>
            <br />
            <div className="contact-left-cont-heading">
              Let's Chat, Reach Out to Us
            </div>
            <div className="contact-left-cont-small-head">
              Have questions or feedback? We're here to help. Send us a
              message, and we'll respond within 24 hours.
            </div>
            <br />
            <form className="contact-detail-form" onSubmit={handleSubmit}>
              <div className="contact-detail-name-part">
                <div className="label-input-width">
                  <label className="contact-label">First Name</label>
                  <input
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    className="contact-input"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="label-input-width">
                  <label className="contact-label">Last Name</label>
                  <input
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    className="contact-input"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <br />
              <label className="contact-label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact-input"
                placeholder="Enter your Email"
              />
              <br />
              <label className="contact-label">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="contact-input"
                placeholder="Enter your City"
              />
              <br />
              <label className="contact-label">Message</label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="contact-input msg"
                placeholder="Leave us a message"
              />
              <button type="submit" className="contact-submit-button">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-right-cont">
            <img src={ContactImg} className="contact-right-image" alt="Contact" />
            <div className="contact-us-right-part">
              <div className="contact-us-email-part">
                <div className="contact-email-icon">
                  <MdAttachEmail className="mail-icon" />
                </div>
                <div className="contact-email-name-and-text">
                  <p className="mail-text">Email</p>
                  <p className="mail-text-part">info@yourwebsite.com</p>
                </div>
              </div>
              <br />
              <div className="contact-us-email-part">
                <div className="contact-email-icon">
                  <FaPhoneSquare className="mail-icon" />
                </div>
                <div className="contact-email-name-and-text">
                  <p className="mail-text">Phone No.</p>
                  <p className="mail-text-part">+91 9800000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default ContactUs;
