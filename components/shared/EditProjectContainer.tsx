"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useUpdateProject } from "@/lib/hooks/useProject";

const EditProjectContainer = ({ projectId }: { projectId: string }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { mutateAsync: updateProject } = useUpdateProject();

  const handleUpdateProject = async () => {
    const project = {
      title: title,
      description: description,
    };
    await updateProject({ projectId, project });
    setTitle("");
    setDescription("");
  };
  
  return (
    <div>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Edit Title</Label>
          <Input
            id="title"
            value={title}
            placeholder="Theme system"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Edit Description</Label>
          <Input
            id="title"
            value={description}
            placeholder="I think you should add themes also..."
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={!title || !description}
        onClick={() => {
          handleUpdateProject();
        }}
      >
        Update Details
      </Button>
    </div>
  );
};

export default EditProjectContainer;
