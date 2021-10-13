import { Container, Img, Text } from "./GameCard.styles";
import Image from "next/image";
import { useState } from "react";

function GameCard({ game, width, height }) {
  const [showAll, setShow] = useState(false);
  const [openMenu, setOpen] = useState(false);

  const { images, caption } = game;

  function toggle(index) {
    openMenu === index ? setOpen(false) : setOpen(index);
  }

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
      <Text>
        <Text as="span" className="blue">
          Game Title
        </Text>{" "}
        by Publisher
      </Text>
    </Container>
  );
}

export default GameCard;
