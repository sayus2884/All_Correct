import styled from "styled-components";

import OGTitle from "../../components/Title/Title";
import OGButton from "../../components/Button/Button";

export const Container = styled.nav`
  position: fixed;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.black};
  overflow: hidden;
  z-index: 9999;
  width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  height: 100%;
  padding: ${({ isOpen }) => (isOpen ? "16px" : "16px 0")};

  transition: ${({ isOpen }) =>
    isOpen
      ? "all 0.25s ease-out, padding-top 0.3s ease, padding-bottom 0.1s linear, height 0s, opacity .4s .1s"
      : "all 0.1s ease-out, height 0s, opacity 0s"};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
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

export const Link = styled.a`
  cursor: pointer;
`;

export const Menu = styled.div`
  margin-top: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
