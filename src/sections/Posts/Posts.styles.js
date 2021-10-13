import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.lg};
  margin-top: 250px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${(props) => props.theme.fonts.inter};
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

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  letter-spacing: -0.01em;

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

export const LoadMore = styled.button`
  margin-top: 80px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.blue};

  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.01em;
`;
