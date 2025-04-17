
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface TallyFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TallyFormDialog = ({ open, onOpenChange }: TallyFormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <iframe
          src="https://tally.so/embed/wQ1Mdo?alignLeft=1&hideTitle=1&transparentBackground=1"
          width="100%"
          height="500"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Maximally Registration Form"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default TallyFormDialog;
