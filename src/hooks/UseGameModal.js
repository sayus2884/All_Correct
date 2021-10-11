import { useCallback, useState } from "react";

const UseGameModal = () => {
  const [showGameModal, setShowGameModal] = useState(false);

  const openGameModal = () => setShowGameModal(true);
  const closeGameModal = () => setShowGameModal(false);

  return { showGameModal, openGameModal, closeGameModal };
};

export default UseGameModal;
