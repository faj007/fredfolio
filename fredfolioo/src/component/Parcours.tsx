import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Parcours() {

      useEffect(() => {
      AOS.init({
        once: true,      
        mirror: true,     
        offset: 120,     
        duration: 800 ,     
      });
    }, []);
    
  return (
    <>
     <section>
  <div className="py-20 md:py-40 px-6 w-full md:container mx-auto">

    <div data-aos="zoom-in"data-aos-duration="3000" className="text-center mb-10 md:mb-20">
      <h2 className="fff text-3xl sm:text-4xl md:text-6xl leading-tight">
        PARCOURS SCOLAIRE
      </h2>
    </div>

    <div className="relative max-w-5xl mx-auto">

      <div data-aos="fade-right" className="mb-12 flex flex-col md:flex-row items-center w-full">
        
        <div className="hidden md:block w-5/12"></div>

        <div className="z-20 flex items-center justify-center bg-white shadow-xl w-10 h-10 md:w-12 md:h-12 rounded-full">
          <span className="font-semibold text-sm md:text-lg text-neutral-950">1</span>
        </div>

        <div className="bg-transparent rounded-lg shadow-lg shadow-white w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0 md:ml-6">
          <h3 className="font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Baccalauréat
          </h3>
          <h6 className="text-sm md:text-base text-gray-300 mt-1">2022</h6>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            Collège Frelec scolaire Yopougon
          </p>
        </div>
      </div>

      <div data-aos="fade-left" className="mb-12 flex flex-col md:flex-row-reverse items-center w-full">
        
        <div className="hidden md:block w-5/12"></div>

        <div className="z-20 flex items-center justify-center bg-white shadow-xl w-10 h-10 md:w-12 md:h-12 rounded-full">
          <span className="font-semibold text-sm md:text-lg text-neutral-950">2</span>
        </div>

        <div className="bg-transparent rounded-lg shadow-lg shadow-white w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0 md:mr-6">
          <h3 className="font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Licence Informatique et Sciences du Numérique
          </h3>
          <h6 className="text-sm md:text-base text-gray-300 mt-1">2022 - 2026</h6>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            Université Virtuelle de Côte d'Ivoire
          </p>
        </div>
      </div>

      <div data-aos="fade-right" className="mb-12 flex flex-col md:flex-row items-center w-full">
        
        <div className="hidden md:block w-5/12"></div>

        <div className="z-20 flex items-center justify-center bg-white shadow-xl w-10 h-10 md:w-12 md:h-12 rounded-full">
          <span className="font-semibold text-sm md:text-lg text-neutral-950">3</span>
        </div>

        <div className="bg-transparent rounded-lg shadow-lg shadow-white w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0 md:ml-6">
          <h3 className="font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Développement Fullstack
          </h3>
          <h6 className="text-sm md:text-base text-gray-300 mt-1">
            Mai - Décembre 2025
          </h6>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            We Code / Epitech Côte d'Ivoire
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  )
  
}

export default Parcours;