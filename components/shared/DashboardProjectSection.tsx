"use client";

import { getProjectsById } from "@/lib/actions/project.actions";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { imageArray } from "@/lib/constants";
import Link from "next/link";
import { ProjectResponseType } from "@/types";
import Image from "next/image";
import { useGetProjectsByUserId } from "@/lib/hooks/useProject";

const DashboardProjectSection = () => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const {data: projects} = useGetProjectsByUserId(userId)

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 my-4">
      {projects &&
        projects.map((item: any, index: number) => {
          const imageSrc = imageArray[index % imageArray.length];
          return (
            <Link
              href={`/dashboard/${item._id}`}
              key={index}
              className="p-4 border rounded-xl hover:shadow transition duration-300 flex items-center gap-2"
            >
              <div className="w-10 h-10 flex items-center">
                <Image width={1000} height={1000} alt="" src={imageSrc}/>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-xs font-semibold text-gray-700 text-ellipsis  overflow-hidden h-4">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default DashboardProjectSection;
