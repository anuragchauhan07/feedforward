import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { projectsConst } from "./constants";
import toast from "react-hot-toast";
import { UserResponseType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const canCreate = (userData: UserResponseType) => {
  if (userData) {
    if (userData.isPro) {
      return true;
    } else {
      if (
        userData.totalProjects > projectsConst.freeProjects - 1 ||
        userData.totalFeedbacks > projectsConst.freeFeedbacks - 1
      ) {
        toast.error("Free limit reached!");
        return false;
      } else {
        return true;
      }
    }
  }
  return false;
};
