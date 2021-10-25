import styled from "styled-components";

import OGText from "../../components/Text/Text.js";
import OGSection from "../../components/Section/Section.js";
import OGLink from "../../components/Link/Link.js";

export const Section = styled(OGSection)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 100px 0 310px;
  gap: 100px 20px;

  @media screen and (max-width: 376px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    margin-bottom: 160px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  &.links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column: span 2;
  }

  @media screen and (max-width: 376px) {
    &.mobile-hidden {
      display: none;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Text = styled(OGText)`
  font-size: 24px;
  line-height: 32px;
`;

export const Link = styled(OGLink)`
  @media screen and (max-width: 376px) {
    &.mobile-show {
      display: block;
    }
  }
`;
