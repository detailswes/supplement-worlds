import { useEffect, useState } from "react";
import "./App.css";
import ProductsList from "@/components/shared/ProductsList";
import Logo from "@/assets/images/logo.svg";
import InitialView from "@/components/shared/InitialView";
import { ResponseDisplay } from "@/components/shared/ResponseDisplay";
import { TextareaWithButton } from "@/components/shared/TextareaWithButton";
import Footer from "@/components/layout/Footer";
import { ProductDialog } from "@/components/shared/ProductDialog";

const App: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<
    { message: string; response: string }[]
  >([]);
  const [showCards, setShowCards] = useState(false);
  const [showMobileProductView, setShowMobileProductView] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResponse = (response: string, userInput: string) => {
    setChatHistory((prev) => [...prev, { message: userInput, response }]);
  };

  return (
    <div>
      <div
        className={`${
          (!chatHistory.length || showMobileProductView) && "pb-6 sm:pb-14"
        } min-h-screen w-full flex flex-col justify-center items-center px-4 pt-4 md:pt-14 py-14 relative ${
          !chatHistory.length && "h-dvh max-h-[100dvh] overflow-hidden"
        }`}
      >
        {chatHistory.length > 0 && (
          <div className="pb-6 md:pb-0">
            <img
              src={Logo}
              alt="animated-logo"
              className="w-[55px] md:absolute left-3 top-3 md:w-[96px] mx-auto"
            />
          </div>
        )}

        {!chatHistory.length ? (
          <InitialView />
        ) : (
          <div
            className={`${
              showMobileProductView || (isMobile && showCards)
                ? "hidden"
                : "block"
            } sm:block w-full`}
          >
            <ResponseDisplay
              messages={chatHistory}
              onDownArrowPress={() => setShowMobileProductView(true)}
            />
          </div>
        )}

        <div className="mt-auto w-full">
          <TextareaWithButton onResponse={handleResponse} />
        </div>

        {chatHistory.length > 0 && (
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
