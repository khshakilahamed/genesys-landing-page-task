const FooterSubscribe = () => {
  return (
    <>
      <p className="xl:flex flex-col text-[24px] text-white font-montserrat">
        <span>Subscribe and be the first to receive</span>
        <span>notifications about our upcoming releases</span>
        <span>and the latest news.</span>
      </p>
      <form className="my-10">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="bg-transparent outline-none border rounded-xl w-full px-3 py-2 text-center text-white placeholder:text-center"
          required
        />
        <button type="submit" className="w-full bg-white rounded-xl mt-3 py-2">
          Subscribe
        </button>
      </form>
    </>
  );
};

export default FooterSubscribe;
