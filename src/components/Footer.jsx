import AfriaLogo from "../assets/AFRIALogo.svg?react";

const Footer = () => {
    const whatsappLink = `https://wa.me/22961985587`;
  return (
    <footer className="bg-[#931E16]">
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-6
          py-16

          sm:px-10

          lg:px-[120px]
          lg:py-16
        "
      >
        <div
          className="
            grid
            gap-12

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
            <div className="w-[120px]
                     sm:w-[170px]
                     lg:w-[240px] bg-white ">
               <AfriaLogo
                              className="
                              afria-logo
                  
                  "
                            />
            </div>

            {/* Slogan */}
            <p
              className="
                mt-6
                max-w-[320px]

                text-[18px]
                leading-[30px]
                font-poppins-semibold
                text-white/85
              "
            >
              Nos symboles racontent notre histoire.
            </p>

            {/* Copyright */}
            <p
              className="
                mt-8

                text-[14px]
                leading-[20px]
                font-poppins-regular
                text-white/60
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
                Précommande
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