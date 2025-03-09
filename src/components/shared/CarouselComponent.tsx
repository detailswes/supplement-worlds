import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MyCard } from "./MyCard";
import ProductOne from "@/assets/images/product.svg";
import ProductTwo from "@/assets/images/product-one.svg";
import ProductThree from "@/assets/images/product-two.svg";

const CarouselComponent = () => {
  return (
    <Carousel>
      <CarouselContent className="-ml-2 md:-ml-4">
        <CarouselItem className="pl-2 md:pl-4">
          <MyCard imageSrc={ProductOne} />
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4">
          <MyCard imageSrc={ProductTwo} />
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4">
          <MyCard imageSrc={ProductThree} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
