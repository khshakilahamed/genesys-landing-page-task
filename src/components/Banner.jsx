import { bannerProducts } from "../constants/products";
import Card from "./ui/card";

const Banner = () => {
  return (
    <section className="min-h-[85vh] bg-red-3 text-white relative">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="pt-24 text-[140px] font-act_of_rejection uppercase text-white/60">
          Future Looks Bright!
        </h2>
        <div className="absolute top-[230px] flex gap-5 pl-12">
          {bannerProducts?.map((item) => (
            <div key={item.id} className="w-[397px]">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
