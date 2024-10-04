import { bannerProducts } from "../constants/products";
import Card from "./ui/card";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <section className="min-h-[70vh] md:min-h-[70vh] lg:min-h-[75vh] xl:min-h-[85vh] bg-red-3 text-white relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="pl-2 3xl:pl-0 pt-16 md:pt-24 xl:pt-24 text-[30px] xs:text-[40px] sm:text-[60px] md:text-[70px] lg:text-[100px] 2xl:text-[120px] 3xl:text-[140px] font-act_of_rejection uppercase text-white/60">
          Future Looks Bright!
        </h2>
        <div className="absolute top-[90px] xs:top-[100px] sm:top-[120px] md:top-[150px] lg:top-[180px] 2xl:top-[200px] 3xl:top-[230px] pl-12">
        {/* <div className="absolute top-[230px] flex items-center pl-12"> */}
          <Marquee className="flex items-center" pauseOnHover>
            {bannerProducts?.map((item) => (
              <div key={item.id} className="w-[250px] sm:w-[300px] md:w-[350px] xl:w-[397px] mx-3 xl:mx-0">
                <Card item={item} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Banner;
