import { useContext } from "react";
import Nav from "../components/Nav/Nav.js";
import GameCarousel from "../components/GameCarousel/GameCarousel.js";
import Services from "../components/Services/Services.js";
import Active from "../components/Active/Active.js";
import Games from "../components/Games/Games.js";
import GameModal from "../components/GameModal/GameModal.js";
import Reviews from "../components/Reviews/Reviews.js";
import Companies from "../components/Companies/Companies";
import Pricing from "../components/Pricing/Pricing";
import Footer from "../components/Footer/Footer.js";

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
