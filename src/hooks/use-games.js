import { useState, useMemo } from "react";

const UseGames = (gamesData = []) => {
  const [selectedGame, setSelectedGame] = useState({});

  const carouselGames = useMemo(() => gamesData.slice(0, 10), [gamesData]);

  return {
    selectedGame,
    carouselGames,
    setSelectedGame,
  };
};

export default UseGames;
