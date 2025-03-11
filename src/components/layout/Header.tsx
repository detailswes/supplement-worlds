import Logo from "@/assets/images/logo.svg";

interface HeaderProps {
  hasChatHistory: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasChatHistory }) => {
  if (!hasChatHistory) return null;

  return (
    <div className="pb-6 md:pb-0">
      <img
        src={Logo}
        alt="animated-logo"
        className="w-[55px] md:absolute left-3 top-3 md:w-[96px] mx-auto"
      />
    </div>
  );
};

export default Header;
