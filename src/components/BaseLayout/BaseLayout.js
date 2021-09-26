import { GlobalWrapper } from "./BaseLayout.styles";

function BaseLayout({ children }) {
  return <GlobalWrapper>{children}</GlobalWrapper>;
}

export default BaseLayout;
