"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useCreateProject } from "@/lib/hooks/useProject";
import { canCreate } from "@/lib/utils";
import { useGetUser, useUpdateUserProjects } from "@/lib/hooks/useUser";

const ProjectForm = () => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [opened, setOpened] = useState(false);
  const { mutateAsync: createProject, isSuccess } = useCreateProject();
  const { data: userData, refetch: refetchUser } = useGetUser(userId);
  const { mutateAsync: updateUserProjects } = useUpdateUserProjects();

  const handleCreateProject = async () => {
    if (canCreate(userData) === false) {
      return null;
    }
    // if (isSuccess) {
    //   await updateUserProjects({ userId: userId, value: +1 });
    // }
    await createProject(
      {
        title: title,
        description: description,
        userId: userId,
      },
      {
        onSuccess: () => {
          refetchUser();
        },
      }
    );

    setDescription("");
    setTitle("");
    setOpened(!opened);
  };

  useEffect(() => {
    if (userId) {
      refetchUser();
    }
  }, [userId, refetchUser]);

  return (
    <div>
      <Dialog open={opened} onOpenChange={setOpened}>
        <DialogTrigger asChild>
          <div className="rounded-xl p-4 md:px-8 gradint  hover:shadow transition duration-300 ">
            <p className="text-white text-md md:text-xl font-bold mb-2 sm:mb-4">
              Create new project
            </p>
            <Button variant="secondary">Create Project</Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Project</DialogTitle>
            <DialogDescription>
              Create your project here. Click create when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                value={title}
                placeholder="Unity Game"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Project Description</Label>
              <Input
                id="title"
                value={description}
                placeholder="A fun game to be played with friends..."
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleCreateProject}>
              Create Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectForm;
