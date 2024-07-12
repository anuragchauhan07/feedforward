import { useGetProjectByProjectId } from "@/lib/hooks/useProject";
import Image from "next/image";

const ProjectDataContainer = ({ projectId }: { projectId: string }) => {
  const { data: projectData } = useGetProjectByProjectId(projectId);

  return (
    <div className="flex bg-gray-900 text-white p-4 rounded-xl gap-4 items-start mb-10">
      <Image
        width={1000}
        height={1000}
        className="w-10 h-10"
        alt=""
        src="/icon1.png"
      />
      <div>
        <p className="font-semibold text-xl">{projectData?.title}</p>
        <p className="text-sm font-semibold text-gray-300">
          {projectData?.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectDataContainer;
