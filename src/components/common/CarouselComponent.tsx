import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MyCard } from "./MyCard";

interface CarouselComponentProps {
  showCards: boolean;
}

export const CarouselComponent: React.FC<CarouselComponentProps> = ({
  showCards,
}) => {
  if (!showCards) return null;

  return (
    <Carousel>
      <CarouselContent className="-ml-2 md:-ml-4">
        <CarouselItem className="pl-2 md:pl-4">
          <MyCard />
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4">
          <MyCard />
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4">
          <MyCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
