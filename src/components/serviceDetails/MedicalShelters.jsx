import "../../styles/MedicalShelters.css";

import {
  FaHeartbeat,
  FaHospital,
  FaProcedures,
  FaTemperatureHigh,
  FaSnowflake,
  FaBolt,
  FaBatteryFull,
  FaPlug,
  FaShieldAlt,
  FaFireExtinguisher,
  FaWind,
  FaTint,
  FaLungs,
  FaFlask,
  FaBed,
  FaStethoscope,
  FaBoxes,
  FaTools,
  FaClipboardCheck,
  FaHardHat,
  FaClock,
  FaTruck,
  FaCogs,
  FaCheckCircle,
  FaArrowRight,
  FaLayerGroup,
} from "react-icons/fa";

function MedicalShelters() {
  /* ==========================================================
     KEY FEATURES
  ========================================================== */

  const keyFeatures = [
    {
      icon: <FaBed />,
      title: "Two-Bed Casualty Holding",
      text: "Dedicated two-bed casualty holding facility with examination and temporary patient care capability.",
    },
    {
      icon: <FaHeartbeat />,
      title: "NATO Role-1 Capability",
      text: "Designed for casualty triage, initial assessment, stabilization and temporary holding before evacuation.",
    },
    {
      icon: <FaHospital />,
      title: "20-Foot ISO Platform",
      text: "Containerized medical facility based on a 20-foot ISO steel container for standard military logistics compatibility.",
    },
    {
      icon: <FaTemperatureHigh />,
      title: "Integrated HVAC",
      text: "2.5 TR DACU system maintains approximately 22°C ±2°C under challenging external climatic conditions.",
    },
    {
      icon: <FaLungs />,
      title: "Central Oxygen System",
      text: "Manifold-fed medical oxygen distribution with outlets at patient beds and the assessment zone.",
    },
    {
      icon: <FaBatteryFull />,
      title: "UPS Backup",
      text: "Critical medical and safety loads are supported by UPS battery backup with a minimum four-hour autonomy target.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Electrical Protection",
      text: "MCB, ELCB/RCCB, isolators and protective earthing provide layered electrical safety.",
    },
    {
      icon: <FaFireExtinguisher />,
      title: "Fire & Infection Control",
      text: "Fire-resistant interior materials, controlled ventilation and infection-control provisions support medical operations.",
    },
    {
      icon: <FaClock />,
      title: "Rapid Deployment",
      text: "Designed to achieve operational readiness within approximately 45 minutes with a trained deployment crew.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Expandable Architecture",
      text: "Modular architecture allows future integration and upgrade toward expanded Role-2 medical capability.",
    },
  ];

  /* ==========================================================
     FUNCTIONAL SPECIFICATIONS
  ========================================================== */

  const functionalSpecifications = [
    {
      element: "Platform",
      specification:
        "20-foot ISO steel container with structural modifications",
    },
    {
      element: "Capacity",
      specification:
        "2 concurrent holding beds + 1 examination table + transient triage area",
    },
    {
      element: "Staffing",
      specification:
        "1 Medical Officer + 2 Nursing Staff, expandable according to mission requirement",
    },
    {
      element: "Internal Layout",
      specification:
        "Triage, Assessment, Holding and Equipment zones",
    },
    {
      element: "Deployment Time",
      specification:
        "Within 45 minutes from pre-positioning to operational readiness",
    },
    {
      element: "Operating Temperature",
      specification:
        "22°C ±2°C internal target with external operating conditions from -20°C to +55°C",
    },
    {
      element: "Humidity",
      specification:
        "Climate-controlled environment supporting medical equipment stability",
    },
    {
      element: "Air Quality",
      specification:
        "Forced ventilation with filtration and controlled exhaust system",
    },
  ];

  /* ==========================================================
     HVAC / ENVIRONMENT
  ========================================================== */

  const hvacSystems = [
    {
      icon: <FaSnowflake />,
      title: "2.5 TR DACU",
      text: "Defence Air Conditioning Unit providing controlled cooling capacity for the medical shelter.",
    },
    {
      icon: <FaTemperatureHigh />,
      title: "Temperature Control",
      text: "Default operating setpoint of 22°C with target stability of approximately ±2°C.",
    },
    {
      icon: <FaCogs />,
      title: "Group RCU",
      text: "Wall-mounted Group Remote Control Unit enables centralized HVAC operation and monitoring.",
    },
    {
      icon: <FaWind />,
      title: "Air Distribution",
      text: "Ceiling-mounted diffusers and return grilles provide balanced internal air circulation.",
    },
    {
      icon: <FaTint />,
      title: "Condensation Control",
      text: "Insulation strategy minimizes the risk of condensation on internal shelter surfaces.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Multi-Stage Filtration",
      text: "Accessible filtration arrangement supports clean air circulation and routine maintenance.",
    },
    {
      icon: <FaBolt />,
      title: "Power Supply",
      text: "400V three-phase HVAC supply controlled through the wall-mounted RCU.",
    },
    {
      icon: <FaTools />,
      title: "Maintainability",
      text: "System components are arranged for practical inspection, servicing and replacement.",
    },
  ];

  /* ==========================================================
     ELECTRICAL SYSTEM
  ========================================================== */

  const electricalSystems = [
    {
      icon: <FaBolt />,
      title: "Primary Supply",
      text: "400V three-phase supply for HVAC and 230V single-phase supply for general loads.",
    },
    {
      icon: <FaPlug />,
      title: "External Inlets",
      text: "IP67-rated external electrical connectors designed for field deployment.",
    },
    {
      icon: <FaBatteryFull />,
      title: "UPS System",
      text: "Dedicated battery-backed supply for critical medical, monitoring and essential lighting loads.",
    },
    {
      icon: <FaClock />,
      title: "Four-Hour Autonomy",
      text: "Minimum four-hour UPS autonomy target at the defined critical load.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Circuit Protection",
      text: "Main isolators and miniature circuit breakers provide controlled circuit protection.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Ground Fault Protection",
      text: "ELCB/RCCB protection is provided on applicable circuit groups.",
    },
    {
      icon: <FaHardHat />,
      title: "Protective Earthing",
      text: "Container body is protectively earthed with an external field earthing connection.",
    },
    {
      icon: <FaCogs />,
      title: "Distribution Panel",
      text: "Centralized distribution architecture simplifies field operation and maintenance.",
    },
  ];

  /* ==========================================================
     OXYGEN SYSTEM
  ========================================================== */

  const oxygenSystem = [
    {
      icon: <FaLungs />,
      title: "Medical Oxygen Source",
      text: "D-size oxygen cylinders with approximately 5 L water capacity are mounted externally.",
    },
    {
      icon: <FaFlask />,
      title: "Cylinder Capacity",
      text: "Configured for continuous Role-1 operations with an estimated delivered volume of approximately 500–550 L.",
    },
    {
      icon: <FaProcedures />,
      title: "Three Oxygen Outlets",
      text: "Manifold-fed outlets serve two patient beds and one assessment table.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Pressure Regulation",
      text: "Medical gas regulators and non-return valves support controlled oxygen delivery.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Low-Pressure Alarm",
      text: "Sensor-based low-pressure alarm with UPS-backed alert capability supports operational safety.",
    },
    {
      icon: <FaHardHat />,
      title: "Segregated Routing",
      text: "Oxygen routing is separated from high-temperature and electrical hazard zones.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Safety Signage",
      text: "Mandatory oxygen warning and no-smoking signage is provided at relevant locations.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Medical Gas Safety",
      text: "System design references applicable medical gas safety requirements including NFPA 99.",
    },
  ];

  /* ==========================================================
     MEDICAL EQUIPMENT
  ========================================================== */

  const medicalEquipment = [
    {
      icon: <FaHeartbeat />,
      title: "Defibrillator Provision",
      text: "Dedicated UPS-backed power socket and accessible equipment placement for emergency cardiac support.",
    },
    {
      icon: <FaStethoscope />,
      title: "Patient Monitoring",
      text: "Provision for pulse oximetry, blood pressure and temperature monitoring.",
    },
    {
      icon: <FaProcedures />,
      title: "Examination Table",
      text: "Central examination table positioned within the assessment zone for primary casualty assessment.",
    },
    {
      icon: <FaBed />,
      title: "Patient Beds",
      text: "Two folding patient beds provide efficient temporary holding and observation capability.",
    },
    {
      icon: <FaLungs />,
      title: "Oxygen Delivery",
      text: "Wall-mounted regulators and dedicated oxygen outlets support each patient position.",
    },
    {
      icon: <FaBoxes />,
      title: "Medical Storage",
      text: "Medical cabinets, utility racks and waste disposal provisions support organized operations.",
    },
    {
      icon: <FaTools />,
      title: "Cable Management",
      text: "Managed routing reduces trip hazards around patient and stretcher movement paths.",
    },
    {
      icon: <FaCogs />,
      title: "Equipment Mounting",
      text: "Integrated mounting rails and secure fixing points support mission-specific equipment installation.",
    },
  ];

  /* ==========================================================
     CASUALTY WORKFLOW
  ========================================================== */

  const workflow = [
    {
      number: "01",
      icon: <FaHeartbeat />,
      title: "Triage Zone",
      text: "Entry area for initial casualty reception, rapid assessment and triage prioritization.",
    },
    {
      number: "02",
      icon: <FaStethoscope />,
      title: "Assessment Zone",
      text: "Central examination area for vital-sign assessment, diagnosis and initial stabilization.",
    },
    {
      number: "03",
      icon: <FaBed />,
      title: "Holding Zone",
      text: "Two patient beds provide observation and temporary holding before evacuation.",
    },
    {
      number: "04",
      icon: <FaBoxes />,
      title: "Equipment Zone",
      text: "Dedicated area for oxygen manifold, UPS, electrical panels, HVAC controls and utilities.",
    },
  ];

  /* ==========================================================
     STANDARDS
  ========================================================== */

  const standards = [
    {
      title: "ISO 9001:2015",
      text: "Quality management system framework supporting controlled product and service delivery.",
    },
    {
      title: "ISO 14001:2015",
      text: "Environmental management framework for responsible operational practices.",
    },
    {
      title: "ISO 45001:2018",
      text: "Occupational health and safety management requirements.",
    },
    {
      title: "ISO 668",
      text: "Container specifications and dimensional requirements for ISO container series.",
    },
    {
      title: "NFPA 99",
      text: "Medical gas and healthcare facility safety provisions applicable to the oxygen system.",
    },
    {
      title: "MIL-STD-810H",
      text: "Military environmental testing framework applicable to equipment and shelter systems.",
    },
    {
      title: "MIL-STD-461G",
      text: "Military electromagnetic interference and compatibility requirements.",
    },
  ];

  /* ==========================================================
     DEPLOYMENT
  ========================================================== */

  const deploymentSteps = [
    {
      icon: <FaTruck />,
      title: "Offload & Level",
      text: "Position the container and level it using jacks or suitable supporting stands.",
    },
    {
      icon: <FaBolt />,
      title: "Connect Power",
      text: "Connect 400V three-phase HVAC power and 230V single-phase general supply.",
    },
    {
      icon: <FaBatteryFull />,
      title: "Activate Distribution",
      text: "Energize the main distribution panel and verify UPS operating status.",
    },
    {
      icon: <FaSnowflake />,
      title: "Start HVAC",
      text: "Start the DACU and allow the internal environment to thermally stabilize.",
    },
    {
      icon: <FaHospital />,
      title: "Arrange Interior",
      text: "Open the main door and configure the designated treatment and equipment zones.",
    },
    {
      icon: <FaLungs />,
      title: "Activate Oxygen",
      text: "Open oxygen cylinders and establish the required manifold operating pressure.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "System Verification",
      text: "Verify lighting, medical equipment, oxygen, utilities and safety systems.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Operational Readiness",
      text: "Achieve operational readiness within approximately 45 minutes with trained personnel.",
    },
  ];

  /* ==========================================================
     GALLERY
  ========================================================== */

  const gallery = [
    {
      title: "Medical Shelter Exterior",
      image: "/images/medical_shelters.jpg",
    }
  ];

  return (
    <div className="medical-service-content">

      {/* ======================================================
          STATS
      ====================================================== */}

      <section className="medical-stats-grid">

        <div className="medical-stat-card">
          <span>01</span>
          <h2>20 FT</h2>
          <p>ISO Container Platform</p>
        </div>

        <div className="medical-stat-card">
          <span>02</span>
          <h2>2 Beds</h2>
          <p>Casualty Holding</p>
        </div>

        <div className="medical-stat-card">
          <span>03</span>
          <h2>2.5 TR</h2>
          <p>DACU HVAC System</p>
        </div>

        <div className="medical-stat-card">
          <span>04</span>
          <h2>≤45 Min</h2>
          <p>Rapid Deployment</p>
        </div>

      </section>


      {/* ======================================================
          PRODUCT OVERVIEW
      ====================================================== */}

      <section className="medical-info-box medical-overview">

        <div className="medical-section-heading">

          <span className="medical-section-tag">
            PRODUCT OVERVIEW
          </span>

          <h2>
            Mobile Medical
            <span> Treatment Capability</span>
          </h2>

        </div>

        <div className="medical-overview-content">

          <div className="medical-overview-line"></div>

          <div className="medical-overview-text">

            <p>
              FINEX MMTS-R1 is a containerized NATO Role-1 Medical
              Treatment System delivering rapid-deployment casualty
              triage, stabilization and temporary holding capability.
            </p>

            <p>
              Designed for the Indian Army, AFMS, NDRF, SDRF,
              disaster management authorities and UN missions, the
              shelter provides a complete mobile medical facility
              within a 20-foot ISO container.
            </p>

          </div>

        </div>

      </section>


      {/* ======================================================
          KEY FEATURES
      ====================================================== */}

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
            <div
              className="medical-feature-card"
              key={index}
            >

              <div className="medical-feature-icon">
                {item.icon}
              </div>

              <span className="medical-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* ======================================================
          FUNCTIONAL SPECIFICATIONS
      ====================================================== */}

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


      {/* ======================================================
          ENVIRONMENT / HVAC
      ====================================================== */}

      <section className="medical-info-box medical-environment-section">

        <div className="medical-section-heading">

          <span className="medical-section-tag">
            ENVIRONMENTAL SYSTEM
          </span>

          <h2>
            Environmental &amp; <span>HVAC System</span>
          </h2>

          <p className="medical-section-description">
            The MMTS-R1 employs a Defence Air Conditioning Unit
            with integrated Group Remote Control Unit for precise
            climate management in demanding operational environments.
          </p>

        </div>

        <div className="medical-card-grid">

          {hvacSystems.map((item, index) => (
            <div
              className="medical-system-card"
              key={index}
            >

              <div className="medical-system-top">

                <div className="medical-system-icon">
                  {item.icon}
                </div>

                <span className="medical-system-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              <div className="medical-system-content">

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ======================================================
          ELECTRICAL
      ====================================================== */}

      <section className="medical-info-box medical-dark-section">

        <div className="medical-dark-heading">

          <span className="medical-section-tag">
            POWER ARCHITECTURE
          </span>

          <h2>
            Electrical <span>System</span>
          </h2>

          <p>
            Safe and reliable electrical distribution with
            redundant protection and UPS-backed critical medical
            loads.
          </p>

        </div>

        <div className="medical-dark-grid">

          {electricalSystems.map((item, index) => (
            <div
              className="medical-dark-card"
              key={index}
            >

              <div className="medical-dark-card-top">

                <div className="medical-dark-icon">
                  {item.icon}
                </div>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* ======================================================
          OXYGEN
      ====================================================== */}

      <section className="medical-info-box medical-oxygen-section">

        <div className="medical-section-heading">

          <span className="medical-section-tag">
            MEDICAL GAS SYSTEM
          </span>

          <h2>
            Oxygen <span>System</span>
          </h2>

          <p className="medical-section-description">
            Medical-grade oxygen distribution provides controlled
            gas delivery to patient treatment and assessment positions.
          </p>

        </div>

        <div className="medical-card-grid">

          {oxygenSystem.map((item, index) => (
            <div
              className="medical-system-card medical-oxygen-card"
              key={index}
            >

              <div className="medical-system-top">

                <div className="medical-system-icon">
                  {item.icon}
                </div>

                <span className="medical-system-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              <div className="medical-system-content">

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ======================================================
          MEDICAL EQUIPMENT
      ====================================================== */}

      <section className="medical-info-box">

        <div className="medical-title-row">

          <div>

            <span className="medical-section-tag">
              MEDICAL INTEGRATION
            </span>

            <h2>Medical Equipment Integration</h2>

          </div>

        </div>

        <div className="medical-card-grid">

          {medicalEquipment.map((item, index) => (
            <div
              className="medical-system-card"
              key={index}
            >

              <div className="medical-system-top">

                <div className="medical-system-icon">
                  {item.icon}
                </div>

                <span className="medical-system-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              <div className="medical-system-content">

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ======================================================
          WORKFLOW
      ====================================================== */}

      <section className="medical-info-box medical-workflow-section">

        <div className="medical-section-heading">

          <span className="medical-section-tag">
            INTERIOR LAYOUT
          </span>

          <h2>
            Casualty <span>Workflow</span>
          </h2>

          <p>
            The MMTS-R1 is organized into functional zones supporting
            a seamless casualty workflow from arrival through
            stabilization and evacuation.
          </p>

        </div>

        <div className="medical-workflow">

          {workflow.map((item, index) => (
            <div
              className="medical-workflow-card"
              key={index}
            >

              <div className="medical-workflow-top">

                <div className="medical-workflow-icon">
                  {item.icon}
                </div>

                <span className="medical-workflow-number">
                  {item.number}
                </span>

              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              {index !== workflow.length - 1 && (
                <FaArrowRight className="medical-workflow-arrow" />
              )}

            </div>
          ))}

        </div>

      </section>


      {/* ======================================================
          STANDARDS
      ====================================================== */}

      <section className="medical-info-box medical-standards-section">

        <span className="medical-section-tag">
          COMPLIANCE FRAMEWORK
        </span>

        <h2>Standards &amp; Compliance</h2>

        <div className="medical-standards-grid">

          {standards.map((item, index) => (
            <div
              className="medical-standard-card"
              key={index}
            >

              <div className="medical-standard-icon">
                <FaShieldAlt />
              </div>

              <span className="medical-standard-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* ======================================================
          DEPLOYMENT
      ====================================================== */}

      <section className="medical-info-box medical-deployment-section">

        <div className="medical-section-heading">

          <span className="medical-section-tag">
            FIELD OPERATIONS
          </span>

          <h2>
            Deployment &amp; <span>Operations</span>
          </h2>

          <p>
            Typical deployment sequence for achieving operational
            readiness with a trained crew.
          </p>

        </div>

        <div className="medical-deployment-grid">

          {deploymentSteps.map((item, index) => (
            <div
              className="medical-deployment-card"
              key={index}
            >

              <div className="medical-deployment-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="medical-deployment-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* ======================================================
          GALLERY
      ====================================================== */}

      <section className="medical-info-box medical-gallery-section">

        <div className="medical-gallery-header">

          <span className="medical-section-tag">
            PROJECT SHOWCASE
          </span>

          <h2>
            Medical Shelter <span>Gallery</span>
          </h2>

          <p>
            Mobile medical infrastructure engineered for rapid
            deployment, controlled clinical environments and
            mission-ready field operations.
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
              />

              <div className="medical-gallery-overlay">

                <span className="medical-gallery-number">
                  0{index + 1}
                </span>

                <div className="medical-gallery-content">

                  <span>MMTS-R1</span>

                  <h3>{item.title}</h3>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ======================================================
          FUTURE UPGRADES
      ====================================================== */}

      <section className="medical-upgrade-section">

        <div className="medical-upgrade-content">

          <span>FUTURE CONFIGURATION</span>

          <h2>
            Scalable Toward
            <strong> Role-2 Capability</strong>
          </h2>

          <p>
            The MMTS-R1 architecture is designed for scalability
            and future upgrade toward NATO Role-2 medical facility
            capability through modular enhancements. This provides
            long-term utility and adaptation to evolving operational
            requirements.
          </p>

        </div>

        <div className="medical-upgrade-code">
          MMTS
          <br />
          ROLE-1
          <br />
          READY
        </div>

      </section>


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <section className="medical-product-footer">

        <div>

          <span>
            FINEX ENGINEERING SYSTEMS
          </span>

          <h2>
            Rapid Medical Response
            <strong> in the Field</strong>
          </h2>

          <p>
            Containerized medical infrastructure engineered for
            casualty triage, stabilization, temporary holding and
            rapid deployment in military, disaster-response and
            humanitarian environments.
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