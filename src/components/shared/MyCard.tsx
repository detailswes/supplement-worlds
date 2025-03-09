import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

interface MyCardProps {
  imageSrc: string;
}

export function MyCard({ imageSrc }: MyCardProps) {
  return (
    <Card>
      <CardContent className="p-4 lg:p-14">
        <div className="flex items-center gap-6 md:gap-[52px] flex-col md:flex-row">
          <img src={imageSrc} alt="img" className="w-full" />

          <div className="w-full">
            <h2 className="text-[13px] lg:text-[40px] font-medium">
              Mix fruit bowl
            </h2>
            <h4 className="text-xl mt-2 sm:mt-0 lg:text-[30px] font-bold">
              $49
            </h4>
            <p className="text-base lg:text-2xl font-medium text-dark pt-2 md:pt-4">
              NUTRITIONS
            </p>
            <p className="text-light-text text-xs lg:text-2xl">ipsum guhkt</p>
            <p className="text-light-text text-xs lg:text-2xl">dolorvb</p>
            <p className="text-light-text text-xs lg:text-2xl">sit bbg</p>
            <p className="text-light-text text-xs lg:text-2xl">ametfg</p>
            <h6 className="text-base lg:text-2xl mt-3 md:mt-[30px]">
              Description
            </h6>
            <p className="text-light-text text-xs lg:text-2xl mt-1 md:mt-[10px]">
              Formulated with cutting-edge science and ingredients, HI°BRID is
              designed to propel you beyond your limits.
            </p>
            <Button className="bg-white min-h-[33px] sm:min-h-[54px] shadow-btn-shadow mt-[10px] w-full text-black hover:bg-[#f5f5f5]">
              SHOP
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
