import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.lg};
  margin-top: 250px;
`;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.inter};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.01em;
`;

export const CompanyList = styled.ul`
  display: grid;
  grid-template-columns: 364px repeat(4, 149px);
  row-gap: 90px;
  align-items: center;
  justify-items: end;
  justify-content: space-between;
`;

export const CompanyItem = styled.li`
  padding-right: 84px;
`;
