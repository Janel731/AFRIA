import { div } from "framer-motion/client";
import { CircleCheckBig } from "lucide-react";
import { ArrowRight } from "lucide-react";
const TutorialModal = ({game,  isOpen, onClose }) => {
  if (!isOpen || !game) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60
        backdrop-blur-sm
        px-6
      "
    >
      <div
        className="
          relative
          w-full
          max-w-[1000px]
          rounded-[24px]
          bg-white
          shadow-2xl
          overflow-hidden
        "
      >
        {/* =========================
            HEADER
        ========================= */}
        <div
          className="
            flex items-center justify-between
            border-b border-neutral-200
            px-4 py-4
            sm:px-10 sm:py-6
          "
        >
          <button
            onClick={onClose}
            className="
              text-[15px]
              sm:text-[18px]
              font-poppins-medium
              text-neutral-600
              transition
              hover:text-[#931E16]
              cursor-pointer
            "
          >
            ← Retour
          </button>

          <h2
            className="
              text-[22px]
              sm:text-[32px]
              lg:text-[40px]
              font-poppins-bold
              text-[#111111]
            "
          >
            {game?.title}
          </h2>

          <button
            onClick={onClose}
            className="
              text-2xl
              sm:text-3xl
              text-neutral-500
              transition
              hover:text-[#931E16]
              cursor-pointer
            "
          >
            ×
          </button>
        </div>

        {/* =========================
            CONTENU
        ========================= */}
        <div
          className="
            max-h-[80vh]
            overflow-y-auto
            px-4
            py-6
            sm:px-10
            sm:py-10
            lg:px-14
            lg:py-12
          "
        >
          {/* Sous titre */}
          <div className="text-center">
            <h3
              className="
                text-[20px]
                sm:text-[28px]
                font-poppins-semibold
                text-[#111111]
              "
            >
              Les règles restent identiques.
            </h3>

            <p
              className="
                mt-2
                sm:mt-4
                text-[15px]
                sm:text-[20px]
                text-[#444444]
              "
            >
              Seules les enseignes changent.
            </p>
          </div>

          {/* =========================
              Correspondance
          ========================= */}
          <div className="mt-8 sm:mt-16">
            <h4
              className="
                text-[18px]
                sm:text-[24px]
                font-poppins-semibold
                text-[#111111]
              "
            >
              Correspondance des enseignes
            </h4>

            <div className="mt-6 sm:mt-10 space-y-3 sm:space-y-5">
              {game?.correspondence.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    bg-[#F8F8F8]
                    px-4
                    py-3
                    sm:px-5
                    sm:py-4
                  "
                >
                  {/* Enseigne classique */}
                  <img
                    src={item.classic}
                    alt="Enseigne classique"
                    className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
                  />

                  {/* Flèche */}
                  <ArrowRight
                    className="
                      h-5
                      w-5
                      sm:h-6
                      sm:w-6
                      text-[#931E16]
                    "
                  />

                  {/* Symbole AFRIA */}
                  <img
                    src={item.afria}
                    alt={item.name}
                    className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              REGLES
          ========================= */}
          <div className="mt-8 sm:mt-16">
            <h4
              className="
                text-[18px]
                sm:text-[24px]
                font-poppins-semibold
                text-[#111111]
              "
            >
              Règles
            </h4>

            <div className="mt-6 sm:mt-10 space-y-3 sm:space-y-5">
              {game?.rules.map((rule, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-3
                    sm:gap-4

                    rounded-2xl
                    border
                    border-[#EAEAEA]
                    bg-[#F8F8F8]

                    p-4
                    sm:p-5
                  "
                >
                  <CircleCheckBig
                    className="
                      mt-1
                      h-5
                      w-5
                      sm:h-6
                      sm:w-6
                      shrink-0
                      text-[#931E16]
                    "
                  />

                  <p
                    className="
                      text-[14px]
                      leading-[22px]
                      sm:text-[18px]
                      sm:leading-[30px]
                      text-[#444444]
                      font-poppins-regular
                    "
                  >
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              FOOTER
          ========================= */}
          <div className="mt-10 sm:mt-20 flex justify-center">
            <button
              onClick={onClose}
              className="
                rounded-full
                bg-[#931E16]
                px-6
                py-3
                sm:px-8
                sm:py-4
                text-[16px]
                sm:text-[18px]
                font-poppins-semibold
                text-white
                transition
                hover:opacity-90
                cursor-pointer
              "
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;