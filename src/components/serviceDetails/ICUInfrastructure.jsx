import "../../styles/serviceDetail.css";
import "../../styles/SeatBerthInfo.css";
import "../../styles/platform.css";

import {
  FaBed,
  FaHospital,
  FaShieldAlt,
  FaHeartbeat,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";


function ICUInfrastructure() {

  const scope = [
    {
      icon: <FaBed />,
      title: "Bed Head Panel System",
      text:
        "Advanced bed-head panels with medical gas outlets, electrical points, nurse call systems and patient monitoring provisions.",
    },
    {
      icon: <FaHospital />,
      title: "Modular ICU Partitions",
      text:
        "Isolation cubicles, modular partitions and privacy curtain tracks designed for critical-care environments.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Infection Control Finishes",
      text:
        "Antimicrobial flooring and wall finishes designed for hygiene and easy maintenance in ICU and NICU areas.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Nursing Station Integration",
      text:
        "Central nursing station integration with patient monitoring and critical-care workflow management.",
    },
    {
      icon: <FaTools />,
      title: "Medical & Electrical Services",
      text:
        "Complete medical gas and electrical readiness with per-bed service connections.",
    },
  ];


  const specs = [
    {
      parameter: "Area per ICU Bed",
      value: "≈150–200 sq ft",
    },
    {
      parameter: "Bed-to-Bed Centre Spacing",
      value: "≥ 2.5–3.0 m",
    },
    {
      parameter: "Bed Head Panel",
      value: "Horizontal, Per-Bed Services",
    },
  ];


  const standards = [
    {
      icon: <FaHospital />,
      title: "NABH Critical Care",
      text:
        "Designed to meet NABH critical-care unit infrastructure requirements.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Medical Gas Safety",
      text:
        "Medical gas outlets designed following HTM 02-01 and NFPA 99 criteria.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Infection Control",
      text:
        "Finishes and materials selected considering applicable hospital hygiene standards.",
    },
  ];


  const gallery = [
    {
      title: "ICU Infrastructure Solution",
      image: "/images/icu-infrastrycture-solutions.png",
    },
  ];


  return (

    <div className="seat-service-content">


      {/* STATS */}

      <section className="stats-grid">

        <div className="stat-card">
          <h2>NABH</h2>
          <p>Critical Care</p>
        </div>


        <div className="stat-card">
          <h2>ICU</h2>
          <p>Bed Infrastructure</p>
        </div>


        <div className="stat-card">
          <h2>24/7</h2>
          <p>Monitoring Ready</p>
        </div>


        <div className="stat-card">
          <h2>100%</h2>
          <p>Gas Ready</p>
        </div>

      </section>



      {/* SERVICE INFORMATION */}


      <section className="info-box service-info">


        <div className="section-header">

          <span className="section-tag">
            Engineering Overview
          </span>

          <h2>
            Service Information
          </h2>

        </div>


        <div className="seat-info-text">


          <p>
            Modular ICU and NICU infrastructure solutions designed for
            critical-care environments with integrated medical gas outlets,
            electrical systems, monitoring support and infection-control
            features.
          </p>


          <p>
            Complete ICU build-outs include bed-head panels, isolation
            cubicles, nursing station integration and healthcare-grade finishes
            engineered for NABH critical-care requirements.
          </p>


        </div>


      </section>




      {/* PRODUCT SCOPE */}


      <section className="info-box">


        <h2>
          Product Scope
        </h2>


        <div className="scope-grid">


          {scope.map((item,index)=>(

            <div className="scope-card" key={index}>


              <div className="scope-content">


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.text}
                </p>


              </div>


            </div>

          ))}


        </div>


      </section>




      {/* TECHNICAL SPECIFICATIONS */}


      <section className="info-box">


        <h2>
          Technical Specifications
        </h2>


        <div className="table-wrapper">


          <table>

            <thead>

              <tr>
                <th>
                  Parameter
                </th>

                <th>
                  Typical Value
                </th>
              </tr>

            </thead>


            <tbody>


              {specs.map((item,index)=>(

                <tr key={index}>

                  <td>
                    {item.parameter}
                  </td>

                  <td>
                    {item.value}
                  </td>

                </tr>

              ))}


            </tbody>


          </table>


        </div>


      </section>




      {/* STANDARDS */}


      <section className="info-box">


        <h2>
          Standards & Compliance
        </h2>


        <div className="standards-grid">


          {standards.map((item,index)=>(


            <div className="standard-card" key={index}>


              <div className="standard-icon">
                {item.icon}
              </div>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.text}
              </p>


            </div>


          ))}


        </div>


      </section>




      {/* GALLERY */}


      <section className="info-box gallery-section">


        <div className="gallery-header">


          <span className="gallery-tag">
            PROJECT SHOWCASE
          </span>


          <h2>
            ICU Infrastructure <span>Gallery</span>
          </h2>


          <p>
            Complete critical-care infrastructure designed for patient safety,
            monitoring efficiency and infection control.
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

                  {String(index+1).padStart(2,"0")}

                </div>


                <h3>
                  {item.title}
                </h3>


              </div>


            </div>


          ))}


        </div>


      </section>



    </div>

  );
}


export default ICUInfrastructure;