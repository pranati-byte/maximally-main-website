
import { Dialog, DialogContent } from './ui/dialog';
import { useEffect } from 'react';

interface TallyFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TallyFormDialog = ({ open, onOpenChange }: TallyFormDialogProps) => {
  useEffect(() => {
    if (open) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // @ts-ignore
        if (typeof Tally !== 'undefined') {
          // @ts-ignore
          Tally.loadEmbeds();
        }
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-full w-screen h-screen p-0 mt-0">
        <iframe 
          src="https://tally.so/embed/wAa61N?transparentBackground=1"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0} 
          title="Maximally 2025 Sponsor Registration"
          style={{ minHeight: '100vh' }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default TallyFormDialog;
