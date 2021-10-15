import styled from "styled-components";

import OGLink from "../../components/Link/Link.js";
import OGText from "../../components/Text/Text.js";

export const Text = styled(OGText)`
  margin-top: 40px;
  max-width: 1015px;
`;

export const Link = styled(OGLink)`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 250px;
  margin-right: 23px;
  text-align: right;
`;
