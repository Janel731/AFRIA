import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import LeroyPhoto from "../assets/Leroy.webp";

const Createur = () => {


  return (
    <>
      <section id="creator" className="bg-white">
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
              items-center
              gap-10
              lg:grid-cols-[1.1fr_.9fr]
              lg:gap-20
            "
          >
            {/* =========================
          Colonne Texte
      ========================= */}
            <div className="creator-text flex flex-col">
              {/* Label */}
              <span
                className="
                  creator-label
                  text-[16px]
                  sm:text-[18px]
                  lg:text-[20px]
                  font-poppins-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#931E16]
                "
              >
                Le Promoteur
              </span>

              {/* Titre */}
              <h2
                className="
                  creator-title
                  mt-4
                  sm:mt-6
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
                Une vision née d'une question simple.
              </h2>

              {/* Citation */}
              <blockquote
                className="
                  creator-quote
                  mt-6
                  sm:mt-10
                  max-w-[560px]
                  text-[16px]
                  leading-[26px]
                  italic
                  font-poppins-semibold
                  text-[#931E16]

                  sm:text-[20px]
                  sm:leading-[32px]

                  lg:text-[28px]
                  lg:leading-[40px]
                "
              >
                « Pourquoi continuer à raconter l'histoire des autres, alors que
                nous avons la nôtre ? »
              </blockquote>

              {/* Description */}
              <p
                className="
                  creator-description
                  mt-6
                  sm:mt-10
                  max-w-[580px]
                  text-[15px]
                  leading-[24px]
                  text-[#444444]
                  font-poppins-regular

                  sm:text-[18px]
                  sm:leading-[28px]

                  lg:text-[22px]
                  lg:leading-[30px]
                "
              >
                Chaque jour, des millions de personnes jouent avec des cartes
                qui racontent l'histoire d'autres civilisations. AFRIA est né de
                la volonté de mettre en lumière le patrimoine béninois à travers
                un objet du quotidien. Plus qu'un jeu, c'est une manière de
                transmettre notre culture avec modernité.
              </p>

              {/* Signature */}
              <div className="mt-6 sm:mt-10">
                <h3
                  className="
                    creator-signature
                    text-[20px]
                    sm:text-[24px]
                    font-poppins-regular
                    text-[#111111]
                  "
                >
                  Leroy Ndifon
                </h3>

                <p
                  className="
                    mt-1
                    text-[16px]
                    sm:text-[20px]
                    text-[#8A8A8A]
                  "
                >
                  Créateur d'AFRIA
                </p>
              </div>
            </div>

            {/* =========================
          Colonne Image
      ========================= */}
            <div
              className="
                flex
                justify-center
                lg:justify-end
              "
            >
              <img
                src={LeroyPhoto}
                alt="Créateur d'AFRIA"
                className="
                  w-full
                  max-w-[280px]
                  sm:max-w-[340px]
                  md:max-w-[380px]
                  lg:max-w-[420px]
                  h-auto
                  aspect-[4/5]
                  rounded-[20px]
                  object-cover
                  shadow-lg
                  mx-auto
                  lg:mx-0
                "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Createur;
