import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

import grif from "../assets/grif.webp";
const Mission = () => {
  const textRef = useRef(null);
  const conclusionRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(".reveal-text", {
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
        trigger: ".reveal-text",
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

  useEffect(() => {
      const ctx = gsap.context(() => {
      gsap.from(conclusionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",

        scrollTrigger: {
          trigger: conclusionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Mission" className="bg-white">
      <div
        className="
          mx-auto
          max-w-[1440px]
          min-h-[900px]
          px-6
          py-20
          sm:px-10
          lg:px-[120px]
          lg:py-[120px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-[5fr_6fr]
            lg:gap-10
          "
        >
          {/* Bloc texte */}
          <div className="max-w-[620px]">
            {/* Label */}
            <p
              className="
                mb-6
                text-[20px]
                font-poppins-semibold
                uppercase
                tracking-[0.12em]
                text-[#931E16]
              "
            >
              Notre mission
            </p>

            {/* Titre */}
            <h2
              className="
               reveal-text
                max-w-[620px]
                lg:w-[620px]
                text-[36px]
                font-poppins-bold
                leading-[1.15]
                text-[#111111]

                sm:text-[44px]

                lg:text-[56px]
                lg:leading-[64px]
              "
            >
              Pourquoi continuer à raconter l'histoire des autres, alors que
              nous avons la nôtre ?
            </h2>

            {/* Texte */}
            <p
              ref={textRef}
              className="
                mt-10
                max-w-[560px]
                text-[18px]
                leading-8
                text-[#444444]

                lg:text-[24px]
                font-poppins-regular
              "
            >
              Chaque jour, des millions de personnes jouent avec un jeu de
              cartes dont les symboles racontent l'histoire d'autres
              civilisations. Pourtant, le Bénin possède un patrimoine
              historique, culturel et royal d'une richesse exceptionnelle,
              rarement représenté dans les objets du quotidien.
            </p>

            {/* Conclusion */}
            <p
              ref={conclusionRef}
              className="
                mt-10
                text-[18px]
                font-semibold
                text-[#931E16]
              "
            >
              C'est de cette réflexion qu'est né AFRIA.
            </p>
          </div>

          {/* Illustration */}
          <div
            className="
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                flex
                w-full
                max-w-[520px]
                items-center
                justify-between
                gap-6
              "
            >
              {/* Carte AFRIA */}
              <div
                className="
    flex
    h-[320px]
    w-full
    items-center
    justify-center

    sm:h-[400px]

    lg:h-[500px]
    lg:w-[500px]

    border-[1px]
    border-[#931E16]
    rounded-[12px]
  "
              >
                <img
                  src={grif}
                  alt="jeu de cartes AFRIA"
                  className="
      h-full
      w-full
      object-cover
    "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
