import { Package, Globe } from "lucide-react";
import coffret from "../assets/coffret.webp";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
const Precommande = () => {
  const sectionRef = useRef(null);
  const preorderBlockRef = useRef(null);
  const whatsappMessage = encodeURIComponent(
  "Bonjour, je souhaite soutenir AFRIA et contribuer à faire connaître ce projet culturel béninois. Pouvez-vous m’indiquer comment je peux participer ?"
);

const whatsappLink = `https://wa.me/22961985587?text=${whatsappMessage}`;
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(preorderBlockRef.current, {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.8,
        ease: "power2.inOut",

        scrollTrigger: {
          trigger: preorderBlockRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="precommande" className="bg-white" ref={sectionRef}>
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
            ref={preorderBlockRef}
            className="bg-[#931e16] p-10 rounded-[24px] "
          >
            <div
              className="
        grid
        items-center
        gap-20

        lg:grid-cols-[1fr_1fr]
        
      "
            >
              {/* ============================
            Bloc Texte
      ============================ */}

              <div className="flex flex-col">
                {/* Titre */}

                <h2
                  className="
            mt-6
            max-w-[620px]

            text-[56px]
            leading-[64px]
            font-poppins-bold
            text-white/80
          "
                >
                  Prêt à écrire la suite de l'histoire ?
                </h2>

                {/* Description */}

                <p
                  className="
            mt-8
            max-w-[560px]

            text-[24px]
            leading-[32px]
            text-white/80
            font-poppins-regular
          "
                >
                  AFRIA n'est pas seulement un jeu de cartes. C'est une manière
                  de jouer avec notre histoire, de transmettre notre culture et
                  de célébrer notre identité.
                </p>
              </div>

              {/* ============================
            Coffret
      ============================ */}

              <div className="flex justify-center lg:justify-end">
                <div
                  className="
    relative
    flex
    items-center
    justify-center
    py-8
    lg:py-0
    
  "
                >
                  {/* Image du coffret */}
                  <img
                    src={coffret}
                    alt="Coffret AFRIA"
                    className="
              h-auto
              w-[75vw]
              max-w-[620px]
              sm:w-[60vw]
              lg:w-[42vw]
              xl:w-[620px]
              object-contain
            "
                  />
                </div>
              </div>
            </div>

            {/* ===================================
            Boutons
    =================================== */}

            <div
              className="
        mt-14

        flex
        flex-col
        items-center
        gap-6

        sm:flex-row
        sm:justify-center
      "
            >
              <button
                className="
          h-[56px]
          w-[260px]

          rounded-xl
          bg-white

          text-[#931e16]
          font-poppins-semibold

          transition-all
          duration-300

          hover:opacity-90
        "
              >
                <a target="_blank" href="https://www.amanga.store/products/afria/">Précommander</a>
              </button>

              <button
                className="
          h-[56px]
          w-[260px]

          rounded-xl

          border
          border-[#931E16]

          bg-white

          text-[#931E16]
          font-poppins-semibold

          transition-all
          duration-300

          hover:bg-[#931E16]
          hover:text-white
        "
              >
                <a target="_blank" href={whatsappLink}>Soutenir AFRIA</a>
              </button>
            </div>

            {/* ===================================
          Informations
    =================================== */}
            <div
              className="
    mt-20

    flex
    flex-col
    items-center
    gap-6

    md:flex-row
    md:justify-center
  "
            >
              {/* Édition limitée */}

              <div
                className="
      flex
      items-center
      gap-4
    "
              >
                <Package size={22} strokeWidth={2} className="text-[#111111]" />

                <span
                  className="
        text-[18px]
        font-poppins-semibold
        text-white/40
      "
                >
                  Édition limitée
                </span>
              </div>

              {/* Livraison */}

              <div
                className="
      flex
      items-center
      gap-4
    "
              >
                <Globe size={22} strokeWidth={2} className="text-[#111111]" />

                <span
                  className="
        text-[18px]
        font-poppins-semibold
        text-white/40
      "
                >
                  Livraison au Bénin et à l'international
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Precommande;
