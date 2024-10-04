import Telephone from "./../../assets/Icon/telephone.svg";
import Email from "./../../assets/Icon/email.svg";
import Facebook from "./../../assets/Icon/facebook.svg";
import Twitter from "./../../assets/Icon/twitter.svg";
import Linkedin from "./../../assets/Icon/linkedin.svg";
import Instagram from "./../../assets/Icon/instagram.svg";

const FooterContact = () => {
  return (
    <div className="text-[#FFFFFFCC]">
      <p className="text-[20px] mb-5 text-white">Contact Us</p>
      <div className="space-y-3">
        <p className="text-base ">Available between 8AM to 8PM. Ready to answer your questions.</p>
        <p className="flex items-center gap-3">
          <img src={Telephone} alt="telephone icon" />
          <a href="tel:+88013456789">013456789</a>
        </p>
        <p className="flex flex-wrap items-center gap-3">
          <img src={Email} alt="email icon" />
          <a href="mailto:store@valuetainment.com">store@valuetainment.com</a>
        </p>
        <p className="flex items-center gap-3">
          <a href="http://facebook.com">
            <img src={Facebook} alt="Facebook icon" className="duration-75 hover:scale-125"/>
          </a>
          <a href="http://twitter.com">
            <img src={Twitter} alt="Twitter icon" className="duration-75 hover:scale-125"/>
          </a>
          <a href="http://linkedin.com">
            <img src={Linkedin} alt="Linkedin icon" className="duration-75 hover:scale-125"/>
          </a>
          <a href="http://instagram.com">
            <img src={Instagram} alt="Instagram icon" className="duration-75 hover:scale-125"/>
          </a>
        </p>
      </div >
    </div >
  );
};

export default FooterContact;
