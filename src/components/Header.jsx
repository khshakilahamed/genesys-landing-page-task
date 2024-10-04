/* eslint-disable react/prop-types */
import BrandLogo from "./shared/BrandLogo";
import menuIcon from "./../assets/Icon/menu.svg"

const Header = ({ openModal }) => {
  return (
    <header className="bg-red-3 text-white">
      <nav className="max-w-[1800px] mx-auto flex justify-between items-center py-8 sm:py-12 px-4">
        <BrandLogo />
        <div onClick={openModal} className="cursor-pointer">
          <img
            className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px]"
            src={menuIcon}
            alt="menu"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
