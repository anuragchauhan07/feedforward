"use server";

import { connectToDatabase } from "@/lib/database";
import { CreateFeedbackParams } from "@/types";
import Feedback from "../database/models/feedback.model";

export async function CreateFeedback(post: CreateFeedbackParams) {
  try {
    await connectToDatabase();
    const newPost = await Feedback.create(post);
    return JSON.parse(JSON.stringify(newPost));
  } catch (error) {
    console.error(error);
  }
}

export async function getFeedbackByProjectId(projectId: string) {
  try {
    await connectToDatabase();
    const post = await Feedback.find({ projectId: projectId }).sort({
      votes: -1,
    });
    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    console.error(error);
  }
}

export async function getFeedbackByUserId(userId: string) {
  try {
    await connectToDatabase();
    const post = await Feedback.find({ userId: userId }).sort({
      votes: -1,
    });
    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteFeedbackById(feedbackId: string) {
  try {
    await connectToDatabase();
    const post = await Feedback.findByIdAndDelete(feedbackId);
    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteFeedbacksByProjectId(projectId: string) {
  try {
    await connectToDatabase();
    const post = await Feedback.deleteMany({projectId: projectId});
    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    console.error(error);
  }
}

export async function changeVotesById(
  feedbackId: string,
  incrementBy: number = 1
) {
  try {
    await connectToDatabase();
    const post = await Feedback.findByIdAndUpdate(
      feedbackId,
      { $inc: { votes: incrementBy } },
      { new: true }
    );
    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    console.error(error);
  }
}
