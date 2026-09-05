import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/logo finex.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [catalogueOpen, setCatalogueOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setCatalogueOpen(false);
  };

  return (
    <div>
      {/* Topbar */}
      <div className="topbar">
        <div className="left">
          <span>
            <i className="fa fa-envelope"></i> info@finexindustries.com
          </span>
          <span>
            <i className="fa fa-phone"></i> +918975789408
          </span>
        </div>
        <div className="right">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
      <div className="logo">
  <a href="/">
    <img src={logo} alt="Logo" />
  </a>
</div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/" onClick={closeMenu}>Home</a>
          </li>
          {/* <li>
            <a href="/about" onClick={closeMenu}>About Us</a>
          </li> */}
          <li className="dropdown">
  <a href="#!" onClick={(e) => e.preventDefault()}>
    About ▾
  </a>

  <div className="dropdown-card">
    <ul className="left-menu">
      <li>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
      </li>
      <li>
        <Link to="/timeline" onClick={closeMenu}>Timeline</Link>
      </li>
    </ul>
  </div>
</li>

          {/* Services */}
         
          {/* Services */}
  <li className={`mega-dropdown ${servicesOpen ? "active" : ""}`}>
  <a
    href="#!"
    onClick={(e) => {
      e.preventDefault();
      setServicesOpen(!servicesOpen);
    }}
  >
    Services ▾
  </a>



  <div className="mega-menu">

    <div className="mega-column">
      <h3> Defence Infrastructure Solutions</h3>

      <a href="/services/medical-shelters" onClick={closeMenu}>
  Medical Shelters
</a>
     <a href="/services/radar-communication-shelters" onClick={closeMenu}>
  Radar & Communication Shelters
</a>
  <a href="/services/emi-emc-shelters" onClick={closeMenu}>
  EMI/EMC Shelters
</a>
      <a href="/services/defence-fabrication-works" onClick={closeMenu}>Defence Fabrication Works</a>
     
    </div>

        <div className="mega-column">
      <h3>Ministry of Railway </h3>
<a href="/services/seat-berth" onClick={closeMenu}>
  Seat & Berth
</a>

<a href="/services/workshop-infrastructure" onClick={closeMenu}>
  Workshop Infrastructure
</a>

<a href="/services/platform-infrastructure" onClick={closeMenu}>
 Platform Infrastructure
</a>

<a href="/services/civil-works" onClick={closeMenu}>
  Civil Works
</a>

<a href="/services/eot-crane-installation" onClick={closeMenu}>
  EOT Crane Installation
</a>

<a href="/services/utility-infrastructure-development" onClick={closeMenu}>
  Utility & Infrastructure Development
</a>
     
    </div>
    
        <div className="mega-column">
      <h3>Ministry of Health Infrastructure</h3>

<a href="/services/modular-hospital" onClick={closeMenu}>
  Modular Hospitals
</a>
     <a href="/services/medical-furniture" onClick={closeMenu}>
  Medical Furniture
</a>
      <a href="/services/medical-gas-pipeline" onClick={closeMenu}>
  Oxygen Gas Pipeline Systems
</a>
   <a href="/services/modular-operation-theatre" onClick={closeMenu}>
  Operation Theatre Solutions
</a>
      <a href="/services/icu-infrastructure" onClick={closeMenu}>
  ICU Infrastructure
</a>
    <a href="/services/fire-fighting-system" onClick={closeMenu}>
  Fire Fighting System
</a>
    </div>
    
        <div className="mega-column">
      <h3>Fire Safety Solutions </h3>

      <a href="/infrastructure" onClick={closeMenu}>Fire Rated Steel Doors</a>
      <a href="/infrastructure" onClick={closeMenu}>Fire Rated Wooden Doors</a>
      <a href="/infrastructure" onClick={closeMenu}>Emergency Exit Doors</a>
      <a href="/infrastructure" onClick={closeMenu}>Fire Safety Compliance Solutions</a>
      <a href="/infrastructure" onClick={closeMenu}>Installation & Maintenance </a>
     
    </div>

 
        <div className="mega-column">
      <h3>Smart Furniture Solutions </h3>

      <a href="/services/school-furniture/" onClick={closeMenu}>Smart School Furniture</a>
      <a href="/services/school-furniture/" onClick={closeMenu}>Classroom Furniture</a>
      <a href="/infrastructure" onClick={closeMenu}>Library Furniture</a>
      <a href="/services/laboratory-furniture/" onClick={closeMenu}>Laboratory Furniture</a>
      <a href="/services/hostel-dormitory-furniture/" onClick={closeMenu}>Hostel Furniture</a>
      <a href="/services/office-furniture/" onClick={closeMenu}>Office Furniture</a>
      <a href="/services/college-university-furniture/" onClick={closeMenu}>Institutional Furniture</a>
     
    </div>

      <div className="mega-column">
      <h3>PEB & Heavy Fabrication</h3>

      <a href="/services/heavy-fabrication/" onClick={closeMenu}>Pre-Engineered Buildings(PEB)</a>
      <a href="/infrastructure" onClick={closeMenu}>Industrial Sheds</a>
      <a href="/services/modular-container-manufacturing/" onClick={closeMenu}>Warehouse Structures</a>
      <a href="/services/heavy-fabrication/" onClick={closeMenu}>Heavy Steel Fabrication</a>
      <a href="/services/heavy-fabrication/" onClick={closeMenu}>Structural Engineering</a>
      <a href="/services/heavy-fabrication/" onClick={closeMenu}>Industrial Platforms</a>
      </div>

      
      <div className="mega-column">
      <h3>Government Turnkey Projects</h3>

      <a href="/infrastructure" onClick={closeMenu}>Design & Engineering</a>
      <a href="/infrastructure" onClick={closeMenu}>Procurement</a>
      <a href="/infrastructure" onClick={closeMenu}>Civil Construction</a>
      <a href="/infrastructure" onClick={closeMenu}>Installation & Commissioning</a>
      <a href="/infrastructure" onClick={closeMenu}>Project Management</a>
      <a href="/infrastructure" onClick={closeMenu}>Annual Maintenance Contracts(AMC)</a>
      </div>

      
      <div className="mega-column">
      <h3>Industrial & Engineering Solutions</h3>

      <a href="/infrastructure" onClick={closeMenu}>Custom Fabrication</a>
      <a href="/infrastructure" onClick={closeMenu}>Material Handling Sysytems</a>
      <a href="/infrastructure" onClick={closeMenu}>Industrial Equipment Supply</a>
      <a href="/infrastructure" onClick={closeMenu}>Engineering Consultancy</a>
      <a href="/infrastructure" onClick={closeMenu}>Site Execution Services</a>
    
      </div>


    {/* <div className="mega-column">
      <h3> Construction</h3>
   <a href="/infrastructure" onClick={closeMenu}>Infrastucture</a>
    
    </div> */}

    {/* <div className="mega-column">
      <h3> Sheet Metal & Fabrication</h3>

      <a href="/services/heavy-fabrication/" onClick={closeMenu}>Heavy Fabrication</a>
      <a href="/services/precision-sheet-metal" onClick={closeMenu}>Precision Sheet Metal</a>
      <a href="/services/modular-container-manufacturing/" onClick={closeMenu}>Modular Container Manufacturing</a>
      <a href="/services/machining-cnc-manufacturing/" onClick={closeMenu}>Machining & CNC Manufacturing</a>
      <a href="/services/surface-treatment-finishing/" onClick={closeMenu}>Surface Treatment & Finishing</a>
      <a href="/services/defence-manufacturing/" onClick={closeMenu}>Defence Manufacturing</a>
      <a href="/services/engineering-design/" onClick={closeMenu}>Engineering & Design</a>
      <a href="/services/industrial-products/" onClick={closeMenu}>Industrial Products</a>
      <a href="/services/quality-testing/" onClick={closeMenu}>Quality & Testing</a>
    </div> */}
{/* 
    <div className="mega-column">
      <h3>Furniture</h3>
        <a href="/services/school-furniture/" onClick={closeMenu}>School Furniture</a>
        <a href="/services/college-university-furniture/" onClick={closeMenu}>College & University Furniture</a>
        <a href="/services/office-furniture/" onClick={closeMenu}>Office Furniture</a>
        <a href="/services/laboratory-furniture/" onClick={closeMenu}>Laboratory Furniture</a>
        <a href="/services/hostel-dormitory-furniture/" onClick={closeMenu}>Hostel & Dormitory Furniture</a>
        <a href="/services/custom-institutional-furniture/" onClick={closeMenu}>Custom Institutional Furniture</a>
        <a href="/services/industrial-training-institute-furniture/" onClick={closeMenu}>Industrial Training Institute Furniture</a>
    </div> */}
{/* 
    <div className="mega-column">
      <h3> Shelters & Cabins</h3>

      <a href="/services/portable-office-cabins/" onClick={closeMenu}>Portable Office Cabins</a>
      <a href="/services/security-cabins/" onClick={closeMenu}>Security Cabins</a>
      <a href="/services/accommodation-cabin/" onClick={closeMenu}>Accommodation Cabins</a>
      <a href="/services/toilet-sanitation-cabins/" onClick={closeMenu}>Toilet & Sanitation Cabins</a>
      <a href="/services/control-room-shelters/" onClick={closeMenu}>Control Room Shelters</a>
      <a href="/services/defence-special-shelter/" onClick={closeMenu}>Defence Shelters</a>
      <a href="/services/custom-containerized-solution/" onClick={closeMenu}>Custom Container Solutions</a>
    </div> */}

  </div>
</li>

           <li className="dropdown">
            {/* <a
              href="/project"
              onClick={(e) => {
                e.preventDefault();
                setServicesOpen(!servicesOpen);
              }}
            >
            Projects 
            </a> */}
            <Link to="/projects">Projects</Link>

             {/* {servicesOpen && (
              <div className="dropdown-card">
                <ul className="left-menu">
                  <li className="has-submenu">
                    <a href="#!" className="submenu-toggle">
                        Shelters & Cabins <span className="arrow">›</span>
                    </a> */}

                    {/* <ul className="right-menu">
                      <li><a href="/services/heavy-fabrication/" onClick={closeMenu}>Heavy Fabrication</a></li>
                      <li><a href="/services/precision-sheet-metal" onClick={closeMenu}>Precision Sheet Metal</a></li>
                      <li><a href="/services/modular-container-manufacturing/" onClick={closeMenu}>Modular Container Manufacturing</a></li>
                      <li><a href="/services/machining-cnc-manufacturing/" onClick={closeMenu}>Machining & CNC Manufacturing</a></li>
                      <li><a href="/services/surface-treatment-finishing/" onClick={closeMenu}>Surface Treatment & Finishing</a></li>
                      <li><a href="/services/defence-manufacturing/" onClick={closeMenu}>Defence Manufacturing</a></li>
                      <li><a href="/services/engineering-design/" onClick={closeMenu}>Engineering & Design</a></li>
                      <li><a href="/services/industrial-products/" onClick={closeMenu}>Industrial Products</a></li>
                      <li><a href="/services/quality-testing/" onClick={closeMenu}>Quality & Testing</a></li>
                    </ul> */}
                  {/* </li> */}

                  {/* <li className="has-submenu">
                    <a href="#!" className="submenu-toggle">
                      Institutional Furniture <span className="arrow">›</span>
                    </a>

                    <ul className="right-menu">
                      <li><a href="/services/school-furniture/" onClick={closeMenu}>School Furniture</a></li>
                      <li><a href="/services/college-university-furniture/" onClick={closeMenu}>College & University Furniture</a></li>
                      <li><a href="/services/office-furniture/" onClick={closeMenu}>Office Furniture</a></li>
                      <li><a href="/services/laboratory-furniture/" onClick={closeMenu}>Laboratory Furniture</a></li>
                      <li><a href="/services/hostel-dormitory-furniture/" onClick={closeMenu}>Hostel & Dormitory Furniture</a></li>
                      <li><a href="/services/custom-institutional-furniture/" onClick={closeMenu}>Custom Institutional Furniture</a></li>
                      <li><a href="/services/industrial-training-institute-furniture/" onClick={closeMenu}>Industrial Training Institute Furniture</a></li>
                    </ul>
                  </li>

                  <li className="has-submenu">
                    <a href="#!" className="submenu-toggle">
                      Shelters & Cabins <span className="arrow">›</span>
                    </a>

                    <ul className="right-menu">
                      <li><a href="/services/portable-office-cabins/" onClick={closeMenu}>Portable Office Cabins</a></li>
                      <li><a href="/services/security-cabins/" onClick={closeMenu}>Security Cabins</a></li>
                      <li><a href="/services/accommodation-cabin/" onClick={closeMenu}>Accommodation Cabins</a></li>
                      <li><a href="/services/toilet-sanitation-cabins/" onClick={closeMenu}>Toilet & Sanitation Cabins</a></li>
                      <li><a href="/services/control-room-shelters/" onClick={closeMenu}>Control Room Shelters</a></li>
                      <li><a href="/services/defence-special-shelter/" onClick={closeMenu}>Defence Shelters</a></li>
                      <li><a href="/services/custom-containerized-solution/" onClick={closeMenu}>Custom Container Solutions</a></li>
                    </ul>
                  </li> */}
                {/* </ul>
              </div>
            )} */}
          </li> 

          {/* Catalogue */}
<li className={`dropdown mega-dropdown ${catalogueOpen ? "active" : ""}`}>
  <a
    href="#!"
    onClick={(e) => {
      e.preventDefault();
      setCatalogueOpen(!catalogueOpen);
    }}
  >
    Catalogue ▾
  </a>

 

 <div className={`mega-menu catalogue-mega ${catalogueOpen ? "open" : ""}`}>

    <div className="mega-column">
      <h3> <a
            href="https://drive.google.com/file/d/1OWuKyYiP3rGF_jcOu8ewSh3j5f2Tq2EB/view?usp=sharing"
            onClick={closeMenu}
          >
            Finex Catalogue <span className="arrow"></span>
          </a></h3>
           <a href="https://drive.google.com/file/d/1ABVXMQsgCNsEwrZeEySKS1ZXaQ7qPpRh/view?usp=sharing" onClick={closeMenu}>Office Table </a>
          <a href="https://drive.google.com/file/d/1HWNUPJPurdyg-oXgCOGaZilglDRhkzlO/view?usp=sharing" onClick={closeMenu}>Cubicles & Workstations</a>
          <a href="https://drive.google.com/file/d/1Dx2Xuw3SLgxeKAkLXrwhTk-vyJFPECex/view?usp=sharing" onClick={closeMenu}>Conference / Board Room Furniture </a>
          <a href="https://drive.google.com/file/d/1C7l4UIJ6-6CmW2yWPw6iQZGISuoesFJi/view?usp=sharing" onClick={closeMenu}>Reception table </a>
          <a href="https://drive.google.com/file/d/12zj-SOQlwRJGG6gCGBermKqfTXfnsWHb/view?usp=sharing" onClick={closeMenu}>Steel   Furniture  </a>
          <a href="https://drive.google.com/file/d/11CsCoBAAY9eFvPTyUCEGnBG0VSvW8t_L/view?usp=sharing" onClick={closeMenu}>Chairs & Public Seating   </a>
          <a href="https://drive.google.com/file/d/1lSZKx-irwp6dpdrIW96_qRQSJemO_OY0/view?usp=sharing" onClick={closeMenu}>School Furniture   </a>
          <a href="https://drive.google.com/file/d/1C00_c3XiP2ykbL4WTd_p0tudXDYStadi/view?usp=sharing" onClick={closeMenu}>Library Furniture   </a>
          <a href="https://drive.google.com/file/d/1Dly0fSbWRSfrXM33_xwOy6DVvJDfDgvO/view?usp=sharing" onClick={closeMenu}>Hostel & Canteen Furniture </a>
          <a href="https://drive.google.com/file/d/1tqlFtqds-PIWnoZbabulfVlgkMmlYlS9/view?usp=sharing" onClick={closeMenu}>Lab Furniture      </a>
          <a href="https://drive.google.com/file/d/1ROrUxpdMmFmhBnXM47H8_YqIl5IxzKD9/view?usp=sharing" onClick={closeMenu}>Home Furniture   </a>
          <a href="https://drive.google.com/file/d/1bSMKBCpra7qi6aAjkE6cZpM7RtL4scbR/view?usp=sharing" onClick={closeMenu}>Modular Kitchen & Pantry Unit </a>
          <a href="https://drive.google.com/file/d/1AxFFAijgj3pomz9pp5eAOY6DEs4fEk1X/view?usp=sharing" onClick={closeMenu}>Industrial Furniture </a>
    </div>

    <div className="mega-column">
      <h3> <a
            href="https://drive.google.com/file/d/169T4up2tNHRny0yiVpFg5dHwFulNkgRu/view"
            onClick={closeMenu}
          >
            Kindergarten Collection <span className="arrow"></span>
          </a></h3>
            <a href="https://drive.google.com/file/d/1fq9KrAWg8ZtsllHowioofI4pbczTLJql/view?usp=sharing" onClick={closeMenu}>Student Chairs and Soft Seatings</a>
            <a href="https://drive.google.com/file/d/1z_XdkkKJewu2KMs6-R906su_MbSAg0Pp/view?usp=sharing" onClick={closeMenu}>Students Activity Table and Desk</a>
            <a href="https://drive.google.com/file/d/1irCkfsu38Dr5ABNARQsut7OrrxOiD4za/view?usp=sharing" onClick={closeMenu}>Storage Unit and Racks</a>
            <a href="https://drive.google.com/file/d/1c6IiWOlj94G_oc0IN3REeWupa4R9DR6n/view?usp=sharing" onClick={closeMenu}>Art and Craft Activities</a>
            <a href="https://drive.google.com/file/d/1VsGcLGFNcoTzG49roTbx4CwGxpbUhHXF/view?usp=sharing" onClick={closeMenu}>Display Board</a>
            <a href="https://drive.google.com/file/d/1WcX2tTx1v83SxYgS54DOLot2oVC5lmJ6/view?usp=sharing" onClick={closeMenu}>Play Area Activities</a>
            <a href="https://drive.google.com/file/d/1HUWtUkFLIvZIGbbsrUpAZhNb-wsxBwqv/view?usp=sharing" onClick={closeMenu}>Toys Activities</a>
            <a href="https://drive.google.com/file/d/1OmhWfwlI7cE6cuoRxP8zYbBibUt3-whn/view?usp=sharing" onClick={closeMenu}>Role Play Units</a>
            <a href="https://drive.google.com/file/d/1S8izD8JQIMxjFeAEkCkoZv8_3t6MRAP1/view?usp=sharing" onClick={closeMenu}>Folding Fench</a>
            <a href="https://drive.google.com/file/d/1kX0ofTjPyb2PNBakQ5ZqDHPS21o6zTzq/view?usp=sharing" onClick={closeMenu}>Student Beds</a>
            <a href="https://drive.google.com/file/d/1YGQlutO-nqehIH_gQuzE6jellCFY0IUv/view?usp=sharing" onClick={closeMenu}>Teacher Desk and Chairs</a>
    </div>

    <div className="mega-column">
      <h3> <a
            href="https://drive.google.com/file/d/1UWHufP4TAIW2lx5ioVObJyZFUZmJ_mx6/view?usp=sharing"
            onClick={closeMenu}
          >
            Defence Catalogue <span className="arrow"></span>
          </a></h3>
      <a href="https://drive.google.com/file/d/1UWHufP4TAIW2lx5ioVObJyZFUZmJ_mx6/view?usp=sharing" onClick={closeMenu}>Defense company profile</a>
    </div>

  </div>
</li>

          {/* <li><a href="/gallery" onClick={closeMenu}>Gallery</a></li> */}
          
          <li><a href="/csr" onClick={closeMenu}>CSR Activity</a></li>
          <li><a href="/career" onClick={closeMenu}>Career</a></li>
          {/* <li><a href="/contact" onClick={closeMenu}>Contact Us</a></li> */}
        </ul>

        {/* CTA */}
        <a href="/contact/" className="quote-btn" onClick={closeMenu}>
          Connect Us<i className="fa fa-arrow-right"></i>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;