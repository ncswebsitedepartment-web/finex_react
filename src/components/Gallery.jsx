import React, { useState } from "react";
import "../styles/Gallery.css"; // Make sure your gallery CSS is prefixed with gallery-

import artsandcraft1 from "../assets/images/artsandcraft1.jpg";
import artsandcraft2 from "../assets/images/artsandcraft2.jpg";
import artsandcraft3 from "../assets/images/artsandcraft3.jpg";
import chair2 from "../assets/images/chair2.webp";
import conference1 from "../assets/images/conference1.jpg";
import cubiclesWorkstation1 from "../assets/images/cubicles-workstation1.jpg";
import displayboard1 from "../assets/images/displayboard1.jpg";
import foldingfrench1 from "../assets/images/foldingfrench1.jpg";
import home1 from "../assets/images/home1.jpg";
import hostel1 from "../assets/images/hostel1.jpg";
import industrail1 from "../assets/images/industrail1.jpg";
import kitchen1 from "../assets/images/kitchen1.jpg";
import lab1 from "../assets/images/lab1.jpg";
import library1 from "../assets/images/library1.jpg";
import playarea3 from "../assets/images/playarea3.jpg";

const images = [
  artsandcraft1,
  artsandcraft2,
  artsandcraft3,
  chair2,
  conference1,
  cubiclesWorkstation1,
  displayboard1,
  foldingfrench1,
  home1,
  hostel1,
  industrail1,
  kitchen1,
  lab1,
  library1,
  playarea3,
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");

  const openLightbox = (src) => {
    setActiveImg(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImg("");
  };

  return (
    <div className="gallery-page-wrapper">
      {/* Hero Section */}
      <section className="gallery-hero-section">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1>Our Gallery</h1>
          <p>Explore our high-quality modular furniture projects.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-container">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                onClick={() => openLightbox(img)}
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="gallery-lightbox" onClick={closeLightbox}>
            <span
              className="gallery-lightbox-close"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              &times;
            </span>
            <img
              className="gallery-lightbox-img"
              src={activeImg}
              alt="Expanded"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;