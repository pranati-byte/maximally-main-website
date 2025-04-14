
import { Dialog, DialogContent } from './ui/dialog';
import { useEffect } from 'react';

interface TallyFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TallyFormDialog = ({ open, onOpenChange }: TallyFormDialogProps) => {
  useEffect(() => {
    // Load Tally embed script
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
      <DialogContent className="sm:max-w-[800px] h-[80vh]">
        <iframe 
          data-tally-src="https://tally.so/embed/wgOYD4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0} 
          title="Maximally Summer Bootcamp Pre-Registration"
        />
      </DialogContent>
    </Dialog>
  );
};

export default TallyFormDialog;
