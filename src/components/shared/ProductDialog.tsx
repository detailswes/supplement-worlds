import { Dialog, DialogContent } from "../ui/dialog";
import CarouselComponent from "./CarouselComponent";

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
}

export const ProductDialog: React.FC<ProductDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-full bg-transparent p-0 border-0">
        <div className="max-w-[70%] xl:max-w-[1070px] mx-auto">
          <CarouselComponent />
        </div>
      </DialogContent>
    </Dialog>
  );
};
