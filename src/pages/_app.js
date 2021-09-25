import Theme from "../styles/theme/theme";
import BaseLayout from "../components/BaseLayout/BaseLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </Theme>
  );
}
