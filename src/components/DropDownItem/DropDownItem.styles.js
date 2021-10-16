import styled from "styled-components";

import OGText from "../Text/Text";

export const Item = styled(OGText)`
  font-weight: bold;
  padding: 5px 11px;
  border-radius: 4px;
  color: black;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.lightGrey};
    color: ${(props) => props.theme.colors.blue};
    border-radius: 4px;
  }
`;
