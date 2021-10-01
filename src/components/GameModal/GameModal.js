import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, Container } from "./GameModal.styles";

function GameModal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const jsx = (
    <Overlay>
      <Container>{children}</Container>
    </Overlay>
  );

  return mounted ? createPortal(jsx, document.getElementById("modal-root")) : null;
}

export default GameModal;
