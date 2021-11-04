import styled from "styled-components";
import OGSection from "../../components/Section/Section.js";
import OGText from "../../components/Text/Text.js";
import OGButton from "../../components/Button/Button.js";

export const Section = styled(OGSection)`
  margin-top: 100px;

  @media (max-width: 600px) {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
  }
`;

export const FilterOptions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 80px;

  @media (max-width: 600px) {
    gap: 16px 10px;
  }
`;

export const Option = styled(OGButton)`
  background: ${({ active, theme }) => (active ? theme.colors.blue : theme.colors.white)};
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.black)};
`;

export const MasonryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 375px) {
    gap: 40px;
  }
`;

export const TopHeadline = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Masonry = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const LoadMoreButton = styled(OGButton)`
  margin-top: 80px;
  background: none;
  color: ${({ theme }) => theme.colors.blue};
`;
