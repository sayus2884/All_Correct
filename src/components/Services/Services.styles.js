import styled from "styled-components";

export const Container = styled.section`
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.padding.lg};
  padding-top: 160px;
  font-family: ${(props) => props.theme.fonts.inter};
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  margin-bottom: 80px;
  letter-spacing: -0.01em;
`;

export const OrderedList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.01em;
  max-width: 1130px;
`;

export const OrderedItem = styled.li`
  display: flex;
  gap: 0.5rem;
`;

export const GamesContainer = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 60px;
`;

export const Link = styled.a`
  display: block;
  text-align: right;

  margin: 80px 150px 0 0;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.blue};

  &:hover {
    cursor: pointer;
  }
`;
