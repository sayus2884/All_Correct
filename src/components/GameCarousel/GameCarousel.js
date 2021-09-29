import { Container, Item, Image, Info, TitleContainer, Title, Highlight, LinkContainer, Link } from "./GameCarousel.styles";

import { Carousel } from 'react-responsive-carousel';

function GameCarousel({ children }) {

  const fakeData = [
    { game: 'Apex Legends', company: "Electronic Arts", url: '/apex.png'},
    { game: 'Star Wars Jedi: Fallen Order', company: "Electronic Arts", url: '/jfo.jpg'},
    { game: `Lily's Garden`, company: "Electronic Arts", url: '/lilys.jpg'},
    { game: 'Klepto Cats', company: "Tactile Games", url: '/kleptocats_2.jpg'},
    { game: 'Anthem', company: "Electronic Arts", url: '/anthem.jpg'},
  ]

  const handleTitleClick = (event) => {
    event.preventDefault();
    alert("Open game modal");
  }

  return (
    <Container>
      <Carousel
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        autoPlay={true}>

        {fakeData.map((item, key) => (
          <Item key={key}>
              <Image src={item.url}/>

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
