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
            px-10 py-6
          "
        >
          <button
            className="
              text-[18px]
              font-poppins-medium
              text-neutral-600
              transition
              hover:text-[#931E16]
            "
          >
            ← Retour
          </button>

          <h2
            className="
              text-[40px]
              font-poppins-bold
              text-[#111111]
            "
          >
            {game?.title}
          </h2>

          <button
            onClick={onClose}
            className="
              text-3xl
              text-neutral-500
              transition
              hover:text-[#931E16]
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
            px-14
            py-12
          "
        >
          {/* Sous titre */}
          <div className="text-center">
            <h3
              className="
                text-[28px]
                font-poppins-semibold
                text-[#111111]
              "
            >
              Les règles restent identiques.
            </h3>

            <p
              className="
                mt-4
                text-[20px]
                text-[#444444]
              "
            >
              Seules les enseignes changent.
            </p>
          </div>

          {/* =========================
              Correspondance
          ========================= */}
          <div className="mt-16">
            <h4
              className="
                text-[24px]
                font-poppins-semibold
                text-[#111111]
              "
            >
              Correspondance des enseignes
            </h4>

           <div className="mt-10 space-y-5">
  {game?.correspondence.map((item, index) => (
    <div
      key={index}
      className="
        flex
        items-center
        justify-between
        rounded-xl
        bg-[#F8F8F8]
        px-5
        py-4
      "
    >
      {/* Enseigne classique */}
      <img
        src={item.classic}
        alt="Enseigne classique"
        className="h-14 w-14 object-contain"
      />

      {/* Flèche */}
    <ArrowRight
  className="
    h-6
    w-6
    text-[#931E16]
  "
/>

      {/* Symbole AFRIA */}
      <img
        src={item.afria}
        alt={item.name}
        className="h-14 w-14 object-contain"
      />
    </div>
  ))}
</div>
          </div>

          {/* =========================
              REGLES
          ========================= */}
          <div className="mt-16">
            <h4
              className="
                text-[24px]
                font-poppins-semibold
                text-[#111111]
              "
            >
              Règles
            </h4>

            <div className="mt-10 space-y-5">
  {game?.rules.map((rule, index) => (
    <div
      key={index}
      className="
        flex
        items-start
        gap-4

        rounded-2xl
        border
        border-[#EAEAEA]
        bg-[#F8F8F8]

        p-5
      "
    >
      <CircleCheckBig
        className="
          mt-1
          h-6
          w-6
          shrink-0
          text-[#931E16]
        "
      />

      <p
        className="
          text-[18px]
          leading-[30px]
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
          <div className="mt-20 flex justify-center">
            <button
              onClick={onClose}
              className="
                rounded-full
                bg-[#931E16]
                px-8
                py-4
                text-[18px]
                font-poppins-semibold
                text-white
                transition
                hover:opacity-90
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