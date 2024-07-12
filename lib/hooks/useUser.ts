import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  getUserById,
  updateUserProjects,
  updateUserFeedbacks,
} from "@/lib/actions/user.actions";

export const useGetUser = (userId: string) => {
  return useQuery({
    queryKey: ["getUserById"],
    queryFn: () => getUserById(userId),
    enabled: Boolean(userId),
  });
};

export const useUpdateUserProjects = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, value }: { userId: string; value: number }) =>
      updateUserProjects(userId, value),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getProjectsByUserId"],
      });
    },
  });
};

export const useUpdateUserFeedbacks = (userId: string, value: number) => {
  return useQuery({
    queryKey: ["updateUserFeedbacks"],
    queryFn: () => updateUserFeedbacks(userId, value),
    enabled: Boolean(userId),
  });
};
