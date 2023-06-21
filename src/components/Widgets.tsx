import FrontEndFolio from "./FrontEndFolio";
import ProfileImage from "./ProfileImage";
import dribbble from "../images/dribbble.webp";
import codepen from "../images/codepen.webp";
import { Curriculum } from "./Curriculum";

const Widgets = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 lg:grid-rows-2 gap-4 h-full">
      <FrontEndFolio />
      <div className="py-4 px-4 col-start-2 col-span-1 row-start-1 row-span-3 lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-2 flex rounded-xl items-center overflow-hidden bg-slate-200 justify-around lg:flex-col flex-row">
        <a
          href="https://dribbble.com/arjeldev"
          className="flex flex-col items-center gap-2"
        >
          <img src={dribbble} alt="dribbble folio" />
          <h2 className="hidden lg:block font-bold">dribbble</h2>
        </a>
        <a
          href="https://codepen.io/arjeldev"
          className="flex flex-col items-center gap-2"
        >
          <img src={codepen} alt="codepn folio" />
          <h2 className="font-bold hidden lg:block">codepen</h2>
        </a>
      </div>
      <ProfileImage widget />
      <Curriculum />
    </div>
  );
};

export default Widgets;
