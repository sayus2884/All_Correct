import styled from "styled-components";

export const Container = styled.ul`
  width:100%;
  position: relative;
  padding: ${(props) => props.theme.padding.lg};
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.inter};
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid  ${(props) => props.theme.colors.white};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 70px 0 30px;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  line-height: 30px;
`

export const DropdownButton = styled.button`
  color: ${(props) => props.theme.colors.blue};
  border: none;
  background: none;
  font-weight: bold;
  font-size: 32px;
  line-height: 30px;

  &:hover {
    cursor: pointer;
  }
`

export const Content = styled.div`
  visibility: hidden;
  height: 0;
`
