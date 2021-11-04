import styled from "styled-components";

export const Header = styled.h2`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;

  @media (max-width: 500px) {
    font-size: 32px;
    line-height: 39px;
  }
`;
