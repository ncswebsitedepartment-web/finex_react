import "../../styles/serviceDetail.css";
import "../../styles/SeatBerthInfo.css";

import {
  FaBolt,
  FaWater,
  FaTools,
  FaLightbulb,
  FaNetworkWired,
  FaCheckCircle,
  FaShieldAlt,
  FaHardHat
} from "react-icons/fa";


function UtilityInfrastructureDevelopment() {


  const scope = [

    {
      icon: <FaBolt />,
      title: "Power Distribution",
      text: "LT/HT power distribution systems, transformers, electrical panels, cabling and earthing infrastructure."
    },

    {
      icon: <FaWater />,
      title: "Water Supply & Plumbing",
      text: "Water supply networks, plumbing systems, coach washing lines and pumping arrangements."
    },

    {
      icon: <FaTools />,
      title: "Drainage & Effluent Systems",
      text: "Storm-water drainage, sewage systems and ETP readiness for railway depots and facilities."
    },

    {
      icon: <FaLightbulb />,
      title: "Lighting Infrastructure",
      text: "Yard lighting, platform lighting and building illumination systems as per railway requirements."
    },

    {
      icon: <FaNetworkWired />,
      title: "Network & Control Systems",
      text: "Network cabinets, control panels and track-side office cabin infrastructure."
    },

    {
      icon: <FaTools />,
      title: "Compressed Air & Washing Lines",
      text: "Depot service utilities including compressed air pipelines and maintenance support systems."
    }

  ];



  const specs = [

    {
      element: "Power Distribution",
      specification: "LT/HT Systems, Transformers, Panels & Earthing"
    },

    {
      element: "Water & Drainage",
      specification: "Supply, Plumbing, Storm Drain & Sewage Systems"
    },

    {
      element: "Lighting",
      specification: "Yard & Building Lighting - IS 3646 / NBC"
    },

    {
      element: "Compressed Air Systems",
      specification: "Depot Maintenance Utility Services"
    }

  ];



  const standards = [

    {
      icon: <FaCheckCircle />,
      title: "Electrical Compliance",
      text: "Electrical installations executed as per CEA regulations, IS codes and NBC 2016 requirements."
    },

    {
      icon: <FaShieldAlt />,
      title: "Utility Standards",
      text: "Water supply, drainage and plumbing systems follow IS and NBC service standards."
    },

    {
      icon: <FaHardHat />,
      title: "Integrated Execution",
      text: "Utilities coordinated with civil, structural and workshop infrastructure scope."
    }

  ];



  const gallery = [

    {
      title: "Water Utility System",
      image: "/images/Water Utility System.png"
    },

    {
      title: "Network Electrical Cabinet",
      image: "/images/NetWork Cabinet.png"
    },

    {
      title: "Track-side Office Cabin",
      image: "/images/Track-Civil-Work.png"
    },

    {
      title: "Corridor Bridge Crossing",
      image: "/images/corridor.png"
    }

  ];



return (

<div className="seat-service-content">


<section className="stats-grid">

<div className="stat-card">
<h2>LT/HT</h2>
<p>Power Systems</p>
</div>

<div className="stat-card">
<h2>24x7</h2>
<p>Operational Utilities</p>
</div>

<div className="stat-card">
<h2>NBC</h2>
<p>Compliant</p>
</div>

<div className="stat-card">
<h2>Turnkey</h2>
<p>Infrastructure</p>
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
   Power, water, drainage, lighting and allied utility infrastructure
supporting railway and metro depots, workshops and corridors delivered
alongside civil and structural scope under integrated contracts.
    </p>

    <p>
      Complete utility solutions ensure maintenance facilities and railway
corridors are fully serviced and operational at project handover.
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

<h2>Scope & Standards</h2>

<div className="table-wrapper">

<table>

<thead>

<tr>
<th>Utility</th>
<th>Scope / Standard</th>
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
           Utility Infrastructure Development <span>Gallery</span>
        </h2>


<p>
    Integrated utility infrastructure solutions delivering reliable
    services, efficient operations and sustainable support systems for
    railway and industrial projects.
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


export default UtilityInfrastructureDevelopment;