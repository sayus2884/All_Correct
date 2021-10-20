import { useState } from "react";

const types = {
  PUBLISHER: "publisher",
  COLLEAGUE: "colleague",
};

const UsePosts = (data = []) => {
  const [posts, setPosts] = useState(data);

  const getPostById = (id) => {
    const post = posts.find((post) => {
      return post._id === id;
    });

    return post;
  };

  return { getPostById };
};

export default UsePosts;
