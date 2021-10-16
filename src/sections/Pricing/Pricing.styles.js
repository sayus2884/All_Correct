import styled from "styled-components";
import OGTitle from "../../components/Title/Title";

export const Title = styled(OGTitle)`
  &.section-title {
    margin-bottom: 40px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-bottom: 84px;

  & .price-text {
    width: 551px;
    margin-bottom: 16px;
  }
`;

export const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 136px;
`;

export const CheckItem = styled.label`
  display: flex;
  align-items: center;
  padding-top: 16px;

  a {
    text-decoration: underline;
    color: white;
  }
`;

export const EmailWrapper = styled.div`
  margin-top: 44px;
  font-size: 52px;
  line-height: 1.21;
  display: flex;
  justify-content: space-between;
`;

export const EmailInput = styled.input.attrs({ type: "email" })`
  width: 785px;
  color: #c4c4c4;
  padding-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.dark};
  border: none;
  border-bottom: 1px solid #c4c4c4;
  font-weight: 700;

  ::placeholder {
    color: #c4c4c4;
  }
`;

export const FormButton = styled.button.attrs({ type: "submit" })`
  color: ${({ theme }) => theme.colors.blue};
  background: none;
  border: none;
`;
