import styled from "styled-components";

import OGSubTitle from "../../components/SubTitle/SubTitle.js";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.lg};
  margin-top: 250px;
`;

export const SubTitle = styled(OGSubTitle)`
  &.mobile {
    display: none;
  }

  @media screen and (max-width: 1025px) {
    &.tablet {
      max-width: 231px;
    }
  }

  @media screen and (max-width: 376px) {
    font-size: 32px;
    line-height: 39px;

    &.mobile {
      display: block;
    }
  }
`;

export const CompanyList = styled.ul`
  display: grid;
  grid-template-columns: 364px repeat(4, 149px);
  row-gap: 90px;
  align-items: center;
  justify-items: end;
  justify-content: space-between;

  @media screen and (max-width: 376px) {
    margin-top: 50px;
    row-gap: 32px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1025px) {
    row-gap: 44px;
    grid-template-columns: calc(231px + 104px - 44px) repeat(4, 130px);
    }
  }
`;

export const CompanyItem = styled.li`
  padding-right: 84px;

  &.mobile {
    display: block;
  }

  @media screen and (max-width: 376px) {
    &.mobile {
      display: none;
    }
  }
`;
