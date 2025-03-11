import {
  AdminCircledIcon,
  CopyIcon,
  DownArrowIcon,
  ShareIcon,
} from "@/assets/icons/icons";
import SmallColoredLogo from "@/assets/images/sml-colored-logo.svg";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";

interface ChatMessage {
  message: string;
  response: string;
}

interface ResponseDisplayProps {
  messages: ChatMessage[];
  onDownArrowPress?: () => void;
}

interface ActionButtonProps {
  icon: JSX.Element;
  label: string;
  onClick: () => void; // Added onClick function
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, onClick }) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className="p-0 hover:bg-transparent scale-90 sm:scale-100 opacity-50 sm:opacity-100"
  >
    {icon}
  </Button>
);

const MessageBubble: React.FC<{ message: string }> = ({ message }) => (
  <div className="relative ml-auto w-[76%] sm:w-full flex justify-between items-center p-2 sm:py-[10px] sm:pl-[22px] sm:pr-[12px] border border-border bg-light-gray rounded-[14px]">
    <p className="font-semibold text-white">{message}</p>
    <div className="absolute sm:static scale-75 top-[1px] left-[-50px] sm:scale-100">
      <AdminCircledIcon />
    </div>
  </div>
);

const ResponseBlock: React.FC<{ text: string | React.ReactNode }> = ({
  text,
}) => (
  <div className="ml-0 sm:ml-11 font-medium text-white pl-7 pr-[22px] sm:px-[22px] relative">
    <div className="absolute top-[-2px] scale-50 sm:scale-100 -left-2 sm:left-[-42px]">
      <img src={SmallColoredLogo} alt="small-logo" className="w-10 h-10" />
    </div>
    {typeof text === "string" ? (
      <p dangerouslySetInnerHTML={{ __html: text }} />
    ) : (
      <p>{text}</p>
    )}
  </div>
);

export const ResponseDisplay: React.FC<ResponseDisplayProps> = ({
  messages,
  onDownArrowPress,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Response copied!");
    });
  };

  return (
    <div
      className="max-w-[940px] w-full mx-auto max-h-[70vh] sm:max-h-[353px] overflow-y-auto pb-4 md:pb-8 scrollable-container"
      ref={containerRef}
    >
      <div>
        {messages?.length > 0 &&
          messages?.map(({ message, response }, index) => (
            <div className="flex flex-col gap-4 md:gap-8" key={index}>
              {message && <MessageBubble message={message} />}
              {response && <ResponseBlock text={response} />}
              <div className="w-full flex gap-[10px] pl-7 sm:pl-0 sm:justify-end items-center -mt-4 mb-6">
                <ActionButton
                  icon={<CopyIcon />}
                  label="Copy Pressed"
                  onClick={() => handleCopy(response)}
                />
                <ActionButton
                  icon={<ShareIcon />}
                  label="Share Pressed"
                  onClick={() => alert("Share functionality coming soon!")}
                />
              </div>
            </div>
          ))}

        <Button
          onClick={onDownArrowPress}
          className="block sm:hidden mx-auto min-w-0 bg-transparent"
        >
          <DownArrowIcon />
        </Button>
      </div>
    </div>
  );
};
