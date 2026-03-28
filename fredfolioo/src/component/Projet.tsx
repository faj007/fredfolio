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
  link?: string;
}

const projects: Project[] = [
  {
    title: "YOWL",
    subtitle:
      "Création d'une plateforme de récupération de posts sur internet et les commenter sans restriction.",
    images: [
      "/projet/Freedom/Freedom5.jpeg",
    ],
    link: "#",
  },
  {
    title: "ROTTEN TOMATOES",
    subtitle: "Plateforme de streaming de films et séries.",
    images: ["/projet/RT/rt2.png"],
    link: "https://movies-tomatoe.vercel.app/",
  },
  {
    title: "YÊRÊ",
    subtitle: "THÈME: L'ÉDUCATION NUMÉRIQUE DANS LES LANGUES LOCALES IVOIRIENNES(HACKATHON - FINALISTE)",
    images: [
      "/projet/Yêrê/yere1.jpeg",
    ],
    link: "#",
  },
];

const Projet: React.FC = () => {
 
    useEffect(() => {
        AOS.init({
          once: true,      
          mirror: true,     
          offset: 120,      
          duration: 800 ,    
        });
      }, []);

  return (
  <section className=" relative overflow-hidden">

  <div data-aos="zoom-in" className="w-full text-center text-white py-6 md:py-10">
    <h2 className="fff text-4xl md:text-6xl mb-2">
      PROJETS SCOLAIRE
    </h2>

    <p className="text-gold text-[10px] md:text-sm uppercase tracking-[0.2em]">
      NB: Les projets n'ont pas été mis en production pour des raisons
      d'authentification entre mon compte github et l'accès au à l'organisation créer par l'école via mon compte outlook. <br />Merci pour votre compréhesion.
    </p>
  </div>

      <div>
        {projects.map((project, idx) => (
          <div 
            key={idx}
            className="flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto mb-20"
          >

            <h3 className="text-3xl sm:text-4xl md:text-6xl text-white mb-4">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="text-gold text-sm md:text-base mb-8">
                {project.subtitle}
              </p>
            )}

            <div className="flex justify-center items-center w-full p-5">
              <div className="border shadow-teal-300 shadow-md max-w-xl p-2 rounded-lg">

                {project.images.map((img, i) => (
                  <div key={i} className="overflow-hidden">
                    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
    > <img 
                      src={img}
                      alt={`${project.title} ${i}`}
                      className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
                    /></a>
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