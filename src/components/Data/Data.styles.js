import styled from "styled-components";

export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;

  &.header {
    color: #9d9d9d;
  }
`;
