import "../Creation.css"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Creation() {

  const items = [
    { id: 1, image: "/creation/crea1.jpeg" },
    { id: 2, image: "/creation/crea2.jpeg" },
    { id: 3, image: "/creation/crea3.jpeg" },
    { id: 3, image: "/creation/crea4.jpeg" },
    { id: 3, image: "/creation/crea5.jpeg" },
    { id: 3, image: "/creation/crea6.jpeg" },
  ]
   useEffect(() => {
      AOS.init({
        once: true,      
        mirror: true,     
        offset: 120,     
        duration: 800 ,     
      });
    }, []);

  return (
    <div id="example">

      <section className="intro-section">
        <h1 data-aos="zoom-in"data-aos-duration="3000" className="fff text-4xl text-center md:text-6xl text-[#0d0d0f] leading-10 mb-6 md:mb-10">
          CRÉATION
        </h1>
      </section>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[300px] md:w-[350px] overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt={`creation-${item.id}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Creation