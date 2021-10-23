import Highlight from "../Highlight/Highlight";
import { Container, Img, Link } from "./GameCard.styles";
import Image from "next/image";
import { useState } from "react";

function GameCard({ game, width, height, onClick, index }) {
  const { title, publisher, images } = game;

  const handleOnClick = (event) => {
    event.preventDefault();
    onClick(event, game);
  };

  return (
    <Container delay={5} onClick={handleOnClick}
      initial={{
        opacity: 0,
        translateX: index % 2 === 0 ? -50 : 50,
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay: index * 1 }}>
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
