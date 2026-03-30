import '../Competence.css';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

export default function Competence() {
  useEffect(() => {
    gsap.to("img", { opacity: 1, delay: 0.1 });

    const spacing = 0.2;
    const snap = gsap.utils.snap(spacing);
    const cards = gsap.utils.toArray<HTMLLIElement>(".cards li");
    const seamlessLoop = buildSeamlessLoop(cards, spacing);
    const visibleCards = 2; 
    const loopDuration = visibleCards * spacing;

    const scrub = gsap.to(seamlessLoop, {
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true,
    });

    const trigger = ScrollTrigger.create({
      trigger: ".competence",   
      start: "top top",          // quand le top de la section atteint le top de la fenêtre
      end: () => "+=" + (loopDuration * 1000), 
      pin: true,                 // fixe la section pendant le scroll
      pinSpacing: true,
      onUpdate(self) {
      const totalTime = self.progress * visibleCards * spacing;
      scrub.vars.totalTime = snap(totalTime);
      scrub.invalidate().restart();
}
      
    });

    // const nextBtn = document.querySelector<HTMLButtonElement>(".next");
    // const prevBtn = document.querySelector<HTMLButtonElement>(".prev");

    // const nextHandler = () => scrubTo(scrub.vars.totalTime + spacing);
    // const prevHandler = () => scrubTo(scrub.vars.totalTime - spacing);

    // nextBtn?.addEventListener("click", nextHandler);
    // prevBtn?.addEventListener("click", prevHandler);

    return () => {
      trigger.kill();
      scrub.kill();
      // nextBtn?.removeEventListener("click", nextHandler);
      // prevBtn?.removeEventListener("click", prevHandler);
    };
  }, []);

  function buildSeamlessLoop(items: HTMLLIElement[], spacing: number) {
    const overlap = Math.ceil(1 / spacing);
    const startTime = items.length * spacing + 0.5;
    const loopTime = (items.length + overlap) * spacing + 1;

    const rawSequence = gsap.timeline({ paused: true });
    const seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1,
      onRepeat() {
        if (this._time === this._dur) this._tTime += this._dur - 0.01;
      },
    });

    const l = items.length + overlap * 2;

    gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

    for (let i = 0; i < l; i++) {
      const index = i % items.length;
      const item = items[index];
      const time = i * spacing;
      rawSequence
        .fromTo(
          item,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false },
          time
        )
        .fromTo(item, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, time);

      if (i <= items.length) seamlessLoop.add("label" + i, time);
    }

    rawSequence.time(startTime);
    seamlessLoop
      .to(rawSequence, { time: loopTime, duration: loopTime - startTime, ease: "none" })
      .fromTo(rawSequence, { time: overlap * spacing + 1 }, { time: startTime, duration: startTime - (overlap * spacing + 1), immediateRender: false, ease: "none" });

    return seamlessLoop;
  }

  const words = ["UI/UX", "CODING", "GRAPHISME", "", "ANIMATION"];

   useEffect(() => {
        AOS.init({
          once: true,      
          mirror: true,     
          offset: 120,     
          duration: 800 ,     
        });
      }, []);


  return (
    <section className='competence'>
      <div data-aos="zoom-in"data-aos-duration="3000" className='comph2 text-center mb-5  md:mb-16 pt-5'>
        <h2 className=' text-4xl md:text-6xl text-[#0d0d0f] leading-10 mb-6 md:mb-10'>COMPÉTENCES</h2>
      </div>
      <div className="gallery">
        
       <ul className="cards">
    {words.slice(0, 3).map((word, i) => (
      <li key={i}>
        {/* <img src={`https://assets.codepen.io/16327/portrait-number-${i+1}.png`} alt={word} /> */}
        <div className="card-content">{word}</div>
      </li>
    ))}
  </ul>
      </div>
    </section>
  );
}