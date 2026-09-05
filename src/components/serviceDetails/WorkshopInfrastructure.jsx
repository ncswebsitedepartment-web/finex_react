import "../../styles/serviceDetail.css";
import "../../styles/SeatBerthInfo.css";


import {
  FaWarehouse,
  FaIndustry,
  FaCogs,
  FaTools,
  FaTruckLoading,
  FaBolt,
  FaCheckCircle,
  FaShieldAlt,
  FaHardHat,
  FaBuilding
} from "react-icons/fa";

function WorkshopInfrastructure() {

  const scope = [
    {
      icon: <FaWarehouse />,
      title: "Railway Workshops",
      text: "Design and construction of coaching depots, EMU/MEMU car sheds, loco sheds and POH workshops."
    },
    {
      icon: <FaIndustry />,
      title: "Inspection Lines",
      text: "Inspection pit lines, examination lines and stabling lines for efficient rolling stock maintenance."
    },
    {
      icon: <FaCogs />,
      title: "Material Handling",
      text: "Overhead EOT crane integration, heavy-duty material handling systems and workshop logistics."
    },
    {
      icon: <FaTools />,
      title: "Maintenance Equipment",
      text: "Wheel lathe foundations, bogie-drop pits, lifting jack foundations and maintenance facilities."
    },
    {
      icon: <FaBolt />,
      title: "Workshop Utilities",
      text: "Compressed air, electrical power, water supply, drainage and washing line utilities."
    },
    {
      icon: <FaBuilding />,
      title: "PEB Structures",
      text: "Pre-engineered steel workshop buildings with wide column-free spans for maintenance operations."
    }
  ];

  const specs = [
    {
      element: "Workshop Bay Clear Span",
      specification: "18–30 m"
    },
    {
      element: "Eave Height",
      specification: "8–12 m"
    },
    {
      element: "Pit Line Length",
      specification: "As per rake / coach consist"
    },
    {
      element: "Overhead Crane",
      specification: "5–50 T EOT"
    },
    {
      element: "Wheel Lathe / Lifting Jacks",
      specification: "As per rolling-stock type"
    }
  ];

  const standards = [
    {
      icon: <FaCheckCircle />,
      title: "RDSO Standards",
      text: "Depot and workshop layouts designed according to RDSO and Indian Railways standards."
    },
    {
      icon: <FaShieldAlt />,
      title: "Structural Design",
      text: "Steel structures designed to IS 800 and RCC foundations as per IS 456."
    },
    {
      icon: <FaHardHat />,
      title: "Building Services",
      text: "Electrical, lighting and utilities designed as per NBC 2016 and IS service codes."
    }
  ];

  const gallery = [
    {
      title: "Workshop Area",
      image: "/images/Workshop-Area.png"
    },
    {
      title: "Workshop Infrastructure",
      image: "/images/Workshop Infrastructure (1).png"
    },
     {
      title: "Checking Area",
      image: "/images/Cheking-Area.png"
    },
     {
      title: "Washing Area",
      image: "/images/Washing Area.png"
    }
  ];

  return (

     <div className="seat-service-content">

     


      {/* STATS */}

      <section className="stats-grid">

        <div className="stat-card">
          <h2>30m</h2>
          <p>Clear Span</p>
        </div>

        <div className="stat-card">
          <h2>50T</h2>
          <p>EOT Crane</p>
        </div>

        <div className="stat-card">
          <h2>RDSO</h2>
          <p>Compliant</p>
        </div>

        <div className="stat-card">
          <h2>Turnkey</h2>
          <p>Solutions</p>
        </div>

      </section>

      {/* SERVICE */}

     
<section className="info-box service-info">

  <div className="section-header">
    <span className="section-tag">Engineering Overview</span>
    <h2>
      Service Information
    </h2>
  </div>

  <div className="service-content">

    <p>
       Design, build and equipping of railway and metro maintenance
          workshops and depots covering shed structures, inspection bay
          layouts, pit lines, overhead crane integration, wheel and bogie
          handling systems and all utility services required for rolling
          stock maintenance and Periodic Overhaul (POH).
    </p>

    <p>
    Delivered as turnkey infrastructure projects fully aligned with
          RDSO depot standards to ensure safe, efficient and reliable
          railway maintenance operations.
    </p>

  </div>

</section>
      {/* PRODUCT SCOPE */}

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

      {/* TABLE */}

      <section className="info-box">

        <h2>Technical Specifications</h2>

        <div className="table-wrapper">

          <table>

            <thead>

              <tr>

                <th>Element</th>

                <th>Typical Specification</th>

              </tr>

            </thead>

            <tbody>

              {specs.map((item, index) => (

                <tr key={index}>

                  <td>{item.element}</td>

                  <td>{item.specification}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* STANDARDS */}

      <section className="info-box">

        <h2>Standards & Compliance</h2>

        <div className="standards-grid">

          {standards.map((item, index) => (

            <div className="standard-card" key={index}>

              <div className="standard-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

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
          Workshop Infrastructure <span>Gallery</span>
        </h2>


       <p>
    Modern railway workshop infrastructure designed for efficient
    maintenance, fabrication and inspection operations with durable
    engineering solutions.
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

export default WorkshopInfrastructure;