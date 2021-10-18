import styled from "styled-components";

import OGTitle from "../../components/Title/Title.js";
import OGSubText from "../../components/SubText/SubText.js";

export const Title = styled(OGTitle)`
  margin-bottom: 40px;

  @media screen and (max-width: 376px) {
    margin-left: 16px;
    max-width: 299px;
  }
`;

export const TwoColumns = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 376px) {
    flex-direction: column;
    gap: 44px;
  }
`;

export const CarouselContainer = styled.div`
  max-width: 901px;
  min-width: 901px;

  @media screen and (max-width: 376px) {
    max-width: unset;
    min-width: unset;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  min-height: 407px;
`;

export const Controller = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 376px) {
    margin: 20px 16px 0;
  }
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

  @media screen and (max-width: 376px) {
    margin: 0 16px;
  }
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

  @media screen and (max-width: 376px) {
    &.date {
      display: none;
    }

    &.date.mobile {
      display: block;
      margin: 100px 16px 0;
      text-align: right;
    }
  }
`;
