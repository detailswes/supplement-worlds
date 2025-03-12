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
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <MyCard imageSrc={ProductOne} />
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductTwo} />
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductThree} />
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductOne} />
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductTwo} />
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductThree} />
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductOne} />
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductTwo} />
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductThree} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
