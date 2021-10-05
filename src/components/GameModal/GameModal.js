import { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { Overlay, Container, CloseButton } from "./GameModal.styles";

import GameInfo from "../GameInfo/GameInfo.js";

import GameModalContext from "../../context/GameModalContext";

function GameModal({ children }) {
  const { selectedGames, selectedGameIndex, showGameModal, closeGameModal } = useContext(
    GameModalContext,
  );

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleClose = (event) => {
    event.preventDefault();
    closeGameModal();
  };

  const jsx = showGameModal && (
    <Overlay>
      <Container>
        <GameInfo games={selectedGames} selectedIndex={selectedGameIndex} />

        <CloseButton onClick={handleClose}>&#10005;</CloseButton>
      </Container>
    </Overlay>
  );

  return mounted ? createPortal(jsx, document.getElementById("modal-root")) : null;
}

export default GameModal;
