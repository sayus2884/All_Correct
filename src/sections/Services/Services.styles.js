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
`;

export const Link = styled(OGLink)`
  align-self: end;
  margin-top: 80px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
  max-width: 482px;
`;
