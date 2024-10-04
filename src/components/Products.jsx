import { products } from "../constants/products";
import Container from "./shared/Container";
import Card from "./ui/card";

const Products = () => {
  return (
    <section className="bg-gray-1 py-24">
      <Container>
        <div className="">
          <h2 className="flex flex-col font-montserrat font-bold tracking-wide uppercase leading-[50px] md:leading-[60px] lg:leading-[80px] text-4xl md:text-5xl lg:text-6xl 3xl:text-[70px]">
            <span>Buy 1 get 1 Free </span>
            <span>
              on{" "}
              <span className="text-transparent bg-clip-text custom-stroke">
                best selling products
              </span>
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-4 gap-2 3xl:gap-5 pt-12">
          {products.map((item, index) => (
            <div
              key={index}
              className="w-auto 2xl:w-[350px] 3xl:w-[387px] bg-white p-4 rounded-xl"
            >
              <Card item={item} imageHeight={"lg:h-[357px]"} isHover={true} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
