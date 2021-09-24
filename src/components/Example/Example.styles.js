import styled from "styled-components";

export const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => props.theme.colors.primary};
`;

export const SubTitle = styled.h2`
  font-size: 35px;
  color: ${(props) => props.color};
`;
