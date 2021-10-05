import { useState } from "react";

const UseGames = (gamesData = []) => {
  const [selectedGames, setSelectedGames] = useState(gamesData);

  const carouselGames = gamesData.slice(0, 10);

  return { selectedGames, carouselGames, setSelectedGames };
};

export default UseGames;
