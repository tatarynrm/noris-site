"use client";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLink from "../navlink/navlink";
import LeaveOrderButton from "./leave-order";
import GoogleSignInButton from "../buttons/GoogleSiginButton";
import { useSession } from "next-auth/react";
import authConfig from "@/configs/auth";
import SignOutButton from "../buttons/SignOutButton";
import { UserAvatar } from "./user-profile-button";

const Header = ({session}:{session:any}) => {
  // const { data: session, status } = useSession();
 
console.log('HEADER SESSION',session);
localStorage.setItem('name',session?.user?.name)
localStorage.setItem('email',session?.user?.email)
  const isLoad = false;
  return (
    <>
      <header className=" fixed top-0 left-0 w-full bg-white shadow-2xl z-100  h-[60px] flex justify-center">
        <nav className="container flex items-center justify-between lg:px-8 px-2 mx-auto ">
          <div className="flex lg:flex-1">
            <NavLink
              href={"/"}
              className="flex items-center gap-1 lg:gap-2 shrin-0"
            >
              <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gra-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
              <span className="font-extrabold lg:text-xl text-gray-900">
                Noris Development
              </span>
            </NavLink>
          </div>
          <LeaveOrderButton />
          <div className="flex lg:justify-end lg:flex-1">
            {session?.user ? (
            // <SignOutButton/>
            <UserAvatar session={session}/>
            ) : (
              // <div>
              //   <NavLink href={"/#sign-in"}>Увійти</NavLink>
              // </div>
              <GoogleSignInButton />
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
