import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SubmitIcon } from "@/assets/icons/icons";

interface TextareaWithButtonProps {
  onResponse: (response: string, userInput: string) => void;
}

interface ResponseData {
  success: boolean;
  message: string;
  data: string;
}

export function TextareaWithButton({ onResponse }: TextareaWithButtonProps) {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async () => {
    if (!message.trim()) return;
    console.log("Submit button click");
    try {
      const response = await fetch("http://localhost:8080/api/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Network response was not ok: ${errorMessage}`);
      }

      const BackendResponse: ResponseData = await response.json();
      console.log("Success:", BackendResponse.message);
      onResponse(BackendResponse.message, message);
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      onResponse("Error occurred while fetching response.", message);
    }
  };

  return (
    <div className="relative w-full max-w-[940px] flex flex-col sm:flex-row gap-[10px] mx-auto mb-4 md:mb-[90px]">
      <Textarea
        placeholder="Ask anything?"
        value={message}
        onChange={handleChange}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Ask anything?")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
          }
        }}
        className="w-full placeholder:text-white text-center sm:text-left focus-visible:ring-0 resize-none"
      />
      <Button
        type="button"
        onClick={handleSubmit}
        className="transition-all hover:bg-transparent sm:hover:bg-btn-gradient hover:opacity-90 shadow-btn-shadow absolute right-3 inset-y-0 sm:static p-0 sm:px-4 sm:py-2 min-w-0 sm:min-w-[192px] bg-transparent sm:bg-btn-gradient"
      >
        <span className="hidden sm:block">Submit</span>
        <span className="sm:hidden">
          <SubmitIcon />
        </span>
      </Button>
    </div>
  );
}
