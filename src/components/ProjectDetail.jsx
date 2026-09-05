import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/ProjectDetail.css";

const ProjectDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!state) {
    return (
      <div className="project-detail-empty">
        <h2>Project not found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const images =
    state?.images?.length > 0
      ? state.images
      : state?.image
      ? [state.image]
      : [];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-detail">

      {/* HERO SLIDER */}
      <div className="project-hero">
        {images.length > 0 && (
          <img src={images[currentIndex]} alt={state.name} />
        )}

        {images.length > 1 && (
          <>
            <button className="nav prev" onClick={prevSlide}>‹</button>
            <button className="nav next" onClick={nextSlide}>›</button>
          </>
        )}

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      {/* CONTENT */}
      <div className="project-content">

        <span className="tag">{state.scheme}</span>

        <h1 className="project-title">{state.name}</h1>

        {/* ✅ FIXED: FULL DESCRIPTION */}
        <p className="project-desc">
          {state.description}
        </p>

      </div>

    </div>
  );
};

export default ProjectDetail;