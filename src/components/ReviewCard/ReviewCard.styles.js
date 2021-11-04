import styled from "styled-components";

import OGText from "../Text/Text";
import OGSubText from "../SubText/SubText";

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

  @media screen and (max-width: 1025px) {
    max-height: 364px;
  }

  @media (max-width: 600px) {
    max-height: unset;
    padding: 24px 12px 22px;
  }
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

  @media (max-width: 600px) {
    &.description {
      max-width: 309px;
    }
  }
`;

export const SubText = styled(OGSubText)`
  @media (max-width: 600px) {
    text-align: right;
  }
`;

export const Img = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;
