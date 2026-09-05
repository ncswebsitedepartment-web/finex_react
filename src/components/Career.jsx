import React, { useState } from "react";
import "../styles/Career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    position: "Furniture Designer",
    biodata: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "biodata") {
      setFormData({ ...formData, biodata: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="career-page-wrapper">
      {/* Hero Section */}
      <section className="career-hero-section">
        <div className="career-hero-overlay"></div>
        <div className="career-hero-content">
          <h1>Join Finex Industries</h1>
          <p>Shape your career with our innovative furniture manufacturing team</p>
        </div>
      </section>

      {/* Career Form */}
      <div className="career-form-container">
        <h1 className="career-form-heading">Career Application</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="career-form">
          <label className="career-label">Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="career-input"
          />

          <label className="career-label">Address</label>
          <textarea
            name="address"
            required
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            className="career-textarea"
          ></textarea>

          <label className="career-label">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            required
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleChange}
            className="career-input"
          />

          <label className="career-label">Apply for Position</label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="career-select"
          >
            <option>Furniture Designer</option>
            <option>Sales Executive</option>
            <option>Carpenter</option>
            <option>Other</option>
          </select>

          <label className="career-label">Upload Biodata</label>
          <input
            type="file"
            name="biodata"
            required
            onChange={handleChange}
            className="career-input-file"
          />

          <button type="submit" className="career-submit-button">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;