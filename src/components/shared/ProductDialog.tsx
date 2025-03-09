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
      <DialogContent className="sm:scale-75 2xl:scale-100 max-w-full bg-transparent p-0 border-0 shadow-none">
        <div className="sm:scale-75 2xl:scale-100 max-w-[70%] xl:max-w-[1070px] mx-auto">
          <CarouselComponent />
        </div>
      </DialogContent>
    </Dialog>
  );
};
