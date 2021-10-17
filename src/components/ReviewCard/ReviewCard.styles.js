import styled from "styled-components";

import OGText from "../Text/Text";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  max-height: 304px;
  width: 100%;
  height: 100%;
  padding: 30px 28px 24px 40px;
  border-radius: 8px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  scroll-snap-align: center;
`;

export const Body = styled.div`
  padding-right: 12px;
`;

export const Logo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  align-self: end;
`;

export const Text = styled(OGText)`
  &.description {
    max-width: 935px;
    max-height: 150px;
    line-height: 31px;
    overflow: hidden;
  }
`;

export const Img = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;
