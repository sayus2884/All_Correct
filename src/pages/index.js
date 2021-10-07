import Nav from "../components/Nav/Nav.js";
import GameCarousel from "../components/GameCarousel/GameCarousel.js";
import Services from "../components/Services/Services.js";
import Active from "../components/Active/Active.js";
import Games from "../components/Games/Games.js";
import Reviews from "../components/Reviews/Reviews.js";
import Companies from "../components/Companies/Companies";
import Footer from "../components/Footer/Footer.js";
import { useState } from "react";

import WhoWeLookingFor from "../components/WhoWeLookingFor/WhoWeLookingFor.js";

const allGames = [
  {
    image: "/images/games/game-one.png",
    caption: {
      white: "by Deadalic Entertainment",
      blue: "Gragon Strom",
    },
  },
  {
    image: "/images/games/game-two.png",
    caption: {
      white: "by Deadalic Entertainment",
      blue: "Gragon Strom",
    },
  },
  {
    image: "/images/games/game-three.png",
    caption: {
      white: "Deadalic Entertainment",
      blue: "Battle Arena Heroes Adventure by",
    },
  },
];

export default function Home({ allGames }) {
  const [games, setGames] = useState(allGames);

  return (
    <>
      <Nav lang={true} />
      <GameCarousel />
      <Services />
      <Companies />
      <Active />
      <Games games={games} />
      <Reviews />
      <WhoWeLookingFor />
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
