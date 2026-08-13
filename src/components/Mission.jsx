import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

import afriaFace from "../assets/griffe.webp";
import afriaBack from "../assets/DosCarte.webp";
const Mission = () => {
  const textRef = useRef(null);
  const conclusionRef = useRef(null);
  const cardRef = useRef(null);
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

    // Animation de la carte
    const cardTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        end: "bottom 30%",
        scrub: true,
        // markers: true 
      },
    });

    cardTimeline
      .to(cardRef.current, {
        rotateY: 90,
        y: -20,
        ease: "none",
      })
      .to(cardRef.current, {
        rotateY: 180,
        y: 0,
        ease: "none",
      });

    return () => {
      para.revert();
      cardTimeline.kill();
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
          px-4
          py-12
          sm:px-8
          sm:py-20
          lg:px-[120px]
          lg:py-[120px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[5fr_6fr]
            lg:gap-10
          "
        >
          {/* Bloc texte */}
          <div className="max-w-[620px]">
            {/* Label */}
            <p
              className="
                mb-4
                sm:mb-6
                text-[16px]
                sm:text-[18px]
                lg:text-[20px]
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
                text-[28px]
                leading-[36px]
                font-poppins-bold
                text-[#111111]

                sm:text-[40px]
                sm:leading-[48px]

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
                mt-6
                sm:mt-10
                max-w-[560px]
                text-[15px]
                leading-[24px]
                text-[#444444]

                sm:text-[18px]
                sm:leading-[28px]

                lg:text-[22px]
                lg:leading-[32px]
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
                mt-6
                sm:mt-10
                text-[16px]
                sm:text-[18px]
                font-semibold
                text-[#931E16]
              "
            >
              C'est de cette réflexion qu'est né AFRIA.
            </p>
          </div>

          {/* Illustration */}
          <div className="flex items-center justify-center">
            <div className="flex w-full max-w-[520px] items-center justify-center">

              {/* Conteneur de perspective */}
              <div className="perspective-[1000px]">

                <div
                  ref={cardRef}
                  className="
      relative
      h-[300px]
      w-[210px]
      sm:h-[400px]
      sm:w-[280px]
      lg:h-[480px]
      lg:w-[336px]
      [transform-style:preserve-3d]
    "
                >

                  {/* FACE */}
                  <div
                    className="
        absolute
        inset-0
        overflow-hidden
        rounded-[16px]
        border
        border-[#931E16]
        bg-white
        [backface-visibility:hidden]
      "
                  >
                    <img
                      src={afriaFace}
                      alt="Face de la carte AFRIA"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* DOS */}
                  <div
                    className="
        absolute
        inset-0
        overflow-hidden
        rounded-[16px]
        border
        border-[#931E16]
        bg-white
        [backface-visibility:hidden]
        [transform:rotateY(180deg)]
      "
                  >
                    <img
                      src={afriaBack}
                      alt="Dos de la carte AFRIA"
                      className="h-full w-full object-cover"
                    />
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
