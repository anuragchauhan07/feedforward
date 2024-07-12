"use client";

import { Button } from "@/components/ui/button";
import { StripeHandler } from "@/lib/stripe";
import { useUser } from "@clerk/nextjs";
import { TiTick } from "react-icons/ti";
import { projectsConst } from "@/lib/constants";
import Link from "next/link";
const Pricing = () => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  const strpieHandler = async () => {
    await StripeHandler(userId);
  };
  return (
    <div className="flex flex-col items-center p-4 md:p-20 gap-4 pb-20">
      <p className="p-2 border-2 border-black rounded-sm font-bold tracking-widest uppercase">
        * Pricing page
      </p>
      <p className="text-4xl md:text-6xl max-w-3xl text-center  font-bold text-gray-800 ">
        Our pricing is simple with no hidden fees
      </p>
      <p className="text-md font-semibold text-gray-700">
        Pricing plan for business at every stage of growth
      </p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="flex gap-10 bg-blue-200 flex-col  p-8 rounded-md min-w-md">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-start gap-4">
              <p className="px-2 py-1 border-2 border-black rounded-sm font-bold tracking-widest uppercase">
                free
              </p>
              <p className="text-6xl font-bold ">0$</p>
              <p className="text-sm font-semibold">Per member , lifetime</p>
            </div>
            <div className="h-full w-1 bg-black"></div>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2 font-semibold">
                <TiTick className="p-1 text-xl bg-green-600 rounded-full text-white" />
                Free {projectsConst.freeProjects} projects
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <TiTick className="p-1 text-xl bg-green-600 rounded-full text-white" />
                Free ∞ feedbacks
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <TiTick className="p-1 text-xl bg-green-600 rounded-full text-white" />
                Full Access to tools
              </p>
            </div>
          </div>
          <Link href="/dashboard" className="w-full">
            <Button className="w-full">Start for free</Button>
          </Link>
        </div>

        <div className="flex gap-10 bg-pink-200 flex-col  p-8 rounded-md min-w-md">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-start gap-4">
              <p className="px-2 py-1 border-2 border-black rounded-sm font-bold tracking-widest uppercase">
                Premium
              </p>
              <p className="text-6xl font-bold ">20$</p>
              <p className="text-sm font-semibold">Per member , lifetime</p>
            </div>
            <div className="h-full w-1 bg-black"></div>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2 font-semibold">
                <TiTick className="p-1 text-xl bg-green-600 rounded-full text-white" />
                Unlimited projects
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <TiTick className="p-1 text-xl bg-green-600 rounded-full text-white" />
                Unlimited feedbacks
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <TiTick className="p-1 text-xl bg-green-600 rounded-full text-white" />
                Full Access to tools
              </p>
            </div>
          </div>
          <Button onClick={() => strpieHandler()}>Go pro</Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
