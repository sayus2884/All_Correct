import { useContext } from "react";
import Nav from "../sections/Nav/Nav.js";
import GameCarousel from "../sections/GameCarousel/GameCarousel.js";
import Services from "../sections/Services/Services.js";
import Active from "../sections/Active/Active.js";
import Games from "../sections/Games/Games.js";
import GameModal from "../sections/GameModal/GameModal.js";
import Reviews from "../components/Reviews/Reviews.js";
import Companies from "../sections/Companies/Companies";
import Pricing from "../sections/Pricing/Pricing";
import Footer from "../sections/Footer/Footer.js";

import GameModalContext from "../context/GameModalContext.js";

export default function Home() {
  const { carouselGames } = useContext(GameModalContext);

  return (
    <>
      <Nav lang={true} />
      <GameCarousel games={carouselGames} />
      <Services />
      <Companies />
      <Pricing />
      <Active />
      <Reviews />
      <GameModal />
      <Footer />
    </>
  );
}
