import styled from "styled-components";
import OGSection from "../../components/Section/Section.js";

export const Section = styled(OGSection)`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding-bottom: 250px;
  align-items: center;
`;

export const BoxWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 378px;
`;

export const BoxItem = styled.li`
  height: 106px;
  width: 555px;
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
`;

export const TextWrapper = styled.div`
  width: 541px;
  font-family: ${({ theme }) => theme.fonts.inter};
  padding-right: 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  }
`;
