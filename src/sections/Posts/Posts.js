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
  const [getWidth, setGetWidth] = useState();
  const [indexShow, setIndexShow] = useState(6);
  const [category, setCategory] = useState('All');

  console.log(category);

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

  const handleLoadMore = () => {
    if (indexShow < posts.length) {
      setIndexShow(indexShow + 3);
    }
  }

  const filteredPosts = () => {
    const filteredPosts = posts.slice(2, posts.length);
    if (category === 'All') {
      return filteredPosts;
    } else {
      const filteredByCategory = filteredPosts.filter(element => element.category === category);
      return filteredByCategory;
    }

  }

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
          <Option active={true} onClick={() => setCategory('All')}>
            <Text className="header">All</Text>
          </Option>
        </li>
        <li>
          <Option>
            <Text className="header" onClick={() => setCategory('game markets')}>Game Markets</Text>
          </Option>
        </li>
        <li>
          <Option>
            <Text className="header" onClick={() => setCategory('localization')}>Localization</Text>
          </Option>
        </li>
        <li>
          <Option>
            <Text className="header" onClick={() => setCategory('LQA')}>LQA</Text>
          </Option>
        </li>
        <li>
          <Option>
            <Text className="header" onClick={() => setCategory('project managements')}>Project Managements</Text>
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
          {filteredPosts().slice(2, posts.length).filter((element, i) => i < indexShow).map((post, key) => (
            <PostCard key={key} post={post} />
          ))}
        </StackGrid>
      </MasonryContainer>

      <LoadMoreButton>
        <Text className="header" onClick={() => handleLoadMore()}>Load More ↓</Text>
      </LoadMoreButton>
    </Section>
  );
}

export default Posts;
