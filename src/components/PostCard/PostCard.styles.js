import styled from "styled-components";

export const Container = styled.div`
  font-family: ${(props) => props.theme.fonts.inter};
  background: ${({ image, theme }) => (image ? theme.colors.black : theme.colors.blue)};
  border-radius: 4px;
  height: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  min-height: 280px;
  padding: ${({ image }) => (image ? "28px 30px" : "54px 30px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const ImageWrapper = styled.div`
  height: 280px;
  position: relative;
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
  line-height: 20px;
  letter-spacing: -0.01em;
`;
