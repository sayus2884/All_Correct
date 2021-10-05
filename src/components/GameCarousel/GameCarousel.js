import { useContext } from "react";
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

import GameModalContext from "../../context/GameModalContext";

function GameCarousel({ games }) {
  const { openGameModal, setSelectedGames, setSelectedGameIndex } = useContext(GameModalContext);

  const handleTitleClick = (event) => {
    event.preventDefault();
    setSelectedGames(games);
    setSelectedGameIndex(parseInt(event.currentTarget.dataset.index));
    openGameModal(true);
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
        {games.slice(0, 5).map((game, index) => (
          <Item key={index}>
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
              <TitleContainer onClick={handleTitleClick} data-index={index}>
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
