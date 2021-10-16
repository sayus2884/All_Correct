import styled from "styled-components";

export const Anchor = styled.a`
  font-family: ${(props) => props.theme.fonts.inter};
  display: block;
  color: ${(props) => props.theme.colors.blue};

  &:hover {
    cursor: pointer;
  }
`;
