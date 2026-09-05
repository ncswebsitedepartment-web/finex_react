import "../../styles/DefenceFabricationWorks.css";

import {
  FaIndustry,
  FaCogs,
  FaTools,
  FaDraftingCompass,
  FaFire,
  FaCut,
  FaWrench,
  FaLayerGroup,
  FaCheckCircle,
  FaShieldAlt,
  FaCertificate,
  FaRulerCombined,
  FaBoxes,
  FaTruck,
  FaHardHat,
  FaFlask,
  FaTemperatureHigh,
  FaWater,
  FaRecycle,
  FaBolt,
  FaProjectDiagram,
  FaClipboardCheck,
  FaChartLine,
  FaUsersCog,
  FaArrowRight,
  FaCog,
  FaMicroscope,
  FaCube,
  FaWarehouse,
  FaTachometerAlt,
} from "react-icons/fa";

function DefenceFabricationWorks() {
  /* ==========================================================
     HERO
  ========================================================== */

  const heroStats = [
    {
      value: "50+",
      label: "Large Systems / Year",
    },
    {
      value: "5-Axis",
      label: "CNC Machining",
    },
    {
      value: "500T",
      label: "Hydraulic Press",
    },
    {
      value: "1200°C",
      label: "Thermal Treatment",
    },
  ];

  /* ==========================================================
     MANUFACTURING CAPABILITIES
  ========================================================== */

  const manufacturingCapabilities = [
    {
      icon: <FaFire />,
      title: "Structural Welding",
      text: "ASME and AWS-aligned welding capability covering MIG, TIG and submerged-arc welding for structural defence applications.",
    },
    {
      icon: <FaCogs />,
      title: "CNC Machining",
      text: "Multi-axis CNC milling and turning for precision components with dimensional tolerances down to approximately ±0.01 mm where specified.",
    },
    {
      icon: <FaCut />,
      title: "Sheet Metal Fabrication",
      text: "Laser cutting, bending, forming and assembly for precision sheet-metal structures and equipment enclosures.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Assembly Operations",
      text: "Complete sub-assembly and final assembly with controlled inspection points throughout the production lifecycle.",
    },
    {
      icon: <FaCube />,
      title: "Composite Structures",
      text: "Carbon-fibre and fiberglass composite panel fabrication, bonding and integration for lightweight systems.",
    },
    {
      icon: <FaTools />,
      title: "Material Processing",
      text: "Processing of steel, aluminium, titanium and specialty engineering alloys for demanding applications.",
    },
    {
      icon: <FaTemperatureHigh />,
      title: "Heat Treatment",
      text: "Controlled heating, annealing, stress relief and hardening processes supporting required material properties.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Plating & Finishing",
      text: "Electroplating, powder coating, paint systems and protective finishes for durability and environmental resistance.",
    },
  ];

  /* ==========================================================
     EQUIPMENT
  ========================================================== */

  const equipmentInfrastructure = [
    {
      icon: <FaCogs />,
      title: "CNC Milling Centers",
      value: "5-Axis",
      text: "5-axis simultaneous machining capability with workpiece envelope supporting large structural components.",
    },
    {
      icon: <FaTachometerAlt />,
      title: "CNC Turning Centers",
      value: "Twin-Spindle",
      text: "Twin-spindle turning systems designed for efficient production of precision cylindrical components.",
    },
    {
      icon: <FaCut />,
      title: "Industrial Lasers",
      value: "4 kW",
      text: "Industrial laser cutting capability for ferrous and non-ferrous sheet and plate materials.",
    },
    {
      icon: <FaTools />,
      title: "Hydraulic Press",
      value: "500 T",
      text: "High-capacity hydraulic forming and bending system for structural metal fabrication.",
    },
    {
      icon: <FaFire />,
      title: "Welding Stations",
      value: "12",
      text: "Automated and semi-automated welding stations with process monitoring capability.",
    },
    {
      icon: <FaFlask />,
      title: "Pressure Vessels",
      value: "ASME VIII",
      text: "Manufacturing and testing capability for applicable pressure vessels and associated assemblies.",
    },
    {
      icon: <FaMicroscope />,
      title: "Testing Equipment",
      value: "NDT",
      text: "Tensile, hardness, impact, ultrasonic and other inspection capabilities for production validation.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Metrology Laboratory",
      value: "CMM",
      text: "Coordinate Measuring Machine capability for precision dimensional verification and inspection.",
    },
    {
      icon: <FaTemperatureHigh />,
      title: "Thermal Furnaces",
      value: "1200°C",
      text: "Controlled thermal processing capability for heat treatment and material conditioning.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Surface Treatment",
      value: "Multi-Process",
      text: "Electroplating, paint booth and protective coating systems for finished components.",
    },
  ];

  /* ==========================================================
     PRODUCT PORTFOLIO
  ========================================================== */

  const productPortfolio = [
    {
      icon: <FaWarehouse />,
      title: "Container Structures",
      text: "20-foot and 40-foot ISO container structures modified for shelters, command posts, storage and specialized applications.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Structural Frames",
      text: "Welded steel frames for shelters, test facilities, equipment platforms and mounting systems.",
    },
    {
      icon: <FaTruck />,
      title: "Chassis & Vehicle Parts",
      text: "Fabricated chassis structures, vehicle components and supporting mechanical subsystems.",
    },
    {
      icon: <FaCube />,
      title: "Panel Systems",
      text: "Lightweight composite and metal panels for shelters, enclosures and modular infrastructure.",
    },
    {
      icon: <FaTools />,
      title: "Mounting Systems",
      text: "Custom brackets, racks and mounting hardware for equipment integration and field systems.",
    },
    {
      icon: <FaFlask />,
      title: "Tanks & Vessels",
      text: "Water, fuel and specialty tanks fabricated to applicable engineering and military requirements.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Doors & Access Systems",
      text: "Heavy-duty doors, ramps and access systems with appropriate structural and safety provisions.",
    },
    {
      icon: <FaIndustry />,
      title: "Support Structures",
      text: "Antenna towers, solar panel racks and structural support systems for field infrastructure.",
    },
    {
      icon: <FaBolt />,
      title: "Electrical Enclosures",
      text: "Fabricated control cabinets, equipment enclosures and distribution-panel structures.",
    },
    {
      icon: <FaBoxes />,
      title: "Interior Furnishings",
      text: "Modular seating, racks, storage systems and bunk arrangements for personnel shelters.",
    },
  ];

  /* ==========================================================
     QUALITY MANAGEMENT
  ========================================================== */

  const qualityManagement = [
    {
      icon: <FaCertificate />,
      title: "ISO 9001:2015",
      text: "Quality management framework supporting controlled production and continuous improvement.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "First-Article Inspection",
      text: "Comprehensive FAI processes for new designs and production introductions.",
    },
    {
      icon: <FaChartLine />,
      title: "Process Control",
      text: "In-process inspection, statistical process control and manufacturing traceability.",
    },
    {
      icon: <FaCertificate />,
      title: "Material Certification",
      text: "Material verification against applicable specifications with certificates of conformance.",
    },
    {
      icon: <FaMicroscope />,
      title: "Weld Testing",
      text: "Radiographic and ultrasonic inspection capability for critical weld joints.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Dimensional Verification",
      text: "CMM-based inspection of precision-critical features and assemblies.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Final Assembly Testing",
      text: "Functional, dimensional and safety verification before product release.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Documentation Package",
      text: "Certificates, test reports and inspection records maintained for applicable components.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Full Traceability",
      text: "Material and process traceability from incoming material through finished product.",
    },
    {
      icon: <FaChartLine />,
      title: "Continuous Improvement",
      text: "Regular process audits, corrective actions and supplier quality management.",
    },
  ];

  /* ==========================================================
     STANDARDS
  ========================================================== */

  const standards = [
    {
      title: "ISO 9001:2015",
      text: "Quality Management System certification.",
    },
    {
      title: "ISO 14001:2015",
      text: "Environmental Management System framework.",
    },
    {
      title: "ISO 45001:2018",
      text: "Occupational Health and Safety Management.",
    },
    {
      title: "ASME Section VIII",
      text: "Applicable pressure vessel design and fabrication requirements.",
    },
    {
      title: "AWS D1.1",
      text: "Structural welding code for applicable welded structures.",
    },
    {
      title: "MIL-STD-1916",
      text: "Inspection and quality sampling framework.",
    },
    {
      title: "ISO 4287",
      text: "Surface texture and roughness parameters.",
    },
    {
      title: "IATF 16949",
      text: "Automotive quality management where applicable.",
    },
    {
      title: "IS 2062",
      text: "Indian standard for weldable structural steel.",
    },
    {
      title: "IS 1964",
      text: "Applicable Indian container specification requirements.",
    },
  ];

  /* ==========================================================
     ADVANCED PROCESSES
  ========================================================== */

  const advancedProcesses = [
    {
      icon: <FaCut />,
      title: "Laser Cutting",
      text: "Precision edge processing with controlled heat input and high dimensional repeatability.",
    },
    {
      icon: <FaFire />,
      title: "TIG Welding",
      text: "High-quality welding for critical structures and applicable aerospace and pressure-vessel work.",
    },
    {
      icon: <FaIndustry />,
      title: "Sub-Arc Welding",
      text: "High-deposition welding process for thick structural sections and long weld joints.",
    },
    {
      icon: <FaBolt />,
      title: "Plasma Cutting",
      text: "High-speed cutting capability for carbon steel and stainless-steel structures.",
    },
    {
      icon: <FaTools />,
      title: "Hydraulic Bending",
      text: "Multi-axis bending capability for accurate forming while maintaining required material properties.",
    },
    {
      icon: <FaCog />,
      title: "Spin Forming",
      text: "Axisymmetric component fabrication with reduced seam and weld requirements.",
    },
    {
      icon: <FaCogs />,
      title: "CNC Punching",
      text: "Programmed high-speed hole and feature creation for sheet-metal components.",
    },
    {
      icon: <FaTemperatureHigh />,
      title: "Thermal Treatment",
      text: "Controlled thermal cycles for stress relief, hardening and material-property management.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Surface Finishing",
      text: "Brushing, polishing, coating and finishing processes to specified surface standards.",
    },
    {
      icon: <FaTools />,
      title: "Assembly Automation",
      text: "Automated fastening and rivet insertion capability for repeatable high-volume production.",
    },
  ];

  /* ==========================================================
     MATERIALS
  ========================================================== */

  const materials = [
    {
      icon: <FaLayerGroup />,
      title: "Mild Steel",
      grade: "IS 2062 Gr B",
      text: "General structural fabrication and defence infrastructure.",
    },
    {
      icon: <FaShieldAlt />,
      title: "HSLA Steel",
      grade: "High Strength",
      text: "Improved strength-to-weight ratio for mobile systems.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Stainless Steel",
      grade: "304 / 316",
      text: "Corrosion-resistant fabrication for demanding environments.",
    },
    {
      icon: <FaCube />,
      title: "Aluminium",
      grade: "6061 / 5083",
      text: "Lightweight structural components and portable systems.",
    },
    {
      icon: <FaCogs />,
      title: "Titanium Alloys",
      grade: "Specialized",
      text: "High-strength lightweight components for specialized applications.",
    },
    {
      icon: <FaCube />,
      title: "Composites",
      grade: "Carbon / Glass",
      text: "Carbon fibre, fiberglass and epoxy systems for weight reduction.",
    },
    {
      icon: <FaBolt />,
      title: "Specialty Alloys",
      grade: "Cu / Brass / Ni",
      text: "Specialized materials for electrical and engineering applications.",
    },
    {
      icon: <FaCertificate />,
      title: "Material Certification",
      grade: "Traceable",
      text: "Applicable materials supported by test certificates and traceability.",
    },
  ];

  /* ==========================================================
     PRODUCTION CAPACITY
  ========================================================== */

  const productionCapacity = [
    {
      value: "50+",
      label: "Large Systems / Year",
      text: "Annual production capacity for large containerized systems.",
    },
    {
      value: "200+",
      label: "Sub-Assemblies",
      text: "Annual capability for smaller fabricated and machined assemblies.",
    },
    {
      value: "15 × 4 × 3 m",
      label: "Component Envelope",
      text: "Large component fabrication capability within defined facility limits.",
    },
    {
      value: "8–12",
      label: "Major Assemblies / Week",
      text: "Target weekly throughput depending on programme complexity.",
    },
    {
      value: "4–6",
      label: "Concurrent Programs",
      text: "Flexible production planning for multiple major programmes.",
    },
    {
      value: "JIT",
      label: "Scheduled Supply",
      text: "Inventory and supply-chain planning supporting scheduled delivery.",
    },
  ];

  /* ==========================================================
     DESIGN & ENGINEERING
  ========================================================== */

  const engineeringServices = [
    {
      icon: <FaDraftingCompass />,
      title: "Concept Design",
      text: "Feasibility studies, initial concepts and engineering requirement development.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Detailed Design",
      text: "3D CAD models, manufacturing drawings and assembly documentation.",
    },
    {
      icon: <FaChartLine />,
      title: "FEA Analysis",
      text: "Structural analysis and optimization supporting design validation.",
    },
    {
      icon: <FaCogs />,
      title: "Design for Manufacturing",
      text: "Design optimization for production efficiency, repeatability and cost control.",
    },
    {
      icon: <FaFlask />,
      title: "Material Selection",
      text: "Engineering guidance for selection of appropriate materials and processes.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Tolerance Analysis",
      text: "Tolerance stack-up analysis supporting assembly and performance compliance.",
    },
    {
      icon: <FaCube />,
      title: "Prototyping",
      text: "Rapid prototyping and design validation before production release.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Technical Documentation",
      text: "Complete design, manufacturing and inspection documentation packages.",
    },
  ];

  /* ==========================================================
     TESTING
  ========================================================== */

  const testingCapabilities = [
    {
      icon: <FaChartLine />,
      title: "Tensile Testing",
      text: "Material strength verification against applicable specifications.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Hardness Testing",
      text: "Verification of material hardness and heat-treatment outcomes.",
    },
    {
      icon: <FaFlask />,
      title: "Impact Testing",
      text: "Charpy impact testing for fracture-toughness assessment where required.",
    },
    {
      icon: <FaMicroscope />,
      title: "Ultrasonic Inspection",
      text: "Internal flaw detection in welds and applicable bulk materials.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Radiographic Testing",
      text: "X-ray inspection of critical welds and joints where specified.",
    },
    {
      icon: <FaWater />,
      title: "Pressure Testing",
      text: "Hydrostatic and pneumatic testing of applicable vessels and systems.",
    },
    {
      icon: <FaTachometerAlt />,
      title: "Vibration Testing",
      text: "Shock and vibration evaluation against applicable military test requirements.",
    },
    {
      icon: <FaRecycle />,
      title: "Environmental Testing",
      text: "Salt-spray, corrosion and environmental resistance verification.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Dimensional Verification",
      text: "Complete product dimensional inspection against engineering drawings.",
    },
    {
      icon: <FaTools />,
      title: "Load Testing",
      text: "Static and dynamic load verification of structural assemblies.",
    },
  ];

  /* ==========================================================
     PROJECT MANAGEMENT
  ========================================================== */

  const projectManagement = [
    {
      icon: <FaUsersCog />,
      title: "Dedicated Project Manager",
      text: "Single point of coordination throughout the programme lifecycle.",
    },
    {
      icon: <FaChartLine />,
      title: "Milestone Tracking",
      text: "Regular progress monitoring, reporting and programme reviews.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Quality Plans",
      text: "Documented inspection and test plans aligned with applicable requirements.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Schedule Management",
      text: "Detailed production schedules, Gantt planning and critical-path management.",
    },
    {
      icon: <FaTachometerAlt />,
      title: "Cost Control",
      text: "Budget monitoring, variance analysis and controlled programme execution.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Management",
      text: "Proactive identification, assessment and mitigation of project risks.",
    },
    {
      icon: <FaCogs />,
      title: "Change Management",
      text: "Formal change-control processes for engineering and production modifications.",
    },
    {
      icon: <FaTruck />,
      title: "Delivery Logistics",
      text: "Packaging, transportation and delivery coordination to the required destination.",
    },
    {
      icon: <FaTools />,
      title: "Installation Support",
      text: "Field installation and commissioning support where required.",
    },
    {
      icon: <FaHardHat />,
      title: "Training",
      text: "Operator and maintenance documentation and training support.",
    },
  ];

  /* ==========================================================
     SUSTAINABILITY
  ========================================================== */

  const sustainability = [
    {
      icon: <FaRecycle />,
      title: "Waste Management",
      text: "Metal scrap recycling and responsible handling of production waste.",
    },
    {
      icon: <FaBolt />,
      title: "Energy Efficiency",
      text: "LED lighting and optimized equipment operation to reduce energy consumption.",
    },
    {
      icon: <FaWater />,
      title: "Water Conservation",
      text: "Closed-loop cooling and controlled water-use practices where applicable.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Emissions Control",
      text: "Compliant coating systems with controlled VOC emissions.",
    },
    {
      icon: <FaCertificate />,
      title: "ISO 14001",
      text: "Environmental management practices supporting continuous improvement.",
    },
    {
      icon: <FaChartLine />,
      title: "Carbon Reduction",
      text: "Initiatives focused on reducing operational carbon footprint and improving efficiency.",
    },
  ];

  /* ==========================================================
     GALLERY
  ========================================================== */

  const gallery = [
    {
      title: "Defence Fabrication Works",
      image: "/images/welding.jpg",
    },
    {
      title: "Advanced Laser Cutting",
      image: "/images/laser-cutting.jpg",
    },
    {
      title: "Structural Assembly",
      image: "/images/assembly.jpg",
    },
    {
      title: "Surface Finishing",
      image: "/images/powder-coating.jpg",
    },
  ];

  /* ==========================================================
     RETURN
  ========================================================== */

  return (
    <div className="fabrication-page">

      {/* ======================================================
          HERO
      ====================================================== */}

      {/* <section className="fabrication-hero">

        <img
          src="/images/Welding.jpg"
          alt="FINEX Defence Fabrication Works"
        />

        <div className="fabrication-hero-overlay">

          <div className="fabrication-hero-content">

            <span className="fabrication-hero-tag">
              FINEX / DEFENCE FABRICATION WORKS
            </span>

            <h1>
              Defence
              <span> Fabrication Works</span>
            </h1>

            <p>
              Specialized manufacturing for defence systems,
              infrastructure, precision components and
              mission-critical fabricated assemblies.
            </p>

            <div className="fabrication-hero-meta">

              <span>
                PRECISION MANUFACTURING
              </span>

              <span>
                DEFENCE INFRASTRUCTURE
              </span>

              <span>
                QUALITY CONTROLLED
              </span>

            </div>

          </div>

        </div>

      </section> */}


      {/* ======================================================
          HERO STATS
      ====================================================== */}

      <section className="fabrication-stats">

        {heroStats.map((item, index) => (

          <div
            className="fabrication-stat"
            key={index}
          >

            <span>
              0{index + 1}
            </span>

            <h2>
              {item.value}
            </h2>

            <p>
              {item.label}
            </p>

          </div>

        ))}

      </section>


      {/* ======================================================
          OVERVIEW
      ====================================================== */}

      <section className="fabrication-box fabrication-overview">

        <div className="fabrication-section-heading">

          <span className="fabrication-tag">
            FACILITY OVERVIEW
          </span>

          <h2>
            Engineering &
            <span> Manufacturing Capability</span>
          </h2>

        </div>

        <div className="fabrication-overview-content">

          <div className="fabrication-overview-line"></div>

          <div>

            <p>
              FINEX Defence Fabrication Works is a state-of-the-art
              manufacturing facility specializing in the design,
              fabrication and assembly of defence systems and
              infrastructure components.
            </p>

            <p>
              Equipped with modern CNC machinery, advanced welding
              facilities, specialized testing equipment and
              controlled finishing processes, the facility supports
              precision-engineered production for demanding
              defence and industrial applications.
            </p>

          </div>

        </div>

      </section>


      {/* ======================================================
          MANUFACTURING CAPABILITIES
      ====================================================== */}

      <section className="fabrication-box">

        <div className="fabrication-title-row">

          <div>

            <span className="fabrication-tag">
              CORE CAPABILITIES
            </span>

            <h2>
              Manufacturing Capabilities
            </h2>

          </div>

          <span className="fabrication-code">
            FINEX / MFG / DEF
          </span>

        </div>

        <div className="fabrication-card-grid">

          {manufacturingCapabilities.map((item, index) => (

            <div
              className="fabrication-card"
              key={index}
            >

              <div className="fabrication-card-icon">
                {item.icon}
              </div>

              <span className="fabrication-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          EQUIPMENT
      ====================================================== */}

      <section className="fabrication-box">

        <span className="fabrication-tag">
          INDUSTRIAL INFRASTRUCTURE
        </span>

        <h2>
          Equipment & Infrastructure
        </h2>

        <p className="fabrication-description">
          Production infrastructure designed to support
          high-precision, high-volume manufacturing and
          controlled inspection.
        </p>

        <div className="fabrication-equipment-grid">

          {equipmentInfrastructure.map((item, index) => (

            <div
              className="fabrication-equipment-card"
              key={index}
            >

              <div className="fabrication-equipment-top">

                <div className="fabrication-equipment-icon">
                  {item.icon}
                </div>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              <div className="fabrication-equipment-value">
                {item.value}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          PRODUCT PORTFOLIO
      ====================================================== */}

      <section className="fabrication-box">

        <div className="fabrication-section-heading">

          <span className="fabrication-tag">
            PRODUCTS
          </span>

          <h2>
            Product <span>Portfolio</span>
          </h2>

        </div>

        <div className="fabrication-product-grid">

          {productPortfolio.map((item, index) => (

            <div
              className="fabrication-product-card"
              key={index}
            >

              <div className="fabrication-product-icon">
                {item.icon}
              </div>

              <div>

                <span className="fabrication-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          QUALITY MANAGEMENT
      ====================================================== */}

      <section className="fabrication-box fabrication-quality">

        <div className="fabrication-section-heading">

          <span className="fabrication-tag">
            QUALITY SYSTEM
          </span>

          <h2>
            Quality <span>Management System</span>
          </h2>

          <p>
            Rigorous quality controls are maintained throughout
            the manufacturing lifecycle, from incoming material
            inspection through final delivery.
          </p>

        </div>

        <div className="fabrication-quality-grid">

          {qualityManagement.map((item, index) => (

            <div
              className="fabrication-quality-card"
              key={index}
            >

              <div className="fabrication-quality-icon">
                {item.icon}
              </div>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          STANDARDS
      ====================================================== */}

      <section className="fabrication-box fabrication-standards">

        <span className="fabrication-tag">
          COMPLIANCE FRAMEWORK
        </span>

        <h2>
          Standards & Certifications
        </h2>

        <div className="fabrication-standards-grid">

          {standards.map((item, index) => (

            <div
              className="fabrication-standard-card"
              key={index}
            >

              <div className="fabrication-standard-icon">
                <FaCertificate />
              </div>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          ADVANCED MANUFACTURING
      ====================================================== */}

      <section className="fabrication-box fabrication-process-section">

        <div className="fabrication-section-heading">

          <span className="fabrication-tag">
            PROCESS TECHNOLOGY
          </span>

          <h2>
            Advanced Manufacturing
            <span> Processes</span>
          </h2>

        </div>

        <div className="fabrication-process-grid">

          {advancedProcesses.map((item, index) => (

            <div
              className="fabrication-process-card"
              key={index}
            >

              <div className="fabrication-process-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="fabrication-process-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          MATERIALS
      ====================================================== */}

      <section className="fabrication-box">

        <span className="fabrication-tag">
          MATERIAL ENGINEERING
        </span>

        <h2>
          Material Specifications
        </h2>

        <p className="fabrication-description">
          Engineering materials are selected and processed
          according to application requirements, environmental
          conditions and specified performance criteria.
        </p>

        <div className="fabrication-material-grid">

          {materials.map((item, index) => (

            <div
              className="fabrication-material-card"
              key={index}
            >

              <div className="fabrication-material-icon">
                {item.icon}
              </div>

              <span className="fabrication-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="fabrication-material-grade">
                {item.grade}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          PRODUCTION CAPACITY
      ====================================================== */}

      <section className="fabrication-box fabrication-capacity-section">

        <div className="fabrication-section-heading">

          <span className="fabrication-tag">
            PRODUCTION CAPACITY
          </span>

          <h2>
            Production <span>Capacity</span>
          </h2>

        </div>

        <div className="fabrication-capacity-grid">

          {productionCapacity.map((item, index) => (

            <div
              className="fabrication-capacity-card"
              key={index}
            >

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>
                {item.value}
              </strong>

              <h3>
                {item.label}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          DESIGN & ENGINEERING
      ====================================================== */}

      <section className="fabrication-box">

        <span className="fabrication-tag">
          ENGINEERING SERVICES
        </span>

        <h2>
          Design & Engineering Services
        </h2>

        <div className="fabrication-engineering-grid">

          {engineeringServices.map((item, index) => (

            <div
              className="fabrication-engineering-card"
              key={index}
            >

              <div className="fabrication-engineering-icon">
                {item.icon}
              </div>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          TESTING
      ====================================================== */}

      <section className="fabrication-box fabrication-testing-section">

        <div className="fabrication-section-heading">

          <span className="fabrication-tag">
            VALIDATION & INSPECTION
          </span>

          <h2>
            Quality Assurance
            <span> & Testing</span>
          </h2>

          <p>
            Comprehensive inspection and testing capabilities
            support product performance, structural integrity
            and manufacturing verification.
          </p>

        </div>

        <div className="fabrication-testing-grid">

          {testingCapabilities.map((item, index) => (

            <div
              className="fabrication-testing-card"
              key={index}
            >

              <div className="fabrication-testing-icon">
                {item.icon}
              </div>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          PROJECT MANAGEMENT
      ====================================================== */}

      <section className="fabrication-box">

        <div className="fabrication-section-heading">

          <span className="fabrication-tag">
            PROGRAMME EXECUTION
          </span>

          <h2>
            Project Management
            <span> & Delivery</span>
          </h2>

          <p>
            Structured project execution processes support
            schedule, quality, cost and delivery requirements.
          </p>

        </div>

        <div className="fabrication-project-grid">

          {projectManagement.map((item, index) => (

            <div
              className="fabrication-project-card"
              key={index}
            >

              <div className="fabrication-project-icon">
                {item.icon}
              </div>

              <div>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          SUSTAINABILITY
      ====================================================== */}

      <section className="fabrication-box fabrication-sustainability">

        <div className="fabrication-section-heading">

          <span className="fabrication-tag">
            RESPONSIBLE MANUFACTURING
          </span>

          <h2>
            Sustainability &
            <span> Environmental Responsibility</span>
          </h2>

        </div>

        <div className="fabrication-sustainability-grid">

          {sustainability.map((item, index) => (

            <div
              className="fabrication-sustainability-card"
              key={index}
            >

              <div className="fabrication-sustainability-icon">
                {item.icon}
              </div>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          GALLERY
      ====================================================== */}

      <section className="fabrication-box fabrication-gallery-section">

        <div className="fabrication-gallery-header">

          <span className="fabrication-tag">
            FACILITY & PRODUCTION
          </span>

          <h2>
            Defence Fabrication
            <span> Gallery</span>
          </h2>

          <p>
            Precision fabrication, advanced manufacturing,
            structural assembly and controlled finishing
            supporting mission-ready defence infrastructure.
          </p>

        </div>

        <div className="fabrication-gallery-grid">

          {gallery.map((item, index) => (

            <div
              className={`fabrication-gallery-card fabrication-gallery-${index + 1}`}
              key={index}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="fabrication-gallery-overlay">

                <span>
                  0{index + 1}
                </span>

                <div>

                  <small>
                    FINEX FABRICATION WORKS
                  </small>

                  <h3>
                    {item.title}
                  </h3>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          CTA / FOOTER
      ====================================================== */}

      <section className="fabrication-footer">

        <div>

          <span>
            FINEX DEFENCE FABRICATION WORKS
          </span>

          <h2>
            Precision Manufacturing
            <strong> for Mission-Critical Systems</strong>
          </h2>

          <p>
            From concept engineering and material processing
            through fabrication, assembly, inspection and
            delivery, FINEX provides integrated manufacturing
            capability for defence infrastructure and
            specialized industrial systems.
          </p>

        </div>

        <div className="fabrication-footer-code">

          DEFENCE
          <br />
          FABRICATION
          <br />
          WORKS

        </div>

      </section>

    </div>
  );
}

export default DefenceFabricationWorks;