import image from "../images/profile.webp";

const ProfileImage = () => {
  return (
    <div>
      <img
        className="w-full h-full object-contain rounded-lg select-none"
        src={image.src}
        alt="me"
      />
    </div>
  );
};
export default ProfileImage;
