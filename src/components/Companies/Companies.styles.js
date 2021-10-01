import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  color: white;
  padding: ${(props) => props.theme.padding.lg};
  font-family: ${(props) => props.theme.fonts.inter};

  margin-top: 250px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.01em;
`;

export const CompanyList = styled.ul`
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.01em;

  display: flex;
  flex-wrap: wrap;
`;

export const CompanyItem = styled.li`
  max-width: 280px;
  margin-right: 84px;
  margin: 0 84px 0 0;
`;
