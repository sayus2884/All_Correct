import styled from "styled-components";
import OGText from "../../components/Text/Text";

export const ExpectTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.9;
  margin-bottom: 60px;
`;

export const ExpectList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  counter-reset: orderedlist;
  gap: 60px 0;

  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;

  & > * {
    flex: 1 1 50%;
  }

  li {
    display: flex;
    gap: 20px;
    align-items: start;
  }

  li::before {
    counter-increment: orderedlist;
    content: counter(orderedlist);
    min-width: 32px;
    min-height: 32px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 50%;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Text = styled(OGText)`
  max-width: 503px;
  font-weight: 400;
`;
