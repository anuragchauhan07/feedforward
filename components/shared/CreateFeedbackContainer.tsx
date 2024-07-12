import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useCreateFeedback } from "@/lib/hooks/useFeedback";

type CreateFeedbackContainerParams = {
  userId: string;
  projectId: string;
};

const CreateFeedbackContainer = ({
  userId,
  projectId,
}: CreateFeedbackContainerParams) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { mutateAsync: createFeedback } = useCreateFeedback();

  const feedbackData = {
    userId: userId,
    projectId: projectId,
    feedbackTitle: title,
    feedbackDescription: description,
    votes: 0,
  };
  return (
    <div>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Feedback Title</Label>
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
          <Label htmlFor="title">Feedback Description</Label>
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
          createFeedback(feedbackData);
          setTitle("");
          setDescription("");
        }}
      >
        Submit Feedback
      </Button>
    </div>
  );
};

export default CreateFeedbackContainer;
