import Container from "./shared/Container";
import RightArrow from "./../assets/Icon/right-arrow.svg";
import AuthorSignature from "./../assets/img/author-signature.png";
import Book from "./../assets/img/book.png";

const BookSection = () => {
  return (
    <section className="bg-black text-white py-32">
      <Container>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-8 order-last md:order-first">
            <div className="flex flex-col-reverse md:flex-col">
              <div className="space-y-6 md:space-y-8">
                <h2 className="font-montserrat text-white-1 text-3xl md:text-4xl 3xl:text-[49px] uppercase">
                  Patrick Bet-David&apos;s
                </h2>
                <h2 className="font-montserrat flex flex-col space-y-4 font-bold uppercase text-4xl md:text-5xl lg:text-6xl 3xl:text-[70px] bg-gradient-to-b from-red-4 to-red-1 text-transparent bg-clip-text">
                  <span>Signed</span> <span>Collection</span>
                </h2>
                <button className="  flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 px-8 rounded-xl hover:bg-red-4">
                  Shop now{" "}
                  <img src={RightArrow} alt="arrow" />
                </button>
              </div>
              <img
                className="w-full pr-5"
                src={AuthorSignature}
                alt="author signature"
              />
            </div>
          </div>
          <div className="order-first md:order-last">
            <img src={Book} alt="book" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookSection;
