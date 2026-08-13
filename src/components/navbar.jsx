import { useRef } from "react";
import { MenuIcon } from "lucide-react";
import logo from "../assets/logo.webp";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = ({ navLogoRef }) => {
  return (
    <section className="py-4 md:py-8 px-4 sm:px-8 lg:px-[120px]">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between mb-4 md:mb-[32px]">
          <a href="#" className="flex items-center gap-2">
            <img
              ref={navLogoRef}
              src={logo}
              className="w-[120px] h-[40px] object-cover"
              alt="AFRIA Logo"
            />
          </a>
          <NavigationMenu className="hidden md:block font-poppins-semibold text-[20px]">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#Mission"
                  className={navigationMenuTriggerStyle()}
                >
                  Pourquoi AFRIA?
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#Signification"
                  className={navigationMenuTriggerStyle()}
                >
                  Symboles
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#Rules"
                  className={navigationMenuTriggerStyle()}
                >
                  Règles
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 md:flex">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.amanga.store/products/afria/"
              className="w-[210px] h-[56px] text-[20px] rounded-[12px] font-poppins-regular border-[1px] border-[#931e16] bg-white text-[#931e16] hover:bg-[#931e16] hover:text-white transition-colors duration-150 flex items-center justify-center"
            >
              Commander
            </a>
          </div>

          <Sheet>
            <SheetTrigger
              className="md:hidden p-2 rounded-md border border-neutral-200 hover:bg-neutral-100 transition-colors"
              aria-label="Ouvrir le menu"
            >
              <MenuIcon className="h-6 w-6 text-[#111111]" />
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href="#" className="flex items-center gap-2">
                    <img
                      src={logo}
                      className="w-[120px] h-[40px] object-cover"
                      alt="AFRIA navbar"
                    />
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4 font-poppins-semibold">
                <div className="flex flex-col gap-6">
                  <a href="#Mission" className="font-medium text-lg text-[#111111] hover:text-[#931e16]">
                    Pourquoi AFRIA?
                  </a>
                  <a href="#Signification" className="font-medium text-lg text-[#111111] hover:text-[#931e16]">
                    Symboles
                  </a>
                  <a href="#Rules" className="font-medium text-lg text-[#111111] hover:text-[#931e16]">
                    Règles
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.amanga.store/products/afria/"
                    className="w-[210px] h-[56px] text-[20px] rounded-[12px] font-poppins-regular border-[1px] border-[#931e16] bg-white text-[#931e16] hover:bg-[#931e16] hover:text-white transition-colors flex items-center justify-center"
                  >
                    Découvrir
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;


