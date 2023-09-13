import { Search } from "..";
import Logo from "../../assets/images/Logo.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";


const Header = () => {
  return (
    <div className="absolute top-0 z-10 w-full bg-transparent">
      <div className="container flex items-center justify-between max-w-screen-xl px-16 py-5 mx-auto">
        <div className="flex items-center justify-center w-full lg:w-fit">
          <div>
            <img src={Logo} alt="" className="h-30 w-30" />
          </div>
        </div>
        <Search />
        <div className="items-center justify-between hidden space-x-4 lg:flex">
          <span className="text-white">Sign in</span>
          <div className="p-4 rounded-full bg-rose-700">
            <HiOutlineMenuAlt4 className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
