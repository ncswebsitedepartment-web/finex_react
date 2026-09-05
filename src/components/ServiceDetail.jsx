import { useParams, Link } from "react-router-dom";
import servicesData from "../data/services.json";
import "../styles/serviceDetail.css";
import { useState, useEffect } from "react";

/* ==========================================================
   RAILWAY SERVICES
========================================================== */

import SeatBerthInfo from "./serviceDetails/SeatBerthInfo";
import WorkshopInfrastructure from "./serviceDetails/WorkshopInfrastructure";
import CivilWorks from "./serviceDetails/CivilWorks";
import EOTCraneInstallation from "./serviceDetails/EOTCraneInstallation";
import UtilityInfrastructureDevelopment from "./serviceDetails/UtilityInfrastructureDevelopment";
import PlatformInfrastructure from "./serviceDetails/PlatformInfrastructure";

/* ==========================================================
   HEALTHCARE SERVICES
========================================================== */

import ModularHospital from "./serviceDetails/ModularHospital";
import MedicalFurniture from "./serviceDetails/MedicalFurniture";
import MedicalGasPipeline from "./serviceDetails/MedicalGasPipeline";
import ModularOperationTheatre from "./serviceDetails/ModularOperationTheatre";
import ICUInfrastructure from "./serviceDetails/ICUInfrastructure";
import FireFightingSystem from "./serviceDetails/FireFightingSystem";

/* ==========================================================
   DEFENCE / ELECTRONIC SYSTEMS
========================================================== */

import RadarCommunicationShelters from "./serviceDetails/RadarCommunicationShelters";
import EMIEMCShelters from "./serviceDetails/EMIEMCShelters";

/* ==========================================================
   DEFENCE FABRICATION WORKS
========================================================== */

import DefenceFabricationWorks from "./serviceDetails/DefenceFabricationWorks";

/* ==========================================================
   MEDICAL SHELTERS
========================================================== */

import MedicalShelters from "./serviceDetails/MedicalShelters";


function ServiceDetail() {
  const { slug } = useParams();

  /* ==========================================================
     FIND SERVICE ACROSS ALL CATEGORIES
  ========================================================== */

  let service;
  let category;

  for (const c of servicesData) {
    const s = c.services.find(
      (svc) => svc.slug === slug
    );

    if (s) {
      service = s;
      category = c;
      break;
    }
  }

  /* ==========================================================
     STATE
  ========================================================== */

  const [mainImage, setMainImage] = useState(
    "/images/default.jpg"
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [lightboxImage, setLightboxImage] = useState("");


  /* ==========================================================
     SET MAIN IMAGE
  ========================================================== */

  useEffect(() => {
    if (service?.images?.[0]) {
      setMainImage(service.images[0]);
    } else if (service?.heroImage) {
      setMainImage(service.heroImage);
    } else {
      setMainImage("/images/default.jpg");
    }
  }, [service]);


  /* ==========================================================
     SERVICE NOT FOUND
  ========================================================== */

  if (!service) {
    console.log("Current slug:", slug);

    servicesData.forEach((c, index) => {
      console.log(
        "Category",
        index,
        c.category
      );

      c.services.forEach((s) => {
        console.log(
          "Service slug:",
          s.slug
        );
      });
    });

    return (
      <section className="service-not-found">

        <h2>
          Service not found
        </h2>

        <p>
          Requested service: {slug}
        </p>

      </section>
    );
  }


  /* ==========================================================
     LIGHTBOX
  ========================================================== */

  const openLightbox = (img) => {
    setLightboxImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };


  /* ==========================================================
     RETURN
  ========================================================== */

  return (
    <>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="service-hero"
        style={{
          backgroundImage: `url(${service.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>
            {service.title}
          </h1>

        </div>

      </section>


      {/* ======================================================
          MAIN SERVICE AREA
      ====================================================== */}

      <section className="service-details">

        <div className="service-container">


          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <aside className="services-sidebar">

            <h3 className="sidebar-title">
              Our Services
            </h3>


            <ul className="services-menu">

              {category?.services?.map((s) => (

                <li key={s.id}>

                  <Link
                    to={`/services/${s.slug}`}
                  >

                    <span className="plus">
                      +
                    </span>

                    <span className="text">
                      {s.title}
                    </span>

                    <span className="arrow">
                      ↗
                    </span>

                  </Link>

                </li>

              ))}

            </ul>


            {/* =================================================
                CONTACT BOX
            ================================================= */}

            <div className="contact-box">

              <h4>
                Request a Consultation
              </h4>

              <p>
                📞 +91 8975789408
              </p>

              <p>
                📧 info@finexindustries.com
              </p>

              <p>
                📍 Pimpalnare Dindori, Nashik
              </p>

            </div>

          </aside>


          {/* ==================================================
              CONTENT
          ================================================== */}

          <div className="service-content">


            {/* =================================================
                IMAGE GALLERY
            ================================================= */}

            <div className="image-gallery">

              <div
                className="main-image"
                onClick={() =>
                  openLightbox(mainImage)
                }
              >

                <img
                  src={mainImage}
                  alt={service.title}
                />

              </div>

            </div>


            {/* =================================================
                SERVICE INFORMATION
            ================================================= */}


            {/* =====================================================
                RAILWAY SERVICES
            ===================================================== */}

            {service.slug === "seat-berth" ? (

              <SeatBerthInfo />

            ) : service.slug === "workshop-infrastructure" ? (

              <WorkshopInfrastructure />

            ) : service.slug === "civil-works" ? (

              <CivilWorks />

            ) : service.slug === "eot-crane-installation" ? (

              <EOTCraneInstallation />

            ) : service.slug ===
              "utility-infrastructure-development" ? (

              <UtilityInfrastructureDevelopment />

            ) : service.slug ===
              "platform-infrastructure" ? (

              <PlatformInfrastructure />

            )


            /* =====================================================
               HEALTHCARE SERVICES
            ===================================================== */

            : service.slug === "modular-hospital" ? (

              <ModularHospital />

            ) : service.slug === "medical-furniture" ? (

              <MedicalFurniture />

            ) : service.slug === "medical-gas-pipeline" ? (

              <MedicalGasPipeline />

            ) : service.slug ===
              "modular-operation-theatre" ? (

              <ModularOperationTheatre />

            ) : service.slug ===
              "icu-infrastructure" ? (

              <ICUInfrastructure />

            ) : service.slug ===
              "fire-fighting-system" ? (

              <FireFightingSystem />

            )


            /* =====================================================
               DEFENCE / ELECTRONIC SYSTEMS
            ===================================================== */

            : service.slug ===
              "radar-communication-shelters" ? (

              <RadarCommunicationShelters />

            ) : service.slug ===
              "emi-emc-shelters" ? (

              <EMIEMCShelters />

            )


            /* =====================================================
               DEFENCE FABRICATION WORKS
            ===================================================== */

            : service.slug ===
              "defence-fabrication-works" ? (

              <DefenceFabricationWorks />

            )


            /* =====================================================
               MEDICAL SHELTERS
            ===================================================== */

            : service.slug ===
              "medical-shelters" ? (

              <MedicalShelters />

            )


            /* =====================================================
               DEFAULT SERVICE
            ===================================================== */

            : (

              <>

                <h2>
                  {service.title}
                </h2>


                <p>
                  {service.description}
                </p>


                {/* ------------------------------------------
                    SUBCATEGORIES
                ------------------------------------------ */}

                {service.items?.length > 0 && (

                  <>

                    <h3>
                      Subcategories
                    </h3>


                    <div className="subcategories">

                      {service.items.map(
                        (item, i) => (

                          <div
                            className="subcategory-card"
                            key={i}
                          >

                            <Link
                              to={`/${item.slug}`}
                            >

                              <img
                                src={
                                  item.images?.[0] ||
                                  "/images/default.jpg"
                                }
                                alt={item.title}
                                className="subcategory-image"
                              />

                              <h4>
                                {item.title}
                              </h4>

                            </Link>


                            <p>
                              {item.description}
                            </p>

                          </div>

                        )
                      )}

                    </div>

                  </>

                )}

              </>

            )}

          </div>

        </div>

      </section>


      {/* ======================================================
          LIGHTBOX
      ====================================================== */}

      {lightboxOpen && (

        <div
          className="lightbox"
          onClick={closeLightbox}
        >

          <span
            className="lightbox-close"
            onClick={closeLightbox}
          >
            ×
          </span>


          <img
            className="lightbox-image"
            src={lightboxImage}
            alt="Enlarged"
          />

        </div>

      )}

    </>
  );
}

export default ServiceDetail;