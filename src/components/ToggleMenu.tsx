import React from "react";

const ToggleMenu = ({ closeModal }) => {
  return (
    <div className="bg-black text-white w-full h-[100vh] fixed top-0 left-0 right-0 z-40">
      <p
        className="fixed right-5 top-5 z-50 text-red-5 text-3xl font-bold cursor-pointer"
        onClick={closeModal}
      >
        X
      </p>
      <div className="my-20 h-full flex items-center justify-center overflow-y-auto">
        <ul className="space-y-5">
          <li
            className="text-3xl font uppercase text-center cursor-pointer hover:text-red-1"
            onClick={closeModal}
          >
            Banner
          </li>
          <li
            className="text-3xl font uppercase text-center cursor-pointer hover:text-red-1"
            onClick={closeModal}
          >
            products
          </li>
          <li
            className="text-3xl font uppercase text-center cursor-pointer hover:text-red-1"
            onClick={closeModal}
          >
            Book
          </li>
          <li
            className="text-3xl font uppercase text-center cursor-pointer hover:text-red-1"
            onClick={closeModal}
          >
            Mission
          </li>
          <li
            className="text-3xl font uppercase text-center cursor-pointer hover:text-red-1"
            onClick={closeModal}
          >
            Footer
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToggleMenu;
