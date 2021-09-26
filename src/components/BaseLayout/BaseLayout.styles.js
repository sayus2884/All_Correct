import styled from "styled-components";

export const GlobalWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  background-color: ${props => props.theme.colors.dark};
  min-height: 100vh;
`;
