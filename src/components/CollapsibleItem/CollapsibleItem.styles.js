import styled from "styled-components";
import OGSubTitle from "../SubTitle/SubTitle";

export const Container = styled.li`
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
  align-items: center;

  @media screen and (max-width: 376px) {
    padding-bottom: 20px;
  }
`;

export const SubTitle = styled(OGSubTitle)`
  @media screen and (max-width: 376px) {
    font-size: 24px;
    line-height: 30px;
    max-width: 290px;
  }
`;

export const DropdownButton = styled.button`
  all: unset;
  color: ${(props) => props.theme.colors.blue};
  border: none;
  background: none;
  font-weight: bold;
  font-size: 32px;
  line-height: 30px;

  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "none")};
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  padding: ${({ isOpen }) => (isOpen ? "30px 0 60px" : "0")};
  transition: all 0.1s ease-out, padding-top 0.3s ease-out, padding-bottom 0.2s ease-out, height 0s,
    opacity 0.4s 0.1s;
  transition: ${({ isOpen }) =>
    isOpen
      ? "all 0.1s ease-out, padding-top 0.3s ease, padding-bottom 0.1s linear, height 0s, opacity .4s .1s"
      : "all 0.1s ease-out, height 0s, opacity 0s"};
  line-height: 19px;
  font-size: 16px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 376px) {
    flex-direction: column;
    gap: 30px;
  }
`;
