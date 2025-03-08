import "./App.css";
import { useState } from "react";
import { ResponseDisplay } from "@/components/common/ResponseDisplay";
import { TextareaWithButton } from "@/components/common/TextareaWithButton";
// import { CarouselComponent } from "@/components/common/CarouselComponent";
import InitialView from "@/components/common/InitialView";
import Footer from "@/components/common/Footer";
import ProductsList from "@/components/common/ProductsList";
import Logo from "@/assets/images/logo.svg";

const App: React.FC = () => {
  const [userMessage, setUserMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  // const [showCards, setShowCards] = useState(false);

  const handleResponse = (response: string, userInput: string) => {
    setUserMessage(userInput);
    setResponseMessage(response);
    // setShowCards(true);
    console.log(response);
  };

  return (
    <div className="min-h-screen bg-blue-gradient w-full flex flex-col justify-center items-center px-4 pt-4 md:pt-14 py-14 relative">
      {userMessage && (
        <div className="pb-6 md:pb-0">
          <img
            src={Logo}
            alt="animated-logo"
            className="w-[55px] md:absolute left-3 top-3 md:w-[96px]  mx-auto"
          />
        </div>
      )}

      {!userMessage ? (
        <InitialView />
      ) : (
        <ResponseDisplay
          userMessage={userMessage}
          responseMessage={responseMessage}
        />
      )}

      <TextareaWithButton onResponse={handleResponse} />

      {userMessage && <ProductsList />}
      {/* <CarouselComponent showCards={showCards} /> */}

      <Footer />
    </div>
  );
};

export default App;
