import AfriaLogo from "../assets/AFRIALogo.svg?react";
import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import griffe from "../assets/griffe1.webp";
import serpent from "../assets/Serpent1.webp";
import Corris from "../assets/Corris1.webp";
import Sagai from "../assets/Sagai1.webp";

const Symboles = () => {

      const gridRef = useRef(null);



  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".symbol-item", {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: {
          amount: 0.6,
          from: "center",
        },
        ease: "back.out(1.7)",

        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
        },
      });


      gsap.from(".afria-logo", {
        scale: 0,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.7)",

        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
        },
      });


    }, gridRef);


    return () => ctx.revert();

  }, []);


   const textRef = useRef(null);
  
    useEffect(() => {
      const split = new SplitType(".reveal", {
        types: "words",
      });
  
      gsap.set(split.words, {
        opacity: 0.2,
      });
  
      gsap.to(split.words, {
        opacity: 1,
        stagger: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: ".reveal",
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      });
  
      const para = new SplitType(textRef.current, {
        types: "words",
      });
  
      gsap.from(para.words, {
        opacity: 0,
        y: 15,
        stagger: 0.06,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "center center",
          scrub: true,
        },
      });
  
      return () => {
        para.revert();
      };
  
      
    }, []);


  return (
    <section className="bg-white">
      <div
        className="
          mx-auto
          max-w-[1440px]
          min-h-[980px]
          px-6
          py-20
          sm:px-10
          lg:px-[120px]
          lg:py-[120px]
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
          "
        >
          {/* Label */}
          <p
            className="
              text-center
              text-[20px]
              font-poppins-semibold
              uppercase
              tracking-[0.12em]
              text-[#931E16]
            "
          >
            Les symboles AFRIA
          </p>

          {/* Composition */}
          <div
          ref={gridRef}
            className="
    relative
    mx-auto

    h-[280px] w-[280px]

    sm:h-[360px] sm:w-[360px]

    md:h-[440px] md:w-[440px]

    lg:h-[520px] lg:w-[520px]
  "
          >
            {/* Logo */}
            <div
              className="
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
  "
            >
              <AfriaLogo
                className="
                afria-logo
      h-[120px] w-[120px]
      sm:h-[170px] sm:w-[170px]
      lg:h-[240px] lg:w-[240px]
    "
              />
            </div>

            {/* Haut */}
            <img
              src={griffe}
              className="
              symbol-item
    absolute
    left-1/2
    top-0
    -translate-x-1/2

    h-14 w-14
    sm:h-20 sm:w-20
    lg:h-[120px] lg:w-[120px]
  "
            />

            {/* Bas */}
            <img
              src={serpent}
              className="
              symbol-item

absolute
    bottom-0
    left-1/2
    -translate-x-1/2
              

    

    h-14 w-14
    sm:h-20 sm:w-20
    lg:h-[120px] lg:w-[120px]
  "
            />

            {/* Gauche */}
            <img
              src={Corris}
              className="
              symbol-item
    absolute
    right-0
    top-1/2
    -translate-y-1/2

    h-14 w-14
    sm:h-20 sm:w-20
    lg:h-[120px] lg:w-[120px]
  "
            />

            {/* Gauche */}
            <img
              src={Sagai}
              className="
              symbol-item
    absolute
    left-0
    top-1/2
    -translate-y-1/2

    h-14 w-14
    sm:h-20 sm:w-20
    lg:h-[120px] lg:w-[120px]
  "
            />
          </div>

          {/* Titre */}
          <h2
            className="
            reveal
              mt-16
              max-w-[700px]
              text-center
              text-[56px]
              font-poppins-bold
              leading-tight
              text-[#111111]

              sm:text-[44px]

              lg:text-[56px]
              lg:leading-[64px]
            "
          >
            Quatre symboles. Une même histoire.
          </h2>

          {/* Sous-titre */}
          <p
          ref={textRef}
            className="

              mt-8
              max-w-[620px]
              text-center
              text-[18px]
              leading-8
              text-[#444444]
                font-poppins-regular
              lg:text-[24px]
            "
          >
            Chaque symbole incarne une valeur essentielle du patrimoine
            béninois. Ensemble, ils racontent une histoire commune.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Symboles;
