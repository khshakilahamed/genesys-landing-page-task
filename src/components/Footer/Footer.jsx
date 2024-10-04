import Container from "../shared/Container";
import BrandLogo from "../shared/BrandLogo";
import FooterSubscribe from "./FooterSubscribe";
import FooterMenuItems from "../shared/FooterMenuItems";
import { customerServices, products } from "../../constants/footerItems";
import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <section className="bg-black py-5">
      <Container>
        <BrandLogo isFooter={true} />
        <hr />
        <div className="py-10 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-14 md:gap-20 lg:gap-6 xl:gap-24">
          {/* Subscribe Section */}
          <div className="sm:col-span-3 md:col-span-2">
            <FooterSubscribe />
          </div>
          {/* Customer Services menu */}
          <FooterMenuItems
            items={customerServices}
            title={"Customer Services"}
          />
          {/* Products Menu */}
          <FooterMenuItems items={products} title={"Products"} />
          {/* Contact Us */}
          <FooterContact />
        </div>
        <FooterCopyright />
      </Container>
    </section>
  );
};

export default Footer;
