import "../../styles/serviceDetail.css";
import "../../styles/SeatBerthInfo.css";
import "../../styles/platform.css"
import {
  FaBuilding,
  FaRoad,
  FaWater,
  FaHardHat,
  FaCheckCircle,
  FaShieldAlt,
  FaTrain,
  FaIndustry
} from "react-icons/fa";

function CivilWorks() {

  const scope = [
    {
      icon: <FaBuilding />,
      title: "Platforms & Station Buildings",
      text: "Construction of railway platforms, platform shelters, station buildings and boundary works as per railway requirements."
    },
{
  icon: <FaRoad />,
  title: "FOB, Bridges & Culverts",
  text: "Execution of foot-over-bridges, minor bridges, culverts and RUB/ROB civil works for railway infrastructure."
},
    {
      icon: <FaRoad />,
      title: "Track-bed Formation",
      text: "Earthwork formation, blanketing and preparation of track-bed infrastructure following RDSO guidelines."
    },
    {
      icon: <FaWater />,
      title: "Drainage & Retaining Structures",
      text: "Construction of drainage systems, retaining walls and associated civil protection works."
    },
    {
      icon: <FaBuilding />,
      title: "Station Facilities",
      text: "Construction of toilet blocks and allied passenger amenities for railway stations."
    },
    {
      icon: <FaTrain />,
      title: "Yard Infrastructure",
      text: "Civil infrastructure development for railway yards, approaches and corridor improvement works."
    }
  ];


  const specs = [
    {
      element: "Platforms & Buildings",
      specification: "IRS / RDSO / CPWD Specifications"
    },
    {
      element: "Bridges & Culverts",
      specification: "IRC Codes & IRS Bridge Rules"
    },
    {
      element: "Formation & Earthwork",
      specification: "RDSO Guidelines for Earthwork"
    },
    {
      element: "RCC Structures",
      specification: "IS 456"
    },
    {
      element: "Civil Infrastructure",
      specification: "Foundation-to-finish Execution"
    }
  ];


  const standards = [
    {
      icon: <FaCheckCircle />,
      title: "Railway Standards",
      text: "Civil works executed according to Indian Railway Standards (IRS) and RDSO guidelines."
    },
    {
      icon: <FaShieldAlt />,
      title: "Structural Compliance",
      text: "RCC and structural works carried out as per applicable IS codes and engineering practices."
    },
    {
      icon: <FaHardHat />,
      title: "Quality & Safety",
      text: "Construction follows IR, CPWD specifications and project-specific EHS requirements."
    }
  ];


  const gallery = [
    {
      title: "Station Civil Work",
      image: "/images/Station Civil Work.png"
    },
    {
      title: "Station Building",
      image: "/images/Station.png"
    },
    {
      title: "Bridge / Foot-Over-Bridge",
      image: "/images/Briege.png"
    },
    {
      title: "Track-bed Civil Work",
      image: "/images/Track-Civil-Work.png"
    },
    {
      title: "Station Toilet Block",
      image: "/images/Toilet.png"
    }
  ];


  return (

    <div className="seat-service-content">


      {/* STATS */}

      <section className="stats-grid">

        <div className="stat-card">
          <h2>IRS</h2>
          <p>Compliant</p>
        </div>

        <div className="stat-card">
          <h2>RDSO</h2>
          <p>Approved Standards</p>
        </div>

        <div className="stat-card">
          <h2>Turnkey</h2>
          <p>Civil Solutions</p>
        </div>

        <div className="stat-card">
          <h2>Rail</h2>
          <p>Infrastructure Works</p>
        </div>

      </section>



      {/* SERVICE INFORMATION */}

  
<section className="info-box service-info">

  <div className="section-header">
    <span className="section-tag">Engineering Overview</span>
    <h2>
      Service Information
    </h2>
  </div>

  <div className="service-content">

    <p>
       Foundation-to-finish civil construction for railway buildings,
          platforms, foot-over-bridges, minor bridges, drainage and yard
          infrastructure executed under RDSO and Indian Railway Standards (IRS).
    </p>

    <p>
    The scope includes formation, structures, track-bed development and
          allied civil works suitable for station upgrades, depot civil works
          and railway corridor infrastructure projects.
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



      {/* TECHNICAL TABLE */}

      <section className="info-box">


        <h2>Scope & Standards</h2>


        <div className="table-wrapper">


          <table>

            <thead>

              <tr>

                <th>Scope</th>

                <th>Applicable Standard</th>

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




      {/* COMPLIANCE */}


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




      {/* GALLERY */}


    <section className="info-box gallery-section">

    <div className="gallery-header">

        <span className="gallery-tag">
            PROJECT SHOWCASE
        </span>


        <h2>
      Civil Works <span>Gallery</span>
        </h2>


   <p>
    Engineered civil infrastructure solutions delivering reliable
    construction, structural strength and sustainable development for
    railway projects.
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


export default CivilWorks;