import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media (max-width: 500px) {
    gap: 40px;
  }
`;
