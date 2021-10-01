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

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 901px;
  min-width: 901px;
`;

export const Image = styled.img`
  height: 107px;
  object-fit: cover;
`;

export const Controller = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Counter = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.01em;
`;
export const ArrowButton = styled.button`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.01em;

  background: none;
  border: none;
  color: #4a8eff;

  &:hover {
    cursor: pointer;
  }
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
export const Data = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
`;

export const Date = styled.div`
  margin-top: 77px;
`;
