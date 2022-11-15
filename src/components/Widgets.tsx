import DarkModeButton from "./DarkModeButton";
import ProfileImage from "./ProfileImage";
import TimeCard from "./TimeCard";

const Widgets = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-4 h-full">
      <TimeCard />
      <DarkModeButton />
      <div className="col-start-2 col-span-1 row-start-3 row-span-1 lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-2 flex rounded-xl bg-arjelgrey1 items-center overflow-hidden"></div>

      <ProfileImage widget />
    </div>
  );
};

export default Widgets;
