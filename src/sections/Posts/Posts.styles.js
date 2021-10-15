import styled from "styled-components";
import OGSection from "../../components/Section/Section.js";
import OGText from "../../components/Text/Text.js";

export const Section = styled(OGSection)`
  margin-top: 100px;
`;

export const FilterOptions = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 80px;
`;

export const Option = styled.button`
  background: ${({ active, theme }) => (active ? theme.colors.blue : theme.colors.white)};
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.black)};
  border: none;
  border-radius: 10px;
  padding: 5px 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const MasonryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TopHeadline = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

export const Masonry = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const PostCard = styled.div`
  height: ${({ height }) => (height ? `${height}px` : `300px`)};
  background: red;
`;

export const LoadMoreButton = styled.button`
  margin-top: 80px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.blue};

  &:hover {
    cursor: pointer;
  }
`;
