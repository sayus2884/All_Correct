import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.lg};
  width: 100%;
  color: white;
  margin-top: 100px;
  overflow: hidden;
  max-height: 507px;
  position: relative;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  height: 507px;
  min-width: 901px;
  max-width: 901px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 40px;
`;

export const TitleContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.01em;
  text-align: left;
`;

export const Highlight = styled.span`
  color: ${(props) => props.theme.colors.blue};
`;

export const LinkContainer = styled.span`
  color: ${(props) => props.theme.colors.blue};
  position: absolute;
  bottom: 0;
  right: 40px;

  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.blue};
`;
