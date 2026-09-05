import "../../styles/serviceDetail.css";
import "../../styles/SeatBerthInfo.css";


import {
  FaTint,
  FaWind,
  FaShieldAlt,
  FaCheckCircle,
  FaHospital,
  FaTools,
} from "react-icons/fa";

function MedicalGasPipeline() {

  const scope = [
    {
      icon: <FaTint />,
      title: "Medical Gas Distribution",
      text:
        "Complete oxygen, nitrous oxide, medical air, vacuum and AGSS pipeline distribution systems for hospitals, ICUs, operation theatres and wards.",
    },
    {
      icon: <FaTools />,
      title: "Copper Pipeline Network",
      text:
        "Degreased, colour-coded copper piping systems with manifolds, AVSU units and alarm monitoring panels designed for medical gas applications.",
    },
    {
      icon: <FaHospital />,
      title: "Bed Head & Outlet Systems",
      text:
        "Bed-head panels and point-of-use medical gas outlets installed for safe and efficient patient care operations.",
    },
    {
      icon: <FaWind />,
      title: "HVAC Ducting System",
      text:
        "OT and ICU HVAC ducting solutions designed for infection control, air quality management and healthcare environments.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Testing & Commissioning",
      text:
        "Complete testing, purging, validation and commissioning with required documentation for safe system operation.",
    },
  ];


  const specs = [
    {
      service: "Oxygen (O2)",
      size: "12.7 – 54 mm OD",
      colour: "White",
    },
    {
      service: "Nitrous Oxide (N2O)",
      size: "12.7 – 22 mm OD",
      colour: "Blue",
    },
    {
      service: "Medical Air (4 bar)",
      size: "12.7 – 42 mm OD",
      colour: "Black / White",
    },
    {
      service: "Vacuum",
      size: "22 – 54 mm OD",
      colour: "Yellow",
    },
  ];


  const standards = [
    {
      icon: <FaShieldAlt />,
      title: "HTM 02-01",
      text:
        "Designed and installed following HTM 02-01 medical gas pipeline system criteria.",
    },
    {
      icon: <FaCheckCircle />,
      title: "NFPA 99",
      text:
        "Systems developed considering NFPA 99 healthcare facility safety requirements.",
    },
    {
      icon: <FaHospital />,
      title: "ISO 7396-1",
      text:
        "Medical gas pipeline installation follows ISO 7396-1 design criteria.",
    },
  ];


  const gallery = [
    {
      title: "Hospital Medical Gas Pipeline System",
      image: "/images/hospital-medical-gas-pipeline-system.png",
    },
     {
      title: "Hospital Medical Gas Pipeline System 1",
      image: "/images/hospital-medical-gas-pipeline-system1.png",
    },
     {
      title: "Hospital Medical Gas Pipeline System 2",
      image: "/images/hospital-medical-gas-pipeline-system2.png",
    },
    {
      title: "HVAC Ducting System",
      image: "/images/hvac-ducting-system.png",
    },
    {
      title: "HVAC Ducting System 1",
      image: "/images/hvac-ducting-system1.png",
    },
    {
      title: "HVAC Ducting System 2",
      image: "/images/hvac-ducting-system2.png",
    },
  ];


  return (

    <div className="seat-service-content">


      {/* STATS */}

      <section className="stats-grid">

        <div className="stat-card">
          <h2>HTM</h2>
          <p>02-01 Criteria</p>
        </div>

        <div className="stat-card">
          <h2>NFPA</h2>
          <p>99 Standard</p>
        </div>

        <div className="stat-card">
          <h2>ISO</h2>
          <p>7396-1</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Testing & Commissioning</p>
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
            Medical Gas Pipeline Systems (MGPS) provide safe and reliable
            distribution of oxygen, nitrous oxide, medical air and vacuum
            services to critical healthcare areas including ICUs, operation
            theatres and patient wards.
          </p>


          <p>
            Systems include colour-coded copper pipelines, manifolds, AVSU
            units, alarm panels, bed-head outlets and HVAC ducting integration
            designed according to healthcare safety requirements.
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
                  Gas / Service
                </th>

                <th>
                  Pipe Size (OD)
                </th>

                <th>
                  Colour Code
                </th>

              </tr>

            </thead>


            <tbody>

              {specs.map((item,index)=>(

                <tr key={index}>

                  <td>
                    {item.service}
                  </td>

                  <td>
                    {item.size}
                  </td>

                  <td>
                    {item.colour}
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
            Medical Gas Pipeline <span>Gallery</span>
          </h2>


          <p>
            Healthcare medical gas and HVAC infrastructure engineered for
            safety, reliability and infection control.
          </p>


        </div>



       <div className="gallery-grid">


        {gallery.map((item,index)=>(


            <div
            className={`gallery-card gallery-${index+1}`}
            key={index}
            >


                <img
                src={item.image}
                alt={item.title}
                />


                <div className="gallery-overlay">


                    <div className="gallery-number">
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


export default MedicalGasPipeline;