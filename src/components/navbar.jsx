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
    <section className="py-8 mx-[120px] ">
      <div className="container">
        <nav className="flex items-center justify-between mb-[32px] ">
          <a href="#" className="flex items-center gap-2">
            <img
              ref={navLogoRef}
              src={logo}
              className="w-[120px] h-[40px] object-cover"
              alt="Shadcn UI Navbar"
            />
          </a>
          <NavigationMenu className="hidden lg:block font-poppins-semibold text-[20px] ">
            <NavigationMenuList >
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
          <div className="hidden items-center gap-4 lg:flex ">
            <button className="w-[210px] h-[56px] text-[22px] rounded-[12px] font-poppins-regular border-[1px] border-[#931e16] bg-white text-[#931e16] hover:bg-[#931e16] hover:text-white transition-colors duration-75 ">
               <a target="_blank" href="https://www.amanga.store/products/afria/">Précommander</a>
            </button>
          </div>

          <Sheet>
            <SheetTrigger
              className="lg:hidden"
              render={<Button variant="outline" size="icon" />}
            >
              <MenuIcon className="h-4 w-4" />
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
                  <a href="#Mission" className="font-medium">
                    Pourquoi AFRIA?
                  </a>
                  <a href="#Signification" className="font-medium">
                    Symboles
                  </a>
                  <a href="#Rules" className="font-medium">
                    Règles
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button className="w-[210px] h-[56px] text-[22px] rounded-[12px] font-poppins-regular border-[1px] border-[#931e16] bg-white text-[#931e16] ">
                    <a target="_blank" href="https://www.amanga.store/products/afria/">Précommander</a>
                  </Button>
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


