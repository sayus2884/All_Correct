import { useEffect } from "react";
import Theme from "../styles/theme/theme";
import BaseLayout from "../components/BaseLayout/BaseLayout";

import GetInTouchModalContext from "../context/GetInTouchModalContext.js";
import GameModalContext from "../context/GameModalContext.js";
import ReviewsContext from "../context/ReviewsContext.js";

import useModal from "../hooks/useModal.js";
import useReviews from "../hooks/UseReviews.js";
import useGames from "../hooks/UseGames.js";
import useGameModal from "../hooks/UseGameModal.js";

import { games as allGames } from "../utils/data";

export default function MyApp({ Component, pageProps }) {
  const { showModal, openModal, closeModal } = useModal();
  const { showGameModal, openGameModal, closeGameModal } = useGameModal();
  const { selectedGame, carouselGames, setSelectedGame } = useGames(allGames);
  const { reviews, publisherReviews, colleagueReviews, setReviews } = useReviews([]);

  useEffect(() => {
    // NOTE: create blog context and add it here
    // fetch("http://localhost:3000/api/posts")
    //   .then((res) => res.json())
    //   .then((posts) => {
    //     setPosts(posts);
    //   });

    fetch("http://localhost:3000/api/reviews")
      .then((res) => res.json())
      .then((reviews) => {
        console.log(reviews);
        setReviews(reviews);
      });
  }, []);

  return (
    <Theme>
      <BaseLayout>
        <ReviewsContext.Provider value={{ reviews, publisherReviews, colleagueReviews }}>
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
        </ReviewsContext.Provider>
      </BaseLayout>
    </Theme>
  );
}
