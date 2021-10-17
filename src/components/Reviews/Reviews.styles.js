import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  padding: ${(props) => props.theme.padding.lg};
  padding-top: 100px;
  padding-right: 0;
  box-shadow: ${(props) => `0px -2px 0px ${props.theme.colors.grey} inset`};
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.white};

  &.title {
    margin-bottom: 60px;
  }

  &.blue {
    color: ${(props) => props.theme.colors.blue};
    display: inline-block;
  }

  &.right {
    text-align: right;
    padding-right: min(2.8vw, 40px);
    cursor: pointer;
  }

  &.medium {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    white-space: break-spaces;
  }

  &.sm {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ReviewsContainer = styled.div`
  all: unset;
  width: 100%;
  overflow-x: auto;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1015px;
  grid-template-rows: 304px;
  gap: 20px;
  padding-bottom: 40px;
  margin-bottom: 250px;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: block;
    cursor: pointer;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    margin-right: min(2.8vw, 40px);
    background: linear-gradient(to top, transparent 0 35%, #c4c4c4 35% 65%, transparent 65% 100%);
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.blue};
    background: linear-gradient(to top, transparent 0 25%, #4a8eff 25% 75%, transparent 75% 100%);
    border-radius: 2px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.blue};
  }
`;
