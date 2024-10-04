import { useState, useEffect } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      // Disable scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll when modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup when the component using this hook unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return { showModal, openModal, closeModal };
};

export default useModal;
