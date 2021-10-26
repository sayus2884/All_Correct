import { useContext, useEffect } from "react";
import { Section, MenuList, GamesGrid, Img, Text } from "./Games.styles";

import DropDown from "../../components/DropDown/DropDown.js";
import DropDownItem from "../../components/DropDownItem/DropDownItem.js";
import GameCard from "../../components/GameCard/GameCard.js";
import Image from "next/image";
import { useState } from "react";

import GameModalContext from "../../context/GameModalContext";

function Games() {
  const { games, openGameModal, setSelectedGame } = useContext(GameModalContext);

  const [isOpen, setIsOpen] = useState(false);
  const [indexShow, setIndexShow] = useState(6);

  function toggle(index) {
    isOpen === index ? setIsOpen(false) : setIsOpen(index);
  }

  function loadMore() {
    if (indexShow < games.length) {
      setIndexShow(indexShow + 6);
    } else {
      setIndexShow(6);
    }
  }

  const [platform, setPlatform] = useState("All");
  const [genre, setGenre] = useState("All");
  const [type, setType] = useState("All");
  const [filteredGames, setFilteredGames] = useState(games);

  const data = () => {
    if (platform === "All" && genre === "All" && type === "All") {
      return games;
    } else if (platform !== "All") {
      const newElement = games.filter((element) => element.platforms.includes(platform));
      return newElement;
    } else if (genre !== "All") {
      const newElement = games.filter((element) => element.genre.includes(genre));
      return newElement;
    } else if (type !== "All") {
      const newElement = games.filter((element) => element.services.includes(type));
      return newElement;
    }
  };

  useEffect(() => {
    setFilteredGames(data());
  }, [platform, genre, type])

  return (
    <Section>
      <MenuList>
        <DropDown
          title={platform === 'All' ? "Platform" : platform}
          id="platform"
          onItemSelected={(e) => {
            setPlatform(e);
            setType("All");
            setGenre("All");
          }}>
          <DropDownItem value={"All"} />
          <DropDownItem value={"Mobile"} />
          <DropDownItem value={"PC"} />
          <DropDownItem value={"Nintendo Switch"} />
          <DropDownItem value={"Cross-platform"} />
        </DropDown>
        <DropDown
          title={genre === 'All' ? "Genre" : genre}
          id="genre"
          onItemSelected={(e) => {
            setGenre(e);
            setPlatform("All");
            setType("All");
          }}>
          <DropDownItem value={"All"} />
          <DropDownItem value={"Match3"} />
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
        <DropDown
          title={type === 'All' ? "Type of project" : type}
          id="type"
          onItemSelected={(e) => {
            setType(e);
            setGenre("All");
            setPlatform("All");
          }}>
          <DropDownItem value={"All"} />
          <DropDownItem value={"Game localization"} />
          <DropDownItem value={"Localization testing"} />
          <DropDownItem value={"Voiceovers"} />
        </DropDown>
      </MenuList>
      <GamesGrid>
        {filteredGames
          .filter((element, i) => i < indexShow)
          .map((e, i) => (
            <GameCard
              key={i}
              index={i}
              game={e}
              height={300}
              onClick={() => {
                setSelectedGame(e);
                openGameModal();
              }}

            />
          ))}
      </GamesGrid>

      {indexShow < filteredGames.length && (
        <Text className="button blue" onClick={loadMore}>
          {"Load more ↓"}
        </Text>
      )}
    </Section>
  );
}

export default Games;