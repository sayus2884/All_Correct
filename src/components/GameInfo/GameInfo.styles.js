import styled from "styled-components";

import OGTitle from "../../components/Title/Title.js";
import OGSubText from "../../components/SubText/SubText.js";

export const Container = styled.div`
  display: flex;
  padding: 40px;
`;

export const Title = styled(OGTitle)`
  margin-bottom: 40px;
`;

export const TwoColumns = styled.div`
  display: flex;
  gap: 40px;
`;

export const CarouselContainer = styled.div`
  max-width: 901px;
  min-width: 901px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 407px;
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

  visibility: ${({ show }) => (show ? "visible" : "hidden")};

  &:hover {
    cursor: pointer;
  }
`;

export const InfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Info = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubText = styled(OGSubText)`
  font-weight: bold;

  &.header {
    color: ${(props) => props.theme.colors.grey};
  }

  &.date {
    margin-top: 77px;
  }
`;
