import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PiSignInBold } from "react-icons/pi";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { siteData } from "@/lib/constants";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

const HomeHeader = () => {
  return (
    <header className="px-4 md:px-20 py-4 flex  justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={siteData.logoUrl}
          width={1000}
          height={1000}
          alt=""
          className="w-10 h-10"
        />
        <p className="text-md md:text-xl uppercase font-bold">{siteData.name}</p>
      </div>
      <div className=" hidden md:flex gap-4 items-center">
        <Link
          href="/pricing"
          className="text-sm font-semibold hover:border-b-rose-600 border-b-black border-b hover:text-rose-600 transition duration-200"
        >
          Pricing
        </Link>
        <p className="text-xl">.</p>
        <Link
          href="/policy"
          className="text-sm font-semibold hover:border-b-rose-600 border-b-black border-b hover:text-rose-600 transition duration-200"
        >
          Policy
        </Link>
        <p className="text-xl">.</p>
        <Link
          href="/66915b7b21fe1525a8efea8f"
          className="text-sm font-semibold hover:border-b-rose-600 border-b-black border-b hover:text-rose-600 transition duration-200"
        >
          Feedback
        </Link>
      </div>
      <div className="flex gap-4 items-center ">
        <SignedIn>
          <Button
            asChild
            className="rounded-sm bg-animated hidden sm:block"
            size="sm"
          >
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2 group transition"
            >
              <p className="mt-2">Dashboard</p>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
          <DropdownMenu>
            <DropdownMenuTrigger className="block sm:hidden">
              <div className="border rounded-md p-1">
                <FaBars className="text-2xl" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <Button asChild className="rounded-sm bg-animated " size="sm">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 group transition"
                  >
                    <p>Dashboard</p>
                  </Link>
                </Button>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/pricing"
                  className="text-sm font-semibold hover:text-rose-600 transition duration-200"
                >
                  Pricing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/policy"
                  className="text-sm font-semibold hover:text-rose-600 transition duration-200"
                >
                  Policy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/66915b7b21fe1525a8efea8f"
                  className="text-sm font-semibold hover:text-rose-600 transition duration-200"
                >
                  Feedback
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SignedIn>

        <SignedOut>
          <Button asChild className="rounded-sm bg-animated " size="sm">
            <Link
              href="/sign-in"
              className="flex items-center gap-2 group transition"
            >
              <p>Login</p>
              <div className="w-4">
                <PiSignInBold className="group-hover:ml-2 transition" />
              </div>
            </Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
};

export default HomeHeader;
