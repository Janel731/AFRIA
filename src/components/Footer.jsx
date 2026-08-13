import AfriaLogoBlanc from "../assets/AFRIALogoBlanc.svg?react";

const Footer = () => {
    const whatsappLink = `https://wa.me/22961985587`;
  return (
    <footer className="bg-[#931E16]">
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-4
          py-12

          sm:px-8
          sm:py-16

          lg:px-[120px]
          lg:py-16
        "
      >
        <div
          className="
            grid
            gap-10

            md:grid-cols-2

            lg:grid-cols-[5fr_3fr_3fr]
            lg:gap-20
          "
        >

          {/* =========================
              Colonne 1 — AFRIA
          ========================= */}
          <div>
            {/* Logo */}
            <div className="w-[140px] sm:w-[170px] lg:w-[200px] inline-block">
              <AfriaLogoBlanc
                className="
                  afria-logo
                  w-full
                  h-auto
                "
              />
            </div>

            {/* Slogan */}
            <p
              className="
                mt-6
                max-w-[320px]

                text-[16px]
                sm:text-[18px]
                leading-[26px]
                sm:leading-[30px]
                font-poppins-semibold
                text-white/90
              "
            >
              Nos symboles racontent notre histoire.
            </p>

            {/* Copyright */}
            <p
              className="
                mt-6
                sm:mt-8

                text-[14px]
                leading-[20px]
                font-poppins-regular
                text-white/70
              "
            >
              © 2026 AFRIA. Tous droits réservés.
            </p>
          </div>


          {/* =========================
              Colonne 2 — Navigation
          ========================= */}
          <div>
            <h3
              className="
                text-[16px]
                leading-[24px]
                font-poppins-semibold
                text-white
              "
            >
              Navigation
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              <a
                href="#precommande"
                className="
                  text-[16px]
                  leading-[24px]
                  font-poppins-regular
                  text-white/80
                  transition-colors
                  hover:text-white
                "
              >
                Commande
              </a>

              <a
              target="_blank"
                href={whatsappLink}
                className="
                  text-[16px]
                  leading-[24px]
                  font-poppins-regular
                  text-white/80
                  transition-colors
                  hover:text-white
                "
              >
                Contact
              </a>
            </nav>
          </div>


          {/* =========================
              Colonne 3 — Réseaux
          ========================= */}
          <div>
            <h3
              className="
                text-[16px]
                leading-[24px]
                font-poppins-semibold
                text-white
              "
            >
              Suivez AFRIA
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <a
                target="_blank" href="https://www.facebook.com/Afriacarte"
                className="
                  text-[16px]
                  leading-[24px]
                  font-poppins-regular
                  text-white/80
                  transition-colors
                  hover:text-white
                "
              >
                Facebook
              </a>

              {/* <a
                href="#"
                className="
                  text-[16px]
                  leading-[24px]
                  font-poppins-regular
                  text-white/80
                  transition-colors
                  hover:text-white
                "
              >
                Instagram
              </a>

              <a
                href="#"
                className="
                  text-[16px]
                  leading-[24px]
                  font-poppins-regular
                  text-white/80
                  transition-colors
                  hover:text-white
                "
              >
                TikTok
              </a> */}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;