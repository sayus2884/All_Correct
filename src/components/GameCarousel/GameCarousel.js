import Image from "next/image";
import {
  Container,
  Item,
  Info,
  ImageWrapper,
  TitleContainer,
  Title,
  Highlight,
  LinkContainer,
  Link,
  Carousel,
} from "./GameCarousel.styles";

function GameCarousel({ games }) {
  const handleTitleClick = (event) => {
    event.preventDefault();
    alert("Open game modal");
  };

  return (
    <Container>
      <Carousel
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        emulateTouch={true}
        autoPlay={true}
        interval={2500}
        transitionTime={700}
        infiniteLoop={true}>
        {games.slice(0, 5).map((game, key) => (
          <Item key={key}>
            <ImageWrapper>
              <Image
                alt={game.title}
                src={game.image}
                priority={true}
                objectFit="cover"
                objectPosition="center"
                layout="fill"
              />
            </ImageWrapper>

            <Info className="info">
              <TitleContainer onClick={handleTitleClick}>
                <Title>We've localized</Title>
                <Title>
                  <Highlight> {game.title}</Highlight> game
                </Title>
                <Title>by {game.publisher}</Title>
              </TitleContainer>
            </Info>
          </Item>
        ))}
      </Carousel>

      <LinkContainer>
        <Link href="/all-projects">All projects &#10230;</Link>
      </LinkContainer>
    </Container>
  );
}

export default GameCarousel;
