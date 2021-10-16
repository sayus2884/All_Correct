import styled from "styled-components";

import OGSection from "../../components/Section/Section.js";
import OGLink from "../../components/Link/Link.js";
import OGText from "../../components/Text/Text.js";

export const Section = styled(OGSection)`
  display: flex;
  justify-content: end;
`;

export const LookingForWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 783px;
`;

export const LookingForList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Text = styled(OGText)`
  font-weight: 400;
`;

export const Link = styled(OGLink)`
  margin-top: 20px;
  font-weight: bold;
`;
