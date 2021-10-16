import { useContext } from "react";
import { Section, MenuList, GamesGrid, Img, Text } from "./Games.styles";

import DropDown from "../../components/DropDown/DropDown.js";
import DropDownItem from "../../components/DropDownItem/DropDownItem.js";
import GameCard from "../../components/GameCard/GameCard.js";
import Image from "next/image";
import { useState } from "react";

import GameModalContext from "../../context/GameModalContext";

function Games() {
  const { allGames, openGameModal, setSelectedGame } = useContext(GameModalContext);

  const [showAll, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggle(index) {
    isOpen === index ? setIsOpen(false) : setIsOpen(index);
  }

  return (
    <Section>
      <MenuList>
        <DropDown title="Platform">
          <DropDownItem value={"All"} />
          <DropDownItem value={"Mobile"} />
          <DropDownItem value={"PC"} />
          <DropDownItem value={"Cross-platform"} />
        </DropDown>
        <DropDown title="Genre">
          <DropDownItem value={"All"} />
          <DropDownItem value={"Match 3"} />
          <DropDownItem value={"Strategy"} />
          <DropDownItem value={"Racing"} />
          <DropDownItem value={"Action"} />
          <DropDownItem value={"Survivor Horror"} />
          <DropDownItem value={"Arcade"} />
          <DropDownItem value={"Sports game"} />
          <DropDownItem value={"RPG"} />
          <DropDownItem value={"MMORPG"} />
          <DropDownItem value={"City"} />
          <DropDownItem value={"Puzzle"} />
        </DropDown>
        <DropDown title="Type of project">
          <DropDownItem value={"RPG"} />
          <DropDownItem value={"MMORPG"} />
          <DropDownItem value={"City builder"} />
          <DropDownItem value={"Puzzle"} />
        </DropDown>
      </MenuList>
      <GamesGrid show={showAll}>
        {allGames.map((e, i) => (
          <GameCard key={i} game={e} height={300} />
        ))}
      </GamesGrid>
      <Text className="button blue" onClick={() => setShow(!showAll)}>
        {showAll ? <span>Load less &#8593;</span> : "Load more ↓"}
      </Text>
    </Section>
  );
}

export default Games;
