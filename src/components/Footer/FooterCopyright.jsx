import visa from "./../../assets/Icon/visa 1.svg";
import applePay from "./../../assets/Icon/apple-pay 1.svg";
import americanExpress from "./../../assets/Icon/american-express (1) 1.svg";
import paypal from "./../../assets/Icon/paypal 1.svg";
import amex from "./../../assets/Icon/amex 1.svg";

const FooterCopyright = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-end sm:justify-between items-center gap-5 py-5 sm:pt-10 md:pt-20">
            <p className="text-base text-[#FFFFFFCC]">© 2024 Valuetainment Store. All rights reserved.</p>
            <div className="flex items-center gap-3">
                <img src={visa} alt="visa" />
                <img src={applePay} alt="apple Pay" />
                <img src={visa} alt="visa" />
                <img src={amex} alt="amex" />
                <img src={paypal} alt="paypal" />
                <img src={americanExpress} alt="american Express" />
            </div>
        </div>
    );
};

export default FooterCopyright;