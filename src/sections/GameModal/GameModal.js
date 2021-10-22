import { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { Overlay, Container, CloseButton } from "./GameModal.styles";

import GameInfo from "../../components/GameInfo/GameInfo";
import Portal from "../../components/Portal/Portal";

import GameModalContext from "../../context/GameModalContext";

import { gameModalAnim } from "../../styles/animations";

function GameModal(props) {
  const { selectedGame, showGameModal, closeGameModal } = useContext(GameModalContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleClose = (event) => {
    event.preventDefault();
    closeGameModal();
  };

  return (
    <Portal portalId="modal-root">
      {showGameModal && (
        <Overlay {...props} {...gameModalAnim}>
          <Container>
            <GameInfo game={selectedGame} />

            <CloseButton onClick={handleClose}>&#10005;</CloseButton>
          </Container>
        </Overlay>
      )}
    </Portal>
  );
}

export default GameModal;
