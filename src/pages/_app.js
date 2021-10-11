import Theme from "../styles/theme/theme";
import BaseLayout from "../components/BaseLayout/BaseLayout";

import UseModal from "../hooks/UseModal.js";
import GetInTouchModalContext from "../context/GetInTouchModalContext.js";

export default function MyApp({ Component, pageProps }) {
  const { showModal, openModal, closeModal } = UseModal();

  return (
    <Theme>
      <BaseLayout>
        <GetInTouchModalContext.Provider value={{ showModal, openModal, closeModal }}>
          <Component {...pageProps} />
        </GetInTouchModalContext.Provider>
      </BaseLayout>
    </Theme>
  );
}
