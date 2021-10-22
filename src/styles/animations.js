// Integration of Framer with style-components
// ref: https://dev.to/darthknoppix/animate-styled-components-with-framer-motion-2202

// Integration of animatino on scroll with framer
// ref: https://dev.to/elvis2280/scroll-reveal-with-framer-motion-224

export const sectionAnim = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, type: "tween" },
};

export const gameModalAnim = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, type: "tween" },
};

export const getInTouchModalAnim = {
  initial: { opacity: 0, width: 0 },
  animate: { opacity: 1, width: "100%" },
  exit: { width: 0 },
  transition: { duration: 0.4, type: "tween" },
};
