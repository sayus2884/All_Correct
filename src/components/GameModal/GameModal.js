import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, Container, CloseButton } from "./GameModal.styles";

function GameModal({ children }) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleClose = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  const jsx = isOpen && (
    <Overlay>
      <Container>
        {children}

        <CloseButton onClick={handleClose}>X</CloseButton>
      </Container>
    </Overlay>
  );

  return mounted ? createPortal(jsx, document.getElementById("modal-root")) : null;
}

export default GameModal;
