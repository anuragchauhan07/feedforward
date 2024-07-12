import React from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa6";

const CopyToClipboardButton = ({ projectId }: { projectId: string }) => {
  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(
      `${"https://feedforward.vercel.app/" + projectId}`
    );
    toast.success("Link copied to clipboard");
  };

  return (
    <Button className="flex-1 flex gap-2" onClick={copyToClipboardHandler}>
      <p>Share page</p>
      <FaCopy />
    </Button>
  );
};

export default CopyToClipboardButton;
