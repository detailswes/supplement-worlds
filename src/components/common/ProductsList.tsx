import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductOne from "@/assets/images/product.svg";
import ProductTwo from "@/assets/images/product-one.svg";
import ProductThree from "@/assets/images/product-two.svg";
import { Button } from "@/components/ui/button";
import { DownArrowIcon } from "@/assets/icons/icons";

type Product = {
  id: number;
  image: string;
  name: string;
  price: string;
};

const products: Product[] = [
  { id: 1, image: ProductOne, name: "Mix fruit bowl", price: "$49" },
  { id: 2, image: ProductTwo, name: "Mix fruit bowl", price: "$49" },
  { id: 3, image: ProductThree, name: "Mix fruit bowl", price: "$49" },
  { id: 4, image: ProductOne, name: "Mix fruit bowl", price: "$49" },
  { id: 5, image: ProductTwo, name: "Mix fruit bowl", price: "$49" },
  { id: 6, image: ProductThree, name: "Mix fruit bowl", price: "$49" },
  { id: 7, image: ProductOne, name: "Mix fruit bowl", price: "$49" },
  { id: 8, image: ProductTwo, name: "Mix fruit bowl", price: "$49" },
  { id: 9, image: ProductThree, name: "Mix fruit bowl", price: "$49" },
];

const ProductCard: React.FC<Product> = ({ image, name, price }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className="pt-3 px-[15px] pb-[15px] rounded-xl bg-white cursor-pointer shadow-lg"
  >
    <img src={image} alt={name} className="w-full rounded-[5px]" />
    <div className="mt-[15px]">
      <p className="text-dark-text text-[13px]">{name}</p>
      <h6 className="text-red text-xl font-bold">{price}</h6>
    </div>
  </motion.div>
);

const ProductsList: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Product Grid with Smooth Collapse */}
      <motion.div
        layout
        className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-[60px] lg:gap-y-7 overflow-hidden"
      >
        <AnimatePresence>
          {products.slice(0, expanded ? products.length : 3).map((product) => (
            <ProductCard key={product.id} {...product} />
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
