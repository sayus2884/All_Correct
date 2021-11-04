import styled from "styled-components";
import OGTitle from "../../components/Title/Title";

export const Title = styled(OGTitle)`
  &.section-title {
    margin-bottom: 40px;
  }

  @media (max-width: 600px) {
    line-height: 39px;

    &.section-title {
      margin-bottom: 32px;
    }
  }
`;

export const PricingForm = styled.form``;

export const TextWrapper = styled.div`
  display: flex;
  margin-bottom: 84px;

  & .price-text {
    max-width: 551px;
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 60px;

    & .price-text {
      max-width: 551px;
      margin-bottom: 0;
    }
  }
`;

export const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 136px;

  @media (max-width: 600px) {
    margin: 40px 0 0;
    gap: 24px;
  }
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
  line-height: 63px;
  font-weight: bold;
  letter-spacing: -0.01em;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1025px) {
    flex-direction: column;
    gap: 60px;
  }

  @media (max-width: 600px) {
    margin-top: 32px;
    font-size: 32px;
    line-height: 39px;
    gap: 40px;
  }
`;

export const EmailInput = styled.input`
  width: 785px;
  padding-bottom: 16px;
  color: white;
  background-color: transparent;
  border: 2px solid transparent;
  border-bottom: 1px solid #c4c4c4;
  font-weight: 700;

  ::placeholder {
    color: #c4c4c4;
  }

  @media screen and (max-width: 1025px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    height: 100%;
    width: 100%;
    padding-bottom: 4px;
  }
`;

export const FormButton = styled.button.attrs({ type: "submit" })`
  color: ${({ theme }) => theme.colors.blue};
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 1025px) {
    text-align: right;
  }

  @media (max-width: 600px) {
    text-align: left;
  }
`;

export const ThankYouText = styled.h3`
  font-weight: 700;
  font-size: 52px;
  line-height: 1.21;
`;
