import styled from "styled-components";
import { motion } from "framer-motion";
import OGLink from "../Link/Link";

export const Container = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Img = styled.div`
  position: relative;
  min-width: ${({ width }) => (width ? `${width}px` : "100%")};
  min-height: ${({ height }) => (height ? `${height}px` : "100%")};

  @media screen and (max-width: 1025px) {
    min-height: 214px;
  }

  @media screen and (max-width: 376px) {
    min-height: 232px;
  }
`;

export const Link = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;

  &:hover {
    cursor: pointer;
  }
`;
