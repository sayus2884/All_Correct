import styled from "styled-components";

export const AboutWrapper = styled.section`
  font-family: ${({ theme }) => theme.fonts.inter};
  width: 786px;
  letter-spacing: -0.01;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 40px;
  padding-top: 250px;
`;

export const AboutTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.9;
  margin-bottom: 30px;
`;

export const TextContainer = styled.div`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
