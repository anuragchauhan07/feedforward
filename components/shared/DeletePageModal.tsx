import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useDeleteProjectById } from "@/lib/hooks/useProject";
import { useRouter } from "next/navigation";
import { AiFillDelete } from "react-icons/ai";

const DeletePageModal = ({ projectId }: { projectId: string }) => {
  const router = useRouter();
  const { mutateAsync: deleteProject } = useDeleteProjectById();

  const handleDeleteProject = async () => {
    const response = await deleteProject(projectId);
    if (response) {
      router.push("/dashboard");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="flex-1 bg-red-600 hover:bg-red-400 flex gap-2">
          <p>Delete Page</p>
          <AiFillDelete />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            project and remove it's data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Button
          className="flex-1 bg-red-600 hover:bg-red-400 flex gap-2"
          onClick={() => {
            handleDeleteProject();
          }}
        >
          <p>Delete Page</p>
          <AiFillDelete />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePageModal;
