import '../App.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Experience() {

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
     <div className="relative max-w-6xl px-6 mx-auto mt-10">


  <div data-aos="zoom-in"data-aos-duration="3000" className="tech text-center mb-10 md:mb-16">
    <h2 className="text-3xl sm:text-4xl md:text-6xl text-[#0d0d0f]">
      EXPÉRIENCE
    </h2>
  </div>

  <div data-aos="fade-up"data-aos-duration="3000" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="relative">
      <div className="absolute top-1 left-1 w-full h-full bg-white rounded-lg"></div>

      <div className="relative p-5 bg-neutral-950 border-2 border-white rounded-lg">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          Maintenancier Informatique
        </h3>

        <p className="text-sm md:text-base text-gray-300 mt-1">
          CS INFORMATIQUE (Janvier - Juin 2023)
        </p>

        <div className="my-3 text-xs text-white">------------</div>

        <p className="text-sm md:text-base text-gray-200">
          • Dépannage et maintenance informatique <br />
          • Installation de caméra, répéteur wifi, logiciel
        </p>
      </div>
    </div>

    <div className="relative">
      <div className="absolute top-1 left-1 w-full h-full bg-white rounded-lg"></div>

      <div className="relative p-5 bg-neutral-950 border-2 border-white rounded-lg">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          Graphiste & Responsable Bénévole
        </h3>

        <p className="text-sm md:text-base text-gray-300 mt-1">
          225 EVENT (2023 - 2024)
        </p>

        <div className="my-3 text-xs text-white">------------</div>

        <p className="text-sm md:text-base text-gray-200">
          • Produire des visuels <br />
          • Diriger l'équipe bénévole <br />
          • Assurer le bon déroulement des événements
        </p>
      </div>
    </div>

    <div className="relative sm:col-span-2 md:col-span-1">
<div className="absolute top-1 left-1 h-full sm:h-50 bg-white rounded-lg"></div>
      <div className="relative p-5 bg-neutral-950 border-2 border-white rounded-lg">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          Membre d'un club d'anglais
        </h3>

        <p className="text-sm md:text-base text-gray-300 mt-1">
          American Space Andrew Young Center
        </p>

        <div className="my-3 text-xs text-white">------------</div>

        <p className="text-sm md:text-base text-gray-200">
          Plateau, Abidjan, Côte d'Ivoire
        </p>
      </div>
    </div>

  </div>
</div>
    </>
  );
}

export default Experience;