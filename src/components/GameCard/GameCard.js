import Highlight from "../Highlight/Highlight";
import { Container, Img, Link } from "./GameCard.styles";
import Image from "next/image";

import { gameCardAnim } from "../../styles/animations";

function GameCard({ game, width, height, onClick, index, ...props }) {
  const { title, publisher, images } = game;

  const handleOnClick = (event) => {
    event.preventDefault();
    onClick(event, game);
  };

  return (
    <Container delay={5} onClick={handleOnClick} {...gameCardAnim}>
      <Img width={width} height={height}>
        <Image
          src={images[0]}
          alt="review Image"
          layout="fill"
          placeholder="blur"
          blurDataURL={images[0]}
          quality={25}
          objectFit="cover"
          objectPosition="center"
        />
      </Img>
      <Link>
        <Highlight>{title}</Highlight> by {publisher}
      </Link>
    </Container>
  );
}

export default GameCard;
