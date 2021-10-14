import styled from "styled-components";

export const Section = styled.section`
  padding: ${(props) => props.theme.padding.lg};
  margin-bottom: 250px;
  color: ${(props) => props.theme.colors.white};
  overflow: hidden;
  position: relative;
`;
