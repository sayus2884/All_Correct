import styled from "styled-components";

export const Btn = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 10px;
  padding: 5px 20px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    padding: 5px 16px;
  }
`;
