import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer";

import GameCarousel from "../components/GameCarousel/GameCarousel.js";

export default function Home() {
  return (
    <>
      <Nav lang={true} />
      <GameCarousel/>
      <Footer />
    </>
  );
}
