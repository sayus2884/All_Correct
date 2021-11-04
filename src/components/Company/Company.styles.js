import styled from "styled-components";

export const Container = styled.li`
  cursor: pointer;
  line-height: 0;
  &:nth-child(n + 6) {
    transform: translateX(-100px);
  }

  @media (max-width: 500px) {
    &:nth-child(n + 6) {
      transform: unset;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 130px;
  width: 130px;
  position: relative;

  @media (max-width: 500px) {
    height: 80px;
    width: 80px;
  }
`;

export const Link = styled.a`
  all: unset;
  display: contents;
`;
