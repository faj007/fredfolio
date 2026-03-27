import '../Creation.css'
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  subtitle?: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "YOWL",
    subtitle:
      "Création d'une plateforme de récupération de posts sur internet et les commenter sans restriction.",
    images: [
      "/projet/Freedom/Freedom5.jpeg",
      "/projet/Freedom/Freedom2.png",
      "/projet/Freedom/Freedom1.png",
      "/projet/Freedom/Freedom4.png",
    ],
  },
  {
    title: "ROTTEN TOMATOES",
    subtitle: "Plateforme de streaming de films et séries.",
    images: ["/projet/RT/rt2.png", "/projet/RT/rt1.jpeg"],
  },
  {
    title: "YÊRÊ",
    subtitle: "THÈME: L'ÉDUCATION NUMÉRIQUE DANS LES LANGUES LOCALES IVOIRIENNES(HACKATHON - FINALISTE)",
    images: [
      "/projet/Yêrê/yere1.jpeg",
      "/projet/Yêrê/yere4.png",
      "/projet/Yêrê/yere5.png",
      "/projet/Yêrê/yere6.png",
      "/projet/Yêrê/yere7.png",
      "/projet/Yêrê/yere8.png",
    ],
  },
];

const Projet: React.FC = () => {
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slides = slidesRef.current?.querySelectorAll(".slide");
    if (!slides) return;

    slides.forEach((slide) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        slide,
        { autoAlpha: 0, scale: 1.2 },
        { autoAlpha: 1, scale: 1, ease: "power3.out" }
      ).to(slide, {
        autoAlpha: 0,
        scale: 0.8,
        ease: "power3.in",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

    useEffect(() => {
        AOS.init({
          once: true,      
          mirror: true,     
          offset: 120,      
          duration: 800 ,    
        });
      }, []);

  return (
  <section className="bg-[#0d0d0f] relative overflow-hidden">

  <div data-aos="zoom-in" className="w-full text-center text-white py-6 md:py-10">
    <h2 className="fff text-4xl md:text-6xl mb-2">
      PROJETS SCOLAIRE
    </h2>

    <p className="text-gold text-[10px] md:text-sm uppercase tracking-[0.2em]">
      NB: Les projets n'ont pas été mis en production pour des raisons
      d'authentification entre mon compte github et l'accès au à l'organisation créer par l'école via mon compte outlook. <br />Merci pour votre compréhesion.
    </p>
  </div>

  <div ref={slidesRef}>
    {projects.map((project, idx) => (
      <div
        key={idx}
        className="slide h-screen flex flex-col items-center justify-center px-6"
      >
        <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl">

          <h3 className="text-3xl sm:text-4xl md:text-6xl text-white mb-4">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="text-gold text-sm md:text-base mb-8">
              {project.subtitle}
            </p>
          )}

          {/* IMAGES */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 place-items-center">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px] overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={img}
                  alt={`${project.title} ${i}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default Projet;