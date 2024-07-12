"use server";

import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";
import { CreateUserParams } from "@/types";

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error(error);
  }
}

export async function getUserById(userId: string) {
  try {
    await connectToDatabase();
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error(error);
  }
}

export async function updateUser(userId: string) {
  try {
    await connectToDatabase();
    const updatedUser = await User.findByIdAndUpdate(userId, {
      isPro: true,
    });
    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.error(error);
  }
}

export async function updateUserProjects(userId: string, value: number) {
  try {
    await connectToDatabase();
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $inc: { totalProjects: value } },
      { new: true }
    );
    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.error(error);
  }
}

export async function updateUserFeedbacks(userId: string, value: number) {
  try {
    await connectToDatabase();
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $inc: { totalFeedbacks: value } },
      { new: true }
    );
    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.error(error);
  }
}
