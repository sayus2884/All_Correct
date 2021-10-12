import { useState, useContext } from "react";
import Nav from "../components/Nav/Nav.js";
import Games from "../components/Games/Games.js";
import GameModal from "../components/GameModal/GameModal.js";
import Reviews from "../components/Reviews/Reviews.js";
import Footer from "../components/Footer/Footer.js";

import GameModalContext from "../context/GameModalContext.js";

export default function Portfolio() {
  const { allGames } = useContext(GameModalContext);

  return (
    <>
      <Nav lang={true} title="Portfolio" />
      <Games games={allGames} />
      <GameModal />
      <Reviews />
      <Footer />
    </>
  );
}
