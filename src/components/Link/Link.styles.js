import styled from "styled-components";

export const Paragraph = styled.a`
  display: block;
  color: ${(props) => props.theme.colors.blue};

  &:hover {
    cursor: pointer;
  }
`;
