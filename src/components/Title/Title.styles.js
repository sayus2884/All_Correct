import styled from "styled-components";

export const Header = styled.h2`
  background-color: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;

  &.section-title {
    margin-bottom: 80px;
  }
`;
