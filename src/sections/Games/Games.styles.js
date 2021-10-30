import styled from "styled-components";
import OGSection from "../../components/Section/Section.js";

export const Section = styled(OGSection)`
  overflow: visible;
  padding-top: 100px;

  @media screen and (max-width: 376px) {
    padding-top: 60px;
  }
`;

export const MenuList = styled.ul`
  margin-bottom: 60px;
  display: flex;
  gap: 40px;

  @media screen and (max-width: 376px) {
    flex-direction: column;
  }
`;

export const GamesGrid = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 60px;
  margin-bottom: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  overflow: hidden;

  @media screen and (max-width: 376px) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`;

export const GameCard = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(300px, 440px);
  grid-template-rows: min(21vw, 300px) min-content;
  opacity: 0;
  transform: translateY(${(props) => (props.delay > 0 ? "100vh" : 0)});

  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
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
    margin-top: 80px;
    line-height: 36px;
    cursor: pointer;
  }

  @media screen and (max-width: 376px) {
    &.button {
      text-align: center;
    }
  }
`;
