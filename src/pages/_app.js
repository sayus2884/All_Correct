import Theme from "../styles/theme/theme";
import BaseLayout from "../components/BaseLayout/BaseLayout";

import UseModal from "../hooks/UseModal.js";
import GetInTouchModalContext from "../context/GetInTouchModalContext.js";

import GameModalContext from "../context/GameModalContext.js";
import useGames from "../hooks/UseGames.js";
import useGameModal from "../hooks/UseGameModal.js";

import { games as allGames } from "../utils/data";

export default function MyApp({ Component, pageProps }) {
  const { showModal, openModal, closeModal } = UseModal();
  const { showGameModal, openGameModal, closeGameModal } = useGameModal();
  const { selectedGame, carouselGames, setSelectedGame } = useGames(allGames);

  return (
    <Theme>
      <BaseLayout>
        <GameModalContext.Provider
          value={{
            allGames,
            selectedGame,
            carouselGames,
            setSelectedGame,
            showGameModal,
            openGameModal,
            closeGameModal,
          }}>
          <GetInTouchModalContext.Provider value={{ showModal, openModal, closeModal }}>
            <Component {...pageProps} />
          </GetInTouchModalContext.Provider>
        </GameModalContext.Provider>
      </BaseLayout>
    </Theme>
  );
}
