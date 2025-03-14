import React from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLink from "../navlink/navlink";
import LeaveOrderButton from "./leave-order";

const Header = () => {
  const isLoad = false;
  return (
    <header className=" fixed top-0 left-0 w-full bg-white shadow-2xl z-100  h-[60px] flex justify-center">
      <nav className="container flex items-center justify-between lg:px-8 px-2 mx-auto ">
        <div className="flex lg:flex-1">
          <NavLink href={"/"} className="flex items-center gap-1 lg:gap-2 shrin-0">
            <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gra-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
            <span className="font-extrabold lg:text-xl text-gray-900">
              Noris Development
            </span>
          </NavLink>
        </div>
<LeaveOrderButton/>
        <div className="flex lg:justify-end lg:flex-1">
          {isLoad ? (
            <div className="flex gap-2 items-center">
              <NavLink href={"/upload"}>Upload a PDF</NavLink>
              <div>PRO</div>
        <Button variant={'outline'} className="bg-red-400">Вийти</Button>
            </div>
          ) : (
            <div>
              <NavLink href={"/#sign-in"}>Увійти</NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
