"use server";

import { connectToDatabase } from "@/lib/database";
import Project from "../database/models/project.model";
import { CreateProjectParams, UpdateProjectParams } from "@/types";

export async function CreateProject(project: CreateProjectParams) {
  try {
    await connectToDatabase();
    const newPost = await Project.create(project);
    return JSON.parse(JSON.stringify(newPost));
  } catch (error) {
    console.error(error);
  }
}

export async function updateProject(projectId: string, project: UpdateProjectParams) {
  try {
    await connectToDatabase();
    const newPost = await Project.findByIdAndUpdate(projectId, project);
    return JSON.parse(JSON.stringify(newPost));
  } catch (error) {
    console.error(error);
  }
}

export async function getProjectsById(userId: string) {
  try {
    await connectToDatabase();
    const post = await Project.find({ userId: userId });
    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    console.error(error);
  }
}

export async function getProjectById(projectId: string) {
  try {
    await connectToDatabase();
    const project = await Project.findById(projectId);
    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProjectById(projectId: string) {
  try {
    await connectToDatabase();
    const project = await Project.findByIdAndDelete(projectId);
    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.error(error);
  }
}
