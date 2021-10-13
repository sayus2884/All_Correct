import styled from "styled-components";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.inter};
  padding: ${(props) => props.theme.padding.lg};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 250px;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 52px;
  line-height: 63px;

  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.blue};
`;

export const Description = styled.p`
  margin-top: 40px;
  max-width: 1015px;

  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.01em;
`;

export const LinkWrapper = styled.a`
  display: block;
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;
  margin: 250px 0;
  margin-right: 23px;
  text-align: right;

  &:hover {
    cursor: pointer;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;
