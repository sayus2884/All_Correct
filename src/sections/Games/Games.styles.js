import styled from "styled-components";
import OGSection from "../../components/Section/Section.js";

export const Section = styled(OGSection)`
  display: grid;
  gap: 60px;
  padding-top: 100px;
`;

export const MenuList = styled.ul`
  all: unset;
  display: flex;
  gap: 40px;
`;

export const GamesGrid = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 60px;
  margin-bottom: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  overflow: hidden;
  animation: ${(props) => (props.show ? "" : "shrink .5s ease-out forwards")};

  @keyframes shrink {
    0% {
      transform: scaleY(0) translateY(100px);
      opacity: 0;
    }
    10% {
      transform: scaleY(1) translateY(100px);
    }
    100% {
      transform: scaleY(1) translateY(0);
      opacity: 1;
    }
  }
`;

export const GameCard = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(300px, 440px);
  grid-template-rows: min(21vw, 300px) min-content;
  opacity: 0;
  transform: translateY(${(props) => (props.delay > 0 ? "100vh" : 0)});
  animation: ${(props) => `fadein .5s ${props.delay * 0.1}s forwards`};

  &:hover {
    cursor: pointer;
  }

  @keyframes fadein {
    to {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const Img = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
