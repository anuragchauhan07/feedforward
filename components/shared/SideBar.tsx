"use client";

import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useUser } from "@clerk/nextjs";
import { ProjectResponseType } from "@/types";
import { imageArray } from "@/lib/constants";
import Image from "next/image";
import { useGetProjectsByUserId } from "@/lib/hooks/useProject";
import SideBarSubscriptionSection from "./SideBarSubscriptionSection";

const SideBar = () => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const { data: projects } = useGetProjectsByUserId(userId);

  return (
    <div className="flex-col gap-4 flex bg-[#F5F3F2] md:w-[350px] min-h-screen p-4 ">
      <Link href="/dashboard" className="w-full">
        <Button className="w-full justify-start py-6">
          <MdSpaceDashboard className="mr-2 h-4 w-4" /> Dashboard
        </Button>
      </Link>
      <Separator />

      <p className="font-semibold text-sm  ">Your Projects</p>
      <div className="flex-1 flex gap-2 flex-col">
        {projects && projects.length > 0 ? (
          projects.map((item: ProjectResponseType, index: number) => {
            const imageSrc = imageArray[index % imageArray.length];
            return (
              <Link
                href={`/dashboard/${item._id}`}
                key={index}
                className="w-full"
              >
                <Button className="w-full justify-start bg-white text-black hover:bg-gray-200">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src={imageSrc}
                    className="w-6 h-6 mr-2"
                  />
                  {item.title}
                </Button>
              </Link>
            );
          })
        ) : (
          <p className="flex items-center justify-center py-10 border-dashed border-4 rounded-xl text-xl font-bold">
            No projects yet!
          </p>
        )}
      </div>

      <SideBarSubscriptionSection userId={userId} />

      <Link href="/policy" className="w-full">
        <Button className="w-full justify-start bg-white text-black hover:bg-gray-200">
          <FaArrowUpRightFromSquare className="mr-2 h-4 w-4" />
          See our policy
        </Button>
      </Link>
    </div>
  );
};

export default SideBar;
