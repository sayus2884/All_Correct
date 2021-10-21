import styled from "styled-components";

export const Overlay = styled.div`
  height: 100vh;
  overflow: auto;
  z-index: 999;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.inter};
  position: fixed;
  top: 0;
  bottom: 0;

  background: rgba(25, 25, 25, 0.8);
  backdrop-filter: blur(14px);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 40px;

  @media screen and (max-width: 1025px) {
    margin: 40px 20px;
  }

  @media screen and (max-width: 376px) {
    margin: 35px 0 40px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  right: 0;

  font-weight: bold;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1025px) {
    top: 1rem;
    right: 20px;
  }

  @media screen and (max-width: 376px) {
    top: 0.5rem;
    right: 16px;
  }
`;
