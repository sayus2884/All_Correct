import { useState } from "react";

const UseGames = (gamesData = []) => {
  const [games, setGames] = useState(gamesData);

  const carouselGames = games.slice(0, 10);

  return { games, setGames, carouselGames };
};

export default UseGames;
