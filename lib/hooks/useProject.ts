import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { CreateProjectParams, UpdateProjectParams } from "@/types";
import {
  CreateProject,
  deleteProjectById,
  getProjectById,
  getProjectsById,
  updateProject,
} from "@/lib/actions/project.actions";
import toast from "react-hot-toast";
import { useUpdateUserProjects } from "./useUser";
// import { useRouter } from "next/navigation";

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      projectId,
      project,
    }: {
      projectId: string;
      project: UpdateProjectParams;
    }) => updateProject(projectId, project),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getProjectByProjectId"],
      });
      toast.success("Project deleted successfully");
    },
    onError: () => {
      toast.error("Opps! Something went wrong");
    },
  });
};

export const useDeleteProjectById = () => {
  const queryClient = useQueryClient();
  //   const router = useRouter();

  return useMutation({
    mutationFn: (projectId: string) => deleteProjectById(projectId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getProjectsByUserId"],
      });
      toast.success("Project deleted successfully");
      //   router.push("/dashboard");
    },
    onError: () => {
      toast.error("Opps! Something went wrong");
    },
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const updateUserProjects = useUpdateUserProjects();

  return useMutation({
    mutationFn: (project: CreateProjectParams) => CreateProject(project),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["getProjectsByUserId"],
      });
      toast.success("Project created successfully");

      // Ensure `userId` is available in context or variables
      const { userId } = variables;

      // Trigger updateUserProjects after project creation is successful
      updateUserProjects.mutate({ userId, value : +1 });
    },
    onError: () => {
      toast.error("Oops! Something went wrong");
    },
  });
};

export const useGetProjectsByUserId = (userId: string) => {
  return useQuery({
    queryKey: ["getProjectsByUserId"],
    queryFn: () => getProjectsById(userId),
    enabled: Boolean(userId),
  });
};

export const useGetProjectByProjectId = (projectId: string) => {
  return useQuery({
    queryKey: ["getProjectByProjectId"],
    queryFn: () => getProjectById(projectId),
    enabled: Boolean(projectId),
  });
};
