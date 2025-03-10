import "./App.css";
import { useEffect, useState } from "react";
import ProductsList from "@/components/shared/ProductsList";
import Logo from "@/assets/images/logo.svg";
import InitialView from "@/components/shared/InitialView";
import { ResponseDisplay } from "@/components/shared/ResponseDisplay";
import { TextareaWithButton } from "@/components/shared/TextareaWithButton";
import Footer from "@/components/shared/Footer";
import { ProductDialog } from "@/components/shared/ProductDialog";
import MobNav from "@/components/shared/MobNav";

const App: React.FC = () => {
  const [userMessage, setUserMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [showMobileProductView, setShowMobileProductView] = useState(false);

  const handleResponse = (response: string, userInput: string) => {
    setUserMessage(userInput);
    setResponseMessage(response);
    console.log(response);
  };

  useEffect(() => {
    let lastTouchEnd = 0;

    const handleTouchEnd = (event: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div>
      <div
        className={`${
          (!userMessage || showMobileProductView) && "pb-6 sm:pb-14"
        } min-h-screen w-full flex flex-col justify-center items-center px-4 pt-4 md:pt-14 py-14 relative ${
          !userMessage && "h-dvh max-h-[100dvh] overflow-hidden"
        }`}
      >
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
          <div
            className={`${
              showMobileProductView ? "hidden" : "block"
            } sm:block w-full`}
          >
            <ResponseDisplay
              userMessage={userMessage}
              responseMessage={responseMessage}
              onDownArrowPress={() => {
                setShowMobileProductView(true);
              }}
            />
          </div>
        )}

        <div className="mt-auto w-full">
          <TextareaWithButton onResponse={handleResponse} />
        </div>

        {userMessage && (
          <div
            className={`${showMobileProductView ? "block" : "hidden"} sm:block`}
          >
            <ProductsList
              onProductClick={() => setShowCards(!showCards)}
              handleMobileProductView={() => setShowMobileProductView(false)}
            />
          </div>
        )}
        <ProductDialog open={showCards} onClose={() => setShowCards(false)} />

        <Footer />
      </div>
    </div>
  );
};

export default App;
