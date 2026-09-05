import "../../styles/serviceDetail.css";
import "../../styles/SeatBerthInfo.css";
import "../../styles/platform.css"
import {
  FaBuilding,
  FaChair,
  FaShieldAlt,
  FaTools,
  FaTrain,
  FaCheckCircle,
  FaHardHat,
  FaIndustry
} from "react-icons/fa";


function PlatformInfrastructure() {


  const scope = [

    {
      icon: <FaBuilding />,
      title: "Platform Canopies & Roofing",
      text: "Fabrication and installation of tubular and space-frame steel platform canopies with polycarbonate or metal roofing systems."
    },

    {
      icon: <FaChair />,
      title: "Platform Seating",
      text: "Weatherproof anti-vandal metal and FRP benches, tandem seating and passenger comfort solutions."
    },

    {
      icon: <FaShieldAlt />,
      title: "Security & Ticket Cabins",
      text: "Prefab steel-panel security cabins, ticket booths, enquiry kiosks and passenger service facilities."
    },

    {
      icon: <FaTools />,
      title: "Passenger Amenities",
      text: "Railings, signage frames, dustbins and allied station passenger infrastructure."
    },

    {
      icon: <FaTrain />,
      title: "Access Structures",
      text: "Foot-over-bridge and staircase access structures coordinated with civil works."
    },

    {
      icon: <FaIndustry />,
      title: "Station Infrastructure",
      text: "Complete platform infrastructure solutions for railway and metro stations."
    }

  ];



  const specs = [

    {
      element: "Platform Canopy Span",
      specification: "6–12 m | Tubular / Space-frame Steel"
    },

    {
      element: "Canopy Clear Height",
      specification: "3.5–5.0 m | Polycarbonate / Metal Sheet"
    },

    {
      element: "Platform Bench (3-Seater)",
      specification: "1800 × 550 × 800 mm | Metal / FRP"
    },

    {
      element: "Security / Ticket Cabin",
      specification: "2.4 × 2.4 m to 3 × 3 m | Prefab Steel Panel"
    }

  ];



  const standards = [

    {
      icon: <FaCheckCircle />,
      title: "Railway Standards",
      text: "Platform works executed according to RDSO and Indian Railways station-development standards."
    },

    {
      icon: <FaShieldAlt />,
      title: "Structural Compliance",
      text: "Steel structures designed as per IS 800 with roofing and cladding according to applicable IS codes."
    },

    {
      icon: <FaHardHat />,
      title: "Passenger Safety",
      text: "Passenger amenities and accessibility requirements implemented as per railway guidelines."
    }

  ];



  const gallery = [

    {
      title: "Platform Canopy & Seating",
      image: "/images/Canopy-Roofing-Seat.png"
    },

    {
      title: "Station Platform Seating",
      image: "/images/Seats-at-station.png"
    },

    {
      title: "Platform Security Cabin",
      image: "/images/station1.png"
    },
    {
      title: "Dustbine",
      image: "/images/Dustbine.png"
    },
      {
      title: "Toilet",
      image: "/images/Toilet1.png"
    }


  ];



return (

<div className="seat-service-content">


<section className="stats-grid">

<div className="stat-card">
<h2>12m</h2>
<p>Canopy Span</p>
</div>


<div className="stat-card">
<h2>IS 800</h2>
<p>Steel Standard</p>
</div>


<div className="stat-card">
<h2>RDSO</h2>
<p>Compliant</p>
</div>


<div className="stat-card">
<h2>Turnkey</h2>
<p>Platform Solutions</p>
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
   Complete platform infrastructure for railway and metro stations including
steel platform canopies, roofing, passenger seating, security cabins,
ticket booths and allied passenger amenities.
    </p>

    <p>
  Finex fabricates and installs platform structures and furniture designed
for high footfall, weather resistance and passenger comfort according to
RDSO and Indian Railways standards.
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
<th>Item</th>
<th>Typical Size / Specification</th>
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
        Platform Infrastructure <span>Gallery</span>
        </h2>


      <p>
    Advanced platform infrastructure solutions combining structural
    engineering, passenger comfort and durable station facilities
    for modern railway environments.
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


export default PlatformInfrastructure;