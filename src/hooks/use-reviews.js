import { useMemo, useState } from "react";

const types = {
  PUBLISHER: "publisher",
  COLLEAGUE: "colleague",
};

const UseReviews = (data = []) => {
  const [reviews, setReviews] = useState(data);

  const publisherReviews = useMemo(
    () => reviews.filter((review) => review.type === types.PUBLISHER),
    [data],
  );
  const colleagueReviews = useMemo(
    () => reviews.filter((review) => review.type === types.COLLEAGUE),
    [data],
  );

  return { publisherReviews, colleagueReviews };
};

export default UseReviews;
