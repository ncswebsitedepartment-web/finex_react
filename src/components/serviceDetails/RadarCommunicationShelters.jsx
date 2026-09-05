import "../../styles/serviceDetail.css";
import "../../styles/RadarCommunicationShelters.css";

import {
  FaSatelliteDish,
  FaShieldAlt,
  FaSnowflake,
  FaBolt,
  FaBroadcastTower,
  FaServer,
  FaTruckMoving,
  FaTools,
  FaTemperatureHigh,
  FaNetworkWired
} from "react-icons/fa";

function RadarCommunicationShelters() {

  const keyFeatures = [
    {
      icon: <FaTruckMoving />,
      title: "Containerized Design",
      text: "ISO containerized architecture designed for rapid deployment and standard logistics."
    },
    {
      icon: <FaShieldAlt />,
      title: "EMI / RFI Protection",
      text: "Electromagnetic shielding designed to protect sensitive electronic and communication equipment."
    },
    {
      icon: <FaNetworkWired />,
      title: "Modular Architecture",
      text: "Flexible internal configuration supporting radar, communication and surveillance equipment."
    },
    {
      icon: <FaSnowflake />,
      title: "Climate Control",
      text: "Controlled internal environment for maintaining suitable operating conditions for mission electronics."
    },
    {
      icon: <FaBolt />,
      title: "Power Conditioning",
      text: "Integrated power conditioning and UPS provisions for critical electronic systems."
    },
    {
      icon: <FaSatelliteDish />,
      title: "Antenna Integration",
      text: "Low-profile antenna mounting and RF-transparent panel provisions for system integration."
    },
    {
      icon: <FaTemperatureHigh />,
      title: "Redundant Cooling",
      text: "Redundant HVAC provisions supporting continuous operation of heat-generating equipment."
    },
    {
      icon: <FaShieldAlt />,
      title: "Vibration Isolation",
      text: "Equipment mounting provisions designed to reduce vibration transmission to precision electronics."
    },
    {
      icon: <FaTools />,
      title: "Field Serviceable",
      text: "Accessible equipment layout and removable panels simplify inspection, maintenance and upgrades."
    }
  ];


  const variants = [
    {
      title: "Standard Radar Shelter (SRS)",
      text: "Configured for air-defence radar systems, air-traffic-control applications and surveillance radar deployment."
    },
    {
      title: "Communication Shelter (ComSh)",
      text: "Optimized for satellite communication terminals, RF systems and signal transmission equipment."
    },
    {
      title: "Integrated Surveillance Shelter (ISS)",
      text: "Combined radar and communication infrastructure in a single modular shelter."
    },
    {
      title: "Mobile Command Post",
      text: "Enhanced configuration supporting command-and-control centres, tactical operations centres and communication hubs."
    },
    {
      title: "Portable Antenna Platform",
      text: "Lightweight configuration supporting rapid deployment with modular antenna arrays and RF distribution."
    }
  ];


  const specifications = [
    {
      element: "Platform",
      specification: "20-foot or 40-foot ISO container; customizable"
    },
    {
      element: "Structural Material",
      specification: "Steel frame with composite reinforcement"
    },
    {
      element: "Weight Capacity",
      specification: "Up to 5 tonnes distributed load"
    },
    {
      element: "Environmental Sealing",
      specification: "IP65 rated"
    },
    {
      element: "Operating Temperature",
      specification: "-20°C to +55°C"
    },
    {
      element: "Internal Climate",
      specification: "+15°C to +35°C with climate control"
    },
    {
      element: "Humidity",
      specification: "20% to 80% relative humidity"
    },
    {
      element: "Air Filtration",
      specification: "HEPA and activated carbon filtering"
    },
    {
      element: "Pressure Control",
      specification: "Positive-pressure chamber"
    }
  ];


  const emiProtection = [
    {
      title: "Faraday Cage Construction",
      text: "Continuous shielding and grounding provisions throughout the shelter."
    },
    {
      title: "Shielding Effectiveness",
      text: ">90 dB across specified communication frequency bands."
    },
    {
      title: "RF Filtering",
      text: "Multi-stage RF filters provided on external connections."
    },
    {
      title: "Shielded Cable Routing",
      text: "Segregated shielded cable trays for signal and power distribution."
    },
    {
      title: "Grounding Grid",
      text: "Low-impedance earthing system with specified resistance below 0.1 Ω."
    },
    {
      title: "Waveguide Penetrations",
      text: "RF-suppressed bulkhead connector provisions."
    },
    {
      title: "Conductive Interior",
      text: "Conductive mesh provisions for continuous electromagnetic protection."
    },
    {
      title: "Compliance",
      text: "Designed around applicable MIL-STD-461G and NATO STANAG requirements."
    }
  ];


  const powerThermal = [
    {
      title: "Primary Power",
      text: "400V 3-phase AC or 230V 1-phase supply with generator integration."
    },
    {
      title: "UPS Backup",
      text: "Battery backup provisions for critical systems with minimum 2-hour autonomy."
    },
    {
      title: "Power Conditioning",
      text: "Voltage regulation and harmonic filtering for sensitive equipment."
    },
    {
      title: "Redundant HVAC",
      text: "Redundant cooling units with automatic switchover provisions."
    },
    {
      title: "Heat Rejection",
      text: "Capacity for up to 20 kW continuous heat dissipation."
    },
    {
      title: "Thermal Monitoring",
      text: "Real-time temperature and humidity monitoring."
    },
    {
      title: "Passive Cooling",
      text: "Ventilation provisions designed to reduce energy consumption."
    },
    {
      title: "Generator Integration",
      text: "Mobile diesel genset integration for remote deployments."
    }
  ];


  const radarIntegration = [
    "RF-transparent roof panels with low-loss materials",
    "Rigid antenna mounting systems with vibration damping",
    "Rotary joint and slip-ring integration provisions",
    "Modular RF distribution for phased-array systems",
    "Dedicated RF bulkheads and duplexer integration",
    "Conductive ground-plane provisions",
    "Low-loss rigid transmission-line routing",
    "Radar alignment and performance-verification provisions"
  ];


  const communicationSupport = [
    "Satellite terminal mounting with gimbal provisions",
    "Rack-mounted RF transceivers and amplifier configurations",
    "Single-mode and multi-mode fiber-optic distribution",
    "Dedicated signal-processing area with thermal management",
    "Redundant communication paths",
    "Ethernet and legacy communication interfaces",
    "TEMPEST-oriented shielding provisions where specified",
    "VHF, UHF, SHF and microwave frequency-band support"
  ];


  const workspace = [
    {
      icon: <FaServer />,
      title: "Equipment Room",
      text: "Centralized mounting and control area for radar and communication systems."
    },
    {
      icon: <FaBroadcastTower />,
      title: "Operator Console",
      text: "Ergonomic workspace for system monitoring and control."
    },
    {
      icon: <FaBolt />,
      title: "Power Distribution",
      text: "Electrical switchgear, UPS and power-conditioning equipment."
    },
    {
      icon: <FaSnowflake />,
      title: "Thermal Management",
      text: "HVAC units with ducting and controlled air distribution."
    },
    {
      icon: <FaTools />,
      title: "Maintenance Access",
      text: "Clear service pathways and removable panels for maintenance and upgrades."
    }
  ];


  const deployment = [
    {
      title: "Rapid Setup",
      text: "Designed for operational deployment within 30–60 minutes by a trained crew."
    },
    {
      title: "Standard Transport",
      text: "Compatible with standard ISO logistics including truck and rail transport."
    },
    {
      title: "Self-Contained",
      text: "Designed to minimize ground-support and utility requirements."
    },
    {
      title: "Austere Sites",
      text: "Reduced dependence on permanent water and utility infrastructure."
    },
    {
      title: "Relocation",
      text: "Modular architecture supports rapid relocation between deployment locations."
    },
    {
      title: "Remote Monitoring",
      text: "Telemetry and remote monitoring provisions available."
    },
    {
      title: "Extended Operations",
      text: "Designed for extended continuous deployment exceeding 30 days."
    },
    {
      title: "Climate Adaptation",
      text: "Configuration options for demanding environmental conditions."
    }
  ];


  const standards = [
    {
      title: "MIL-STD-810H",
      text: "Military environmental testing and operational requirements."
    },
    {
      title: "MIL-STD-461G",
      text: "Electromagnetic emissions and susceptibility requirements."
    },
    {
      title: "NATO STANAG 4569",
      text: "Applicable protection-level requirements where specified by the configuration."
    },
    {
      title: "IEC 61000 Series",
      text: "Electromagnetic compatibility requirements."
    },
    {
      title: "TEMPEST",
      text: "Electromagnetic security requirements for applicable classified-information environments."
    },
    {
      title: "IS 1964 / IS 3970",
      text: "Indian Standards referenced for applicable container specifications."
    }
  ];


  const customization = [
    "Equipment-specific layouts for particular radar or communication systems",
    "Enhanced thermal management for high-dissipation equipment",
    "Additional security hardening and CBRN protection options",
    "Higher-capacity UPS and generator integration",
    "Custom operator console design and seating",
    "Multi-shelter networking and integration",
    "Operator manuals and system familiarization packages"
  ];


  return (
    <div className="radar-service-content">

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="radar-stats-grid">

        <div className="radar-stat-card">
          <span>01</span>
          <h2>ISO</h2>
          <p>Containerized Platform</p>
        </div>

        <div className="radar-stat-card">
          <span>02</span>
          <h2>IP65</h2>
          <p>Environmental Protection</p>
        </div>

        <div className="radar-stat-card">
          <span>03</span>
          <h2>&gt;90 dB</h2>
          <p>Shielding Effectiveness</p>
        </div>

        <div className="radar-stat-card">
          <span>04</span>
          <h2>24/7</h2>
          <p>Continuous Operation</p>
        </div>

      </section>


      {/* =====================================================
          PRODUCT OVERVIEW
      ===================================================== */}

      <section className="radar-info-box radar-overview">

        <div className="radar-section-heading">

          <span className="radar-section-tag">
            PRODUCT OVERVIEW
          </span>

          <h2>
            Radar & Communication
            <span> Shelters</span>
          </h2>

        </div>

        <div className="radar-overview-content">

          <div className="radar-overview-line"></div>

          <p>
            FINEX Radar & Communication Shelters provide mobile,
            deployable platforms for advanced surveillance, radar systems
            and secure communications infrastructure.
          </p>

          <p>
            Engineered for rapid deployment in tactical, disaster
            management and border-security applications, these shelters
            provide environmental protection, electromagnetic shielding
            and operational flexibility for critical electronic systems.
          </p>

        </div>

      </section>


      {/* =====================================================
          KEY FEATURES
      ===================================================== */}

      <section className="radar-info-box">

        <div className="radar-title-row">

          <div>
            <span className="radar-section-tag">
              ENGINEERING FEATURES
            </span>

            <h2>Key Features</h2>
          </div>

          <span className="radar-title-code">
            FINEX / RCS / 001
          </span>

        </div>


        <div className="radar-feature-grid">

          {keyFeatures.map((item, index) => (

            <div className="radar-feature-card" key={index}>

              <div className="radar-feature-number">
                0{index + 1}
              </div>

              <div className="radar-feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          PRODUCT VARIANTS
      ===================================================== */}

      <section className="radar-info-box">

        <span className="radar-section-tag">
          CONFIGURATIONS
        </span>

        <h2>Product Variants</h2>

        <div className="radar-variant-grid">

          {variants.map((item, index) => (

            <div className="radar-variant-card" key={index}>

              <div className="radar-variant-number">
                0{index + 1}
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
          TECHNICAL SPECIFICATIONS
      ===================================================== */}

      <section className="radar-info-box">

        <span className="radar-section-tag">
          ENGINEERING DATA
        </span>

        <h2>Technical Specifications</h2>

        <div className="radar-table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Parameter</th>
                <th>Specification</th>
              </tr>
            </thead>

            <tbody>

              {specifications.map((item, index) => (

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
          EMI / RFI
      ===================================================== */}

      <section className="radar-info-box radar-dark-section">

        <div className="radar-dark-heading">

          <span className="radar-section-tag">
            ELECTROMAGNETIC PROTECTION
          </span>

          <h2>
            EMI / RFI <span>Protection</span>
          </h2>

          <p>
            Advanced electromagnetic shielding architecture designed
            to support reliable operation of sensitive electronics in
            high-RF environments.
          </p>

        </div>


        <div className="radar-technical-grid">

          {emiProtection.map((item, index) => (

            <div className="radar-technical-card" key={index}>

              <span>0{index + 1}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          POWER & THERMAL
      ===================================================== */}

      <section className="radar-info-box">

        <span className="radar-section-tag">
          POWER MANAGEMENT
        </span>

        <h2>Power & Thermal Management</h2>

        <p className="radar-section-description">
          Robust power-conditioning and thermal-control provisions
          support continuous operation of mission-critical electronic
          systems.
        </p>


        <div className="radar-power-grid">

          {powerThermal.map((item, index) => (

            <div className="radar-power-card" key={index}>

              <div className="radar-power-index">
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
          RADAR SYSTEM INTEGRATION
      ===================================================== */}

      <section className="radar-info-box radar-split-section">

        <div className="radar-split-heading">

          <span className="radar-section-tag">
            SYSTEM INTEGRATION
          </span>

          <h2>Radar System Integration</h2>

          <p>
            Modular provisions support integration of radar antenna,
            RF distribution, transmission and alignment systems.
          </p>

        </div>


        <div className="radar-check-list">

          {radarIntegration.map((item, index) => (

            <div className="radar-check-item" key={index}>

              <span>✓</span>

              <p>{item}</p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          COMMUNICATION EQUIPMENT
      ===================================================== */}

      <section className="radar-info-box">

        <span className="radar-section-tag">
          COMMUNICATION SYSTEMS
        </span>

        <h2>Communication Equipment Support</h2>


        <div className="radar-communication-grid">

          {communicationSupport.map((item, index) => (

            <div className="radar-communication-card" key={index}>

              <span className="radar-communication-icon">
                <FaNetworkWired />
              </span>

              <p>{item}</p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          INTERIOR LAYOUT
      ===================================================== */}

      <section className="radar-info-box">

        <div className="radar-title-row">

          <div>

            <span className="radar-section-tag">
              INTERNAL CONFIGURATION
            </span>

            <h2>Interior Layout & Workspace</h2>

          </div>

        </div>


        <div className="radar-workspace-grid">

          {workspace.map((item, index) => (

            <div className="radar-workspace-card" key={index}>

              <div className="radar-workspace-icon">
                {item.icon}
              </div>

              <div>

                <span className="radar-workspace-number">
                  0{index + 1}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          DEPLOYMENT
      ===================================================== */}

      <section className="radar-info-box radar-deployment-section">

        <div className="radar-section-heading">

          <span className="radar-section-tag">
            FIELD CAPABILITY
          </span>

          <h2>
            Deployment <span>Capability</span>
          </h2>

        </div>


        <div className="radar-deployment-grid">

          {deployment.map((item, index) => (

            <div className="radar-deployment-card" key={index}>

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
          STANDARDS
      ===================================================== */}

      <section className="radar-info-box radar-standards-section">

        <span className="radar-section-tag">
          COMPLIANCE FRAMEWORK
        </span>

        <h2>Standards & Compliance</h2>


        <div className="radar-standards-grid">

          {standards.map((item, index) => (

            <div className="radar-standard-card" key={index}>

              <div className="radar-standard-top">

                <FaShieldAlt />

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


      {/* =====================================================
          CUSTOMIZATION
      ===================================================== */}

      <section className="radar-info-box radar-customization">

        <div className="radar-customization-heading">

          <span className="radar-section-tag">
            CONFIGURATION OPTIONS
          </span>

          <h2>Customization Options</h2>

          <p>
            FINEX shelters can be configured around equipment,
            environmental, power, operator and integration requirements.
          </p>

        </div>


        <div className="radar-customization-list">

          {customization.map((item, index) => (

            <div className="radar-custom-item" key={index}>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{item}</p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FOOTER STATEMENT
      ===================================================== */}

      <section className="radar-product-footer">

        <div>

          <span>FINEX ENGINEERING SYSTEMS</span>

          <h2>
            Mobile Infrastructure for
            <strong> Critical Electronic Systems</strong>
          </h2>

          <p>
            Modular shelter platforms engineered for protected,
            climate-controlled and rapidly deployable radar and
            communication infrastructure.
          </p>

        </div>

        <div className="radar-footer-code">
          RCS<br />
          SYSTEM<br />
          PLATFORM
        </div>

      </section>

    </div>
  );
}

export default RadarCommunicationShelters;