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

  const [indexShow, setIndexShow] = useState(6);

  function toggle(index) {
    isOpen === index ? setIsOpen(false) : setIsOpen(index);
  }

  function loadMore() {
    if ((indexShow < allGames.length) && (showAll === false)) {
      setIndexShow(indexShow + 6);
      setShow(false);
    } else if ((indexShow >= allGames.length) && showAll === false) {
      setShow(true);
    } else {
      setIndexShow(6);
    }
  }

  const [platform, setPlatform] = useState('All');
  const [genre, setGenre] = useState('All');
  const [type, setType] = useState('All');

  const data = () => {
    if (platform === 'All' && genre === 'All' && type === 'All') {
      return allGames;
    } else if (platform !== 'All') {
      const newElement = allGames.filter(
        element =>
          element.platforms.includes(platform));
      return newElement;
    } else if (genre !== 'All') {
      const newElement = allGames.filter(
        element =>
          element.genre.includes(genre));
      return newElement;
    } else if (type !== 'All') {
      const newElement = allGames.filter(
        element =>
          element.services.includes(type));
      return newElement;
    }
  }

  console.log(platform, genre, type);

  // const data = (platform === 'All' && genre === 'All' || type === 'All') && allGames;


  return (
    <Section>
      <MenuList>
        <DropDown title="Platform" id='platform' onItemSelected={(e) => {
          setPlatform(e);
          setType('All');
          setGenre('All');
        }}>
          <DropDownItem value={"All"} />
          <DropDownItem value={"Mobile"} />
          <DropDownItem value={"PC"} />
          <DropDownItem value={"Nintendo Switch"} />
          <DropDownItem value={"Cross-platform"} />
        </DropDown>
        <DropDown title="Genre" id='genre' onItemSelected={(e) => {
          setGenre(e)
          setPlatform('All');
          setType('All');
        }}>
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
        <DropDown title="Type of project" id='type' onItemSelected={(e) => {
          setType(e);
          setGenre('All');
          setPlatform('All');
        }}>
          <DropDownItem value={"All"} />
          <DropDownItem value={"Game localization"} />
          <DropDownItem value={"Localization testing"} />
          <DropDownItem value={"Voiceovers"} />
        </DropDown>
      </MenuList>
      <GamesGrid show={showAll}>
        {data().filter((element, i) => i < indexShow).map((e, i) => (
          <GameCard key={i} game={e} height={300} />
        ))}
      </GamesGrid>
      <Text className="button blue" onClick={loadMore}>
        {showAll ? <span>Load less &#8593;</span> : "Load more ↓"}
      </Text>
    </Section>
  );
}

export default Games;
