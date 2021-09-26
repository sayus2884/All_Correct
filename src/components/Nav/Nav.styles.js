import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: ${(props) => props.theme.padding.lg};
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: grid;
  cursor: pointer;
  max-height: 126px;
`;

export const Menu = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 32px;
  grid-template-columns: repeat(7, auto);
  grid-auto-rows: min-content;
  align-content: center;

  & > * {
    height: min-content;
    cursor: pointer;
  }

  & .block {
    grid-column: 1/-1;
    width: max-content;
    justify-self: end;
  }
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 900;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors[props.color] || props.theme.colors.white};

  &.normal {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
  }
`;
