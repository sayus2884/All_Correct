import { ThemeProvider } from "styled-components";
import GlobalStyles from "../global.styles";

function theme() {
  return {
    fonts: {
      roboto: "Roboto, sans-serif",
      condensed: "Roboto Condensed, sans-serif",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000;",
      primary: "#191919",
    },
  };
}

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
