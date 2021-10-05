import Nav from "../components/Nav/Nav.js";
import GameCarousel from "../components/GameCarousel/GameCarousel.js";
import Services from "../components/Services/Services.js";
import Active from "../components/Active/Active.js";
import Games from "../components/Games/Games.js";
import GameModal from "../components/GameModal/GameModal.js";
import Reviews from "../components/Reviews/Reviews.js";
import Companies from "../components/Companies/Companies";
import Footer from "../components/Footer/Footer.js";
import { useState } from "react";

import useGames from "../hooks/UseGames.js";

import { games as allGames } from "../utils/data";

export default function Home({ allGames }) {
  const { games, carouselGames } = useGames(allGames);

  return (
    <>
      <Nav lang={true} />
      <GameCarousel games={carouselGames} />
      <Services />
      <Companies />
      <Active />
      <Games games={games} />
      <Reviews />
      <GameModal />

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allGames,
    },
  };
}
