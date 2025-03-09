import {
  AppsIcon,
  NavAnalyticsIcon,
  NavCalenderIcon,
  NavSettingsIcon,
} from "@/assets/icons/icons";
import { Button } from "../ui/button";

const MobNav = () => {
  return (
    <div className="fixed bottom-5 inset-x-5 flex sm:hidden bg-[#DAD4FF] py-1 px-6 rounded-[21px] justify-between gai-2">
      <Button className="p-0 min-h-0">
        <AppsIcon />
      </Button>
      <Button className="p-0 min-h-0">
        <NavCalenderIcon />
      </Button>
      <Button className="p-0 min-h-0">
        <NavAnalyticsIcon />
      </Button>
      <Button className="p-0 min-h-0">
        <NavSettingsIcon />
      </Button>
    </div>
  );
};

export default MobNav;
