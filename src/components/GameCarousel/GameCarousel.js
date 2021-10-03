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
} from "./GameCarousel.styles";

import { Carousel } from "react-responsive-carousel";

function GameCarousel({ children }) {
  const fakeData = [
    { game: "Apex Legends", company: "Electronic Arts", url: "/apex.png" },
    { game: "Star Wars Jedi: Fallen Order", company: "Electronic Arts", url: "/jfo.jpg" },
    { game: `Lily's Garden`, company: "Electronic Arts", url: "/lilys.jpg" },
    { game: "Klepto Cats", company: "Tactile Games", url: "/kleptocats_2.jpg" },
    { game: "Anthem", company: "Electronic Arts", url: "/anthem.jpg" },
  ];

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
        {fakeData.map((item, key) => (
          <Item key={key}>
            <ImageWrapper>
              <Image
                src={item.url}
                alt={item.game}
                objectFit="cover"
                layout="responsive"
                width={901}
                height={507}
              />
            </ImageWrapper>

            <Info className="info">
              <TitleContainer onClick={handleTitleClick}>
                <Title>We've localized</Title>
                <Title>
                  <Highlight> {item.game}</Highlight> game
                </Title>
                <Title>by {item.company}</Title>
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
