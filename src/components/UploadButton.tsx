"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

type Props = {};

const UploadButton = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>
          Upload PDF
          <PlusIcon className="ml-2 h-4 w-4 text-white" />
        </Button>
      </DialogTrigger>

      <DialogContent>example content</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
