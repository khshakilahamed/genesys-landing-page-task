import "./App.css";
import Banner from "./components/Banner";
import BookSection from "./components/Book";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Products from "./components/Products";
import Footer from "./components/Footer/Footer";
import ToggleMenu from "./components/ToggleMenu";
import useModal from "./hooks/useModal";

function App() {
  const { showModal, openModal, closeModal } = useModal();

  return (
    <>
      <div className="bg-red-3">
        <Header openModal={openModal} />
        <Banner />
      </div>
      <Products />
      <BookSection />
      <Mission />
      <Footer />
      {showModal && <ToggleMenu closeModal={closeModal} />}
    </>
  );
}

export default App;
