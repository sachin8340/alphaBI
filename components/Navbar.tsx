import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="w-full p-4 flex justify-between items-center">
      <div className="flex justify-center items-center gap-1">
        <div className="w-10 h-10 relative">
          <Image
            src="/icon.png"
            fill
            className="object-contain"
            alt="My Logo"
          />
        </div>
        <span className="text-primary text-[25px] font-medium">Spotter</span>
      </div>

      <div className="hidden md:flex justify-between items-center gap-10 ">
        

        <Button className="bg-transparent hover:bg-black hover:text-white" variant="outline" onClick={() => signOut(auth)}>
          Sign Out
        </Button>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <Image
              src="/menu.svg"
              alt="menu"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-10 bg-white md:hidden">
            <div className="flex justify-start items-center gap-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/icon.png"
                  fill
                  className="object-contain"
                  alt="My Logo"
                />
              </div>
              <span className="text-primary text-[25px] font-medium">
                Spotter
              </span>
            </div>

            <div className="flex flex-col gap-8 ">

              <Button variant="outline" onClick={() => signOut(auth)}>
                Sign Out
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
