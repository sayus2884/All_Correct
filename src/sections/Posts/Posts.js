import React, { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";
import {
  Container,
  FilterOptions,
  Option,
  MasonryContainer,
  TopHeadline,
  Masonry,
  LoadMore,
} from "./Posts.styles";
import PostCard from "../../components/PostCard/PostCard.js";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [getWidth, setGetWidth] = React.useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  const updateDimensions = () => {
    setGetWidth(window.innerWidth);
  };

  React.useEffect(() => {
    updateDimensions();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDimensions);
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
    return undefined;
  }, []);

  return (
    <Container>
      <FilterOptions>
        <li>
          <Option active={true}>All</Option>
        </li>
        <li>
          <Option>Game Markets</Option>
        </li>
        <li>
          <Option>Localization</Option>
        </li>
        <li>
          <Option>LQA</Option>
        </li>
        <li>
          <Option>Project Managements</Option>
        </li>
      </FilterOptions>

      <MasonryContainer>
        <TopHeadline>
          {posts.slice(0, 2).map((post, key) => (
            <PostCard key={key} post={post} />
          ))}
        </TopHeadline>
        <StackGrid columnWidth={getWidth <= 768 ? '100%' : '33.33%'} gutterWidth={20} gutterHeight={20}>
          {posts.slice(2, posts.length).map((post, key) => (
            <PostCard key={key} post={post} />
          ))}
        </StackGrid>
      </MasonryContainer>

      <LoadMore>Load More ↓</LoadMore>
    </Container>
  );
}

export default Posts;
