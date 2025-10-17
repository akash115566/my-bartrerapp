import React from "react";
import "../style/contact.css";

const Contact = () => {
  return (
    <>
    
    <div className="contact-page">
      <h1>Contact Barter Media</h1>
      <p>If you have any queries or want to collaborate, feel free to reach out to us.</p>
      
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> info@bartermedia.com</p>
          <p><strong>Phone:</strong> +91 0123456789</p>
          <p><strong>Address:</strong> A-167 Sectoe-63, Noida, India</p>
          
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
       
    </div>
    <section>
        <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5459958743353!2d77.3777!3d28.5760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b3b3f3f3f3%3A0x3a3a3a3a3a3a3a3a!2sSector+63%2C+Block+A%2C+Noida%2C+Uttar+Pradesh%2C+India!5e0!3m2!1sen!2sin!4v1695641087553!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sector 63 Block A, Noida"
        ></iframe>
      </div>
    </section>

    </>
  );
};

export default Contact;
