import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CreateFeedback,
  changeVotesById,
  deleteFeedbackById,
  deleteFeedbacksByProjectId,
  getFeedbackByProjectId,
  getFeedbackByUserId,
} from "@/lib/actions/feedback.actions";
import toast from "react-hot-toast";
import { CreateFeedbackParams } from "@/types";

export const useGetFeedbackByProjectId = (projectId: string) => {
  return useQuery({
    queryKey: ["getFeedbackByProjectId"],
    queryFn: () => getFeedbackByProjectId(projectId),
    enabled: Boolean(projectId),
  });
};

export const useGetFeedbackByUserId = (userId: string) => {
  return useQuery({
    queryKey: ["getFeedbackByUserId"],
    queryFn: () => getFeedbackByUserId(userId),
    enabled: Boolean(userId),
  });
};
export const useDeleteFeedbackByFeedbackId = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (feedbackId: string) => deleteFeedbackById(feedbackId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getFeedbackByProjectId"],
      });
      toast.success("Feedback deleted successfully");
    },
    onError: () => {
      toast.error("Opps! Something went wrong");
    },
  });
};

export const useDeleteFeedbackByProjectId = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (projectId: string) => deleteFeedbacksByProjectId(projectId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getFeedbackByProjectId"],
      });
      toast.success("Feedback deleted successfully");
    },
    onError: () => {
      toast.error("Opps! Something went wrong");
    },
  });
};

export const useCreateFeedback = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: CreateFeedbackParams) => CreateFeedback(post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getFeedbackByProjectId"],
      });
      toast.success("Feedback created successfully");
    },
    onError: () => {
      toast.error("Opps! Something went wrong");
    },
  });
};
export const useChangeVotesById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      feedbackId,
      incrementBy,
    }: {
      feedbackId: string;
      incrementBy: number;
    }) => changeVotesById(feedbackId, incrementBy),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getFeedbackByProjectId"],
      });
    },
  });
};
