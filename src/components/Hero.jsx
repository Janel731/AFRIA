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
    min-h-[500px]
    lg:min-h-[640px]
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
    gap-8
    lg:gap-16

    px-6
    py-10

    sm:px-10
    sm:py-14

    lg:px-16
    xl:px-20
  "
        >
          {/* =============================== */}
          {/* COLONNE GAUCHE */}
          {/* =============================== */}

          <div className="flex flex-col justify-center">
            {/* Label */}
            <div ref={labelRef} className="mb-4 sm:mb-6 hero-hidden">
              <label className="text-[14px] leading-[20px] sm:text-[16px] sm:leading-[22px] lg:text-[18px] lg:leading-[26px] tracking-[0.08em] font-poppins-semibold text-white/70">
                JEU DE CARTES AFRICAIN
              </label>
            </div>

            {/* Titre */}
            <div ref={titleRef} className="mb-6 sm:mb-8 hero-hidden">
              <h1 className="text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] lg:text-[56px] lg:leading-[64px] font-poppins-bold text-white">
                Nos symboles racontent notre histoire
              </h1>
            </div>

            {/* Sous-titre */}
            <div ref={subtitleRef} className="mb-8 max-w-[620px] hero-hidden">
              <p className="text-[16px] leading-[24px] sm:text-[20px] sm:leading-[30px] lg:text-[24px] lg:leading-[36px] text-white/88">
                AFRIA transforme un simple jeu de cartes en une véritable
                expérience culturelle béninoise.
              </p>
            </div>

            {/* Boutons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* CTA principal */}
              <a
                ref={buttonsRef}
                target="_blank"
                rel="noreferrer"
                href="https://www.amanga.store/products/afria/"
                className="w-full sm:w-[210px] h-[56px] rounded-[12px] font-poppins-semibold border-[1px] border-[#931e16] bg-white text-[#931e16] text-[18px] md:text-[20px] hover:bg-neutral-100 transition-colors duration-150 flex items-center justify-center hero-hidden"
              >
                Commander
              </a>
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
    py-4
    lg:py-0
    hero-hidden
    w-full
    max-w-[340px]
    sm:max-w-[500px]
    lg:max-w-[600px]
    xl:max-w-[700px]
    mx-auto
    h-auto
  "
          >
            <img
              src={coffret}
              alt="Coffret AFRIA"
              className="
    w-full
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
