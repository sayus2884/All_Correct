import { useCallback, useState } from "react";

const types = {
  PUBLISHER: "publisher",
  COLLEAGUE: "colleague",
};

const UseReviews = (data = []) => {
  const [reviews, setReviews] = useState(data);

  const publisherReviews = reviews.filter((review) => review.type === types.PUBLISHER);
  const colleagueReviews = reviews.filter((review) => review.type === types.COLLEAGUE);

  return { reviews, publisherReviews, colleagueReviews, setReviews };
};

export default UseReviews;
