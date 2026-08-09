import { use, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import coffret from "../assets/coffret.webp";

const Hero = ({ loading }) => {
  const heroRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  useGSAP(() => {
    if (loading) return;

    const tl = gsap.timeline();

    tl.to({}, { duration: 0.15 });

    tl.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    })

      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=.2",
      )

      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=.2",
      )

      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=.2",
      )

      .to(
        imageRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
        },
        "-=.3",
      );
  }, [loading]);

  return (
    <>
      <div
        ref={heroRef}
        className="
    relative
     mx-4 sm:mx-6 lg:mx-[54px]
    min-h-[600px]
    lg:h-[704px]
    overflow-hidden
    rounded-[24px]
    lg:rounded-[32px]
    bg-[#931E16]
  "
      >
        <div
          className="
    grid
    grid-cols-1
    lg:grid-cols-2
    items-center
    gap-10
    lg:gap-16

    px-6
    py-12

    sm:px-10
    sm:py-16

    lg:px-20
    xl:px-24
  "
        >
          {/* =============================== */}
          {/* COLONNE GAUCHE */}
          {/* =============================== */}

          <div className="flex flex-col justify-center">
            {/* Label */}
            <div ref={labelRef} className="mb-6 hero-hidden">
              <label className="text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] lg:text-[20px] lg:leading-[28px] tracking-[0.08em] font-poppins-semibold text-white/70">
                JEU DE CARTES AFRICAINE
              </label>
            </div>

            {/* Titre */}
            <div ref={titleRef} className="mb-8 hero-hidden">
              <h1 className=" text-[36px] leading-[44px] md:text-[48px] md:leading-[56px] lg:text-[56px] lg:leading-[64px] font-poppins-bold text-white">
                Nos symboles racontent notre histoire
              </h1>
            </div>

            {/* Sous-titre */}
            <div ref={subtitleRef} className="mb-10 max-w-[620px] hero-hidden">
              <p
                className="text-[24px] leading-[34px] md:text-[28px]
md:leading-[40px]

lg:text-[32px]
lg:leading-[44px] text-white/88
"
              >
                AFRIA transforme un simple jeu de cartes en une véritable
                expérience culturelle béninoise.
              </p>
            </div>

            {/* Boutons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* CTA principal */}
              <button
                ref={buttonsRef} 
                className="w-[210px] h-[56px] rounded-[12px] font-poppins-semibold border-[1px] border-[#931e16] bg-white text-[#931e16] text-[18px]

md:text-[20px]

lg:text-[20px]
hero-hidden
"
              >
                <a target="_blank" href="https://www.amanga.store/products/afria/">Précommander</a>
              </button>
            </div>
          </div>

          {/* =============================== */}
          {/* COLONNE DROITE */}
          {/* =============================== */}

          <div
            ref={imageRef}
            className="
    relative
    flex
    items-center
    justify-center
    py-8
    lg:py-0
    hero-hidden
     w-[400px]
    sm:w-[600px]
    lg:w-[600px] 
    xl:w-[700px]
    h-auto
  "
          >
          <img
  src={coffret}
  alt="Coffret AFRIA"
  className="
    w-full
    sm:w-full
    lg:w-full
    xl:w-full
    h-auto
    object-contain
  "
/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
