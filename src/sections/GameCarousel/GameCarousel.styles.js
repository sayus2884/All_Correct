import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { Carousel as Slider } from "react-responsive-carousel";

import OGSection from "../../components/Section/Section";
import OGLink from "../../components/Link/Link";
import OGSubTitle from "../../components/SubTitle/SubTitle";

export const Section = styled(OGSection)`
  margin: 100px 0 160px;
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
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  gap: 20px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 507px;
  width: 901px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TitleContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const SubTitle = styled(OGSubTitle)`
  text-align: left;
`;

export const Link = styled(OGLink)`
  position: absolute;
  bottom: 0;
  right: 40px;
`;
