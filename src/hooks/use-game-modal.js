import { useCallback, useState } from "react";

const UseGameModal = () => {
  const [showGameModal, setShowGameModal] = useState(false);

  const openGameModal = useCallback(() => setShowGameModal(true), [showGameModal]);
  const closeGameModal = useCallback(() => setShowGameModal(false), [showGameModal]);

  return { showGameModal, openGameModal, closeGameModal };
};

export default UseGameModal;
