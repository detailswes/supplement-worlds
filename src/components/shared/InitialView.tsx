import AnimatedLogo from "@/assets/images/animated-logo.gif";

const InitialView = () => {
  return (
    <div className="h-[250px] sm:h-auto my-auto">
      <h1 className="text-[40px] font-bold text-white text-center">
        What can I help with?
      </h1>
      <img src={AnimatedLogo} alt="animated-logo" className="w-40 mx-auto" />
    </div>
  );
};

export default InitialView;
