import styled from "styled-components";

export const Container = styled.li`
  line-height: 0;
  &:nth-child(n + 6) {
    transform: translateX(-100px);
  }
`;

export const Link = styled.a`
  all: unset;
  display: contents;
`;
