import React, { useEffect, useState, useRef } from "react";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaBullseye } from "react-icons/fa";

// Images
import slide1 from "../assets/images/bgvideo.mp4";
import slide2 from "../assets/images/bgvideo.mp4";
import slide3 from "../assets/images/bgvideo.mp4";
import slide4 from "../assets/images/bgvideo.mp4";
import image2 from "../assets/images/image2.jpeg";
import homeimg from "../assets/images/logo.jpeg";
import office from "../assets/images/office.jpg";
import commercial from "../assets/images/contactbg.jpg";
import homeFurniture from "../assets/images/homefurniture.jpg";
import customized from "../assets/images/Customizedfurniture.jpg";
import conference from "../assets/images/conference1.jpg";

import client1 from "../assets/images/logo1.png";
import client2 from "../assets/images/logo2.jpg";
import client3 from "../assets/images/logo3.jpeg";
import client4 from "../assets/images/logo4.gif";
import client5 from "../assets/images/logo5.png";
import client6 from "../assets/images/logo6.webp";
import client7 from "../assets/images/logo7.jpeg";
import client8 from "../assets/images/logo8.png";
import client9 from "../assets/images/logo9.jpg";
import client10 from "../assets/images/logo10.png";
import client11 from "../assets/images/logo11.png";
import client12 from "../assets/images/logo12.jpg";
import client13 from "../assets/images/logo13.jpg";
import Career from './Career';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const clientTrackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const testimonialRef = useRef(null);
  const slides = [slide1, slide2, slide3, slide4];
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  const services = [
    { img: "/images/defence1.jpg", title: "Defence Infrastructure Solutions", link: "/infrastructure" },
    { img: "/images/railway.jpg", title: "Ministry of Railway", link: "/services/seat-berth" },
    { img: "/images/hospital.jpg", title: "Healthcare Infrastructure", link: "/infrastructure" },
    { img: "/images/firesafety.jpg", title: "Fire Safety Solutions", link: "/infrastructure/" },
    { img: "/images/furniture.jpg", title: "Smart Furniture Solutions", link: "/services/school-furniture/" },
    { img: "/images/pebfabrication.jpg", title: "PEB & Heavy Fabrication", link: "/services/heavy-fabrication/" },
    { img: "/images/trunkey.jpg", title: "Government Turnkey Projects", link: "/infrastructure/" },
    { img: "/images/industrial.jpg", title: "Industrial & Engineering Solutions", link: "/infrastructure/" }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStartCount(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!startCount) return;
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 20);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) { setCount(target); clearInterval(timer); }
        else setCount(Math.floor(start));
      }, 20);
      return () => clearInterval(timer);
    }, [startCount, target]);
    return <h2>{count}+</h2>;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (clientTrackRef.current) {
      clientTrackRef.current.style.animationPlayState = paused ? "paused" : "running";
    }
  }, [paused]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialRef.current) {
        testimonialRef.current.scrollLeft += 1;
        if (testimonialRef.current.scrollLeft >= testimonialRef.current.scrollWidth - testimonialRef.current.clientWidth) {
          testimonialRef.current.scrollLeft = 0;
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* HERO */}
      <section className="hero-slider">
        {slides.map((video, i) => (
          <div key={i} className={`slide ${i === currentSlide ? "active" : ""}`}>
            <video className="slide-video" src={video} autoPlay muted loop playsInline />
            <div className="slide-content">
              {i === 0 && (
                <>
                  <h1>Big Projects. Honest Work. Built to Last.</h1>
                  <p>For over 15 years, we’ve been turning ideas into real, lasting spaces — across fabrication, furniture, and construction. From a single desk to a full turnkey project, we treat every job like it’s our own.</p>
                  <div className="hero-buttons">
                    <a href="/contact" className="hero-btn secondary-btn">Get a Quote</a>
                    <a href="/services/school-furniture/" className="hero-btn ">Furniture</a>
                  </div>
                </>
              )}
              {i === 1 && (
                <>
                  <h1>Precision Built. Site Ready. Always Reliable.</h1>
                  <p>Delivering high-quality sheet metal and heavy fabrication solutions with advanced machinery, expert craftsmanship, and strict quality standards for industrial needs.</p>
                  <a href="/contact" className="hero-btn secondary-btn">Get a Quote</a>
                  <a href="/services/heavy-fabrication/" className="hero-btn">Heavy Fabrication</a>
                </>
              )}
              {i === 2 && (
                <>
                  <h1>From Our Workshop to Your Site, Done Right.</h1>
                  <p>We build strong, weather-resistant portable cabins and shelters designed for site offices, industrial use, and long-term operational reliability in all conditions.</p>
                  <a href="/about" className="hero-btn secondary-btn">Get a Quote</a>
                  <a href="/infrastructure" className="hero-btn ">Cabins and Shelters</a>
                </>
              )}
              {i === 3 && (
                <>
                  <h1>We Don’t Just Build Spaces — We Build Trust.</h1>
                  <p>Providing scalable infrastructure development solutions with modern engineering practices focused on safety, efficiency, and long-term sustainability.</p>
                  <a href="/contact" className="hero-btn secondary-btn">Get a Quote</a>
                  <a href="/infrastructure" className="hero-btn ">Infrastructure Development</a>
                </>
              )}
            </div>
          </div>
        ))}
        <div className="slider-controls">
          <span className="prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>&#10094;</span>
          <span className="next" onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>&#10095;</span>
        </div>
      </section>

      {/* STATS — yellow theme, self-contained styles, directly under hero */}
      <section className="finex-stats-section" ref={statsRef}>
        <div className="finex-stats-grid">
          <div className="finex-stat-box"><i className="fas fa-calendar-alt"></i><h2>Since 2009</h2><p>Years of Trusted Work</p></div>
          <div className="finex-stat-box"><i className="fas fa-warehouse"></i><h2>40,000+ sq. ft.</h2><p>Across Two Plants</p></div>
          <div className="finex-stat-box"><i className="fas fa-industry"></i><h2>3 Sectors</h2><p>Fabrication, Furniture & Construction</p></div>
          <div className="finex-stat-box"><i className="fas fa-award"></i><h2>15+</h2><p>Quality & Green Certifications</p></div>
          <div className="finex-stat-box"><i className="fas fa-map-marked-alt"></i><h2>Pan India</h2><p>Projects Delivered Across India</p></div>
        </div>
      </section>

      {/* FACTORY / STORY */}
      <section className="factory-section">
        <div className="factory-container">
          <div className="factory-image" data-aos="fade-right">
            <img src={homeimg} alt="" />
          </div>
          <div className="factory-content" data-aos="fade-left">
            <span>Since 2009</span>
            <h2>FINEX Industries Private Limited</h2>
            <p>It all started back in 2009 with one simple belief — that good, honest work speaks for itself. We began as a small furniture maker in Nashik, and today Finex Industries is a name that government bodies and big corporates across India trust for fabrication, furniture, and large-scale turnkey projects. We’ve grown a lot since then, but the way we work hasn’t changed one bit.</p>
            <a href="/about" className="factory-btn" data-aos="fade-up">Read More <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>

     
      </section>
      <section className="vm-bg-section">

  <div className="vm-section mt-5">

    <div className="vm-header">
      <span className="vm-eyebrow">What Drives Us</span>
      <h2>Vision &amp; Mission</h2>
    </div>

    <div className="vm-grid">

      <div className="vm-card">
        <div className="vm-icon">
          <FaEye />
        </div>

        <h3>Our Vision</h3>

        <p>
          To be known far beyond Nashik — not just for what we build,
          but for how honestly we build it.
        </p>
      </div>


      <div className="vm-card">
        <div className="vm-icon vm-icon--gold">
          <FaBullseye />
        </div>

        <h3>Our Mission</h3>

        <p>
          To deliver work every client can rely on — done right the first
          time, from idea to handover, built responsibly.
        </p>
      </div>

    </div>

  </div>

</section>

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <div className="services-header" data-aos="fade-down">
            <div><h2>Services We Provide</h2></div>
          </div>
          <div className="services-grid" data-aos="fade-up">
            {services
              .filter((item) => activeFilter === "all" || item.category === activeFilter)
              .map((item, index) => (
                <a href={item.link} className="service-link" key={index}>
                  <div className={`cardhome ${item.category}`}>
                    <span className="cardhome-index">{String(index + 1).padStart(2, "0")}</span>
                    <img src={item.img} alt={item.title} />
                    <div className="cardhome-info">
                      <span className="cardhome-eyebrow">{item.category?.replace("-", " ")}</span>
                      <h3>{item.title}</h3>
                      <span className="cardhome-arrow" aria-hidden="true">→</span>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="client-section">
        <h2>Our Clients</h2>
        <div className="client-slider" onClick={() => setPaused(!paused)}>
          <div className="client-track" ref={clientTrackRef}>
            {[client1, client2, client3, client4, client5, client6, client7, client9, client10, client11, client12, client13,
              client1, client2, client3, client4, client5, client6, client7, client9, client10, client11, client12, client13]
              .map((img, i) => (
                <div key={i} className="client-item"><img src={img} alt="" /></div>
              ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-steps-horizontal">
        <div className="container">
          <span>Steps</span>
          <h2>How organization works</h2>
          <div className="steps-wrapper">
            <div className="step"><div className="step-number">01</div><div className="homeicon-circle"><i className="fas fa-user-tie"></i></div><h3>Meet Designer</h3><p>Meet our designer and discuss about your project.</p></div>
            <div className="step"><div className="step-number">02</div><div className="homeicon-circle"><i className="fas fa-drafting-compass"></i></div><h3>Finalized Layout</h3><p>Finalized layout with customization with our team.</p></div>
            <div className="step"><div className="step-number">03</div><div className="homeicon-circle"><i className="fas fa-tools"></i></div><h3>Work in Progress</h3><p>We’ll start the work after layout finalization.</p></div>
            <div className="step"><div className="step-number">04</div><div className="homeicon-circle"><i className="fas fa-truck"></i></div><h3>Smooth Delivery</h3><p>Product Delivery & Installation at your location.</p></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonial-header">
            <p className="subtitle">TESTIMONIALS</p>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonial-grid" ref={testimonialRef}>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="review">The product is perfect. Looks as good as the picture. All necessary accessories have been supplied.</p>
              <div className="client"><img src={commercial} alt="client" /><div><h4>Santosh D</h4><span>Ahmadnagar, Maharashtra</span></div></div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="review">Over all best buy, elegant design, doesn’t take much space in the lab, brighten up the mood while working, comfortable.</p>
              <div className="client"><img src={commercial} alt="client" /><div><h4>Equinoxs Lab</h4><span>Bangalore, India</span></div></div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="review">Quality and design are outstanding. We renovate our office from Finex. We are happy with the work. Recommended Modular Furniture</p>
              <div className="client"><img src={image2} alt="client" /><div><h4>Aditya M</h4><span>Pune, Maharashtra</span></div></div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="review">The desk looks exactly as in the picture and seems sturdy as well.</p>
              <div className="client"><img src={commercial} alt="client" /><div><h4>Robert G</h4><span>Mumbai, Maharashtra</span></div></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;