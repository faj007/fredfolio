"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Profil() {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLParagraphElement>(null);

  // Texte scramble 
  useEffect(() => {
  if (!textRef.current) return;

  gsap.to(textRef.current, {
    duration: 7,
    delay: 4,
    opacity: 1,
    scrambleText: {
      text: "DEVELOPPEUR WEB JUNIOR.",
      rightToLeft: false,
      chars: "uppercase",
    },
  });
}, []);


  // Animation apparition du texte description
  useEffect(() => {
    if (!containerRef.current || !text1Ref.current) return;

    let split: SplitText | null = null;

    document.fonts.ready.then(() => {
      gsap.set(containerRef.current!, { opacity: 1 });

      split = SplitText.create(text1Ref.current!, {
        type: "words",
        aria: "hidden",
      });

      gsap.from(split.words, {
        opacity: 0,
        duration: 10,
        ease: "sine.out",
        stagger: 1,
      });
    });

    return () => {
      split?.revert();
    };
  }, []);

   useEffect(() => {
        AOS.init({
          once: true,      
          mirror: true,     
          offset: 120,      
          duration: 1200 ,    
        });
      }, [])

  return (
   <div id="profil-section" className=" overflow-x-hidden">
  <section className="sticky top-0 h-screen flex flex-col justify-center items-center px-8 text-monospace ">
    <div  ref={containerRef}
          className="text-center mb-6">

     <h1 
  ref={text1Ref} 
  className='profiltext text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
>
  BROU INAO FRED ALAN JARDEL
</h1>

<p
  ref={textRef}
  className="
    font-monospace text-white text-center 
    max-w-full mx-auto
    text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl
  "
  style={{ opacity: 0 }}
>
</p>
          
    </div>
<div data-aos="zoom-in" className="flex items-center justify-center gap-4 flex-wrap">

  <a
    href="https://github.com/faj007" data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="200"
    className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-950 shadow-md shadow-gray-200 group transition-all duration-300"
  >
    <img
      src="/contact/github-light.svg"
      alt="GitHub"
      className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
    />
  </a>

  <a
    href="mailto:fred.brou@epitech.eu" data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="400"
    className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-950 shadow-md shadow-gray-200 group transition-all duration-300"
  >
    <img
      src="/contact/outlook.svg"
      alt="Outlook"
      className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
    />
  </a>

  <a
    href="mailto:fredjardel5@gmail.com" data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="600"
    className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-950 shadow-md shadow-gray-200 group transition-all duration-300"
  >
    <img
      src="/contact/gmail.svg"
      alt="Outlook"
      className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
    />
  </a>

  <a
    href="https://wa.me/message/GZVMUL5KWYXZP1" data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="800"
    className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-950 shadow-md shadow-gray-200 group transition-all duration-300"
  >
    <img
      src="/contact/whatsapp.svg"
      alt="WhatsApp"
      className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
    />
  </a>

</div>
  </section>

</div>
  );
}