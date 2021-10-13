import styled from "styled-components";

export const LookingForWrapper = styled.section`
  font-family: ${({ theme }) => theme.fonts.inter};
  width: 787px;
  letter-spacing: -0.01;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 500px;
  margin-top: 250px;
`;

export const LookingForTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.9;
  margin-bottom: 30px;
`;

export const LookingForList = styled.ul`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
`;

export const LookingForListItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 700;
  }
`;

export const LookingForListTitle = styled.h5`
  margin-top: 40px;
  font-size: 20px;
`;

export const LookingForListText = styled.p`
  margin-bottom: 20px;
`;
