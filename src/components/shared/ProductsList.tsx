import { useState } from "react";
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
};

const products: Product[] = [
  { image: ProductOne, name: "Mix fruit bowl", price: "$49" },
  { image: ProductTwo, name: "Mix fruit bowl", price: "$49" },
  { image: ProductThree, name: "Mix fruit bowl", price: "$49" },
  { image: ProductOne, name: "Mix fruit bowl", price: "$49" },
  { image: ProductTwo, name: "Mix fruit bowl", price: "$49" },
  { image: ProductThree, name: "Mix fruit bowl", price: "$49" },
  { image: ProductOne, name: "Mix fruit bowl", price: "$49" },
  { image: ProductTwo, name: "Mix fruit bowl", price: "$49" },
  { image: ProductThree, name: "Mix fruit bowl", price: "$49" },
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
    onClick={onProductClick} // Call function from parent
  >
    <img src={image} alt={name} className="w-full rounded-[5px]" />
    <div className="mt-[15px]">
      <p className="text-dark-text text-[13px]">{name}</p>
      <h6 className="text-red text-xl font-bold">{price}</h6>
    </div>
  </motion.div>
);

const ProductsList: React.FC<ProductsListProps> = ({ onProductClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center w-full sm:w-auto">
      {/* Product Grid with Smooth Collapse */}
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

      {/* Toggle Button */}
      <div className="flex justify-center my-6">
        <Button
          variant="ghost"
          className="hover:bg-transparent transition-transform duration-300"
          onClick={() => setExpanded(!expanded)}
        >
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <DownArrowIcon />
          </motion.span>
        </Button>
      </div>
    </div>
  );
};

export default ProductsList;
