import { useEffect, useState } from "react";
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
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [getWidth, setGetWidth] = useState();
  const [indexShow, setIndexShow] = useState(6);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
        setFilteredPosts(posts);
      });

    updateDimensions();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDimensions);
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
    return undefined;
  }, []);

  const updateDimensions = () => {
    setGetWidth(window.innerWidth);
  };

  const isActive = (category) => {
    return category === selectedCategory;
  };

  const handleLoadMore = () => {
    if (indexShow < posts.length) {
      setIndexShow(indexShow + 3);
    }
  };

  const filterPosts = (event) => {
    const selectedCategory = event.currentTarget.dataset.value;

    if (selectedCategory === "all") {
      setFilteredPosts(posts);
    } else {
      const filteredPosts = posts.filter((post) => post.category === selectedCategory);
      setFilteredPosts(filteredPosts);
    }

    setSelectedCategory(selectedCategory);
  };

  return (
    <Section>
      <FilterOptions>
        <li>
          <Option active={isActive("all")} onClick={filterPosts} data-value="all">
            <Text className="header">All</Text>
          </Option>
        </li>
        <li>
          <Option active={isActive("game markets")} onClick={filterPosts} data-value="game markets">
            <Text className="header">Game Markets</Text>
          </Option>
        </li>
        <li>
          <Option active={isActive("localization")} onClick={filterPosts} data-value="localization">
            <Text className="header">Localization</Text>
          </Option>
        </li>
        <li>
          <Option active={isActive("lqa")} onClick={filterPosts} data-value="lqa">
            <Text className="header">LQA</Text>
          </Option>
        </li>
        <li>
          <Option
            active={isActive("project managements")}
            onClick={filterPosts}
            data-value="project managements">
            <Text className="header">Project Managements</Text>
          </Option>
        </li>
      </FilterOptions>

      <MasonryContainer>
        <TopHeadline>
          {filteredPosts.slice(0, 2).map((post, key) => (
            <PostCard key={key} post={post} />
          ))}
        </TopHeadline>
        <StackGrid
          columnWidth={getWidth <= 768 ? "100%" : "33.33%"}
          gutterWidth={20}
          gutterHeight={20}>
          {filteredPosts
            .slice(2, posts.length)
            // initially show posts based on current indexShow
            .filter((element, i) => i < indexShow)
            .map((post, key) => (
              <PostCard key={key} post={post} />
            ))}
        </StackGrid>
      </MasonryContainer>

      <LoadMoreButton>
        <Text className="header" onClick={() => handleLoadMore()}>
          Load More ↓
        </Text>
      </LoadMoreButton>
    </Section>
  );
}

export default Posts;
