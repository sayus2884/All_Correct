// Integration of Framer with style-components
// ref: https://dev.to/darthknoppix/animate-styled-components-with-framer-motion-2202

// Integration of animatino on scroll with framer
// ref: https://dev.to/elvis2280/scroll-reveal-with-framer-motion-224

export const variants = {
  OPEN: "open",
  CLOSED: "closed",
};

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

export const sideNavAnim = {
  variants: {
    [variants.OPEN]: {
      width: "100%",
      transition: { duration: 0.4, type: "spring" },
    },
    [variants.CLOSED]: {
      width: 0,
      transition: { delay: 0.5, duration: 0.2, type: "tween" },
    },
  },
};

export const staggerOptions = {
  [variants.OPEN]: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  [variants.CLOSED]: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const easeInBottomAnim = {
  variants: {
    [variants.OPEN]: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    [variants.CLOSED]: {
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
};
