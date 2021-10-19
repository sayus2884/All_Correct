import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid #c4c4c4;
  font-family: ${(props) => props.theme.fonts.inter};
  padding-top: 20px;
  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.padding.lg};
  display: flex;
  justify-content: space-between;

  &.grid {
    display: grid;
    padding: 0;
    gap: 80px;
  }

  @media screen and (max-width: 376px) {
    flex-direction: column;
    gap: 80px;

    &.grid {
      padding: 0;
    }
  }
`;

export const AddressWrapper = styled.div`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 286px;

  p {
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
  }

  span {
    display: block;
    max-width: 100%;
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.white};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    padding-right: 70px;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
  }

  @media screen and (max-width: 376px) {
    flex-direction: column;
    gap: 20px;

    p {
      padding-right: 0;
      display: inline;
    }

    a {
      display: inline;
    }
  }
`;

export const SocialWrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  list-style-type: none;
  gap: 22px;
  align-self: end;

  @media screen and (max-width: 376px) {
    align-self: start;
  }
`;

export const SocialItem = styled.li`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  display: flex;
  justify-content: flex-end;
  padding: 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 0 0 0 13px;
  }
`;
