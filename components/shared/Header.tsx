"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa6";
import { siteData } from "@/lib/constants";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex  py-1 border-b w-full px-4 md:px-10 items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={siteData.logoUrl}
          width={1000}
          height={1000}
          alt=""
          className="w-10 h-10"
        />
        <p className=" md:text-xl  font-semibold">{siteData.name}</p>
      </div>
      <div className="flex gap-4 items-center ">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <Sheet>
          <SheetTrigger className="block md:hidden">
            <div className="border rounded-md p-1">
              <FaBars className="text-2xl" />
            </div>
          </SheetTrigger>
          <SheetContent className="overflow-y-scroll">
            <SideBar />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
