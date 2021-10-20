import { useEffect } from "react";
import Theme from "../styles/theme/theme";
import BaseLayout from "../components/BaseLayout/BaseLayout";

import GetInTouchModalContext from "../context/GetInTouchModalContext.js";
import GameModalContext from "../context/GameModalContext.js";
import ReviewsContext from "../context/ReviewsContext.js";
import PostsContext from "../context/PostsContext.js";

import useModal from "../hooks/use-modal.js";
import useReviews from "../hooks/use-reviews.js";
import useGames from "../hooks/use-games.js";
import usePosts from "../hooks/use-posts.js";
import useGameModal from "../hooks/use-game-modal.js";

/*
NOTE: if data is fetched via external API, fetch them under
      getStaticProps() to benefit from SEO. Otherwise, directly import
      it from the project file that contains it.
ref: https://wallis.dev/blog/nextjs-serverside-data-fetching
ref: https://github.com/vercel/next.js/discussions/16068
*/

import { games as dummyGames, reviews as dummyReviews, posts as dummyPosts } from "../utils/data";

export default function MyApp({ Component, pageProps, games, reviews, posts }) {
  const { showModal, openModal, closeModal } = useModal();
  const { showGameModal, openGameModal, closeGameModal } = useGameModal();
  const { selectedGame, carouselGames, setSelectedGame } = useGames(games ? games : dummyGames);
  const { publisherReviews, colleagueReviews } = useReviews(reviews ? reviews : dummyReviews);
  const { getPostById } = usePosts(posts ? posts : dummyPosts);

  return (
    <Theme>
      <BaseLayout>
        <PostsContext.Provider value={{ posts: posts ? posts : dummyPosts, getPostById }}>
          <ReviewsContext.Provider
            value={{
              reviews: reviews ? reviews : dummyReviews,
              publisherReviews,
              colleagueReviews,
            }}>
            <GameModalContext.Provider
              value={{
                games: games ? games : dummyGames,
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
        </PostsContext.Provider>
      </BaseLayout>
    </Theme>
  );
}

export async function getStaticProps(context) {
  // NOTE: fetch data from external api (ex. blog posts)
  // and pass it to props for SEO benefits

  /*const res = await fetch(`https://.../data`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }*/

  return {
    props: {},
  };
}
