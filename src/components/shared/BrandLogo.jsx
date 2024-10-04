/* eslint-disable react/prop-types */
import brandLogo from "./../../assets/Logo/Valuetainment_Logo_2018.svg";
import brandLogoFooter from "./../../assets/Logo/Valuetainment_Logo_2018-footer.svg";

const BrandLogo = ({ isFooter = false }) => {
  return (
    <div className="flex items-center">
      <img
        className="w-[40px] sm:w-[60px] md:w-[80px] 3xl:w-[115px] h-[80px] 3xl:h-[115px]"
        src={isFooter ? brandLogoFooter : brandLogo}
        alt="Valuetainment"
      />
      <h1 className="font-montserrat text-white font-extrabold text-[40px] sm:text-[60px] md:text-[80px] 3xl:text-[112px] tracking-widest uppercase">
        VTMERCH
      </h1>
    </div>
  );
};

export default BrandLogo;
