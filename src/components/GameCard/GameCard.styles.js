import styled from "styled-components";

import OGLink from "../Link/Link";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* grid-template-columns: minmax(300px, 440px); */
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
