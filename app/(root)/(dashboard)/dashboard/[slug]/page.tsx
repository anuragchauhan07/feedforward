"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useGetProjectByProjectId } from "@/lib/hooks/useProject";
import DeletePageModal from "@/components/shared/DeletePageModal";
import CopyToClipboardButton from "@/components/shared/CopyToClipboardButton";
import EditProjectContainer from "@/components/shared/EditProjectContainer";
import FeedbackContainer from "@/components/shared/FeedbackContainer";
import ProjectDataContainer from "@/components/shared/ProjectDataContainer";

const Project = ({ params }: { params: { slug: string } }) => {
  const { user } = useUser();
  const router = useRouter();
  const userId = user?.publicMetadata.userId as string;
  const projectId = params.slug as string;
  const { data: projectData } = useGetProjectByProjectId(projectId);

  if (projectData && userId && projectData.userId !== userId) {
    router.push("/dashboard");
  }

  return (
    <div className="flex p-4 sm:p-10 gap-10 flex-col md:flex-row">
      <div className="w-full md:w-[300px] ">
        <ProjectDataContainer projectId={projectId} />
        <EditProjectContainer projectId={projectId} />
        <div className="flex gap-4 mt-4 ">
          <CopyToClipboardButton projectId={projectId} />
          <DeletePageModal projectId={projectId} />
        </div>
      </div>
      <FeedbackContainer projectId={projectId} isPublic={false} />
    </div>
  );
};

export default Project;
