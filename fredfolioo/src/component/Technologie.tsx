import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




function Technologie() {

    useEffect(() => {
    AOS.init({
    once: false,      // rejoue l'animation
    mirror: true,     // anime aussi quand tu scroll vers le haut
    offset: 120,      // distance avant déclenchement
    duration: 800 ,     // distance avant déclenchement
  });
}, []);

  return (
    <>
    <section>
    <div 
      data-aos="zoom-in"
      className="text-center mb-5 md:mb-16">
        <h2 data-aos="fade-up"data-aos-duration="3000"
          className="tech">
           Technologies utilisées<br />
        </h2>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 px-4 justify-items-center'>
           <div  className="demo"> 
      
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer gold">
      <div className="icon-mid"><div className="icon-face">
      <img src="/competence/canva.svg" alt="" />
      </div></div>
    </div>
    <span className="label">Canva</span>
  </div>

  <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer silver">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/photoshop.svg" alt="" />
         </div></div>
    </div>
    <span className="label">Adobe Photoshop</span>
  </div>

  <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer rose">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/figma.svg" alt="" />
      </div></div>
    </div>
    <span className="label">Figma</span>
  </div>

  <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-orange">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/git.svg" alt="" />
      </div></div>
    </div>
    <span className="label">Git</span>
  </div>

  <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-orange2">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/html5.svg" alt="" />
        </div></div>
    </div>
    <span className="label">Html</span>
  </div>

  <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-magenta">
      <div className="icon-mid"><div className="icon-face">
      <img src="/competence/css3.svg" alt="" />
      </div></div>
    </div>
    <span className="label">Css</span>
  </div>

  <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-yellow">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/javascript.svg" alt="" />
      </div></div>
    </div>
    <span className="label">JavaScript</span>
  </div>

  <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-php">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/php.svg" alt="" />
                    </div></div>
    </div>
    <span className="label">Php</span>
  </div>

   <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-react">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/reactjs.svg" alt="" />
                    </div></div>
    </div>
    <span className="label">React JS</span>
  </div>

   <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-green">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/vuejs.svg" alt="" />
                    </div></div>
    </div>
    <span className="label">Vue js</span>
  </div>

   <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer silver">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/nextjs.svg" alt="" />
                    </div></div>
    </div>
    <span className="label">Next js</span>
  </div>

   <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-green">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/nodejs.svg" alt="" />
                    </div></div>
    </div>
    <span className="label">Node js</span>
  </div>

   <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-red">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/laravel.svg" alt="" />
                    </div></div>
    </div>
    <span className="label">Laravel</span>
  </div>

   <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-sql">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/mysql.svg" alt="" />
                    </div></div>
    </div>
    <span className="label">mySQL</span>
  </div>

   <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-green">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/mongodb.svg" alt="" />
                    </div></div>
    </div>
    <span className="label">Mongo db</span>
  </div>

     <div className="demo">
    <div data-aos="zoom-in"data-aos-duration="3000" className="icon-outer cyber-sql">
      <div className="icon-mid"><div className="icon-face">
        <img src="/competence/wordpress.svg" alt="" />
                    </div></div>
    </div>
    <span className="label">Wordpress</span>
  </div>
  
      </div>
 

  </section>
    </>
  )
}

export default Technologie;