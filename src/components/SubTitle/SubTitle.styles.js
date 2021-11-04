import styled from "styled-components";

export const Header = styled.h3`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.01em;

  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
