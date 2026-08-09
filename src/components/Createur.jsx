import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import LeroyPhoto from "../assets/Leroy.webp";

const Createur = () => {


  return (
    <>
      <section  id="creator" className="bg-white">
        <div
          className="
      mx-auto
      max-w-[1440px]
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
        items-center
        gap-16

        lg:grid-cols-[1.1fr_.9fr]
        lg:gap-20
      "
          >
            {/* =========================
          Colonne Texte
      ========================= */}
            <div  className="creator-text flex flex-col">
              {/* Label */}
              <span
                className="
                creator-label
            text-[20px]
            font-poppins-semibold
            uppercase
            tracking-[0.12em]
            text-[#931E16]
          "
              >
                LE Promoteur
              </span>

              {/* Titre */}
              <h2
                className="
                creator-title
            mt-6
            max-w-[620px]

            text-[2rem]
            font-poppins-bold
            leading-tight
            text-[#111111]

            md:text-[2.75rem]

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
            mt-10
            max-w-[560px]

            text-[1.35rem]
            italic
            font-poppins-semibold
            leading-relaxed
            text-[#931E16]

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
            mt-10
            max-w-[580px]

            text-base
            leading-8
            text-[#444444]

            lg:text-[22px]
            lg:leading-[30px]
            font-poppins-regular
          "
              >
                Chaque jour, des millions de personnes jouent avec des cartes
                qui racontent l'histoire d'autres civilisations. AFRIA est né de
                la volonté de mettre en lumière le patrimoine béninois à travers
                un objet du quotidien. Plus qu'un jeu, c'est une manière de
                transmettre notre culture avec modernité.
              </p>

              {/* Signature */}
              <div className="mt-10">
                <h3
                  className="
                  creator-signature
              text-[24px]
              font-poppins-regular
              text-[#111111]
            "
                >
                  Leroy Ndifon
                </h3>

                <p
                  className="
              mt-1
              text-[20px]
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
            h-[350px]
            w-[280px]

            rounded-[20px]
            object-cover
            shadow-lg

            sm:h-[420px]
            sm:w-[340px]

            md:h-[470px]
            md:w-[380px]

            lg:h-[520px]
            lg:w-[420px]
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
