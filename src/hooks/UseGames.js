import { useState } from "react";

const UseGames = (gamesData = []) => {
  const [selectedGames, setSelectedGames] = useState(gamesData);
  const [selectedGameIndex, setSelectedGameIndex] = useState(0);

  const carouselGames = gamesData.slice(0, 10);

  return {
    selectedGames,
    carouselGames,
    setSelectedGames,
    selectedGameIndex,
    setSelectedGameIndex,
  };
};

export default UseGames;
