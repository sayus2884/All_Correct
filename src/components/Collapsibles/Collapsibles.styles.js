import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media screen and (max-width: 376px) {
    gap: 40px;
  }
`;
