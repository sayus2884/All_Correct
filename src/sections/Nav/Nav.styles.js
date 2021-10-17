import styled from "styled-components";

import OGLink from "../../components/Link/Link";

export const Container = styled.nav`
  color: ${(props) => props.theme.colors.white};
  position: relative;
  min-height: 166px;
  padding: ${(props) => (props.inherit ? "" : props.theme.padding.lg)};
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(OGLink)`
  color: ${(props) => props.theme.colors.white};
`;

export const Menu = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 32px;
  grid-template-columns: repeat(7, auto);
  grid-auto-rows: min-content;
  margin-top: 30px;

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
