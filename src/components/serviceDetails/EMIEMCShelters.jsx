import "../../styles/EMIEMCShelters.css";

import {
  FaShieldAlt,
  FaBroadcastTower,
  FaSatelliteDish,
  FaFlask,
  FaSnowflake,
  FaBolt,
  FaLock,
  FaChartLine,
  FaTemperatureHigh,
  FaNetworkWired,
  FaClipboardCheck,
  FaCogs,
  FaVial,
  FaWaveSquare,
  FaServer,
  FaCheckCircle,
  FaHardHat,
} from "react-icons/fa";

function EMIEMCShelters() {
  /* ==========================================================
     KEY FEATURES
  ========================================================== */

  const keyFeatures = [
    {
      icon: <FaShieldAlt />,
      title: "Faraday Cage Construction",
      text: "Full electromagnetic shielding with multi-layer Faraday cage construction providing greater than 90 dB shielding effectiveness.",
    },
    {
      icon: <FaLock />,
      title: "MIL-STD & TEMPEST",
      text: "Designed to support MIL-STD-461G, TEMPEST and other applicable electromagnetic security requirements.",
    },
    {
      icon: <FaFlask />,
      title: "Multiple Test Chambers",
      text: "Multiple isolated testing chambers enable concurrent equipment testing and secure operations.",
    },
    {
      icon: <FaChartLine />,
      title: "Instrumentation Integration",
      text: "Integrated provisions for spectrum analyzers, network analyzers, signal generators and electromagnetic measurement equipment.",
    },
    {
      icon: <FaHardHat />,
      title: "Vibration Isolation",
      text: "Vibration isolation and shock mounting provisions protect sensitive equipment during testing and operation.",
    },
    {
      icon: <FaSnowflake />,
      title: "Environmental Control",
      text: "Precision climate control maintains stable temperature and humidity conditions for sensitive electronics.",
    },
    {
      icon: <FaBolt />,
      title: "Power Conditioning",
      text: "Clean and regulated power with harmonic filtering, voltage regulation and multi-stage surge protection.",
    },
    {
      icon: <FaNetworkWired />,
      title: "RF Feed-throughs",
      text: "RF-filtered bulkhead connectors and controlled signal and power penetrations maintain shielding integrity.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Grounding Grid",
      text: "Low-impedance multi-point grounding architecture with provisions for less than 0.1 Ohm impedance.",
    },
    {
      icon: <FaCogs />,
      title: "Modular Expansion",
      text: "Modular architecture allows additional chambers, instrumentation and support systems to be integrated as requirements grow.",
    },
  ];

  /* ==========================================================
     APPLICATION AREAS
  ========================================================== */

  const applications = [
    {
      icon: <FaShieldAlt />,
      title: "Military Equipment Testing",
      text: "EMI susceptibility and emissions testing for defence systems.",
    },
    {
      icon: <FaLock />,
      title: "Secure Communications",
      text: "TEMPEST-oriented facilities for classified system development.",
    },
    {
      icon: <FaBroadcastTower />,
      title: "Radar Development",
      text: "RF measurement chambers for radar design validation.",
    },
    {
      icon: <FaSatelliteDish />,
      title: "Satellite Communications",
      text: "Uplink, downlink and interference verification testing.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Signal Intelligence",
      text: "Secure environments for SIGINT operations and threat assessment.",
    },
    {
      icon: <FaWaveSquare />,
      title: "Electronic Warfare",
      text: "EW system testing, evaluation and counter-measure development.",
    },
    {
      icon: <FaFlask />,
      title: "Research & Development",
      text: "Controlled environments for academic and defence electronics development.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Qualification Testing",
      text: "System acceptance and qualification testing in controlled RF environments.",
    },
  ];

  /* ==========================================================
     SHIELDING SPECIFICATIONS
  ========================================================== */

  const shieldingSpecifications = [
    {
      element: "Shielding Mechanism",
      specification:
        "Multi-layer Faraday cage with continuous mesh and double-layer walls",
    },
    {
      element: "Attenuation Performance",
      specification: ">90 dB across 10 Hz to 10 GHz frequency range",
    },
    {
      element: "VLF",
      specification: ">80 dB attenuation from 10 Hz – 1 kHz",
    },
    {
      element: "Low Frequency",
      specification: ">90 dB attenuation from 1 kHz – 1 MHz",
    },
    {
      element: "RF / Microwave",
      specification: ">100 dB attenuation from 1 MHz – 10 GHz",
    },
    {
      element: "Material",
      specification:
        "Copper mesh and steel construction with silver-plated connectors",
    },
    {
      element: "Grounding",
      specification: "Multi-point grounding with <0.1 Ohm impedance",
    },
    {
      element: "Penetration Control",
      specification:
        "RF-filtered bulkhead connectors and waveguide penetrations",
    },
  ];

  /* ==========================================================
     TESTING CHAMBER
  ========================================================== */

  const testingChamber = [
    {
      icon: <FaFlask />,
      title: "Main Chamber",
      text: "8m × 6m × 4m internal chamber for large equipment testing.",
    },
    {
      icon: <FaVial />,
      title: "Secondary Chamber",
      text: "4m × 3m × 2.5m chamber for component-level testing.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Anechoic Treatment",
      text: "Pyramidal foam absorbers minimize internal electromagnetic reflections.",
    },
    {
      icon: <FaWaveSquare />,
      title: "Absorber Specification",
      text: "60 cm pyramid height with an operating range of 100 MHz – 40 GHz.",
    },
    {
      icon: <FaChartLine />,
      title: "Measurement Accuracy",
      text: "Measurement uncertainty maintained within approximately ±3 dB.",
    },
    {
      icon: <FaBroadcastTower />,
      title: "Antenna Array",
      text: "Motorized antenna positioners support field-pattern measurement.",
    },
    {
      icon: <FaBolt />,
      title: "RF Load",
      text: "50 Ohm terminations and dummy loads for controlled RF operation.",
    },
    {
      icon: <FaLock />,
      title: "RF Access",
      text: "Filtered access door with double-door entry interlock.",
    },
  ];

  /* ==========================================================
     INSTRUMENTATION
  ========================================================== */

  const instrumentation = [
    {
      icon: <FaChartLine />,
      title: "Network Analyzer",
      text: "S-parameter measurements from 10 MHz – 40 GHz.",
    },
    {
      icon: <FaWaveSquare />,
      title: "Spectrum Analyzer",
      text: "Emissions monitoring and electromagnetic interference detection.",
    },
    {
      icon: <FaBolt />,
      title: "RF Power Meter",
      text: "Absolute and relative RF power measurements.",
    },
    {
      icon: <FaBroadcastTower />,
      title: "Signal Generator",
      text: "Frequency coverage from 100 kHz – 40 GHz.",
    },
    {
      icon: <FaChartLine />,
      title: "Oscilloscope",
      text: "Multi-channel measurement with minimum 1 GHz bandwidth.",
    },
    {
      icon: <FaShieldAlt />,
      title: "EMI/RFI Monitor",
      text: "Real-time spectrum surveillance and interference monitoring.",
    },
    {
      icon: <FaTemperatureHigh />,
      title: "Environmental Monitoring",
      text: "Temperature and humidity monitoring with continuous recording.",
    },
    {
      icon: <FaServer />,
      title: "Data Acquisition",
      text: "Automated test sequences and technical report generation.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Remote Control",
      text: "Network-based equipment control from an external laboratory.",
    },
    {
      icon: <FaCogs />,
      title: "Test Automation",
      text: "Custom measurement scripts and standardized test procedures.",
    },
  ];

  /* ==========================================================
     ENVIRONMENTAL CONTROL
  ========================================================== */

  const environmental = [
    {
      title: "Temperature Control",
      text: "±2°C stability with operating range from 15°C to 35°C.",
    },
    {
      title: "Humidity Control",
      text: "45% to 55% RH with approximately ±3% stability.",
    },
    {
      title: "Precision HVAC",
      text: "Dedicated climate system with independent backup capability.",
    },
    {
      title: "Thermal Monitoring",
      text: "Continuous environmental logging with alarm capability.",
    },
    {
      title: "Air Filtration",
      text: "HEPA and activated carbon filtration for contaminant removal.",
    },
    {
      title: "Vibration Isolation",
      text: "Pneumatic isolation provisions reducing low-frequency vibration.",
    },
    {
      title: "Acoustic Environment",
      text: "Target internal noise level below 50 dB(A).",
    },
  ];

  /* ==========================================================
     POWER SYSTEMS
  ========================================================== */

  const powerSystems = [
    {
      title: "Primary Supply",
      text: "400V 3-phase, 63A supply with harmonic filtering.",
    },
    {
      title: "UPS System",
      text: "48 VDC battery backup with approximately 30-minute autonomy.",
    },
    {
      title: "Power Distribution",
      text: "Isolated grounds for test equipment and facility systems.",
    },
    {
      title: "Surge Protection",
      text: "Multi-stage transient suppression for connected equipment.",
    },
    {
      title: "Voltage Regulation",
      text: "±2% voltage regulation across load variations.",
    },
    {
      title: "Harmonic Content",
      text: "Designed for less than 3% THD.",
    },
    {
      title: "Frequency Stability",
      text: "50 Hz ±0.1 Hz supply stability.",
    },
    {
      title: "RF Filtering",
      text: "Power feed-through filters with less than 0.5 dB insertion loss.",
    },
  ];

  /* ==========================================================
     TEMPEST & SECURITY
  ========================================================== */

  const security = [
    {
      icon: <FaShieldAlt />,
      title: "TEMPEST-Grade Shielding",
      text: "Enhanced electromagnetic isolation for applicable classified-information environments.",
    },
    {
      icon: <FaLock />,
      title: "Secure Entry",
      text: "Multi-stage access control with surveillance provisions.",
    },
    {
      icon: <FaWaveSquare />,
      title: "Emission Monitoring",
      text: "Continuous monitoring of facility RF emissions.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Hardened Connections",
      text: "Dedicated power, water and fiber service connections.",
    },
    {
      icon: <FaHardHat />,
      title: "Visitor Control",
      text: "Restricted-access areas with controlled visitor procedures.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Equipment Control",
      text: "Inventory tracking and security sealing provisions.",
    },
    {
      icon: <FaLock />,
      title: "Secure Documentation",
      text: "Controlled material handling and secure documentation storage.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Certification",
      text: "Facility accreditation support for applicable defence programmes.",
    },
  ];

  /* ==========================================================
     STANDARDS
  ========================================================== */

  const standards = [
    {
      title: "MIL-STD-461G",
      text: "Electromagnetic interference control requirements for defence equipment.",
    },
    {
      title: "MIL-STD-462F",
      text: "Verification and measurement procedures for electromagnetic characteristics.",
    },
    {
      title: "IEC 61000",
      text: "Electromagnetic compatibility test methods and requirements.",
    },
    {
      title: "IEEE 299",
      text: "Shielding effectiveness measurement methodology.",
    },
    {
      title: "NATO STANAG",
      text: "Applicable military electromagnetic compatibility standards.",
    },
    {
      title: "Indian Standards",
      text: "IS 12657 and other applicable Indian EMC requirements.",
    },
    {
      title: "Custom Protocols",
      text: "Programme-specific test plans, procedures and acceptance criteria.",
    },
  ];

  /* ==========================================================
     SUPPORT SERVICES
  ========================================================== */

  const supportServices = [
    "Test Planning & Design",
    "Equipment Calibration",
    "Technical Support",
    "Report Generation",
    "Troubleshooting",
    "Operator Training",
    "Facility Maintenance",
    "Lease Options",
  ];

  /* ==========================================================
     CUSTOMIZATION
  ========================================================== */

  const customization = [
    "Expanded chamber volumes for full-system evaluations",
    "Specialized frequency-optimized absorber materials",
    "RF antenna arrays and multi-antenna configurations",
    "Integrated temperature testing chambers",
    "Vibration shaker systems for combined environmental testing",
    "Portable shielded enclosures for field applications",
    "Multi-site interconnected testing networks",
  ];

  /* ==========================================================
     GALLERY
  ========================================================== */

  const gallery = [
    {
      title: "EMI EMC Shelters",
      image: "/images/EMI-EMC-shelters.jpg",
    },
    {
      title: "EMI EMC Shelters side",
      image: "/images/EMI-EMC-shelters-side.jpg",
    },
    {
      title: "EMI EMC Shelters back",
      image: "/images/EMI-EMC-shelters-back.jpg",
    }
  ];

  return (
    <div className="emi-service-content">

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="emi-stats-grid">

        <div className="emi-stat-card">
          <span>01</span>
          <h2>&gt;90 dB</h2>
          <p>Shielding Effectiveness</p>
        </div>

        <div className="emi-stat-card">
          <span>02</span>
          <h2>10 Hz–10 GHz</h2>
          <p>Shielding Range</p>
        </div>

        <div className="emi-stat-card">
          <span>03</span>
          <h2>MIL-STD</h2>
          <p>Defence EMC Standards</p>
        </div>

        <div className="emi-stat-card">
          <span>04</span>
          <h2>TEMPEST</h2>
          <p>Secure Operations</p>
        </div>

      </section>


      {/* =====================================================
          PRODUCT OVERVIEW
      ===================================================== */}

      <section className="emi-info-box emi-overview">

        <div className="emi-section-heading">

          <span className="emi-section-tag">
            PRODUCT OVERVIEW
          </span>

          <h2>
            EMI/EMC <span>Shelters</span>
          </h2>

        </div>

        <div className="emi-overview-content">

          <div className="emi-overview-line"></div>

          <p>
            FINEX EMI/EMC Shelters provide specialized, fully-shielded
            facilities for testing, development and operations of sensitive
            defence electronics and communications systems.
          </p>

          <p>
            These shelters provide comprehensive electromagnetic isolation,
            enabling military-grade equipment development, qualification
            testing and secure operations in electromagnetically complex
            environments.
          </p>

        </div>

      </section>


      {/* =====================================================
          KEY FEATURES
      ===================================================== */}

      <section className="emi-info-box">

        <div className="emi-title-row">

          <div>

            <span className="emi-section-tag">
              ENGINEERING FEATURES
            </span>

            <h2>Key Features</h2>

          </div>

          <span className="emi-title-code">
            FINEX / EMI / 002
          </span>

        </div>

        <div className="emi-feature-grid">

          {keyFeatures.map((item, index) => (

            <div className="emi-feature-card" key={index}>

              <div className="emi-feature-icon">
                {item.icon}
              </div>

              <div className="emi-feature-content">

                <span className="emi-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          APPLICATION AREAS
      ===================================================== */}

      <section className="emi-info-box">

        <span className="emi-section-tag">
          APPLICATIONS
        </span>

        <h2>Application Areas</h2>

        <div className="emi-application-grid">

          {applications.map((item, index) => (

            <div className="emi-application-card" key={index}>

              <div className="emi-side-icon">
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


      {/* =====================================================
          SHIELDING SPECIFICATIONS
      ===================================================== */}

      <section className="emi-info-box">

        <span className="emi-section-tag">
          ENGINEERING DATA
        </span>

        <h2>Shielding Specifications</h2>

        <div className="emi-table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Parameter</th>
                <th>Specification</th>
              </tr>

            </thead>

            <tbody>

              {shieldingSpecifications.map((item, index) => (

                <tr key={index}>
                  <td>{item.element}</td>
                  <td>{item.specification}</td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>


      {/* =====================================================
          TESTING CHAMBER
      ===================================================== */}

      <section className="emi-info-box">

        <div className="emi-title-row">

          <div>

            <span className="emi-section-tag">
              TEST ENVIRONMENT
            </span>

            <h2>Testing Chamber Configuration</h2>

          </div>

        </div>

        <p className="emi-section-description">
          Advanced chambers support comprehensive electromagnetic
          compatibility testing and secure operations.
        </p>

        <div className="emi-item-grid">

          {testingChamber.map((item, index) => (

            <div className="emi-item-card" key={index}>

              <div className="emi-side-icon">
                {item.icon}
              </div>

              <div>

                <span className="emi-item-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          INSTRUMENTATION
      ===================================================== */}

      <section className="emi-info-box emi-dark-section">

        <div className="emi-dark-heading">

          <span className="emi-section-tag">
            MEASUREMENT SYSTEMS
          </span>

          <h2>
            Instrumentation & <span>Measurement Systems</span>
          </h2>

          <p>
            Complete test-facility provisions with integrated
            measurement, monitoring and automation capabilities.
          </p>

        </div>

        <div className="emi-dark-grid">

          {instrumentation.map((item, index) => (

            <div className="emi-dark-card" key={index}>

              <div className="emi-dark-icon">
                {item.icon}
              </div>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          ENVIRONMENTAL CONTROL
      ===================================================== */}

      <section className="emi-info-box">

        <span className="emi-section-tag">
          ENVIRONMENTAL SYSTEMS
        </span>

        <h2>Environmental Control</h2>

        <div className="emi-four-grid">

          {environmental.map((item, index) => (

            <div className="emi-small-card" key={index}>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          POWER
      ===================================================== */}

      <section className="emi-info-box">

        <span className="emi-section-tag">
          POWER MANAGEMENT
        </span>

        <h2>Power Systems</h2>

        <p className="emi-section-description">
          Clean, regulated power ensures test validity and equipment
          protection during sensitive electromagnetic measurements.
        </p>

        <div className="emi-power-grid">

          {powerSystems.map((item, index) => (

            <div className="emi-power-card" key={index}>

              <div className="emi-power-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          SECURITY
      ===================================================== */}

      <section className="emi-info-box">

        <div className="emi-title-row">

          <div>

            <span className="emi-section-tag">
              SECURITY ARCHITECTURE
            </span>

            <h2>TEMPEST & Security Features</h2>

          </div>

        </div>

        <div className="emi-application-grid">

          {security.map((item, index) => (

            <div className="emi-application-card" key={index}>

              <div className="emi-side-icon">
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


      {/* =====================================================
          STANDARDS
      ===================================================== */}

      <section className="emi-info-box emi-standards-section">

        <span className="emi-section-tag">
          COMPLIANCE FRAMEWORK
        </span>

        <h2>Test Standards & Procedures</h2>

        <div className="emi-standards-grid">

          {standards.map((item, index) => (

            <div className="emi-standard-card" key={index}>

              <div className="emi-standard-icon">
                <FaShieldAlt />
              </div>

              <div className="emi-standard-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          SUPPORT SERVICES
      ===================================================== */}

      <section className="emi-info-box">

        <div className="emi-split-section">

          <div>

            <span className="emi-section-tag">
              FACILITY SERVICES
            </span>

            <h2>Support Services</h2>

            <p className="emi-section-description">
              FINEX provides technical, operational and maintenance
              support throughout the facility lifecycle.
            </p>

          </div>

          <div className="emi-check-list">

            {supportServices.map((item, index) => (

              <div className="emi-check-item" key={index}>

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


      {/* =====================================================
          CUSTOMIZATION
      ===================================================== */}

      <section className="emi-info-box emi-customization">

        <div className="emi-customization-heading">

          <span className="emi-section-tag">
            CONFIGURATION OPTIONS
          </span>

          <h2>Customization Options</h2>

          <p>
            EMI/EMC shelters can be configured around chamber size,
            frequency range, instrumentation, environmental and
            security requirements.
          </p>

        </div>

        <div className="emi-customization-list">

          {customization.map((item, index) => (

            <div className="emi-custom-item" key={index}>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{item}</p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          IMAGE GALLERY
      ===================================================== */}

      <section className="emi-info-box emi-gallery-section">

        <div className="emi-gallery-header">

          <span className="emi-section-tag">
            PROJECT SHOWCASE
          </span>

          <h2>
            EMI/EMC <span>Gallery</span>
          </h2>

          <p>
            Shielded shelters, electromagnetic testing environments and
            specialized infrastructure engineered for defence electronics,
            secure communications and EMC qualification requirements.
          </p>

        </div>


        <div className="emi-gallery-grid">

          {gallery.map((item, index) => (

            <div
              className={`emi-gallery-card emi-gallery-${index + 1}`}
              key={index}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="emi-gallery-overlay">

                <div className="emi-gallery-number">
                  0{index + 1}
                </div>

                <div className="emi-gallery-content">

                  <span>
                    EMI / EMC
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <section className="emi-product-footer">

        <div>

          <span>
            FINEX ENGINEERING SYSTEMS
          </span>

          <h2>
            Controlled Environments for
            <strong> Electromagnetic Testing</strong>
          </h2>

          <p>
            Fully shielded, climate-controlled and configurable
            facilities engineered for defence electronics testing,
            secure communications and electromagnetic compatibility
            operations.
          </p>

        </div>

        <div className="emi-footer-code">
          EMI
          <br />
          EMC
          <br />
          SHELTER
        </div>

      </section>

    </div>
  );
}

export default EMIEMCShelters;