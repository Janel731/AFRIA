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
            px-4
            py-12

            sm:px-8
            sm:py-20

            lg:px-[120px]
            lg:py-[120px]
          "
        >
          <div
            ref={preorderBlockRef}
            className="bg-[#931e16] p-6 sm:p-10 rounded-[24px]"
          >
            <div
              className="
                grid
                items-center
                gap-10
                lg:grid-cols-[1fr_1fr]
                lg:gap-16
              "
            >
              {/* ============================
            Bloc Texte
      ============================ */}

              <div className="flex flex-col">
                {/* Titre */}

                <h2
                  className="
                    mt-2
                    sm:mt-6
                    max-w-[620px]

                    text-[28px]
                    leading-[36px]

                    sm:text-[40px]
                    sm:leading-[48px]

                    lg:text-[56px]
                    lg:leading-[64px]
                    font-poppins-bold
                    text-white
                  "
                >
                  Prêt à écrire la suite de l'histoire ?
                </h2>

                {/* Description */}

                <p
                  className="
                    mt-4
                    sm:mt-8
                    max-w-[560px]

                    text-[16px]
                    leading-[24px]

                    sm:text-[20px]
                    sm:leading-[28px]

                    lg:text-[24px]
                    lg:leading-[32px]
                    text-white/90
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
                    py-4
                    lg:py-0
                  "
                >
                  {/* Image du coffret */}
                  <img
                    src={coffret}
                    alt="Coffret AFRIA"
                    className="
                      h-auto
                      w-full
                      max-w-[340px]
                      sm:max-w-[480px]
                      lg:max-w-[620px]
                      object-contain
                      mx-auto
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
                mt-10
                sm:mt-14

                flex
                flex-col
                items-center
                gap-4
                sm:gap-6

                sm:flex-row
                sm:justify-center
              "
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.amanga.store/products/afria/"
                className="
                  h-[56px]
                  w-full
                  sm:w-[260px]

                  rounded-xl
                  bg-white

                  text-[#931e16]
                  font-poppins-semibold
                  text-[18px]

                  transition-all
                  duration-300

                  hover:opacity-90
                  flex
                  items-center
                  justify-center
                "
              >
                Commander
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href={whatsappLink}
                className="
                  h-[56px]
                  w-full
                  sm:w-[260px]

                  rounded-xl

                  border
                  border-white

                  bg-transparent

                  text-white
                  font-poppins-semibold
                  text-[18px]

                  transition-all
                  duration-300

                  hover:bg-white
                  hover:text-[#931e16]
                  flex
                  items-center
                  justify-center
                "
              >
                Soutenir AFRIA
              </a>
            </div>

            {/* ===================================
          Informations
    =================================== */}
            <div
              className="
                mt-12
                sm:mt-20

                flex
                flex-col
                items-center
                gap-4
                sm:gap-8

                md:flex-row
                md:justify-center
              "
            >

              

              {/* Livraison */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  sm:gap-4
                "
              >

                <span
                  className="
                    text-[15px]
                    sm:text-[18px]
                    font-poppins-semibold
                    text-white/90
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
