import styled from "styled-components";

export const Page = styled.div`
  /* background-color: ${(props) => props.theme.colors.dark}; */
`;

export const GlobalWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  max-width: 1440px;
  width: 100%;
  margin: auto;
  min-height: 100vh;

  @media screen and (max-width: 375px) {
     {
      max-width: 375px;
    }
  }
`;
