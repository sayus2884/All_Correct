import styled from "styled-components";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.inter};
  padding: ${(props) => props.theme.padding.lg};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoBack = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  letter-spacing: -0.01em;

  &:hover {
    cursor: pointer;
  }
`;

export const Columns = styled.div`
  display: flex;
  gap: 20px;
`;

export const Column = styled.div`
  &.header-container {
    min-width: 783px;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;

  margin-top: 30px;
  max-width: 670px;
`;

export const Date = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;

  margin-top: 20px;
`;

export const ImageWrapper = styled.div`
  width: 670px;
  height: 360px;
  position: relative;
`;

export const Content = styled.div`
  margin-top: 120px;
  line-height: 30px;
  letter-spacing: -0.01em;

  max-width: 783px;
`;
