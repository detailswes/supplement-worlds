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

const CarouselComponent = ({
  carouselStartIndex,
}: {
  carouselStartIndex: number;
}) => {
  return (
    <Carousel className="w-full" opts={{ startIndex: carouselStartIndex ?? 0 }}>
      <CarouselContent>
        <CarouselItem>
          <MyCard imageSrc={ProductOne} ProductName={' Mix fruit bowl'}/>
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductTwo} ProductName={"Gut Work"}/>
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductThree} ProductName={"Gummies"}/>
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductOne} ProductName={' Mix fruit bowl'}/>
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductTwo} ProductName={"Gut Work"}/>
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductThree} ProductName={"Gummies"}/>
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductOne} ProductName={' Mix fruit bowl'}/>
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductTwo} ProductName={"Gut Work"}/>
        </CarouselItem>
        <CarouselItem>
          <MyCard imageSrc={ProductThree} ProductName={"Gummies"}/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
