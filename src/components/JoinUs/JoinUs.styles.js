import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.fonts.inter};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.padding.lg};
  padding-top: 180px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;

  max-width: 900px;
`;

export const Text = styled.p`
  margin-top: 34px;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.01em;
  max-width: 555px;
`;

export const LinksContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: end;
  gap: 71px;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.blue};

  font-weight: bold;
  font-size: 52px;
  line-height: 63px;

  letter-spacing: -0.01em;
`;
