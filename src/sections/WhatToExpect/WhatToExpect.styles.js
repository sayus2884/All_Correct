import styled from "styled-components";

export const ExpectWrapper = styled.section`
  font-family: ${({ theme }) => theme.fonts.inter};
  width: 1245px;
  letter-spacing: -0.01;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 40px;
  margin-top: 250px;
`;

export const ExpectTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.9;
  margin-bottom: 60px;
`;

export const ExpectList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: 60px;
  counter-reset: orderedlist;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;

  li {
    display: grid;
    grid-template-columns: 0 1fr;
    grid-gap: 52px;
    align-items: start;
    width: 565px;
  }

  li::before {
    counter-increment: orderedlist;
    content: counter(orderedlist);
    width: 32px;
    height: 32px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 50%;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
