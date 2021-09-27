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

export const Company = styled.li`
  background: red;
  height: 149px;
  width: 149px;
  margin: 0 0 102px 90px;


  &:nth-child(5n + 1) {
    background: blue;
    margin-left: 110px;
  }

  &:first-child {
    min-width: 280px;
    margin-right: 84px;
    margin: 0 84px 0 0;
  }
`;
