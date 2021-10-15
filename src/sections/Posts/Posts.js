import React, { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";
import {
  Section,
  FilterOptions,
  Option,
  MasonryContainer,
  TopHeadline,
  Masonry,
  LoadMoreButton,
} from "./Posts.styles";
import PostCard from "../../components/PostCard/PostCard.js";
import Text from "../../components/Text/Text.js";

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
    <Section>
      <FilterOptions>
        <li>
          <Option active={true}>
            <Text className="header">All</Text>
          </Option>
        </li>
        <li>
          <Option>
            <Text className="header">Game Markets</Text>
          </Option>
        </li>
        <li>
          <Option>
            <Text className="header">Localization</Text>
          </Option>
        </li>
        <li>
          <Option>
            <Text className="header">LQA</Text>
          </Option>
        </li>
        <li>
          <Option>
            <Text className="header">Project Managements</Text>
          </Option>
        </li>
      </FilterOptions>

      <MasonryContainer>
        <TopHeadline>
          {posts.slice(0, 2).map((post, key) => (
            <PostCard key={key} post={post} />
          ))}
        </TopHeadline>
        <StackGrid
          columnWidth={getWidth <= 768 ? "100%" : "33.33%"}
          gutterWidth={20}
          gutterHeight={20}>
          {posts.slice(2, posts.length).map((post, key) => (
            <PostCard key={key} post={post} />
          ))}
        </StackGrid>
      </MasonryContainer>

      <LoadMoreButton>
        <Text className="header">Load More ↓</Text>
      </LoadMoreButton>
    </Section>
  );
}

export default Posts;
