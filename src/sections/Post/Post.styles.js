import styled from "styled-components";

import OGSection from "../../components/Section/Section.js";
import OGLink from "../../components/Link/Link.js";
import OGTitle from "../../components/Title/Title.js";
import OGSubText from "../../components/SubText/SubText.js";

export const Section = styled(OGSection)`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoBack = styled(OGLink)`
  color: ${(props) => props.theme.colors.white};
`;

export const Columns = styled.div`
  display: flex;
  gap: 20px;
`;

export const Column = styled.div`
  &.header-container {
    min-width: 783px;
  }
`;

export const Title = styled(OGTitle)`
  margin-top: 30px;
  max-width: 670px;
`;

export const SubText = styled(OGSubText)`
  &.date {
    margin-top: 20px;
  }
`;

export const ImageWrapper = styled.div`
  width: 670px;
  height: 360px;
  position: relative;
`;

export const Content = styled.div`
  margin-top: 120px;
  line-height: 30px;
  letter-spacing: -0.01em;

  max-width: 783px;
`;
