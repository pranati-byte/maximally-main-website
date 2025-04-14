
import { Dialog, DialogContent } from './ui/dialog';

interface TallyFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TallyFormDialog = ({ open, onOpenChange }: TallyFormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] h-[80vh]">
        <iframe 
          data-tally-src="https://tally.so/r/wgOYD4?transparentBackground=1" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0" 
          title="Maximally Summer Bootcamp Pre-Registration"
        />
      </DialogContent>
    </Dialog>
  );
};

export default TallyFormDialog;
