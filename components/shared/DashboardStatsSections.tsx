"use client";
import ProjectForm from "./ProjectForm";
import { useUser } from "@clerk/nextjs";
import { useGetUser } from "@/lib/hooks/useUser";

const DashboardStatsSections = () => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const { data: stats } = useGetUser(userId);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ">
      <div className="col-span-1 row-span-1">
        <ProjectForm />
      </div>
      <div className="rounded-xl p-4 md:p-8 bg-gray-900 text-white hover:shadow transition duration-300 ">
        <p className="text-md md:text-xl font-bold">Total Projects</p>
        <p className="text-sm font-semibold text-gray-100">
          {stats?.totalProjects} projects
        </p>
      </div>
    </div>
  );
};

export default DashboardStatsSections;
