import { useEffect } from "react";
import { X } from "lucide-react";
import CarouselComponent from "./CarouselComponent";

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
}

export const ProductDialog: React.FC<ProductDialogProps> = ({
  open,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Click outside to close + Close Button on Overlay */}
      <div className="absolute inset-0" onClick={onClose}>
        <button
          onClick={onClose}
          className="absolute top-24 left-14 right-6 sm:top-30  sm:right-64 sm:left-auto text-white opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          <X className="h-8 w-8" />
          <span className="sr-only">Close</span>
        </button>
      </div>
      <div className="relative z-10 w-full max-w-[70%] xl:max-w-[1070px] mx-auto sm:scale-75 2xl:scale-100 bg-transparent p-0 border-0 shadow-none">
        <CarouselComponent />
      </div>
    </div>
  );
};
