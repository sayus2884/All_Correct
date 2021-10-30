import styled from "styled-components";

import OGTitle from "../../components/Title/Title.js";
import OGLink from "../../components/Link/Link.js";
import OGSubText from "../../components/SubText/SubText.js";

export const Title = styled(OGTitle)`
  margin-bottom: 80px;
`;

export const OrderedList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.01em;
  max-width: 1130px;
`;

export const OrderedItem = styled.li`
  display: flex;
  gap: 0.5rem;
`;

export const SubText = styled(OGSubText)`
  font-weight: 400;
  line-height: 24px;
`;

export const GamesContainer = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 60px;
  overflow-x: auto;
  padding-bottom: 40px;

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
    flex-direction: column;
    gap: 50px;
  }
`;

export const Link = styled(OGLink)`
  align-self: end;
  margin-top: 40px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
  max-width: 482px;

  @media screen and (max-width: 376px) {
    margin-top: 60px;
  }
`;
