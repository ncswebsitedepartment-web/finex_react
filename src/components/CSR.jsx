import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CSR.css";

const CSR = () => {
  const [activeTab, setActiveTab] = useState("education");
  const navigate = useNavigate();
const data = {
    education: {
      title: "Education and Skill Development",
      text: "One of the biggest challenges faced by the Indian education system has been expansion without a simultaneous assurance of quality of education.SP Group considers it a priority to strengthen the quality of education in government schools catering specifically to marginalised communities.",
      projects: [
        {
          id: 1,
          slug: "kitchen-shed-construction",
          name: "Kitchen Shed Construction",
          scheme: "PM POSHAN",
          images: ["/images/csreducation1.jfif"],
          description: "Construction of kitchen sheds in Maharashtra schools."
        }
      ]
    },

    health: {
      title: "Healthy Living",
      text: "Committed to advancing public health and well-being by providing access to affordable healthcare, nutrition, and safe water and sanitation.",
      projects: [
        {
          id: 2,
          slug: "covid-field-hospital-nashik",
          name: "Establishment of Prefabricated Structure (COVID Field Hospital) in Nashik Region",
          scheme: "National Health Mission (NHM), ECRP-II",
          images: [
            "/images/csrhealth1.jpeg",
            "/images/csrhealth2.jpeg",
            "/images/csrhealth3.jpeg",
            "/images/csrhealth4.jpeg"
          ],
          description:
            "This project was initiated under the National Health Mission as part of the Emergency COVID Response Package (ECRP-II) to strengthen healthcare infrastructure during the pandemic. The objective was to rapidly establish a fully functional prefabricated COVID Field Hospital in the Nashik region of Maharashtra to handle the sudden surge in COVID-19 cases and reduce the burden on existing hospitals. The prefabricated structure was designed for quick installation and scalability, enabling the healthcare system to respond efficiently in emergency situations. It included essential medical facilities such as isolation wards, treatment areas, oxygen support systems, and basic diagnostic infrastructure to ensure timely and effective patient care. The project played a crucial role in enhancing the region’s healthcare readiness by increasing bed capacity, improving emergency response time, and ensuring better management of critical patients during the peak of the pandemic. Under the NHM ECRP-II initiative, this effort contributed significantly to strengthening public health infrastructure and preparedness for future health emergencies."
        }
      ]
    },

    social: {
      title: "Social Inclusion",
      text: "Empowering communities.",
      projects: []
    },

    environment: {
      title: "Environment Conservation",
      text: "Sustainable development initiatives.",
      projects: []
    }
  };


  const current = data[activeTab];

  return (
    <div className="csr">

      {/* HERO */}
      <section className="hero">
        <img src="/images/whiteboard-1.jpg" alt="CSR" />
      </section>

      {/* IMPACT */}
    <section className="impact-section">
  <div className="impact-container">

    <div className="impact-left">
      <h1>
        Creating meaningful impact <br /> through responsible growth
      </h1>
    </div>

    <div className="impact-right">
      <p>
        We are committed to driving sustainable development by improving lives and
        creating long-term opportunities across communities. Our approach focuses on
        delivering quality solutions in infrastructure, manufacturing, and social development
        that contribute to overall national growth.
      </p>

      <p>
        Alongside social progress, we actively work toward environmental sustainability by
        adopting eco-friendly practices, reducing waste, and promoting efficient resource
        utilization. Our initiatives are designed to balance industrial development with
        environmental responsibility, ensuring a better future for coming generations.
      </p>
    </div>

  </div>
</section>

      {/* HIGHLIGHTS */}
      <section className="highlights">
        <div className="highlights-header">
          <h2>Our Impact in Numbers</h2>
        </div>

        <div className="highlights-grid">
          <div className="highlight-item">
            <h3>23K+</h3>
            <p>Children educated</p>
          </div>

          <div className="highlight-item">
            <h3>2.3M+</h3>
            <p>Litres of water harvested</p>
          </div>

          <div className="highlight-item">
            <h3>160K+</h3>
            <p>People gained water access</p>
          </div>

          <div className="highlight-item">
            <h3>8.2K+</h3>
            <p>Women empowered</p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars">

        <div className="pillars-header">
          <h2>Pillars of CSR</h2>

          <div className="tabs">
            {Object.keys(data).map((tab) => (
              <span
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? "active" : ""}
              >
                {tab.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        <hr />

        {/* PROJECTS */}
        <div className="pillars-images">
          {current.projects.length > 0 ? (
            current.projects.map((project) => (
              <div
                key={project.id}
                className="image-card"
                onClick={() =>
                  navigate(`/project/${project.id}`, {
                    state: project
                  })
                }
              >
                <img src={project.images?.[0]} alt={project.name} />

                <div className="overlay">
                  <h4>{project.name}</h4>
                  <span>View Details</span>
                </div>
              </div>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>

        {/* TEXT */}
        <div className="pillars-content">
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>

      </section>
    </div>
  );
};

export default CSR;

