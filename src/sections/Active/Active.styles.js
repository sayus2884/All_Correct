import styled from "styled-components";
import OGSection from "../../components/Section/Section.js";

export const Section = styled(OGSection)`
  overflow: visible;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const BoxWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 555px;
  gap: 30px;

  @media (max-width: 500px) {
    min-width: 100%;
    gap: 20px;
  }
`;

export const BoxItem = styled.li`
  height: 106px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  box-shadow: 0px 0px 6px 3px #3883ff;
  text-align: center;
  display: flex;
  justify-content: center;

  & .box-title {
    align-self: center;
    color: black;
  }

  @media screen and (max-width: 1025px) {
    max-width: 482px;
  }

  @media (max-width: 500px) {
    height: 100px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 541px;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.inter};
  padding-right: 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 500px) {
    width: 100%;
    padding-right: 0;
    gap: 16px;
  }

  @media screen and (max-width: 1025px) {
    max-width: 398px;
  }
`;
