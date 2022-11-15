import image from "../images/profile-image@2x.png";

const ProfileImage = ({ widget = false }) => {
  const widgetStyles = widget
    ? "col-start-3 col-span-1 row-start-1 row-span-3 lg:col-start-2 lg:row-span-1"
    : "rounded-full w-24 overflow-hidden bg-transparent md:bg-arjelgrey1";
  return (
    <div className={widgetStyles}>
      <img className="w-full h-full object-contain" src={image} alt="me" />
    </div>
  );
};
export default ProfileImage;
