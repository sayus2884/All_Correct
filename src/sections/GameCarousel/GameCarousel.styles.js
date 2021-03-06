import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { Carousel as Slider } from "react-responsive-carousel";

import OGSection from "../../components/Section/Section";
import OGLink from "../../components/Link/Link";
import OGSubTitle from "../../components/SubTitle/SubTitle";

export const Section = styled(OGSection)`
  margin: 100px 0 160px;

  @media (max-width: 1025px) {
    margin-top: 38px;
    margin-bottom: 160px;
  }

  @media (max-width: 500px) {
    margin: 60px 0 100px;
    display: flex;
    flex-direction: column;
    padding: 0 0;
  }
`;

export const Carousel = styled(Slider)`
  & .carousel .control-dots {
    margin: 0;
    width: max-content;
    left: calc(901px + 40px);
    display: flex;
    gap: 12px;

    & .dot {
      margin: 0;
      width: 12px;
      height: 12px;
    }
  }

  @media (max-width: 1025px) {
    & .carousel .control-dots {
      left: 670px;
    }
  }

  @media (max-width: 500px) {
    & .carousel {
      position: unset;
    }

    & .carousel .control-dots {
      position: absolute;
      bottom: 0;
      left: 16px;

      & .dot {
        width: 8px;
        height: 8px;
      }
    }
  }
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 507px;
  width: 901px;

  @media (max-width: 1025px) {
    height: 366px;
    width: 650px;
  }

  @media (max-width: 500px) {
    height: 211px;
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  flex: 1;
`;

export const TitleContainer = styled.div`
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    padding: 0 16px;
  }
`;

export const SubTitle = styled(OGSubTitle)`
  text-align: left;

  @media (max-width: 500px) {
    display: inline-block;
    font-size: 22px;
    line-height: 27px;

    & br {
      display: none;
    }
  }
`;

export const Link = styled(OGLink)`
  position: absolute;
  bottom: 0;
  right: 40px;

  @media (max-width: 500px) {
    display: inline-block;
    position: unset;
    width: fit-content;
    align-self: end;
    margin-right: 16px;
    margin-top: 30px;
  }
`;
