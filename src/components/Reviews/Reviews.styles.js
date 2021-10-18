import styled from "styled-components";

import OGSection from "../Section/Section";
import OGTitle from "../Title/Title";

export const Container = styled(OGSection)`
  display: grid;
  padding-right: 0;
`;

export const Title = styled(OGTitle)`
  &.section-title {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 376px) {
    &.section-title {
      margin-bottom: 40px;
    }
  }
`;

export const ReviewsContainer = styled.div`
  all: unset;
  width: 100%;
  overflow-x: auto;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1015px;
  grid-template-rows: 304px;
  gap: 20px;
  padding-bottom: 40px;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: block;
    cursor: pointer;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    margin-right: min(2.8vw, 40px);
    background: linear-gradient(to top, transparent 0 35%, #c4c4c4 35% 65%, transparent 65% 100%);
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.blue};
    background: linear-gradient(to top, transparent 0 25%, #4a8eff 25% 75%, transparent 75% 100%);
    border-radius: 2px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.blue};
  }

  @media screen and (max-width: 376px) {
    grid-auto-columns: 309px;
    grid-template-rows: 638px;
    gap: 12px;
  }

  @media screen and (min-width: 1025px) {
    grid-auto-columns: 733px;
    grid-template-rows: 733px;
    gap: 12px;
  }
`;
