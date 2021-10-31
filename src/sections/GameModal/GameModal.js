import { useState, useContext, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { Overlay, Container, CloseButton } from "./GameModal.styles";

import GameInfo from "../../components/GameInfo/GameInfo";
import Portal from "../../components/Portal/Portal";

import GameModalContext from "../../context/GameModalContext";

import { gameModalAnim } from "../../styles/animations";

function GameModal(props) {
  const { selectedGame, showGameModal, closeGameModal } = useContext(GameModalContext);

  const handleClose = (event) => {
    event.preventDefault();
    closeGameModal();
  };

  const handleOnEscapePress = useCallback(
    (event) => {
      if (event.key === "Escape" && showGameModal) {
        closeGameModal();
      }
    },
    [showGameModal],
  );

  useEffect(() => {
    if (showGameModal) {
      document.addEventListener("keydown", handleOnEscapePress);
    } else {
      document.removeEventListener("keydown", handleOnEscapePress);
    }

    return () => document.removeEventListener("keydown", handleOnEscapePress);
  }, [showGameModal]);

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
