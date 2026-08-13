import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import griffe from "../assets/griffe.webp";
import serpent from "../assets/Serpent.webp";
import corris from "../assets/Corris.webp";
import sagai from "../assets/Sagai.webp";

const Signification = () => {
  const symbols = [
    {
      id: 1,
      image: griffe,
      name: "Griffe",
      value: "Puissance",
      description: (
        <>
          La Griffe représente la puissance, la résistance et le courage.
          Associée au{" "}
          <span className="font-semibold text-[#931E16]">Roi Béhanzin</span>,
          elle rend hommage à son combat face à la colonisation et à sa
          détermination à défendre son royaume.
        </>
      ),
    },
    {
      id: 2,
      image: serpent,
      name: "Serpent",
      value: "Sagesse",
      description: (
        <>
          Le Serpent symbolise la sagesse, la réflexion et la diplomatie. À
          l’image du{" "}
          <span className="font-semibold text-[#931E16]">Roi Toffa Ier</span>,
          il incarne l’intelligence stratégique, la négociation et la capacité à
          gouverner avec discernement.
        </>
      ),
    },
    {
      id: 3,
      image: corris,
      name: "Cauris",
      value: "Prospérité",
      description: (
        <>
          Le Cauri est un symbole ancestral de richesse, de prospérité et
          d’abondance. Associé à{" "}
          <span className="font-semibold text-[#931E16]">Bio Guéra</span>, il
          représente la protection du peuple, la stabilité du territoire et la
          prospérité de la communauté.
        </>
      ),
    },
    {
      id: 4,
      image: sagai,
      name: "Sagaie",
      value: "Protection",
      description: (
        <>
          La Sagaie représente le courage, la bravoure et l’esprit de défense.
          Inspirée du{" "}
          <span className="font-semibold text-[#931E16]">Roi Kaba</span>, elle
          évoque la détermination à protéger son royaume et à faire face à
          l’adversité avec honneur.
        </>
      ),
    },
  ];

  const sectionRef = useRef(null);


useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const splits = [];

    gsap.utils.toArray(".symbol-block").forEach((block, index) => {
      const card = block.querySelector(".card-image");
      const title = block.querySelector(".symbol-title");
      const description = block.querySelector(".symbol-description");

      const splitTitle = new SplitType(title, {
        types: "chars",
      });

      const splitDescription = new SplitType(description, {
        types: "chars",
      });

      splits.push(splitTitle, splitDescription);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Carte déposée
      tl.from(card, {
        y: -40,
        rotation: index % 2 === 0 ? -6 : 6,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        ease: "power3.out",
      });

      // Titre
      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          scale: 0.92,
          stagger: {
            each: 0.04,
            from: "center",
          },
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.35"
      );

      // Description
      tl.from(
        splitDescription.chars,
        {
          y: 20,
          opacity: 0,
          stagger: 0.01,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.15"
      );
    });

    // Nettoyage de SplitType
    return () => {
      splits.forEach((split) => split.revert());
    };
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} id="Signification" className="bg-white">
      {/* Header */}
      <div
        className="
          text-center
          mx-auto
          max-w-[1200px]
          px-4
          py-12
          sm:px-8
          sm:py-16
          lg:px-[120px]
          lg:py-[120px]
        "
      >
        <p
          className="
            text-[16px]
            sm:text-[18px]
            lg:text-[20px]
            font-poppins-semibold
            uppercase
            tracking-[0.12em]
            text-[#931E16]
          "
        >
          Les symboles AFRIA
        </p>

        <h2
          className="
            mt-4
            sm:mt-6
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
          Chaque symbole porte une signification.
        </h2>
      </div>

      {/* Blocs */}
      <div className="bg-[#D9D9D9]/30">
        <div
          className="
            space-y-16
            lg:space-y-[120px]
            mx-auto
            max-w-[1440px]
            px-4
            py-12
            sm:px-8
            sm:py-20
            lg:px-[120px]
          "
        >
          {symbols.map((symbol, index) => (
            <div
              key={symbol.id}
              className={`
                symbol-block
                grid
                items-center
                gap-8
                lg:grid-cols-2
                lg:gap-20
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* Image */}
              <div
                className="
                  card-image
                  flex
                  h-[240px]
                  items-center
                  justify-center
                  w-full
                  max-w-[340px]
                  mx-auto

                  sm:h-[320px]
                  sm:max-w-[400px]

                  lg:h-[420px]
                  lg:max-w-none
                "
              >
                <img
                  src={symbol.image}
                  alt={symbol.name}
                  className="
                    h-full
                    w-auto
                    object-contain
                    drop-shadow-lg
                  "
                />
              </div>

              {/* Texte */}
              <div className="max-w-[520px] mx-auto lg:mx-0 text-center lg:text-left">
                <h3
                  className="
                    symbol-title
                    text-[22px]
                    font-poppins-bold
                    leading-tight

                    sm:text-[28px]

                    lg:text-[36px]
                    lg:leading-[44px]
                  "
                >
                  <span className="text-[#111111]">{symbol.name}</span>

                  <span className="mx-2 text-[#111111]">—</span>

                  <span className="text-[#931E16]">{symbol.value}</span>
                </h3>

                <p
                  className="
                    symbol-description
                    mt-4
                    sm:mt-6
                    text-[15px]
                    leading-[24px]
                    text-[#444444]
                    font-poppins-regular

                    sm:text-[18px]
                    sm:leading-[28px]

                    lg:text-[22px]
                    lg:leading-[32px]
                  "
                >
                  {symbol.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signification;
