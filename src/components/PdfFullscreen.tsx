import { useState } from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";

type Props = {};

const PdfFullscreen = (props: Props) => {
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
      <DialogTrigger></DialogTrigger>
    </Dialog>
  );
};

export default PdfFullscreen;
