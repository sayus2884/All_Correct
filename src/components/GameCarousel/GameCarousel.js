import { Container, Item, Image, Info, TitleContainer, Title, Highlight, LinkContainer, Link } from "./GameCarousel.styles";

import { Carousel } from 'react-responsive-carousel';

function GameCarousel({ children }) {

  const fakeData = [
    { game: 'Apex Legends', company: "Electronic Arts"},
    { game: 'Star Wars: Jedi Fallen Order', company: "Electronic Arts"},
    { game: `Lily's Garden`, company: "Electronic Arts"},
    { game: 'Klepto Cats', company: "Tactile Games"},
    { game: 'Anthem', company: "Electronic Arts"},
  ]

  const handleTitleClick = (event) => {
    event.preventDefault();
    alert("Open game modal");
  }

  return (
    <Container>
      <Carousel
        thumbWidth={300}
        showStatus={false}
        autoPlay={true}
        showArrows={false}>

        {fakeData.map((item, key) => (
          <Item key={key}>
              <Image src="/apex.png"/>

              <Info className="info">

                <TitleContainer onClick={handleTitleClick}>
                  <Title>
                    We've localized
                  </Title>
                  <Title>
                    <Highlight> {item.game}</Highlight> game
                  </Title>
                  <Title>
                    by {item.company}
                  </Title>
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
