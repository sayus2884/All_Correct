// You're using webpack behind the scenes, so you should be able to drop the `.js` from all of your imports
import Nav from "../components/Nav/Nav.js";
import GameCarousel from "../components/GameCarousel/GameCarousel.js";
import Services from "../components/Services/Services.js";
import Active from "../components/Active/Active.js";
import Games from "../components/Games/Games.js";
import GameModal from "../components/GameModal/GameModal.js";
import Reviews from "../components/Reviews/Reviews.js";
import Companies from "../components/Companies/Companies";
import Footer from "../components/Footer/Footer.js";

import GameModalContext from "../context/GameModalContext.js";
import { useGames } from "../hooks/use-games";
import useGameModal from "../hooks/UseGameModal.js";

/**
 * It looks like you've defined a few api routes in `src/pages/api/*`.
 * This would be how I would suggest you utilize your hard-coded data- ideally,
 * instead of importing it as a const, you should make a REST API call to retrieve
 * the data (from your own server), and then later on you can easily change the
 * source of the data by editing that api file, but your components can remain
 * the same because they don't care where the data comes from.
 */
import { games as allGames } from "../utils/data";

export default function Home({ allGames }) {
  const { showGameModal, openGameModal, closeGameModal } = useGameModal();
  // This is an example for you to see the power of hooks
  const { selectedGame, carouselGames, setSelectedGame, loading, error } = useGames();

  return (
    <>
      {/* If an error occured loading game data, you can render a visual indicator
      of the error in place of the components that require that data, then render
      the rest of the page normally. Do this by checking the `error` variable returned by your hook.
      You can use the same strategy to display loading indicators while your hooks are busy fetching data. */}
      <GameModalContext.Provider
        value={{
          selectedGame,
          setSelectedGame,
          showGameModal,
          openGameModal,
          closeGameModal,
        }}>
        <Nav lang={true} />
        <GameCarousel games={carouselGames} />
        <Services />
        <Companies />
        <Active />
        <Games games={allGames} />
        <Reviews />
        <GameModal />
        <Footer />
      </GameModalContext.Provider>
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
