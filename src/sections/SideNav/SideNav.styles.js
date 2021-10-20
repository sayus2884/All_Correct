import styled from "styled-components";

import OGLink from "../../components/Link/Link";
import OGTitle from "../../components/Title/Title";
import OGButton from "../../components/Button/Button";

export const Container = styled.nav`
  position: fixed;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.black};
  width: 100%;
  height: 100%;
  z-index: 9999;
  padding: 16px;
  overflow: hidden;

  &.hidden {
    padding: 0;
    height: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;

  background-image: url("/images/icons/close.svg");
  background-repeat: no-repeat;
  background-position: center;
  height: 44px;
  width: 44px;
`;

export const Title = styled(OGTitle)`
  font-weight: 900;
  font-size: 36px;
  line-height: 44px;
`;

export const Link = styled(OGLink)`
  color: ${(props) => props.theme.colors.white};
`;

export const Menu = styled.div`
  margin-top: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
