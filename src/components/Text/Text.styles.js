import styled from "styled-components";

export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;

  &.header {
    font-weight: bold;
  }
`;
