import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Timeline.css";
import { timelineData } from "../data/timelineData";

gsap.registerPlugin(ScrollTrigger);

const UNDER_CONSTRUCTION = true;

export default function Timeline() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [activeYear, setActiveYear] = useState(
    timelineData?.[0]?.year || ""
  );

  useEffect(() => {
    if (UNDER_CONSTRUCTION) return;

    const sections = sectionsRef.current;

    const horizontalScroll = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + window.innerWidth * sections.length,
        onUpdate: (self) => {
          const index = Math.round(
            self.progress * (sections.length - 1)
          );
          setActiveYear(timelineData[index].year);
        },
      },
    });

    sections.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll(".item"),
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            containerAnimation: horizontalScroll,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const goToYear = (index) => {
    gsap.to(window, {
      scrollTo: {
        y: index * window.innerWidth,
      },
      duration: 1,
      ease: "power2.inOut",
    });
  };

  // ==========================
  // UNDER CONSTRUCTION SCREEN
  // ==========================
  if (UNDER_CONSTRUCTION) {
    return (
      <section className="under-construction">
        <div className="construction-card">
          <div className="construction-icon">🚧</div>

          <h1>Infrastructure</h1>

          <p>
            We're currently updating this section with new projects,
            achievements, and milestones.
          </p>

          <div className="construction-badge">
            Coming Soon
          </div>
        </div>
      </section>
    );
  }

  // ==========================
  // ORIGINAL TIMELINE
  // ==========================
  return (
    <div className="timeline-wrapper" ref={containerRef}>
      {/* Floating Year Navigation */}
      <div className="year-nav">
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className={`year ${
              activeYear === item.year ? "active" : ""
            }`}
            onClick={() => goToYear(index)}
          >
            {item.year}
          </div>
        ))}
      </div>

      {/* Horizontal Track */}
      <div className="track">
        {timelineData.map((item, index) => (
          <section
            key={item.year}
            className="panel"
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            <div className="bg-layer">{item.year}</div>

            <div className="content">
              <h2 className="title">{item.year}</h2>

              <div className="grid">
                {item.projects.map((p, i) => (
                  <div className="item" key={i}>
                    <img src={p.img} alt={p.name} />
                    <div className="overlay">{p.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}