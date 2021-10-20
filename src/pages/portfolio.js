import { useState, useContext } from "react";
import Nav from "../sections/Nav/Nav.js";
import Games from "../sections/Games/Games.js";
import GameModal from "../sections/GameModal/GameModal.js";
import Reviews from "../components/Reviews/Reviews.js";
import GetInTouchText from "../sections/GetInTouchText/GetInTouchText.js";
import Footer from "../sections/Footer/Footer.js";

import GameModalContext from "../context/GameModalContext.js";
import ReviewsContext from "../context/ReviewsContext";

export default function Portfolio() {
  const { games } = useContext(GameModalContext);
  const { publisherReviews } = useContext(ReviewsContext);

  return (
    <>
      <header>
        <Nav lang={true} title="Portfolio" />
      </header>
      <Games games={games} />
      <GameModal />
      <Reviews reviews={publisherReviews} />
      <GetInTouchText />
      <Footer />
    </>
  );
}
