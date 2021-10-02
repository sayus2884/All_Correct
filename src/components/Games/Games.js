import { Container, MenuList, GamesGrid, GameCard, Img, Text } from "./Games.styles";
import GameMenuItem from "../GameMenuItem/GameMenuItem.js";
import Image from "next/image";
import { useState } from "react";

function Games({ games, setGames }) {
  const [showAll, setShow] = useState(false);

  return (
    <Container>
      <MenuList>
        <GameMenuItem>Platform</GameMenuItem>
        <GameMenuItem>Genre</GameMenuItem>
        <GameMenuItem>Type of project</GameMenuItem>
      </MenuList>
      <GamesGrid show={showAll}>
        {Array(5)
          .fill(games)
          .reduce((a, c) => [...a, ...c], [])
          .slice(0, showAll ? 100 : 12)
          .map((e, i) => (
            <GameCard key={i} delay={i > 11 ? i - 11 : 0}>
              <Img>
                <Image
                  src={e.image}
                  alt="review Image"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={e.image}
                  quality={25}
                  objectFit="cover"
                  objectPosition="center"
                />
              </Img>
              <Text>
                <Text as="span" className="blue">
                  {e.caption.blue}
                </Text>{" "}
                {e.caption.white}
              </Text>
            </GameCard>
          ))}
      </GamesGrid>
      <Text className="button blue" onClick={() => setShow(!showAll)}>
        {showAll ? <span>Load less &#8593;</span> : "Load more ↓"}
      </Text>
    </Container>
  );
}

export default Games;
