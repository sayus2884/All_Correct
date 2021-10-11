import {
  Container,
  FilterOptions,
  Option,
  Grid,
  GridContainer,
  LearnMore,
  PostCard,
} from "./Posts.styles";

function Posts() {
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

      <GridContainer>
        <Grid>
          <PostCard> test1</PostCard>
          <PostCard> test2</PostCard>
          <PostCard> test3</PostCard>
          <PostCard> test4</PostCard>
          <PostCard> test5</PostCard>
          <PostCard> test6</PostCard>
        </Grid>
      </GridContainer>

      <LearnMore>Load More</LearnMore>
    </Container>
  );
}

export default Posts;
