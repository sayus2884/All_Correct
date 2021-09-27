import Theme from "../styles/theme/theme";
import BaseLayout from "../components/BaseLayout/BaseLayout";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/responsive-carousel.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </Theme>
  );
}
