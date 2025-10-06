import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] w-full h-[90vh] p-0 bg-card border-border">
        <DialogTitle className="sr-only">Book a Discovery Call</DialogTitle>
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-6 w-6 text-foreground" />
          <span className="sr-only">Close</span>
        </button>
        <div className="w-full h-full">
          <iframe
            src="https://outlook.office.com/book/Discovery@bpo.alphabyte.biz/?ismsaljsauthenabled"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            title="Book Discovery Call"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
