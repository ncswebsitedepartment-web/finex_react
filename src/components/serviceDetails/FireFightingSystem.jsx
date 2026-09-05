import "../../styles/serviceDetail.css";
import "../../styles/SeatBerthInfo.css";
import "../../styles/platform.css";

import {
  FaFireExtinguisher,
  FaBell,
  FaTint,
  FaShieldAlt,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";


function FireFightingSystem() {

  const scope = [
    {
      icon: <FaFireExtinguisher />,
      title: "Fire Extinguishing Systems",
      text:
        "Portable fire extinguishers, fire buckets and stands supplied for hospital safety requirements.",
    },
    {
      icon: <FaBell />,
      title: "Fire Alarm & Detection",
      text:
        "Addressable fire alarm systems with smoke and heat detection devices for early warning and emergency response.",
    },
    {
      icon: <FaTint />,
      title: "Fire Sprinkler System",
      text:
        "Automatic fire sprinkler networks designed for reliable fire suppression in healthcare facilities.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Hydrant Network",
      text:
        "Fire hydrant water supply systems, wet risers and hose boxes designed for emergency firefighting operations.",
    },
    {
      icon: <FaTools />,
      title: "Testing & AMC",
      text:
        "Complete testing, commissioning, control panel setup and annual maintenance services.",
    },
  ];


  const specs = [
    {
      system: "Hydrant / Wet Riser",
      criteria: "IS 3844, NBC 2016",
    },
    {
      system: "Automatic Sprinkler",
      criteria: "IS 15105",
    },
    {
      system: "Detection & Alarm",
      criteria: "IS 2189",
    },
    {
      system: "Fire Extinguishers",
      criteria: "IS 15683 / IS 2190",
    },
  ];


  const standards = [
    {
      icon: <FaShieldAlt />,
      title: "NBC 2016",
      text:
        "Fire protection systems designed following NBC 2016 fire safety criteria.",
    },
    {
      icon: <FaCheckCircle />,
      title: "IS Standards",
      text:
        "Hydrant, sprinkler, alarm and extinguisher systems follow relevant IS standards.",
    },
    {
      icon: <FaTools />,
      title: "Integrated Safety",
      text:
        "Systems coordinated with hospital HVAC, evacuation planning and building services.",
    },
  ];


  const gallery = [
    {
      title: "Portable Fire Extinguisher",
      image: "/images/portable-fire-extinguisher.png",
    },
    {
      title: "Addressable Fire Alarm System",
      image: "/images/addressable-fire-alarm-system.png",
    },
    {
      title: "Smoke & Heat Detection System",
      image: "/images/smoke-heat-detection-system.png",
    },
    {
      title: "Fire Hydrant Water Supply Network",
      image: "/images/fire-hydrant-water-supply-network.png",
    },
    {
      title: "Fire Bucket & Stand",
      image: "/images/fire-bucket-stand.png",
    },
    {
      title: "Automatic Fire Sprinkler System",
      image: "/images/automatic-fire-sprinkle-system.png",
    },
    {
      title: "Fire Hose Box",
      image: "/images/fire-hose-box.png",
    },
  ];


  return (

    <div className="seat-service-content">


      {/* STATS */}

      <section className="stats-grid">

        <div className="stat-card">
          <h2>NBC</h2>
          <p>2016 Compliance</p>
        </div>


        <div className="stat-card">
          <h2>IS</h2>
          <p>Fire Standards</p>
        </div>


        <div className="stat-card">
          <h2>24/7</h2>
          <p>Protection Ready</p>
        </div>


        <div className="stat-card">
          <h2>AMC</h2>
          <p>Support</p>
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
            Hospital-grade fire detection, suppression and hydrant systems
            engineered for healthcare facilities with integrated safety,
            evacuation and building-service coordination.
          </p>


          <p>
            Complete solutions include extinguishers, alarms, smoke and heat
            detection, sprinklers, hydrant networks, hose boxes, pumps, tanks
            and control panels with testing and commissioning.
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




      {/* SPECIFICATIONS */}


      <section className="info-box">


        <h2>
          Scope & Standards
        </h2>


        <div className="table-wrapper">


          <table>

            <thead>

              <tr>
                <th>
                  System
                </th>

                <th>
                  Criteria / Standard
                </th>
              </tr>

            </thead>


            <tbody>


              {specs.map((item,index)=>(

                <tr key={index}>

                  <td>
                    {item.system}
                  </td>

                  <td>
                    {item.criteria}
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
            PRODUCT SHOWCASE
          </span>


          <h2>
            Fire Fighting System <span>Gallery</span>
          </h2>


          <p>
            Complete hospital fire protection infrastructure designed for
            safety, compliance and emergency preparedness.
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


export default FireFightingSystem;