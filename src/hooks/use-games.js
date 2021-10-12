import { useEffect, useMemo, useState } from "react";
import axios from "axios";

/**
 * This is a good example to use as a general structure for all of your hooks that make API calls
 * Note: This hook will make the API call EVERY time the hook is used from within a component. If
 * that component is removed from the DOM and re-added, this hook will make another API call.
 * That's not ideal, because the awesome thing about hooks is that you can use them anywhere in the
 * component tree to just grab the data you need, but we don't want to re-execute the same API call over and over.
 * The solution to that is to create a context store at the highest level of the tree where that data is needed.
 * Your hooks can then populate that store if it hasn't been populated yet, otherwise just return the value from the store.
 * I'll leave that part to you
 */
export const useGames = () => {
  // Each hook like this should return an object reflecting the current state
  const [selectedGame, setSelectedGame] = useState({});

  // The state should include a loading flag, an error flag, and the data itself. There may be some scenarios
  // where you want to return a function so that you can invoke the API call on a button-click (think "Load More" buttons).
  // In those cases, you should use the `useCallback` hook to create the function and include that in your returned object.
  // In that case, youmay decide to also include a flag for `called` which would be an indicator of whether or not the
  // callback has been called at least once.
  const [loading, setLoading] = useState(false);
  const [gamesData, setGamesData] = useState([]);
  const [error, setError] = useState();

  // Memoize this so that it doesn't have to re-calculate every time this is called, unless the data changes
  const carouselGames = useMemo(() => gamesData.slice(0, 10), [gamesData]);

  // In this case, the hook will immediately attempt to make the API call when it is invoked.
  useEffect(() => {
    // Callback functions to a useEffect hook should not be async, but they can immediately invoke an async function
    (async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/games");
        setGamesData(data);
      } catch (err) {
        setError("Something bad happened");
      } finally {
        // Don't forget to set loading back to false after the API call
        setLoading(false);
      }
    })();
    // The second parameter to useEffect is the dependency array, similar to useMemo. An empty dependency array means
    // "only invoke once, not on rerenders"
  }, []);

  return {
    selectedGame,
    carouselGames,
    setSelectedGame,
    loading,
    error,
  };
};
