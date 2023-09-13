import { ImFacebook2 } from "react-icons/im";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col space-y-6 mt-20 container justify-center items-center w-full">
      <div className="flex items-center space-x-14">
        <ImFacebook2 className="text-xl text-gray-900" />
        <BsInstagram className="text-xl text-gray-900" />
        <BsTwitter className="text-xl text-gray-900" />
        <BsYoutube className="text-xl text-gray-900" />
      </div>
      <div className="space-x-8 font-bold text-lg font-dmsans">
        <span>Conditions of use</span>
        <span>Private & Policy</span>
        <span>Press Room</span>
      </div>
      <div className="font-dmsans text-lg text-gray-500 font-bold">
        <span>
          &copy; {new Date().getFullYear()} MovieBox by
          Henry Nnamani Chukwuemeka{" "}
        </span>
      </div>
    </div>
  );
};

export default Footer;
