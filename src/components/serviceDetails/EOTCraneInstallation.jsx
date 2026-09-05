import "../../styles/serviceDetail.css";
import "../../styles/SeatBerthInfo.css";

import {
  FaIndustry,
  FaTools,
  FaBolt,
  FaCheckCircle,
  FaShieldAlt,
  FaHardHat,
  FaWarehouse,
  FaCogs
} from "react-icons/fa";


function EOTCraneInstallation() {


  const scope = [

    {
      icon: <FaIndustry />,
      title: "Single & Double Girder EOT Cranes",
      text: "Installation of single-girder and double-girder EOT cranes for railway workshops, depots and industrial facilities."
    },

    {
      icon: <FaWarehouse />,
      title: "Gantry / Goliath Cranes",
      text: "Fabrication and installation of gantry structures, crane girders, rails and supporting systems."
    },

    {
      icon: <FaTools />,
      title: "Erection & Alignment",
      text: "Complete crane erection, mechanical alignment, rail setting and precision installation."
    },

    {
      icon: <FaCogs />,
      title: "Load Testing & Commissioning",
      text: "Certified load testing, commissioning and final handover after successful performance verification."
    },

    {
      icon: <FaBolt />,
      title: "Power Feed & Controls",
      text: "DSL, festoon power systems, pendant, radio and cabin control integration."
    },

    {
      icon: <FaTools />,
      title: "AMC & Support",
      text: "Annual maintenance contracts, inspections and spare support services."
    }

  ];



  const specs = [

    {
      element: "Single-Girder EOT",
      specification: "5–20 T Capacity | 10–25 m Span"
    },

    {
      element: "Double-Girder EOT",
      specification: "20–100 T Capacity | 15–30 m Span"
    },

    {
      element: "Gantry / Goliath Crane",
      specification: "5–50 T Capacity | Up to 30 m Span"
    },

    {
      element: "Lifting Height",
      specification: "6–15 m (As required)"
    }

  ];



  const standards = [

    {
      icon: <FaCheckCircle />,
      title: "Crane Design Standards",
      text: "Design and manufacturing according to IS 807 and IS 3177 standards."
    },

    {
      icon: <FaShieldAlt />,
      title: "Structural Compliance",
      text: "Crane structures fabricated as per IS 800 requirements."
    },

    {
      icon: <FaHardHat />,
      title: "Testing & Safety",
      text: "Load testing at 25% above SWL with certified test documentation."
    }

  ];



  const gallery = [

    {
      title: "EOT Crane Installed",
      image: "/images/EOT-Crane.png"
    },

    {
      title: "Double-Girder EOT Crane",
      image: "/images/Double Grider.png"
    },

    {
      title: "Single-Girder EOT Crane",
      image: "/images/Single-Grider.png"
    },

    {
      title: "Crane Hook Handling",
      image: "/images/Crane Handel.png"
    }

  ];



return (

<div className="seat-service-content">


<section className="stats-grid">

<div className="stat-card">
<h2>100T</h2>
<p>Crane Capacity</p>
</div>


<div className="stat-card">
<h2>30m</h2>
<p>Span</p>
</div>


<div className="stat-card">
<h2>IS</h2>
<p>Standards</p>
</div>


<div className="stat-card">
<h2>Turnkey</h2>
<p>Installation</p>
</div>

</section>


<section className="info-box service-info">

  <div className="section-header">
    <span className="section-tag">Engineering Overview</span>
    <h2>
      Service Information
    </h2>
  </div>

  <div className="service-content">

    <p>
      Erection, alignment, load-testing and commissioning of single-girder,
double-girder and gantry overhead-travelling (EOT) cranes for railway
workshops, depots, industrial and warehousing facilities.
    </p>

    <p>
   Complete solutions include gantry structure fabrication, crane erection,
power feed systems, controls, certified load testing and final handover.
    </p>

  </div>

</section>


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



<section className="info-box">

<h2>Technical Specifications</h2>

<div className="table-wrapper">

<table>

<thead>

<tr>
<th>Crane Type</th>
<th>Typical Specification</th>
</tr>

</thead>


<tbody>

{specs.map((item,index)=>(

<tr key={index}>

<td>{item.element}</td>

<td>{item.specification}</td>

</tr>

))}

</tbody>

</table>

</div>

</section>



<section className="info-box">

<h2>Standards & Compliance</h2>

<div className="standards-grid">

{standards.map((item,index)=>(

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



<section className="info-box gallery-section">

    <div className="gallery-header">

        <span className="gallery-tag">
            PROJECT SHOWCASE
        </span>


        <h2>
           EOT Crane Installation <span>Gallery</span>
        </h2>


       <p>
    Advanced EOT crane solutions delivering reliable lifting performance,
    safe material handling and efficient industrial operations for railway
    workshops and manufacturing facilities.
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


export default EOTCraneInstallation;