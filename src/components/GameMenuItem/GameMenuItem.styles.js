import styled from "styled-components";
import { Text } from "../Games/Games.styles";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

export const Item = styled(Text)`
  line-height: 30px;

  &.black {
    color: ${(props) => props.theme.colors.black};
    padding-bottom: 5px;
    padding-left: 11px;
  }

  &.menu {
    background: #eaeaea;
    border-radius: 4px;
    padding: 5px 11px;
  }
`;

export const Icon = styled.div`
  width: 21px;
  height: 13px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='20' height='12' viewBox='0 0 20 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 2L9.29289 9.29289C9.68342 9.68342 10.3166 9.68342 10.7071 9.29289L18 2' stroke='%234A8EFF' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-top: 2px;
  align-self: center;
  transform: ${(props) => (props.open ? "rotate(0deg)" : "rotate(-90deg)")};
  transition: all 0.2s;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  display: grid;
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  overflow: hidden;
  gap: 5px;
  min-width: 329px;
  z-index: 1;
  top: 100%;
  left: 0;
  margin-top: 10px;
  padding: ${(props) => (props.open ? "11px 5px" : 0)};
  max-height: ${(props) => (props.open ? "100vh" : 0)};
  transition: padding 0.1s;
`;
