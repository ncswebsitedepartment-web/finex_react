import "../../styles/serviceDetail.css";
import "../../styles/SeatBerthInfo.css";
import {
  FaTrain,
  FaChair,
  FaBed,
  FaShieldAlt,
  FaCheckCircle,
  FaCouch,
  FaIndustry,
  FaFire,
  FaTools,
} from "react-icons/fa";

function SeatBerthInfo() {
  const scope = [
    {
      icon: <FaBed />,
      title: "Railway Berths",
      text:
        "Lower, middle, upper and side berths for Sleeper (SL), 3AC, 2AC and 1AC coaches with fold-up mechanisms and brackets.",
    },
    {
      icon: <FaChair />,
      title: "Passenger Seats",
      text:
        "Chair Car (CC/EC) reclining seats, 2S bench seats, MEMU/EMU seats and metro rail seating systems.",
    },
    {
      icon: <FaCouch />,
      title: "Comfort Cushioning",
      text:
        "PU Foam, Silicon Foam and DTBP cushions with rexine, artificial leather and premium fabric upholstery.",
    },
    {
      icon: <FaIndustry />,
      title: "Frame Construction",
      text:
        "Stainless Steel, Aluminium and Mild Steel frames with anti-corrosion treatment for long service life.",
    },
    {
      icon: <FaTools />,
      title: "Interior Components",
      text:
        "Luggage racks, partition panels, lavatory doors, sliding doors, window frames, acoustic boards and signage.",
    },
  ];

  const specs = [
    {
      item: "Sleeper Berth (SL)",
      size: "1880 × 740 mm",
      material: "MS / SS Frame + PU / DTBP Cushion, Rexine",
    },
    {
      item: "LHB AC Berth",
      size: "1980 × 740 mm",
      material: "SS Frame, Fire-Retardant Foam",
    },
    {
      item: "Side Berth",
      size: "1740 × 640 mm",
      material: "Fold-Up Type",
    },
    {
      item: "Chair Car Seat (Recline)",
      size: "Seat Height 430–460 mm | Pitch 840–915 mm",
      material: "Reclining Seat with Arm Rest",
    },
    {
      item: "MEMU / EMU Seat",
      size: "Standard IR / FRP Profile",
      material: "FRP Shell with Cushion",
    },
    {
      item: "Cushion Thickness",
      size: "40–100 mm",
      material: "PU / Silicon / DTBP",
    },
  ];

  const standards = [
    {
      icon: <FaFire />,
      title: "Fire Safety",
      text: "EN 45545-HL3 compliant fire-retardant materials with low smoke toxicity.",
    },
    {
      icon: <FaShieldAlt />,
      title: "RDSO Approved",
      text: "Designed according to RDSO specifications and IR / ICF / LHB coach drawings.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Materials",
      text: "IS-grade steel, upholstery and foam with applicable UIC / IR interior standards.",
    },
  ];

  const gallery = [
    {
      title: "AC First-Class Berths",
      image: "/images/AC-First-class.png",
    },
    {
      title: "Sleeper Coach Berths",
      image: "/images/bogi seats sleeper.png",
    },
    {
      title: "Sleeper Berths (Premium Finish)",
      image: "/images/bogi seats sleeper red.png",
    },
    {
      title: "Chair-Car Seating",
      image: "/images/bogi chair car seats.png",
    },
    {
      title: "Chair-Car Seat (Single)",
      image: "/images/bogi chair car seats single.png",
    },
    {
      title: "General Coach Seating",
      image: "/images/bogi seats Genral.png",
    },
    {
      title: "Coach Seating",
      image: "/images/Coach seating.png",
    },
    {
      title: "Coach Seating Layout",
      image: "/images/bogi seats 3.png",
    },
    {
      title: "Upper Berth",
      image: "/images/Top Seat.png",
    },
    {
      title: "Seat Frame / Structure",
      image: "/images/Seat Structure.png",
    },
  ];

  return (
    <div className="seat-service-content">

      
      {/* STATS */}

      <section className="stats-grid">

        <div className="stat-card">
          <h2>100%</h2>
          <p>RDSO Compliance</p>
        </div>

        <div className="stat-card">
          <h2>EN45545</h2>
          <p>Fire Safety</p>
        </div>

        <div className="stat-card">
          <h2>SL • AC • Metro</h2>
          <p>Coach Solutions</p>
        </div>

        <div className="stat-card">
          <h2>Premium</h2>
          <p>Passenger Comfort</p>
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

  {/* Renamed from "service-content" to "seat-info-text" to avoid
      colliding with the ".service-content" wrapper class used in
      ServiceDetail.jsx / serviceDetail.css */}
  <div className="seat-info-text">

    <p>
      Engineered seating and sleeping systems for railway coaches,
      metro rail, defence transport and institutional accommodation,
      manufactured for durability, ergonomics, passenger comfort and
      complete compliance with EN 45545-HL3 fire safety and RDSO
      specifications.
    </p>

    <p>
      Finex manufactures the complete range for AC and Non-AC coaches
      including Sleeper (SL), 3AC, 2AC, 1AC, Chair Car, 2S and
      MEMU/EMU/Metro coaches together with allied interior components
      that complete a coach fit-out.
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

                <th>Item</th>

                <th>Typical Size</th>

                <th>Material / Notes</th>

              </tr>

            </thead>

            <tbody>

              {specs.map((item, index) => (

                <tr key={index}>

                  <td>{item.item}</td>

                  <td>{item.size}</td>

                  <td>{item.material}</td>

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
           Seat Berth <span>Gallery</span>
        </h2>


        <p>
            Precision engineered railway seating, berth systems and coach
            interior solutions developed with advanced manufacturing standards.
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

export default SeatBerthInfo;