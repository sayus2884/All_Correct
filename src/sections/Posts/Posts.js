import { useEffect, useState } from "react";
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

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
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
        <StackGrid columnWidth="33.33%" gutterWidth={20} gutterHeight={20}>
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
