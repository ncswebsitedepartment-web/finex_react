import { useParams, useNavigate } from 'react-router-dom';
import servicesData from '../data/services.json';
import { useState } from 'react';
import '../styles/subcategoryDetail.css';

function SubcategoryDetail() {
  const { subSlug } = useParams();
  const navigate = useNavigate(); // 🔹 useNavigate hook
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  // Find subcategory by slug
  let subcategory;
  for (let c of servicesData) {
    for (let s of c.services) {
      subcategory = s.items?.find(item => item.slug === subSlug);
      if (subcategory) break;
    }
    if (subcategory) break;
  }

  if (!subcategory) return <h2>Subcategory not found</h2>;

  const openLightbox = (img) => {
    setLightboxImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="subcategory-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{subcategory.title}</h1>
          <p>
            {/* You can keep breadcrumbs if you want */}
          </p>
          {/* 🔹 Back button */}
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back to service
          </button>
        </div>
      </section>

      {/* TITLE & DESCRIPTION */}
      <section className="subcategory-info">
        <div className="subcategory-info-container">
          <h2>{subcategory.title}</h2>
          <p>{subcategory.description}</p>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="subcategory-images-grid">
        {subcategory.images.map((img, i) => (
          <div className="image-card" key={i}>
            <img
              src={img}
              alt={`${subcategory.title} ${i + 1}`}
              onClick={() => openLightbox(img)}
            />
          </div>
        ))}
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>×</span>
          <img className="lightbox-image" src={lightboxImage} alt="Enlarged" />
        </div>
      )}
    </>
  );
}

export default SubcategoryDetail;