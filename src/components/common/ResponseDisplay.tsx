import { AdminCircledIcon, CopyIcon, ShareIcon } from "@/assets/icons/icons";
import SmallColoredLogo from "@/assets/images/sml-colored-logo.svg";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";

interface ResponseDisplayProps {
  userMessage: string;
  responseMessage: string;
}

export const ResponseDisplay: React.FC<ResponseDisplayProps> = ({
  userMessage,
  responseMessage,
}) => {
  // Create a ref for the scrollable container
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when the component mounts or updates
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div
      className="max-w-[940px] w-full mx-auto max-h-[353px] overflow-y-auto pb-4 md:pb-8 scrollable-container"
      ref={containerRef}
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex justify-between items-center py-[10px] pl-[22px] pr-[12px] border border-border bg-light-gray rounded-[14px]">
          <p className="font-semibold text-white">
            Do you offer vegan or allergen-free supplements?
          </p>
          <AdminCircledIcon />
        </div>

        <div className="font-medium text-white px-[22px] relative">
          <div className="absolute top-[-2px] -left-[42px]">
            <img
              src={SmallColoredLogo}
              alt="small-logo"
              className="w-10 h-10"
            />
          </div>
          <p>
            ✅ Yes! Supplement World offers a wide range of vegan, gluten-free,
            and allergen-free supplements to fit different dietary needs.
          </p>
          <p>
            🔹 Vegan Options: 100% plant-based supplements with no
            animal-derived ingredients.
          </p>
          <p>
            {" "}
            🔹 Gluten-Free: Safe for those with gluten intolerance or celiac
            disease.
          </p>
          <p>
            {" "}
            🔹 Allergen-Free: Free from common allergens like dairy, soy, nuts,
            and artificial additives.
          </p>
          <p>
            💡 Want personalized recommendations? Take our AI-powered quiz to
            find the perfect supplements for you! 🚀
          </p>
        </div>

        <div className="w-full flex gap-[10px] justify-end items-center">
          <Button variant="ghost" className="p-0 hover:bg-transparent">
            <CopyIcon />
          </Button>
          <Button variant="ghost" className="p-0 hover:bg-transparent">
            <ShareIcon />
          </Button>
        </div>

        {userMessage && (
          <div className="flex justify-between items-center py-[10px] pl-[22px] pr-[12px] border border-border bg-light-gray rounded-[14px]">
            <p className="font-semibold text-white">{userMessage}</p>
            <AdminCircledIcon />
          </div>
        )}

        {responseMessage && (
          <div className="font-medium text-white px-[22px] relative">
            <div className="absolute top-[-2px] -left-[42px]">
              <img
                src={SmallColoredLogo}
                alt="small-logo"
                className="w-10 h-10"
              />
            </div>
            <p>{responseMessage}</p>
          </div>
        )}

        <div className="w-full flex gap-[10px] justify-end items-center">
          <Button variant="ghost" className="p-0 hover:bg-transparent">
            <CopyIcon />
          </Button>
          <Button variant="ghost" className="p-0 hover:bg-transparent">
            <ShareIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
