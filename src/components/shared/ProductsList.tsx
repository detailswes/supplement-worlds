import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductOne from "@/assets/images/product.svg";
import ProductTwo from "@/assets/images/product-one.svg";
import ProductThree from "@/assets/images/product-two.svg";
import { Button } from "@/components/ui/button";
import { DownArrowIcon } from "@/assets/icons/icons";

type Product = {
  image: string;
  name: string;
  price: string;
};

type ProductsListProps = {
  onProductClick?: () => void;
  handleMobileProductView?: () => void;
};

const products: Product[] = [
  { image: ProductOne, name: "Mix fruit bowl", price: "$49" },
  { image: ProductTwo, name: "Gut Work", price: "$49" },
  { image: ProductThree, name: "Gummies", price: "$49" },
  { image: ProductOne, name: "Mix fruit bowl", price: "$49" },
  { image: ProductTwo, name: "Gut Work", price: "$49" },
  { image: ProductThree, name: "Gummies", price: "$49" },
  { image: ProductOne, name: "Mix fruit bowl", price: "$49" },
  { image: ProductTwo, name: "Gut Work ", price: "$49" },
  { image: ProductThree, name: "Gummies", price: "$49" },
];

const ProductCard: React.FC<Product & { onProductClick?: () => void }> = ({
  image,
  name,
  price,
  onProductClick,
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className="pt-3 px-[15px] pb-[15px] rounded-xl bg-white cursor-pointer shadow-lg"
    onClick={onProductClick}
  >
    <img src={image} alt={name} className="w-full rounded-[5px]" />
    <div className="mt-[15px] flex justify-between">
      <span>
        <p className="text-dark-text text-[13px]">{name}</p>
        <h6 className="text-red text-xl font-bold">{price}</h6>
      </span>
      <Button
  // You can remove variant/size if they're adding extra unwanted styles

  className="
    !w-[54px]
    !h-[26px]
    flex
    items-center
    justify-center
    rounded-full
    bg-[#1100C6]
    hover:bg-[#0500C6]
    text-white
    min-h-0
    uppercase
    text-[8px]
    font-bold
    tracking-[0.32px]
  "
>
  Shop
</Button>
    </div>
  </motion.div>
);

const ProductsList: React.FC<ProductsListProps> = ({
  onProductClick,
  handleMobileProductView,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //Just to check mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // If on mobile, automatically set expanded to true
    if (isMobile) {
      setExpanded(true);
    }
  }, [isMobile]);

  return (
    <div className="flex flex-col items-center w-full sm:w-auto">
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-[60px] lg:gap-y-7 overflow-hidden w-full"
      >
        <AnimatePresence>
          {products
            .slice(0, expanded ? products.length : 3)
            .map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                onProductClick={onProductClick}
              />
            ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center my-6">
        <Button
          variant="ghost"
          className="hover:bg-transparent transition-transform duration-300 hidden sm:block"
          onClick={() => setExpanded(!expanded)}
        >
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <DownArrowIcon />
          </motion.div>
        </Button>
        <Button
          onClick={handleMobileProductView}
          variant="ghost"
          className="hover:bg-transparent transition-transform duration-300 block sm:hidden"
        >
          <div className="rotate-180">
            <DownArrowIcon />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ProductsList;
