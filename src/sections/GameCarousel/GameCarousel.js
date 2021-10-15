import { useContext } from "react";

import Image from "next/image";
import Highlight from "../../components/Highlight/Highlight";
import SubText from "../../components/SubText/SubText";
import {
  Section,
  Item,
  Info,
  ImageWrapper,
  TitleContainer,
  Title,
  Link,
  Carousel,
} from "./GameCarousel.styles";

import GameModalContext from "../../context/GameModalContext";

function GameCarousel() {
  const { openGameModal, setSelectedGame, carouselGames } = useContext(GameModalContext);

  const handleTitleClick = (event) => {
    event.preventDefault();
    setSelectedGame(carouselGames[parseInt(event.currentTarget.dataset.index)]);
    openGameModal(true);
  };

  return (
    <Section>
      <Carousel
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        emulateTouch={true}
        autoPlay={true}
        interval={2500}
        transitionTime={700}
        infiniteLoop={true}>
        {carouselGames.slice(0, 5).map((game, index) => (
          <Item key={index}>
            <ImageWrapper>
              <Image
                alt={game.title}
                src={game.images[0]}
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

      <Link href="/portfolio">
        <SubText className="header">All projects &#10230;</SubText>
      </Link>
    </Section>
  );
}

export default GameCarousel;
