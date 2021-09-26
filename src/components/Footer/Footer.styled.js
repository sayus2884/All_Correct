import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 60px 40px;
  position: relative;
  font-family: ${(props) => props.theme.fonts.inter};
`;

export const CompanyWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const Logo = styled.div`
  display: grid;
  cursor: pointer;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors[props.color] || props.theme.colors.white};

  &.normal {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const NavigationItem = styled.li`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */
  letter-spacing: -0.01em;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors[props.color] || props.theme.colors.white};
  }
`;

export const Menu = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 32px;
  grid-template-columns: repeat(7, auto);
  grid-auto-rows: min-content;
  align-content: center;

  & > * {
    height: min-content;
    cursor: pointer;
  }

  & .block {
    grid-column: 1/-1;
    width: max-content;
    justify-self: end;
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
  padding-bottom: 80px;

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
  /* identical to box height, or 125% */
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.white};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    padding-right: 70px;
    padding-top: 0;
    padding-bottom: 0;
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
  position: absolute;
  right: 50px;
  bottom: 60px;
`;

export const SocialItem = styled.li`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  display: flex;
  justify-content: flex-end;
  margin: 0 0 22px;
  max-width: 107px;
  padding: 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 0 0 0 13px;
  }
`;
