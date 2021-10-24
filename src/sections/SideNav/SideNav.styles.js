import { motion } from "framer-motion";
import styled from "styled-components";

import OGTitle from "../../components/Title/Title";
import OGButton from "../../components/Button/Button";

export const Container = styled(motion.nav)`
  position: fixed;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.black};
  overflow: hidden;
  z-index: 9999;
  width: 100%;
  height: 100%;
`;

export const ContainerWrapper = styled.div`
  padding: 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled(motion.button)`
  background: none;
  border: none;

  cursor: pointer;

  background-image: url("/images/icons/close.svg");
  background-repeat: no-repeat;
  background-position: center;
  height: 44px;
  width: 44px;
`;

export const Title = styled(OGTitle)`
  font-weight: 900;
  font-size: 36px;
  line-height: 44px;
`;

export const Link = styled(motion.a)`
  cursor: pointer;
`;

export const Menu = styled(motion.div)`
  margin-top: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
