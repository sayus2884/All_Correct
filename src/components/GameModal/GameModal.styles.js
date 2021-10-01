import styled from "styled-components";

export const Overlay = styled.div`
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
  display: flex;
  padding: 40px;
`;
