import styled from "styled-components";

export const Review = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.blue};
  border-radius: 8px;
  padding: 30px 28px 24px 40px;
  display: grid;
  gap: 20px;
  overflow: hidden;
  scroll-snap-align: center;
`;

export const Body = styled.div`
  padding-right: 12px;
`;

export const Logo = styled.div`
  width: auto;
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.white};

  &.sm {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Img = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;
