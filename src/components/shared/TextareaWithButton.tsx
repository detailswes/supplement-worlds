import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="w-full max-w-[940px] flex flex-col sm:flex-row gap-[10px] mx-auto mb-8 md:mb-[90px]">
      <Textarea
        placeholder="Ask anything?"
        value={message}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
          }
        }}
        className="w-full placeholder:text-white text-center sm:text-left focus-visible:ring-0"
      />
      <Button
        type="button"
        onClick={handleSubmit}
        className="min-w-[192px] transition-all hover:opacity-90 shadow-btn-shadow"
      >
        Submit
      </Button>
    </div>
  );
}
