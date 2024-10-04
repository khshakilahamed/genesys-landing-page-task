import doubleQuote from "./../assets/Icon/quotes.svg";
import Container from "./shared/Container";
import Hero from "./../assets/img/pat-home-hero.png"

const Mission = () => {
  return (
    <section className="min-h-min 3xl:min-h-[530px] bg-gradient-to-r from-red-2 to-red-5">
      <Container>
        <div className="flex flex-row relative py-24">
          <div className="w-full 3xl:w-2/3 space-y-4">
            <img src={doubleQuote} alt="double quotation" />
            <div className="relative">
              <h2 className="flex flex-col font-montserrat gap-5 font-bold text-white uppercase absolute left-12 -top-40 md:-top-32 3xl:-top-24 text-2xl md:text-3xl xl:text-4xl 3xl:text-[42px]">
                <span>Our mission is to enlighten, entertain</span>
                <span>and empower current and future</span>
                <span>leaders around the world.</span>
              </h2>
            </div>
          </div>
          <div className="w-1/3 relative hidden 3xl:block">
            <img
              className="absolute -top-[250px] right-0"
              src={Hero}
              alt="hero"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
