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

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`;

export const PostCard = styled.div`
  height: 500px;
  background: red;
`;

export const LearnMore = styled.button``;
