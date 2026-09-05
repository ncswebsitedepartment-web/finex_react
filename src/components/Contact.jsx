import React from "react";
import "../styles/Contact.css";
// import "../styles/style.css";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="contacthero-section">
        <div className="contactoverlay"></div>
        <div className="contacthero-contact">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Please fill out the form below or reach
            out using the contact details.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-page">
        <div className="contact-container">
          {/* Contact Form */}
          <form
            className="contact-form"
            action="submit_form_endpoint"
            method="POST"
          >
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
            />

            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email"
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />

            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Write your message here"
            ></textarea>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>

          {/* Contact Info Cards */}
          <div className="contact-cards-vertical">
            <div className="info-card">
              <div className="icon-circle">
                <i className="fa fa-phone"></i>
              </div>
              <div className="info-text">
  <h3>CALL US</h3>
  <p>
    <a href="tel:+918975789408">+91 8975789408</a>
  </p>
</div>
            </div>

            <div className="info-card">
              <div className="icon-circle">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <div className="info-text">
                <h3>REACH US</h3>
                <p>
                Gut No. 243/1B, Pimpalnare, Dindori, Nashik, Maharashtra, 422004
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-circle">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="info-text">
  <h3>MAIL US</h3>
  <p>
    <a href="mailto:info@finexindustries.com">
      info@finexindustries.com
    </a>
  </p>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14985.64270668262!2d73.79677401011661!3d20.116907499732758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdde9e156ccda51%3A0xae1f9402c5b7621f!2sFinex%20Industries%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1773393150199!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Finex Industries Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;