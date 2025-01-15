import image from "../images/profile.webp";

const ProfileImage = () => {
  return (
    <div>
      <img
        className="w-32 h-32 object-contain rounded-full select-none"
        src={image.src}
        alt="me"
      />
    </div>
  );
};
export default ProfileImage;
