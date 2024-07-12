export type CreateUserParams = {
  clerkId: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  photo: string;
  isPro: boolean;
  totalProjects: number;
  totalFeedbacks: number;
};

export type CreateProjectParams = {
  userId: string;
  title: string;
  description: string;
};

export type UpdateProjectParams = {
  title: string;
  description: string;
};

export type CreateFeedbackParams = {
  userId: string;
  projectId: string;
  feedbackTitle: string;
  feedbackDescription: string;
  votes: number;
};

export type ProjectResponseType = CreateProjectParams & {
  __v: string;
  _id: string;
};

export type FeedbackResponseType = CreateFeedbackParams & {
  __v: string;
  _id: string;
};

export type UserResponseType = CreateUserParams & {
  __v: string;
  _id: string;
};
