import styled from "styled-components";

export const Section = styled.section`
  padding: ${(props) => props.theme.padding.lg};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.inter};

  margin-bottom: 250px;
  overflow: hidden;
  position: relative;
`;
