import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  padding: ${(props) => props.theme.padding.lg};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.inter};

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 100px;
  gap: 100px 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  &.links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column: span 2;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Text = styled.p`
  font-size: 24px;
  line-height: 32px;

  letter-spacing: -0.01em;
`;

export const Link = styled.a`
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.blue};

  &:hover {
    cursor: pointer;
  }
`;
