import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 40px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;
  margin-bottom: 40px;
`;

export const TwoColumns = styled.div`
  display: flex;
  gap: 40px;
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 507px;
  width: 901px;
  background: red;
`;
export const Controller = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const InfoContainer = styled.ul``;
export const Info = styled.li`
  margin-bottom: 32px;

  &:last-child {
    margin: 0;
  }
`;
export const Type = styled.h3`
  color: #9d9d9d;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  letter-spacing: -0.01em;
`;
export const Data = styled.p``;

export const Date = styled.div`
  margin-top: 77px;
`;
