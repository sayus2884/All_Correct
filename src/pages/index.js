import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer";

import Services from "../components/Services/Services.js";

export default function Home() {

  return(
    <>
      <Nav lang={true} />
      <Services />
      <Footer />

    </>
  );
}
