import styled from "styled-components";

export const Container = styled.div`
  font-family: ${(props) => props.theme.fonts.inter};
  background: ${({ hasImage, theme }) => (hasImage ? theme.colors.black : theme.colors.blue)};
  border-radius: 4px;
  height: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  height: ${({ hasImage }) => (hasImage ? "100%" : "280px")};
  padding: ${({ hasImage }) => (hasImage ? "28px 0 20px" : "54px 30px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  &.headline {
    height: ${({ hasImage }) => (hasImage ? "100%" : "360px")};
    padding-bottom: ${({ hasImage }) => (hasImage ? "60px" : "54px")};
    max-width: ${({ hasImage }) => (hasImage ? "437px" : "100%")};
  }

  @media screen and (max-width: 1025px) {
    padding: ${({ hasImage }) => (hasImage ? "28px 0" : "34px 16px 16px")};

    &.headline {
      max-height: ${({ hasImage }) => (hasImage ? "280px" : "unset")};
      height: ${({ hasImage }) => (hasImage ? "100%" : "280px")};
      max-width: ${({ hasImage }) => (hasImage ? "311px" : "100%")};
      padding-bottom: ${({ hasImage }) => (hasImage ? "34px" : "43px")};
    }
  }

  @media screen and (max-width: 375px) {
    padding: ${({ hasImage }) => (hasImage ? "16px 0 0" : "16px 14px")};

    &.headline {
      padding: ${({ hasImage }) => (hasImage ? "16px 0 0" : "16px 14px")};
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 280px;
  position: relative;

  &.headline {
    height: 360px;
  }

  @media screen and (max-width: 1025px) {
    &.headline {
      height: 280px;
    }
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -0.01em;
`;

export const Description = styled.p`
  max-height: 80px;
  overflow: hidden;

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
`;
