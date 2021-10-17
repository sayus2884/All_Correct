import { Page, GlobalWrapper } from "./BaseLayout.styles";

function BaseLayout({ children }) {
  return (
    <Page>
      <GlobalWrapper>{children}</GlobalWrapper>
    </Page>
  );
}

export default BaseLayout;
