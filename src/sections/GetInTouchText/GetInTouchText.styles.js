import styled from "styled-components";

import OGSection from "../../components/Section/Section.js";

export const Section = styled(OGSection)`
  margin: 250px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: flex-end;
`;

export const StyledFormInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: #eaeaea;
  border: 1px solid #191919;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  outline: none;
  padding: 15px 15px;
  display: block;
  text-align: right;

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid #191919;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  padding: 15px 15px;
  outline: none;
  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }
`;
