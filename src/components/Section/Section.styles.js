import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled(motion.section)`
  padding: ${(props) => props.theme.padding.lg};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.inter};

  margin-bottom: 250px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1025px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 376px) {
    margin-bottom: 160px;
    padding: 0 16px;
  }
`;
