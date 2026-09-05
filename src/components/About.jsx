import React from "react";
import "../styles/About.css"; // make sure your CSS is updated for React
import contactbg from "../assets/images/contactbg.jpg";
import image2 from "../assets/images/image2.jpeg";
import conference3 from "../assets/images/conference3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../assets/images/conference2.jpg";
import img2 from "../assets/images/slideimg2.jfif";
import img3 from "../assets/images/CustomizedPortableCabins-main.jpeg";
import img4 from "../assets/images/homebg4.jfif";
import { FaEye, FaBullseye } from "react-icons/fa";

import iso9001 from "../assets/images/iso900l.png";
import iso13485 from "../assets/images/iso13485.webp";
import iso50001 from "../assets/images/iso50001.webp";
import iso14001 from "../assets/images/iso14001.png";
import iso45001 from "../assets/images/iso45001.png";
import bis17631 from "../assets/images/bislogo.png";
import bis17633 from "../assets/images/bislogo.png";
import bis17634 from "../assets/images/bislogo.png";
import aiota from "../assets/images/aiotalogo.png";
import zedBronze from "../assets/images/Bronzelogo.webp";
import zedSilver from "../assets/images/Silverlogo.webp";
import zedGold from "../assets/images/goldlogo.png";
import greenpro from "../assets/images/greenprologo.jfif";
import igbc from "../assets/images/igbclogo.png";
import griha from "../assets/images/grihalogo.png";
import fsc from "../assets/images/fsclogo.png";


const certifications = [
  { name: "ISO 9001", logo: iso9001 },
  { name: "ISO 13485", logo: iso13485 },
  { name: "ISO 50001", logo: iso50001 },
  { name: "ISO 14001", logo: iso14001 },
  { name: "ISO 45001", logo: iso45001 },
  { name: "BIS 17631", logo: bis17631 },
  { name: "BIS 17633", logo: bis17633 },
  { name: "BIS 17634", logo: bis17634 },
  { name: "AIOTA", logo: aiota },
  { name: "ZED Bronze", logo: zedBronze },
  { name: "ZED Silver", logo: zedSilver },
  { name: "ZED Gold", logo: zedGold },
  { name: "GreenPro", logo: greenpro },
  { name: "IGBC", logo: igbc },
  { name: "GRIHA Council", logo: griha },
  { name: "FSC", logo: fsc },
];

const About = () => {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
  });

  AOS.refresh(); // 🔥 important
}, []);
  return (
    <div className="about-page">
   
      {/* Hero Section */}
      <section className="about-hero">
        <div className="aboutoverlay"></div>
        <div className="hero-content">
          <h1>About Finex Industries</h1>
          <p>
            We craft high-quality modular furniture for homes, offices, and commercial spaces.
          </p>
        </div>
      </section>

      {/* About Section */}
     <section className="about-section">
  <div className="about-container">

    {/* TEXT */}
    <div className="about-text" data-aos="fade-right">
      <span className="subheading">WELCOME TO</span>

      <h2>
      Finex Industries Pvt. Ltd.
        
      </h2>

      <div className="about-line"></div>

      <p>
     Finex Industries Pvt. Ltd. is a manufacturing and solutions-driven company delivering innovative products and integrated solutions across infrastructure, defence, healthcare, railways, education, institutional furniture, heavy fabrication, and industrial sectors.
      </p>

      <p>
   With a strong focus on quality, precision, and reliability, we combine advanced manufacturing capabilities with practical engineering expertise to create solutions that meet the evolving needs of modern industries. Our commitment extends beyond manufacturing—we partner with clients to deliver value-driven solutions that support growth, efficiency, and long-term success.
      </p>

      <p>
    Supported by ISO-certified quality systems and environmental management standards, we maintain the highest levels of operational excellence while ensuring responsible and sustainable business practices. We believe that industrial progress and environmental responsibility must go hand in hand, and we continuously work towards reducing our environmental impact through efficient processes and sustainable operations.
      </p>

    
      <p>
    By embracing advanced machinery, automation, AI-enabled technologies, and continuous innovation, we enhance productivity, improve quality, and deliver future-ready solutions for critical sectors across India.
      </p>
      <p>As we continue to grow, our commitment remains unchanged—to push beyond boundaries, create lasting value, and contribute to stronger industries, better infrastructure, and a more sustainable future.</p>
    </div>

    {/* IMAGES */}
   <div className="about-images" data-aos="fade-left">
  <div className="about-grid-images">

    <img src={img1} className="img img1" alt="work 1" />
    <img src={img2} className="img img2" alt="work 2" />
    <img src={img3} className="img img3" alt="work 3" />
    <img src={img4} className="img img4" alt="work 4" />

  </div>

      <div className="about-badge-card">
        <h4>15+ Years Experience</h4>
        <p>Trusted by government & corporate clients across India</p>
      </div>
    </div>

  </div>
</section>

      {/* About Content Section */}
{/* <section className="vm-section">

  <div className="vm-container">

    <h2 className="vm-title">
      Vision & Mission
    </h2>

    <div className="vm-underline"></div>


    <div className="vm-grid">


     

      <div className="vm-card">


        <div className="vm-icon">
          <FaEye />
        </div>


        <h3>
          Our Vision
        </h3>


        <p>
          To grow into a name respected far beyond Nashik — known not just for what we build, but for how honestly we build it.
        </p>


      


      </div>




    

      <div className="vm-card">


        <div className="vm-icon">

          <FaBullseye />

        </div>


        <h3>
          Our Mission
        </h3>


        <p>
         To give every client work they can truly rely on — strong, lasting, and done right the first time.
To take big turnkey projects from idea to handover without the stress, so our clients can breathe easy.
To keep learning, keep improving, and keep believing in the people who make it all happen.
To build responsibly — caring for our community, our planet, and future generations.
        </p>


       


      </div>


    </div>

  </div>

</section> */}

      {/* Why Finex Section */}
 <section className="services-section">
  <div className="services-header1">

    <span className="services-badge">WHAT WE DO</span>

    <h2 className="services-title">Solutions under one roof</h2>

    <div className="services-underline"></div>

  </div>

  <div className="services-grid1">

    <div className="services-card">
      <span className="services-number">01</span>
      <h3 className="services-card-title">Fabrication</h3>
      <p className="services-card-text">
     Whether it’s precise sheet metal or heavy-duty fabrication, we make it right here in our own plants, on modern machines, by hands that know what they’re doing. No shortcuts — just strong, clean, accurate work you can count on.
      </p>
    </div>

    <div className="services-card">
      <span className="services-number">02</span>
      <h3 className="services-card-title">Furniture</h3>
      <p className="services-card-text">
       From offices and labs to institutions and homes, we design and build furniture that’s comfortable, smart, and made to last. Pieces that look good, feel good, and quietly do their job for years.
      </p>
    </div>

    <div className="services-card">
      <span className="services-number">03</span>
      <h3 className="services-card-title">Construction</h3>
      <p className="services-card-text">
       We take on construction and site work across India, bringing solid engineering and thoughtful design together to create spaces that actually work — and keep working long after we’ve handed them over.
      </p>
    </div>

    <div className="services-card">
      <span className="services-number">04</span>
      <h3 className="services-card-title">Turnkey Projects</h3>
      <p className="services-card-text">
        Got a large project on your hands? Leave the whole thing to us. From the first design to the final installation, we handle every step — so you have just one team to talk to, and one team to trust. For big government and corporate projects, that’s the kind of peace of mind that matters.
      </p>
    </div>

  </div>
</section>
<section className="advantage-section">
  <div className="advantage-header">
    <span className="advantage-badge">OUR ADVANTAGE</span>

    <h2 className="advantage-title">Why work with us</h2>

    <div className="advantage-underline"></div>
  </div>

  <div className="advantage-grid">
    <div className="advantage-card">We’ve been doing this since 2009 — over 15 years of real, on-the-ground experience.</div>
    <div className="advantage-card">Everything is made in our own two plants (40,000+ sq. ft.), so we’re in control of the quality from start to finish.</div>

    <div className="advantage-card">Three sectors under one roof — fabrication, furniture, and construction.</div>
    <div className="advantage-card">We handle big turnkey projects end to end, so you don’t have to chase ten different vendors.</div>

    <div className="advantage-card">Government bodies and corporates across India already trust us — and keep coming back.</div>
    <div className="advantage-card">First in Maharashtra to earn the ZED rating for furniture, backed by 15+ certifications.</div>

    <div className="advantage-card">Nearly 70% of our team are women — the heart and skill behind everything we make.</div>
    <div className="advantage-card">A 5-year warranty and a simple promise: we’re not happy until you are.</div>
  </div>
</section>
 <section class="process-steps-horizontal">
    <div class="container">
      <span>Our Process</span>

      <h2>How We Work </h2>
      <div class="steps-wrapper">

        <div class="step">
          <div class="step-number">01</div>
          <div class="homeicon-circle"><i class="fas fa-user-tie"></i></div>
          <h3>Let’s talk </h3>
          <p>tell us what you need, and we’ll sit down to understand your project.</p>
        </div>

        <div class="step">
          <div class="step-number">02</div>
          <div class="homeicon-circle"><i class="fas fa-drafting-compass"></i></div>
          <h3>We design it together </h3>
          <p>we shape and finalise the layout until it’s exactly right for you.</p>
        </div>

        <div class="step">
          <div class="step-number">03</div>
          <div class="homeicon-circle"><i class="fas fa-tools"></i></div>
          <h3>We get to work </h3>
          <p>once you’re happy with the plan, our team brings it to life.</p>
        </div>

        <div class="step">
          <div class="step-number">04</div>
          <div class="homeicon-circle"><i class="fas fa-truck"></i></div>
          <h3>We deliver and set it up </h3>
          <p>right at your location, no fuss, no loose ends.</p>
        </div>

      </div>
    </div>
  </section>
<section className="certifications-section">
  <div className="certifications-header">
    <span className="certifications-badge">
      TRUST & COMPLIANCE
    </span>

    <h2 className="certifications-title">
      Certifications & Standards
    </h2>

    <div className="certifications-underline"></div>
  </div>

  <div className="certifications-grid">
    {certifications.map((cert, index) => (
      <div key={index} className="certification-item">
        <img
          src={cert.logo}
          alt={cert.name}
          className="certification-logo"
        />
        <span>{cert.name}</span>
      </div>
    ))}
  </div>
</section>
<section className="cta-section">
  <div className="cta-overlay"></div>

  <div className="cta-container">
    <span className="cta-badge">LET’S WORK TOGETHER</span>

    <h2 className="cta-title">Let’s Build Something Great</h2>

    <p className="cta-text">
      Got a project in mind — big or small? We’d love to hear about it. 
      Let’s sit down, talk it through, and build something you’ll be proud of.
    </p>

    <div className="cta-contact">
      <p><strong>Email:</strong> info@finexindustries.com</p>
      <p><strong>Phone:</strong> +91 89757 89408</p>
      <p><strong>Address:</strong> 243/1B, Gut No. 243/1, Pimpalnare, Dindori, Nashik, Maharashtra 422202</p>
    </div>

    <div className="cta-buttons">
      <a href="/contact" className="cta-btn primary">
        Get Free Quote
      </a>
      <a href="tel:+918975789408" className="cta-btn secondary">
        Call Now
      </a>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;