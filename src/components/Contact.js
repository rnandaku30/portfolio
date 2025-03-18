import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [messageSent, setMessageSent] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email details
    const recipientEmail = "reddyramya3003@gmail.com"; // Your email
    const subject = encodeURIComponent("Message from Your Portfolio Website");
    const body = encodeURIComponent(
      `Hello Ramyashree,\n\nYou have received a new message:\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest Regards,\n${formData.name}`
    );

    // Open email client
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Show confirmation message
    setMessageSent(true);

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="contact-container">
      {/* Contact Header */}
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>If you have any questions, opportunities, or just want to say hi, feel free to reach out!</p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <ul>
            <li><strong><i className="fas fa-envelope"></i></strong> <a href="mailto:ramyashree.nandakumar@gmail.com">ramyashree.nandakumar@gmail.com</a></li>
            <li><strong><i className="fab fa-linkedin"></i></strong> <a href="https://linkedin.com/in/ramyashree-nandakumar" target="_blank" rel="noopener noreferrer">linkedin.com/in/ramyashree-nandakumar</a></li>
            <li><strong><i className="fas fa-briefcase"></i> </strong> <a href="http://ramya-portfolio.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">ramya-portfolio</a></li>
            <li><strong><i className="fas fa-map-marker-alt"></i></strong> Fairfax, VA</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="contact-label">Name</label>
              <input type="text" name="name" className="contact-input" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="contact-label">Your Email</label>
              <input type="email" name="email" className="contact-input" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="contact-label">Message</label>
              <textarea name="message" className="contact-input" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn contact-submit">Send Message</button>
          </form>

          {/* Success Message */}
          {messageSent && (
            <div className="success-message">
              Your email is ready! Please review and send it from your email client.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Contact;
