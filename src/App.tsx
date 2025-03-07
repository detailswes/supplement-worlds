import "./App.css";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useState } from "react";

const App: React.FC = () => {
  const [userMessage, setUserMessage] = useState(''); // State to store user's input
  const [responseMessage, setResponseMessage] = useState(''); // State to store response
  const [showCards, setShowCards] = useState(false); // State to control cards visibility

  const handleResponse = (response: string, userInput: string) => {
    setUserMessage(userInput); // Store user's input
    setResponseMessage(response); // Store response
    setShowCards(true);
    console.log(response)
  };

  return (
    <>
      <h1 className="scroll-m-20 border-b pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Supplement Worlds
      </h1>
      <div>
      <ResponseDisplay userMessage={userMessage} responseMessage={responseMessage} />
        <TextareaWithButton onResponse={handleResponse}/>
        {showCards && (
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
        )}
      </div>
    </>
  );
}

export default App;

interface TextareaWithButtonProps {
  onResponse: (response: string, userInput: string) => void; // Type definition for the onResponse prop
}

interface ResponseData {
  success: boolean;
  message: string;
  data:    string;
}

export function TextareaWithButton({ onResponse }: TextareaWithButtonProps) {
  const [message, setMessage] = useState(''); // State to hold the user's input

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(event.target.value); // Update message state on input change
  };

  const handleSubmit = async () => {
      if (!message.trim()) return; // Don't submit empty messages
      console.log("Submit button click");
      try {
          const response = await fetch('http://localhost:8080/api/process', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ message }), // Send the message as JSON
          });

          if (!response.ok) {
            const errorMessage = await response.text(); // Read the error message if response is not ok
            throw new Error(`Network response was not ok: ${errorMessage}`); // Throw an error with the message
          }

          
          const BackendResponse: ResponseData = await response.json();

          console.log('Success:', BackendResponse.message);
          onResponse(BackendResponse.message, message); // Pass both response and user input
          setMessage(''); // Clear the input after successful submission

      } catch (error) {
          console.error('Error:', error);
          onResponse('Error occurred while fetching response.', message);
      }
  };

  return (
      <div className="grid w-full gap-2">
        <div className="relative">
          <Textarea
              placeholder="Hier kommen deine Supplement Fragen hin"
              value={message}
              onChange={handleChange} // Call handleChange on input change
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // Prevent new line in the Textarea
                  handleSubmit(); // Trigger the button's action
                }
              }}
              className="pr-16" // Add padding to ensure space for the button
          />
          <Button 
          type="button" 
          onClick={handleSubmit}
          className="absolute top-1/2 right-2 transform -translate-y-1/2"
          >
            Enter
          </Button> 
        </div>
      </div>
  );
}

interface ResponseDisplayProps {
  userMessage: string;
  responseMessage: string;
}

export const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ userMessage, responseMessage }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* User message bubble */}
      {userMessage && (
        <div className="flex justify-end">
          <div
            style={{
              backgroundColor: '#dcf8c6', // WhatsApp-like green
              borderRadius: '12px 12px 0 12px',
              padding: '8px 12px',
              maxWidth: '70%',
              marginLeft: 'auto',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              position: 'relative'
            }}
          >
            <p style={{ margin: 0 }}>{userMessage}</p>
          </div>
        </div>
      )}
      
      {/* Response bubble */}
      {responseMessage && (
        <div className="flex justify-start">
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px 12px 12px 0',
              padding: '8px 12px',
              maxWidth: '70%',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              position: 'relative'
            }}
            >
            <p style={{ margin: 0 }}>{responseMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};


function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Impact Whey</CardTitle>
        <CardDescription>
          Ein gut lösliches Protein mit fruchtigen Geschmäckern und hohem
          Proteingehalt.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img src="https://storage.googleapis.com/product-images-supplement-worlds/10530911-5884889444360331.jpg" />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
