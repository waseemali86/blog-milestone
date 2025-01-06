import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="max-w-[1450px] mx-auto flex justify-between items-center  w-full h-[10vh] md:h-[10vh] bg-white">
      <div className="w-full mx-3 flex justify-between items-center text-black ">
        <div>
          <h1 className="text-2xl md:text-4xl text-[#7C4EE4] font-extrabold transition-colors duration-150">
            Waseem <span className="text-black hover:text-[#7c4ee4]"> Blogger</span>
          </h1>
        </div>
        <ul className="md:flex gap-10 text-2xl hidden transition-colors duration-150">
          <Link href="/">
            <li className="transition-all duration-300 ease-in-out hover:text-[#7c4ee4] hover:font-medium hover:scale-105 cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            <li className="transition-all duration-300 ease-in-out hover:text-[#7c4ee4] hover:font-medium hover:scale-105 cursor-pointer">About</li>
          </Link>
          <Link href="/contact">
            <li className="transition-all duration-300 ease-in-out hover:text-[#7c4ee4] hover:font-medium hover:scale-105 cursor-pointer">Contact</li>
          </Link>
        </ul>
        <div className="flex justify-center">
                <Link href="/contact"><button className="bg-[#7c4ee4] transition-all duration-300 ease-in-out hover:text-black hover:font-medium hover:scale-105 cursor-pointer px-8 py-3 rounded-md text-sm text-white hidden md:block">
                  Contact Us
                </button></Link>
              </div>
        <Sheet>
          <SheetTrigger className="md:hidden flex ">
            <Menu className="text-xl" />
          </SheetTrigger>
          <SheetContent className="w-[300px] bg-teal-600  sm:w-[380px]">
            <div className="w-full flex flex-col gap-5 text-[#dddcdc] ">
              <ul className="flex flex-col text-2xl gap-3">
                <Link href="/">
                  <li className="border-b-2 transition-all duration-300 ease-in-out hover:text-[#7c4ee4] hover:font-medium hover:scale-105 cursor-pointer">Home</li>
                </Link>
                <Link href="/about">
                  <li className="border-b-2 transition-all duration-300 ease-in-out hover:text-[#7c4ee4] hover:font-medium hover:scale-105 cursor-pointer">About</li>
                </Link>
                <Link href="/contact">
                  <li className="border-b-2 transition-all duration-300 ease-in-out hover:text-[#7c4ee4] hover:font-medium hover:scale-105 cursor-pointer">Contact</li>
                </Link>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
