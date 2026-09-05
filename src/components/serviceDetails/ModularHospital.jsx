import "../../styles/serviceDetail.css";
import "../../styles/SeatBerthInfo.css";
import "../../styles/platform.css";
import {
  FaHospital,
  FaProcedures,
  FaFlask,
  FaToilet,
  FaUtensils,
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
  FaFire,
} from "react-icons/fa";

function ModularHospital() {
  const scope = [
    {
      icon: <FaProcedures />,
      title: "Hospital Wards",
      text:
        "Prefabricated hospital wards, ICU modules and doctor consultation cabins designed for rapid deployment and infection control.",
    },
    {
      icon: <FaFlask />,
      title: "Laboratories & Utility Rooms",
      text:
        "Diagnostic laboratories, medical stores, utility rooms and cleaning rooms with complete MEP integration.",
    },
    {
      icon: <FaToilet />,
      title: "Support Facilities",
      text:
        "Patient toilets, bathrooms, staff changing rooms and security cabins built as ready-to-use modular units.",
    },
    {
      icon: <FaUtensils />,
      title: "Common Areas",
      text:
        "Kitchen, canteen, meeting rooms and mortuary rooms manufactured for fast installation and long-term durability.",
    },
    {
      icon: <FaTools />,
      title: "Integrated Services",
      text:
        "Steel-frame construction with insulated panels, HVAC, electrical, plumbing and medical gas integration.",
    },
  ];

  const specs = [
    {
      module: "Ward Module",
      size: "6 × 6 m",
      note: "6–10 Beds",
    },
    {
      module: "OT / ICU Module",
      size: "6 × 6 m",
      note: "1 OT / 4–6 ICU Beds",
    },
    {
      module: "Room Module",
      size: "3 × 3 m to 6 × 4 m",
      note: "Cabin / Lab / Store",
    },
    {
      module: "Hospital Block",
      size: "20 × 50 m & Above",
      note: "50–150 Beds",
    },
  ];

  const standards = [
    {
      icon: <FaHospital />,
      title: "NABH Criteria",
      text:
        "Designed to meet NABH hospital facility design requirements.",
    },
    {
      icon: <FaShieldAlt />,
      title: "IS Standards",
      text:
        "Structures designed in accordance with IS 456 (RCC) and IS 800 (Steel).",
    },
    {
      icon: <FaFire />,
      title: "NBC 2016",
      text:
        "MEP, electrical and fire services follow NBC 2016 design criteria.",
    },
  ];

  const gallery = [
    {
      title: "Hospital Corridor System",
      image: "/images/hospital-corridor-system.png",
    },
    {
      title: "Hospital Kitchen",
      image: "/images/hospital-kitchen.png",
    },
    {
      title: "Medical Store Room",
      image: "/images/medical-store-room.png",
    },
    {
      title: "Patient Toilet & Bathroom",
      image: "/images/patient-toliet-bathroom.png",
    },
    {
      title: "Staff Changing Room",
      image: "/images/staff-changing-room.png",
    },
    {
      title: "Doctor Consultation Cabin",
      image: "/images/doctor-consultation-cabin.png",
    },
    {
      title: "Hospital Security Cabin",
      image: "/images/hospital-security-cabin.png",
    },
    {
      title: "Diagnostic Laboratory",
      image: "/images/Diagnostic-laboratory.png",
    },
    {
      title: "Utility & Cleaning Room",
      image: "/images/utility-cleaning-room.png",
    },
    {
      title: "Meeting Room",
      image: "/images/meeting-room.png",
    },
    {
      title: "Canteen Area",
      image: "/images/canteen-area.png",
    },
  ];

  return (
    <div className="seat-service-content">
      {/* Stats */}

      <section className="stats-grid">
        <div className="stat-card">
          <h2>NABH</h2>
          <p>Design Criteria</p>
        </div>

        <div className="stat-card">
          <h2>50–150</h2>
          <p>Bed Capacity</p>
        </div>

        <div className="stat-card">
          <h2>Fast</h2>
          <p>Installation</p>
        </div>

        <div className="stat-card">
          <h2>Complete</h2>
          <p>MEP Integration</p>
        </div>
      </section>

      {/* Service Information */}

      <section className="info-box service-info">
        <div className="section-header">
          <span className="section-tag">Engineering Overview</span>

          <h2>Service Information</h2>
        </div>

        <div className="seat-info-text">
          <p>
            Prefabricated, rapidly deployable hospital blocks and complete room
            modules engineered for fast installation, infection control and
            scalability. Designed for healthcare infrastructure including
            corridors, wards, consultation cabins, laboratories, kitchens,
            utility rooms and mortuary facilities.
          </p>

          <p>
            Each module is supplied as a ready-to-use unit with integrated HVAC,
            electrical, plumbing, medical gas systems and insulated steel-panel
            construction for reliable healthcare operations.
          </p>
        </div>
      </section>

      {/* Product Scope */}

      <section className="info-box">
        <h2>Product Scope</h2>

        <div className="scope-grid">
          {scope.map((item, index) => (
            <div className="scope-card" key={index}>
              <div className="scope-content">
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}

      <section className="info-box">
        <h2>Technical Specifications</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Module</th>
                <th>Typical Size</th>
                <th>Capacity / Note</th>
              </tr>
            </thead>

            <tbody>
              {specs.map((item, index) => (
                <tr key={index}>
                  <td>{item.module}</td>
                  <td>{item.size}</td>
                  <td>{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Standards */}

      <section className="info-box">
        <h2>Standards & Compliance</h2>

        <div className="standards-grid">
          {standards.map((item, index) => (
            <div className="standard-card" key={index}>
              <div className="standard-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}

      <section className="info-box gallery-section">
        <div className="gallery-header">
          <span className="gallery-tag">PROJECT SHOWCASE</span>

          <h2>
            Modular Hospital <span>Gallery</span>
          </h2>

          <p>
            Modern prefabricated hospital infrastructure engineered for rapid
            deployment, infection control and operational efficiency.
          </p>
        </div>

       <div className="platformgallery-grid">


        {gallery.map((item,index)=>(


            <div
            className={`platformgallery-card platformgallery-${index+1}`}
            key={index}
            >


                <img
                src={item.image}
                alt={item.title}
                />


                <div className="platformgallery-overlay">


                    <div className="platformgallery-number">
                        0{index+1}
                    </div>


                    <h3>
                        {item.title}
                    </h3>

{/* 
                    <div className="gallery-link">
                        View Project →
                    </div> */}


                </div>


            </div>


        ))}


    </div>
      </section>
    </div>
  );
}

export default ModularHospital;