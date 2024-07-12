"use client";

import { useUser } from "@clerk/nextjs";
import FeedbackContainer from "@/components/shared/FeedbackContainer";
import CreateFeedbackContainer from "@/components/shared/CreateFeedbackContainer";
import ProjectDataContainer from "@/components/shared/ProjectDataContainer";
import PromoteButton from "@/components/shared/PromoteButton";

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const projectId = params.slug as string;

  return (
    <div className="p-4 md:p-20 flex flex-col md:flex-row justify-center gap-8 md:gap-20">
      <div className="w-full md:w-[500px] ">
        <ProjectDataContainer projectId={projectId} />
        <CreateFeedbackContainer userId={userId} projectId={projectId} />
        <PromoteButton />
      </div>
      <FeedbackContainer projectId={projectId} isPublic={true} />
    </div>
  );
};

export default ProjectPage;
