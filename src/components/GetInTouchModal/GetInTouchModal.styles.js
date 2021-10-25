import styled from "styled-components";
import { motion } from "framer-motion";

export const Background = styled(motion.div)`
  width: 100vw;
  height: auto;
  position: fixed;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const ModalWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 404px;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  -webkit-transform: translate3d(0%, 0, 0);
  -ms-transform: translate3d(0%, 0, 0);
  -o-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);

  form {
    height: 100%;
    position: relative;
    margin: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  input {
    font-family: ${(props) => props.theme.fonts.inter};
    outline: none;
    width: 100%;
    padding: 15px;

    box-sizing: border-box;
  }

  textarea {
    font-family: ${(props) => props.theme.fonts.inter};
    outline: none;
    width: 100%;
    min-height: 100px;
    padding: 15px;
  }

  input[type="file"] {
    display: none;
  }

  input[type="checkbox"] {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 16px;
  }

  input::placeholder,
  textarea::placeholder {
    color: #000;
  }

  .custom-file-upload {
    font-family: ${(props) => props.theme.fonts.inter};
    background: ${(props) => props.theme.colors.dark};
    border: 1px solid ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.white};
    box-sizing: border-box;
    display: block;
    width: 100%;
    max-width: 324px;
    min-height: 50px;
    padding: 15px 83px;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.02em;
    text-align: center;
  }
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  text-align: left;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.fonts.dark};
  padding-bottom: 20px;
  margin: 0;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
`;

export const CheckItem = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Info = styled.p`
  margin-bottom: 50px;
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.fonts.dark};
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;

  text-align: left;
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.02em;

  color: ${(props) =>
    props.handleDisabledStyled ? props.theme.colors.grey : props.theme.colors.blue};
  background-color: ${(props) => props.theme.colors.white};
  outline: none;
  border: none;

  &:hover {
    cursor: ${(props) => (props.handleDisabledStyled ? "not-allowed" : "pointer")};
  }
`;
