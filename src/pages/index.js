import { useState } from "react";
import Nav from "../components/Nav/Nav.js";
import GameCarousel from "../components/GameCarousel/GameCarousel.js";
import Services from "../components/Services/Services.js";
import Active from "../components/Active/Active.js";
import Games from "../components/Games/Games.js";
import Reviews from "../components/Reviews/Reviews.js";
import Companies from "../components/Companies/Companies";
import Footer from "../components/Footer/Footer.js";
import GetInTouchText from "../components/GetInTouchText/GetInTouchText.js";

export default function Home({ allGames }) {
  return (
    <>
      <Nav lang={true} />
      <GameCarousel />
      <Services />
      <Companies />
      <Active />
      <Reviews />
      <GetInTouchText />
      <Footer />
    </>
  );
}
