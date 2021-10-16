import Highlight from "../Highlight/Highlight";
import { Container, Img, Link } from "./GameCard.styles";
import Image from "next/image";
import { useState } from "react";

function GameCard({ game, width, height }) {
  const { title, publisher, images } = game;

  return (
    <Container delay={5}>
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
