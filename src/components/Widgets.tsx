import FrontEndFolio from "./FrontEndFolio";
import ProfileImage from "./ProfileImage";
import dribbble from "../images/dribbble.webp";
import codepen from "../images/codepen.webp";
import { Curriculum } from "./Curriculum";

const Widgets = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 lg:grid-rows-3 gap-4 h-full">
      <FrontEndFolio />
      <div className="py-4 px-4 col-start-3 row-start-1 col-span-1 row-span-3 flex rounded-xl items-center overflow-hidden bg-slate-200 justify-around flex-col">
        <a
          href="https://dribbble.com/arjeldev"
          className="flex flex-col items-center gap-2"
        >
          <img src={dribbble.src} alt="dribbble folio" />
          <h2 className="font-bold">dribbble</h2>
        </a>
        <a
          href="https://codepen.io/arjeldev"
          className="flex flex-col items-center gap-2"
        >
          <img src={codepen.src} alt="codepn folio" />
          <h2 className="font-bold">codepen</h2>
        </a>
      </div>
      <ProfileImage />
      <Curriculum link="https://drive.google.com/uc?export=download&id=1Sas7BoqFvrKVb_-F4_O4cwo4424Get9-" text="CV ESP" />
      <Curriculum link="https://drive.google.com/uc?export=download&id=1sPUJ4vmoKSCHmRWauqYiVSeznvGpEfDY" text="CV ENG" />
    </div>
  );
};

export default Widgets;
