import "../../styles/MedicalShelters.css";

import {
  FaAmbulance,
  FaBed,
  FaHeartbeat,
  FaHospital,
  FaThermometerHalf,
  FaBolt,
  FaPlug,
  FaTint,
  FaShieldAlt,
  FaFireExtinguisher,
  FaWind,
  FaTools,
  FaUserMd,
  FaProcedures,
  FaBoxOpen,
  FaCheckCircle,
  FaCogs,
  FaClock,
  FaTruckMedical,
  FaMedkit,
  FaArrowRight,
} from "react-icons/fa";

function MedicalShelters() {
  const keyFeatures = [
    {
      icon: <FaBed />,
      title: "Two-Bed Casualty Holding",
      text: "Dedicated two-bed casualty holding facility with examination and temporary observation capability.",
    },
    {
      icon: <FaHeartbeat />,
      title: "NATO Role-1 Capability",
      text: "Designed for casualty triage, initial assessment, stabilization and temporary holding prior to evacuation.",
    },
    {
      icon: <FaHospital />,
      title: "20-Foot ISO Platform",
      text: "Containerized medical shelter based on a standard 20-foot ISO steel container for military logistics compatibility.",
    },
    {
      icon: <FaThermometerHalf />,
      title: "Extreme Climate HVAC",
      text: "Integrated 2.5 TR DACU maintains approximately 22°C ±2°C across demanding external conditions.",
    },
    {
      icon: <FaTint />,
      title: "Medical Oxygen System",
      text: "Centralized manifold-fed oxygen distribution with dedicated outlets at patient beds and assessment area.",
    },
    {
      icon: <FaBolt />,
      title: "UPS Backup",
      text: "Critical medical loads are supported by UPS battery backup with minimum four-hour autonomy.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Electrical Safety",
      text: "ELCB/RCCB, MCB, main isolation and protective earthing systems provide enhanced electrical safety.",
    },
    {
      icon: <FaFireExtinguisher />,
      title: "Fire & Infection Control",
      text: "Fire-resistant interior materials, controlled ventilation and infection-control provisions support medical operations.",
    },
    {
      icon: <FaClock />,
      title: "Rapid Deployment",
      text: "Pre-positioned shelter can reach operational readiness within 45 minutes with a trained deployment crew.",
    },
    {
      icon: <FaCogs />,
      title: "Role-2 Upgrade Ready",
      text: "Modular architecture supports future expansion toward more capable NATO Role-2 medical configurations.",
    },
  ];

  const functionalSpecifications = [
    {
      element: "Platform",
      specification: "20-foot ISO steel container with structural modifications",
    },
    {
      element: "Capacity",
      specification:
        "2 concurrent holding beds + 1 examination table + transient triage area",
    },
    {
      element: "Staffing",
      specification: "1 Medical Officer + 2 Nursing Staff, expandable",
    },
    {
      element: "Internal Layout",
      specification:
        "Triage, Assessment, Holding and Equipment zones",
    },
    {
      element: "Deployment Time",
      specification: "Operational readiness within ≤45 minutes",
    },
    {
      element: "Temperature",
      specification:
        "22°C ±2°C internal target; external operating environment -20°C to +55°C",
    },
    {
      element: "Humidity",
      specification:
        "Climate-controlled environment suitable for medical equipment",
    },
    {
      element: "Air Quality",
      specification:
        "Forced ventilation with filtration and exhaust provisions",
    },
  ];

  const hvacSystems = [
    {
      icon: <FaWind />,
      title: "2.5 TR DACU",
      text: "Defence Air Conditioning Unit sized for controlled medical shelter operation.",
    },
    {
      icon: <FaThermometerHalf />,
      title: "Temperature Control",
      text: "Setpoint range of +18°C to +27°C with default operating setpoint of 22°C.",
    },
    {
      icon: <FaCogs />,
      title: "Remote Control Unit",
      text: "Wall-mounted Group RCU provides centralized HVAC control and monitoring.",
    },
    {
      icon: <FaWind />,
      title: "Air Distribution",
      text: "Ceiling-mounted supply diffusers with dedicated return-air grilles.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Multi-Stage Filtration",
      text: "Accessible filtration system supports controlled indoor air quality.",
    },
    {
      icon: <FaTint />,
      title: "Condensation Control",
      text: "Insulated construction helps prevent interior surface condensation.",
    },
  ];

  const electricalSystems = [
    {
      title: "Primary Supply",
      text: "400V 3-phase supply for HVAC and 230V 1-phase supply for general loads.",
    },
    {
      title: "External Inlets",
      text: "IP67-rated field power connectors for reliable deployment connections.",
    },
    {
      title: "UPS System",
      text: "Battery-backed critical circuits support defibrillator, lighting and oxygen monitoring.",
    },
    {
      title: "UPS Autonomy",
      text: "Minimum four-hour battery autonomy at defined critical load.",
    },
    {
      title: "MCB Protection",
      text: "Miniature Circuit Breakers provide individual circuit overcurrent protection.",
    },
    {
      title: "ELCB / RCCB",
      text: "Ground-fault protection is provided on appropriate circuit groups.",
    },
    {
      title: "Main Isolation",
      text: "Dedicated main isolators allow safe isolation of incoming supplies.",
    },
    {
      title: "Protective Earthing",
      text: "Container body bonding with external field earthing connection.",
    },
  ];

  const oxygenSystem = [
    {
      icon: <FaTint />,
      title: "External Oxygen Cylinders",
      text: "D-size medical oxygen cylinders are mounted externally for controlled access.",
    },
    {
      icon: <FaMedkit />,
      title: "Manifold Distribution",
      text: "Central manifold supplies three dedicated outlets across patient-care zones.",
    },
    {
      icon: <FaBed />,
      title: "Patient Bed Outlets",
      text: "Two oxygen outlets are provided at the patient holding beds.",
    },
    {
      icon: <FaProcedures />,
      title: "Assessment Outlet",
      text: "One dedicated oxygen outlet supports the central examination area.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Pressure Regulation",
      text: "Medical gas regulators and non-return valves support controlled oxygen delivery.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Low-Pressure Alarm",
      text: "Sensor-based low-pressure warning with UPS-backed alert capability.",
    },
  ];

  const medicalEquipment = [
    {
      icon: <FaHeartbeat />,
      title: "Defibrillator Provision",
      text: "Dedicated UPS-backed socket and accessible mounting location for emergency equipment.",
    },
    {
      icon: <FaProcedures />,
      title: "Patient Monitoring",
      text: "Provision for pulse oximetry, blood pressure and temperature monitoring.",
    },
    {
      icon: <FaBed />,
      title: "Patient Beds",
      text: "Two folding patient beds provide space-efficient casualty holding capability.",
    },
    {
      icon: <FaHospital />,
      title: "Examination Table",
      text: "Central adjustable-height examination table positioned in the assessment zone.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Medical Storage",
      text: "Integrated cabinets, utility racks and waste-disposal provisions.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cable Management",
      text: "Controlled cable routing reduces trip hazards along stretcher and casualty paths.",
    },
    {
      icon: <FaCogs />,
      title: "Equipment Mounting",
      text: "Wall and ceiling mounting provisions support secure medical equipment installation.",
    },
    {
      icon: <FaTools />,
      title: "Utility Integration",
      text: "Electrical, oxygen, HVAC and medical utility systems are coordinated within the shelter.",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Triage Zone",
      text: "Entry area for rapid initial assessment and categorization of incoming casualties.",
    },
    {
      number: "02",
      title: "Assessment Zone",
      text: "Central examination area for vital signs, examination and stabilization procedures.",
    },
    {
      number: "03",
      title: "Holding Zone",
      text: "Two-bed area for observation and temporary holding before evacuation.",
    },
    {
      number: "04",
      title: "Equipment Zone",
      text: "Dedicated area for oxygen manifold, UPS, electrical panels, HVAC controls and utilities.",
    },
  ];

  const standards = [
    {
      title: "ISO 9001:2015",
      text: "Quality management system requirements.",
    },
    {
      title: "ISO 14001:2015",
      text: "Environmental management system requirements.",
    },
    {
      title: "ISO 45001:2018",
      text: "Occupational health and safety management.",
    },
    {
      title: "ISO 668",
      text: "Container specifications and series requirements.",
    },
    {
      title: "NFPA 99",
      text: "Medical gas and healthcare facility safety provisions.",
    },
    {
      title: "MIL-STD-810H",
      text: "Military environmental testing and qualification framework.",
    },
    {
      title: "MIL-STD-461G",
      text: "Military electromagnetic interference and compatibility requirements.",
    },
  ];

  const deployment = [
    "Offload container and level using jacks or supporting stands",
    "Connect 400V 3-phase HVAC supply and 230V 1-phase general supply",
    "Activate main distribution panel and verify UPS status",
    "Start HVAC and allow thermal stabilization",
    "Open main door and configure interior medical zones",
    "Open oxygen cylinders and establish manifold pressure",
    "Verify lighting, medical equipment and utilities",
    "Confirm operational readiness within ≤45 minutes",
  ];

  const upgrades = [
    "Expanded Role-2 treatment and stabilization capability",
    "Additional patient holding capacity",
    "Integrated diagnostic and laboratory modules",
    "Enhanced medical gas distribution",
    "Additional HVAC capacity for expanded modules",
    "Integrated power-generation and energy-storage options",
    "Interconnected multi-shelter medical complexes",
  ];

  const gallery = [
    {
      title: "MMTS-R1 Medical Shelter",
      image: "/images/Medical_Shelters.jpg",
    },
    {
      title: "Mobile Medical Treatment Facility",
      image: "/images/Medical_Shelters-side.jpg",
    },
    {
      title: "Medical Shelter Interior",
      image: "/images/Medical_Shelters-interior.jpg",
    },
  ];

  return (
    <div className="medical-service-content">

      {/* HERO */}

      <section className="medical-hero">

        <img
          src="/images/Medical_Shelters.jpg"
          alt="FINEX MMTS-R1 Mobile Medical Treatment Shelter"
        />

        <div className="medical-hero-overlay">

          <div className="medical-hero-content">

            <span className="medical-section-tag">
              FINEX / MMTS-R1 / ROLE 1
            </span>

            <h1>
              Mobile Medical
              <span> Treatment Shelter</span>
            </h1>

            <p>
              Rapid-deployment NATO Role-1 medical treatment capability
              for casualty triage, stabilization and temporary holding.
            </p>

            <div className="medical-hero-meta">
              <span>20 FT ISO</span>
              <span>ROLE-1</span>
              <span>≤45 MIN DEPLOYMENT</span>
            </div>

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="medical-stats-grid">

        <div className="medical-stat-card">
          <span>01</span>
          <h2>20 FT</h2>
          <p>ISO Container Platform</p>
        </div>

        <div className="medical-stat-card">
          <span>02</span>
          <h2>2 BEDS</h2>
          <p>Casualty Holding</p>
        </div>

        <div className="medical-stat-card">
          <span>03</span>
          <h2>2.5 TR</h2>
          <p>Defence HVAC</p>
        </div>

        <div className="medical-stat-card">
          <span>04</span>
          <h2>≤45 MIN</h2>
          <p>Operational Readiness</p>
        </div>

      </section>


      {/* OVERVIEW */}

      <section className="medical-info-box medical-overview">

        <div className="medical-section-heading">

          <span className="medical-section-tag">
            PRODUCT OVERVIEW
          </span>

          <h2>
            FINEX MMTS-R1 <span>Medical Shelter</span>
          </h2>

        </div>

        <div className="medical-overview-content">

          <div className="medical-overview-line"></div>

          <p>
            FINEX MMTS-R1 is a containerized NATO Role-1 Medical Treatment
            System delivering rapid-deployment casualty triage,
            stabilization and temporary holding capability.
          </p>

          <p>
            Designed for the Indian Army, AFMS, NDRF, SDRF, disaster
            management authorities and UN missions, the system provides
            a complete mobile medical facility within a 20-foot ISO
            container.
          </p>

        </div>

      </section>


      {/* KEY FEATURES */}

      <section className="medical-info-box">

        <div className="medical-title-row">

          <div>
            <span className="medical-section-tag">
              ENGINEERING FEATURES
            </span>

            <h2>Key Features</h2>
          </div>

          <span className="medical-title-code">
            FINEX / MMTS / R1
          </span>

        </div>

        <div className="medical-feature-grid">

          {keyFeatures.map((item, index) => (

            <div className="medical-feature-card" key={index}>

              <div className="medical-feature-icon">
                {item.icon}
              </div>

              <div className="medical-feature-content">

                <span className="medical-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* FUNCTIONAL SPECIFICATIONS */}

      <section className="medical-info-box">

        <span className="medical-section-tag">
          ENGINEERING DATA
        </span>

        <h2>Functional Specifications</h2>

        <div className="medical-table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Parameter</th>
                <th>Specification</th>
              </tr>
            </thead>

            <tbody>

              {functionalSpecifications.map((item, index) => (

                <tr key={index}>
                  <td>{item.element}</td>
                  <td>{item.specification}</td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>


      {/* HVAC */}

      <section className="medical-info-box">

        <span className="medical-section-tag">
          ENVIRONMENTAL SYSTEM
        </span>

        <h2>Environmental & HVAC System</h2>

        <p className="medical-section-description">
          The MMTS-R1 employs a Defence Air Conditioning Unit with
          integrated remote control for stable indoor conditions
          during medical operations in extreme climates.
        </p>

        <div className="medical-item-grid">

          {hvacSystems.map((item, index) => (

            <div className="medical-item-card" key={index}>

              <div className="medical-side-icon">
                {item.icon}
              </div>

              <div>

                <span className="medical-item-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ELECTRICAL */}

      <section className="medical-info-box medical-dark-section">

        <div className="medical-dark-heading">

          <span className="medical-section-tag">
            POWER & SAFETY
          </span>

          <h2>
            Electrical <span>System</span>
          </h2>

          <p>
            Redundant electrical protection and UPS-backed critical
            loads provide safe and reliable operation in deployed
            medical environments.
          </p>

        </div>

        <div className="medical-dark-grid">

          {electricalSystems.map((item, index) => (

            <div className="medical-dark-card" key={index}>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>


      {/* OXYGEN */}

      <section className="medical-info-box">

        <div className="medical-title-row">

          <div>

            <span className="medical-section-tag">
              MEDICAL GAS SYSTEM
            </span>

            <h2>Oxygen System</h2>

          </div>

        </div>

        <div className="medical-item-grid">

          {oxygenSystem.map((item, index) => (

            <div className="medical-item-card" key={index}>

              <div className="medical-side-icon">
                {item.icon}
              </div>

              <div>

                <span className="medical-item-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* MEDICAL EQUIPMENT */}

      <section className="medical-info-box">

        <span className="medical-section-tag">
          EQUIPMENT INTEGRATION
        </span>

        <h2>Medical Equipment Integration</h2>

        <div className="medical-application-grid">

          {medicalEquipment.map((item, index) => (

            <div className="medical-application-card" key={index}>

              <div className="medical-side-icon">
                {item.icon}
              </div>

              <div>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* WORKFLOW */}

      <section className="medical-info-box medical-workflow-section">

        <span className="medical-section-tag">
          CLINICAL WORKFLOW
        </span>

        <h2>Interior Layout & Casualty Workflow</h2>

        <p className="medical-section-description">
          The MMTS-R1 is organized into functional zones supporting
          a controlled casualty workflow from arrival through
          stabilization and evacuation.
        </p>

        <div className="medical-workflow">

          {workflow.map((item, index) => (

            <div className="medical-workflow-card" key={index}>

              <div className="medical-workflow-number">
                {item.number}
              </div>

              <div className="medical-workflow-arrow">
                <FaArrowRight />
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>


      {/* STANDARDS */}

      <section className="medical-info-box medical-standards-section">

        <span className="medical-section-tag">
          COMPLIANCE FRAMEWORK
        </span>

        <h2>Standards & Compliance</h2>

        <div className="medical-standards-grid">

          {standards.map((item, index) => (

            <div className="medical-standard-card" key={index}>

              <div className="medical-standard-icon">
                <FaShieldAlt />
              </div>

              <div className="medical-standard-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>


      {/* DEPLOYMENT */}

      <section className="medical-info-box">

        <div className="medical-split-section">

          <div>

            <span className="medical-section-tag">
              FIELD OPERATIONS
            </span>

            <h2>Deployment & Operations</h2>

            <p className="medical-section-description">
              Typical deployment sequence for a trained crew,
              from container offload through operational readiness.
            </p>

          </div>

          <div className="medical-deployment-list">

            {deployment.map((item, index) => (

              <div className="medical-deployment-item" key={index}>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <FaCheckCircle />

                <p>{item}</p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FUTURE UPGRADES */}

      <section className="medical-info-box medical-customization">

        <div className="medical-customization-heading">

          <span className="medical-section-tag">
            SCALABILITY
          </span>

          <h2>Future Upgrades</h2>

          <p>
            The MMTS-R1 architecture is designed for scalability,
            allowing future expansion toward NATO Role-2 medical
            facility capability through modular enhancements.
          </p>

        </div>

        <div className="medical-customization-list">

          {upgrades.map((item, index) => (

            <div className="medical-custom-item" key={index}>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{item}</p>

            </div>

          ))}

        </div>

      </section>


      {/* GALLERY */}

      <section className="medical-info-box medical-gallery-section">

        <div className="medical-gallery-header">

          <span className="medical-section-tag">
            PROJECT SHOWCASE
          </span>

          <h2>
            Medical Shelter <span>Gallery</span>
          </h2>

          <p>
            Rapid-deployment medical infrastructure engineered for
            casualty treatment, stabilization, disaster response
            and military field operations.
          </p>

        </div>

        <div className="medical-gallery-grid">

          {gallery.map((item, index) => (

            <div
              className={`medical-gallery-card medical-gallery-${index + 1}`}
              key={index}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="medical-gallery-overlay">

                <div className="medical-gallery-number">
                  0{index + 1}
                </div>

                <div className="medical-gallery-content">

                  <span>MMTS-R1</span>

                  <h3>{item.title}</h3>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* FOOTER */}

      <section className="medical-product-footer">

        <div>

          <span>FINEX ENGINEERING SYSTEMS</span>

          <h2>
            Rapid Medical Response for
            <strong> Deployed Operations</strong>
          </h2>

          <p>
            Containerized, climate-controlled and medically equipped
            Role-1 treatment shelters engineered for military,
            disaster-response and humanitarian operations.
          </p>

        </div>

        <div className="medical-footer-code">
          MMTS
          <br />
          R1
          <br />
          MEDICAL
        </div>

      </section>

    </div>
  );
}

export default MedicalShelters;