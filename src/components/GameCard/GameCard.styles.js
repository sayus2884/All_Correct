import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(300px, 440px);
  opacity: 0;
  transform: translateY(${(props) => (props.delay > 0 ? "100vh" : 0)});
  animation: ${(props) => `fadein .5s ${props.delay * 0.1}s forwards`};

  @keyframes fadein {
    to {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const Img = styled.div`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
`;

export const Text = styled.p`
  all: unset;
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.white};

  &.blue {
    color: ${(props) => props.theme.colors.blue};
  }

  &.button {
    line-height: 36px;
    cursor: pointer;
  }
`;
