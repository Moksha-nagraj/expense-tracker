import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-description">
          Have any questions or feedback? We’d love to hear from you! Get in
          touch with us through the form below or email us directly.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
        <div className="alternative-contact">
          <p>
            Or reach us at: <strong>support@expensetracker.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
