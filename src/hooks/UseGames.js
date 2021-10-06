import { useState } from "react";

const UseGames = (gamesData = []) => {
  const [selectedGame, setSelectedGame] = useState({});

  const carouselGames = gamesData.slice(0, 10);

  return {
    selectedGame,
    carouselGames,
    setSelectedGame,
  };
};

export default UseGames;
