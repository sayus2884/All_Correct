import styled from "styled-components";
import OGSection from "../../components/Section/Section.js";
import OGTitle from "../../components/Title/Title.js";
import OGText from "../../components/Text/Text.js";

export const Section = styled(OGSection)`
  margin-top: 180px;

  @media (max-width: 500px) {
    margin-top: 100px;
  }
`;

export const Title = styled(OGTitle)`
  &.section-title {
    max-width: 900px;
  }
`;

export const Text = styled(OGText)`
  margin-top: 34px;
  max-width: 555px;
`;

export const LinksContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: end;
  gap: 71px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.blue};

  font-weight: bold;
  font-size: 52px;
  line-height: 63px;

  letter-spacing: -0.01em;
`;
