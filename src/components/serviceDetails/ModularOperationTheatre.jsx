import "../../styles/serviceDetail.css";
import "../../styles/SeatBerthInfo.css";


import {
  FaHospital,
  FaWind,
  FaLightbulb,
  FaBed,
  FaShieldAlt,
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";


function ModularOperationTheatre() {


  const scope = [
    {
      icon: <FaWind />,
      title: "Laminar Airflow System",
      text:
        "Antibacterial modular wall and ceiling panels integrated with HEPA filtration and laminar airflow systems for infection-controlled surgical environments.",
    },
    {
      icon: <FaLightbulb />,
      title: "Surgical Lighting",
      text:
        "Ceiling-mounted LED surgical lights designed for precision illumination during surgical procedures.",
    },
    {
      icon: <FaBed />,
      title: "Operating Equipment",
      text:
        "Hydraulic and electric operating tables along with dental treatment chair units for advanced healthcare facilities.",
    },
    {
      icon: <FaHospital />,
      title: "OT Infrastructure",
      text:
        "Hermetically sealed doors, flush glazing, OT control panels and complete modular operation theatre infrastructure.",
    },
    {
      icon: <FaTools />,
      title: "Turnkey Installation",
      text:
        "Complete supply, installation, testing and validation services for modular operation theatres.",
    },
  ];


  const specs = [
    {
      type: "Minor OT",
      size: "4 × 4 m",
      area: "≈16 m²",
    },
    {
      type: "Standard OT",
      size: "6 × 6 m",
      area: "≈36 m²",
    },
    {
      type: "Major / Modular OT",
      size: "6.5 × 6.5 m",
      area: "≈42 m²",
    },
  ];


  const standards = [
    {
      icon: <FaShieldAlt />,
      title: "ISO 14644",
      text:
        "Designed according to ISO 14644 cleanroom classification criteria for controlled surgical environments.",
    },
    {
      icon: <FaHospital />,
      title: "NABH OT Criteria",
      text:
        "Operation theatre layouts and infrastructure follow NABH healthcare facility requirements.",
    },
    {
      icon: <FaCheckCircle />,
      title: "HEPA Filtration",
      text:
        "Air filtration and air-change systems designed according to applicable OT standards.",
    },
  ];


  const gallery = [
    {
      title: "Operation Theatre Solution",
      image: "/images/operation-theatre-solution.png",
    },
    {
      title: "Ceiling Mounted LED Surgical Light",
      image: "/images/ceiling-mounted-led-surgical-light.png",
    },
    {
      title: "Hydraulic Electric Operating Table",
      image: "/images/hydraulic-electric-opearting-table.png",
    },
    {
      title: "Dental Treatment Chair Unit",
      image: "/images/dental-treatment-chair-unit.png",
    },
  ];



  return (

    <div className="seat-service-content">


      {/* STATS */}

      <section className="stats-grid">


        <div className="stat-card">
          <h2>ISO</h2>
          <p>14644 Cleanroom</p>
        </div>


        <div className="stat-card">
          <h2>NABH</h2>
          <p>OT Criteria</p>
        </div>


        <div className="stat-card">
          <h2>HEPA</h2>
          <p>Air Filtration</p>
        </div>


        <div className="stat-card">
          <h2>100%</h2>
          <p>Testing & Validation</p>
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
            Modular operation theatre systems engineered for infection control,
            precision surgery and controlled healthcare environments.
          </p>


          <p>
            Complete OT solutions include laminar airflow systems, HEPA
            filtration, surgical lighting, operating tables, modular panels,
            sealed doors and integrated control systems.
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
          Technical Specifications
        </h2>



        <div className="table-wrapper">


          <table>


            <thead>

              <tr>

                <th>
                  OT Type
                </th>

                <th>
                  Room Size (L × W)
                </th>

                <th>
                  Area
                </th>

              </tr>

            </thead>



            <tbody>


              {specs.map((item,index)=>(

                <tr key={index}>

                  <td>
                    {item.type}
                  </td>

                  <td>
                    {item.size}
                  </td>

                  <td>
                    {item.area}
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
            Modular Operation Theatre <span>Gallery</span>
          </h2>


          <p>
            Advanced modular OT infrastructure designed for surgical precision,
            hygiene and infection control.
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


export default ModularOperationTheatre;