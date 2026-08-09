import { useState } from "react";
import TutorialModal from "./TutorialModal";
import AfriaLogo from "../assets/AFRIALogo.svg?react";
import piqueImg from "../assets/peak.webp";
import coeurImg from "../assets/coeur.webp";
import carreauImg from "../assets/carreau.webp";
import trefleImg from "../assets/trefle.webp";

import griffeImg from "../assets/griffe1.webp";
import serpentImg from "../assets/Serpent1.webp";
import cauriImg from "../assets/Corris1.webp";
import sagaieImg from "../assets/Sagai1.webp";
const Tutoriels = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  
const games = [
  {
    id: 1,
    title: "Sipa",
    background: "bg-white",

 rules: [
  "Se joue généralement à 2, 3 ou 4 joueurs.",
  "Chaque joueur reçoit 5 cartes.",
  "Le jeu se joue sans atout.",
  "Les joueurs doivent suivre le symbole demandé lorsqu'ils le peuvent.",
  "La carte la plus forte du symbole demandé remporte le pli.",
  "Le gagnant du pli commence le tour suivant.",
  "Le but principal est de remporter le dernier pli, souvent avec un 7 selon les variantes.",
  "Avec AFRIA, les enseignes classiques deviennent : Sagaie, Cauris, Griffe et Serpent. Les règles restent identiques.",
],

    correspondence: [
      {
        classic: piqueImg,
        afria: sagaieImg,
      },
      {
        classic: coeurImg,
        afria: cauriImg,
      },
      {
        classic: carreauImg,
        afria:  griffeImg,
      },
      {
        classic: trefleImg,
        afria:  serpentImg,
      },
    ],
  },

  {
    id: 2,
    title: "Pique",
    background: "bg-[#931E16]",

     rules: [
      "Se joue généralement à 4 joueurs en équipes de deux.",
      "Chaque joueur reçoit 13 cartes avec un jeu de 52 cartes.",
      "Chaque joueur annonce le nombre de plis qu'il pense remporter.",
      "Les joueurs doivent suivre la couleur demandée lorsqu'ils le peuvent.",
      "Le Pique est l'atout : il bat toutes les autres couleurs.",
      "Une équipe gagne des points lorsqu'elle respecte son contrat de plis annoncé.",
      "Avec AFRIA, seules les enseignes changent. Les règles restent identiques.",
    ],

     correspondence: [
      {
        classic: piqueImg,
        afria: sagaieImg,
      },
      {
        classic: coeurImg,
        afria: cauriImg,
      },
      {
        classic: carreauImg,
        afria:  griffeImg,
      },
      {
        classic: trefleImg,
        afria:  serpentImg,
      },
    ],
  },

  {
    id: 3,
    title: "Gemise",
    background: "bg-[#931E16]",

    rules: [
      "Les règles officielles seront bientôt disponibles.",
      "Avec AFRIA, seules les enseignes changent.",
    ],

    correspondence: [
      {
        classic: piqueImg,
        afria: sagaieImg,
      },
      {
        classic: coeurImg,
        afria: cauriImg,
      },
      {
        classic: carreauImg,
        afria:  griffeImg,
      },
      {
        classic: trefleImg,
        afria:  serpentImg,
      },
    ],
  },

  {
    id: 4,
    title: "Belotte",
    background: "bg-white",

   rules: [
      "Se joue à 4 joueurs répartis en deux équipes.",
      "Chaque joueur reçoit 8 cartes.",
      "Une couleur d'atout est choisie au début de la manche.",
      "Les joueurs doivent suivre la couleur demandée lorsqu'ils le peuvent.",
      "Une carte d'atout peut remporter le pli face aux autres couleurs.",
      "L'équipe qui obtient le plus de points gagne la manche.",
      "Avec AFRIA, seules les enseignes changent. Les règles restent identiques.",
    ],

     correspondence: [
      {
        classic: piqueImg,
        afria: sagaieImg,
      },
      {
        classic: coeurImg,
        afria: cauriImg,
      },
      {
        classic: carreauImg,
        afria:  griffeImg,
      },
      {
        classic: trefleImg,
        afria:  serpentImg,
      },
    ],
  },
];
  return (
    <section id="Rules" className="bg-[#DADADA]/30 ">
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
        {/* ===========================
            Header
        =========================== */}

        <div className="mx-auto max-w-[760px] text-center">
          <span
            className="
              text-[20px]
              uppercase
              tracking-[0.12em]
              text-[#931E16]
              font-poppins-semibold
            "
          >
            COMMENT JOUER ?
          </span>

          <h2
            className="
              mt-6

              text-[2rem]
              leading-tight
              font-poppins-bold
              text-[#111111]

              md:text-[2.75rem]

              lg:text-[56px]
              lg:leading-[64px]
            "
          >
            Choisissez votre jeu.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[620px]

              text-[24px]
              leading-[30px]
              text-[#444444]
              font-poppins-regular
            "
          >
            Les règles restent les mêmes. Découvrez comment jouer avec AFRIA
            selon votre jeu préféré.
          </p>
        </div>

        {/* ===========================
            Tutoriels
        =========================== */}

        <div
          className="
            mt-20

            grid
            gap-8

            md:grid-cols-2
          "
        >
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setSelectedGame(game)}
              className={`
                group
                overflow-hidden
                rounded-[20px]
                border
                border-[#EAEAEA]
                ${game.background}

                p-8
                text-left
                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-xl
              `}
            >
              {/* Eventail */}

              <div
                className="
                  flex
                  justify-center
                  items-end

                  h-[220px]
                "
              >
                {/* Placeholder éventail */}

                <div className="relative h-[180px] w-[240px]">
                  <div
                    className={`
    absolute 
    left-20 
    bottom-5 
    h-[100px] 
    w-[120px] 
    rounded-xl 
    flex 
    items-center 
    justify-center
    ${game.background === "bg-white" ? "bg-white" : "bg-white"}
  `}
                  >
                    <AfriaLogo />
                  </div>
                </div>
              </div>

              {/* Texte */}

              <div className="mt-8">
                <h3
                  className={`
                    text-[32px]
                    font-poppins-semibold

                    ${
                      game.background === "bg-white"
                        ? "text-[#111111]"
                        : "text-white"
                    }
                  `}
                >
                  {game.title}
                </h3>

                <p
                  className={`
                    mt-3
                    text-[18px]
                    font-poppins-regular
                    ${
                      game.background === "bg-white"
                        ? "text-[#666]"
                        : "text-white/80"
                    }
                  `}
                >
                  Voir le tutoriel →
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <TutorialModal
        game={selectedGame}
        isOpen={selectedGame !== null}
        onClose={() => setSelectedGame(null)}
      />
    </section>
  );
};

export default Tutoriels;
