import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, Container, CloseButton } from "./GameModal.styles";

import GameInfo from "../GameInfo/GameInfo.js";

const gamesData = [
  {
    title: "Apex Legends",
    publisher: "Electronic Arts",
    services: ["Game localization"],
    platforms: ["PC", "Xbox", "Sony Play Station"],
    genre: ["Battle royale", "FPS"],
    languages: [
      "Chinese",
      "Russian",
      "Korean",
      "Spanish",
      "French",
      "Italian",
      "Swedish",
      "Catalan",
      "Japanese",
    ],
    description: "51,356 words of in-game marketing text",
    image:
      "https://cdn.charlieintel.com/wp-content/uploads/2021/09/07092109/apex-legends-all-legends.jpeg",
  },
  {
    title: "Grime",
    publisher: "Clover Bite",
    services: ["Game localization"],
    platforms: ["PC", "Stadia"],
    genre: ["Action-adventure", "RPG"],
    languages: [
      "French",
      "Italian",
      "German",
      "Spanish",
      "Simplified Chinese",
      "Japanese",
      "Korean",
      "Brazilian Portuguese",
      "Russian",
      "Hebrew",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.gog-statics.com/d910fa44df4829a4e10cf36d4172e3027127d59ad3f508946eb0fb37561e9ba9_product_card_v2_mobile_slider_639.jpg",
  },
  {
    title: "Mordhau",
    publisher: "Triternion",
    services: ["Game localization"],
    platforms: ["PC"],
    genre: ["Action"],
    languages: [
      "Spanish",
      "French",
      "Italian",
      "Korean",
      "Portuguese Brazilian",
      "Russian",
      "Chinese Simplified",
      "Chinese Traditional",
      "Japanese",
      "German",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://hollywoodmetal.com/wp-content/uploads/Mordau.jpg",
  },
  {
    title: "Murder In The Alps",
    publisher: "Nordcurrent Group",
    services: ["Game localization", "Localization testing"],
    platforms: ["PC", "Android", "IOS"],
    genre: ["Puzzle"],
    languages: [
      "German",
      "Italian",
      "Spanish",
      "Polish",
      "Portuguese (Brazilian)",
      "French",
      "Russian",
      "Japanese",
      "Korean",
      "Chinese (Simplified)",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://i.ytimg.com/vi/HvZCw6ruJN4/maxresdefault.jpg",
  },
  {
    title: "The Crew",
    publisher: "Ubisoft",
    services: ["Game localization", "Voiceovers"],
    platforms: ["PC", "PS4", "Xbox One"],
    genre: ["Racing"],
    languages: ["Russian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://wallpapercave.com/wp/wp1893560.jpg",
  },
  {
    title: "Dragon Storm Fantasy",
    publisher: "Goat Games",
    services: ["Game localization"],
    platforms: ["Android", "IOS"],
    genre: ["MMORPG"],
    languages: ["Russian", "German", "Turkish"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://gamexguide.com/wp-content/uploads/2020/06/dragon-storm-fantasy.jpg",
  },
  {
    title: "The Long Journey Home",
    publisher: "Daedalic Entertainment",
    services: ["Game localization", "Localization testing"],
    platforms: ["PC"],
    genre: ["Action", "Adventure"],
    languages: [
      "Russian",
      "French",
      "Korean",
      "Simplified Chinese",
      "Arabic",
      "Traditional Chinese",
      "Czech",
      "Danish",
      "Dutch",
      "Finnish",
      "Hungarian",
      "Italian",
      "Japanese",
      "Norwegian",
      "Polish",
      "Portuguese",
      "Brazilian Portuguese",
      "Spanish",
      "Swedish",
      "Thai",
      "Turkish",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://www.nintendo.com//content/dam/noa/en_US/games/switch/t/the-long-journey-home-switch/the-long-journey-home-switch-hero.jpg",
  },
  {
    title: "Tales of Berseria",
    publisher: "Bandai Namco",
    services: ["Game localization"],
    platforms: ["PC", "PS3", "PS4"],
    genre: ["Action", "RPG"],
    languages: [
      "Russian",
      "French",
      "Korean",
      "Simplified Chinese",
      "Arabic",
      "Traditional Chinese",
      "Czech",
      "Danish",
      "Dutch",
      "Finnish",
      "Hungarian",
      "Italian",
      "Japanese",
      "Norwegian",
      "Polish",
      "Portuguese",
      "Brazilian Portuguese",
      "Spanish",
      "Swedish",
      "Thai",
      "Turkish",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://cdn.wccftech.com/wp-content/uploads/2016/01/Tales-Of-Berseria-logo.jpg",
  },
  {
    title: "The Sims 4",
    publisher: "Electronic Arts",
    services: ["Game localization"],
    platforms: ["PC", "PS4", "Xbox One"],
    genre: ["City Builder"],
    languages: ["Norwegian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://www.ea.com/bundles/eathesims/dist/images/share/share_default.jpg",
  },
  {
    title: "Turnip Boy Commits Tax Evasion",
    publisher: "Graffitti Games",
    services: ["Game localization"],
    platforms: ["PC", "Nintendo Switch"],
    genre: ["Top-down", "Action", "Adventure"],
    languages: [
      "Italian",
      "German",
      "French",
      "Simplified Chinese",
      "Spanish Latin American",
      "Russian",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://i.ytimg.com/vi/V25xuTa5j3Y/maxresdefault.jpg",
  },
  {
    title: "Anthem",
    publisher: "Graffitti Games",
    services: ["Game localization"],
    platforms: ["PC"],
    genre: ["MMORPG", "Adventure"],
    languages: [
      "Italian",
      "German",
      "French",
      "Simplified Chinese",
      "Spanish Latin American",
      "Russian",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2017/06/anthem-dylan.jpg.adapt.crop191x100.1200w.jpg",
  },
  {
    title: "Crisis Action",
    publisher: "Efun",
    services: ["Game localization"],
    platforms: ["Android", "IOS"],
    genre: ["MMORPG", "Action"],
    languages: ["Russian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://allcorrectgames.com/wp-content/uploads/2016/10/Crisis-Action_oblozhka-dlya-novosti.jpg",
  },
  {
    title: "Cool Game",
    publisher: "EE Games",
    services: ["Game localization"],
    platforms: ["Nintendo Switch"],
    genre: ["Match3"],
    languages: ["Russian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://allcorrectgames.com/wp-content/uploads/2021/01/image5.png",
  },
  {
    title: "Another Cool Game",
    publisher: "EE Games",
    services: ["Game localization"],
    platforms: ["Nintendo Switch"],
    genre: ["Match3"],
    languages: ["Russian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://i0.wp.com/howtoraiseahappygenius.com/wp-content/uploads/2016/12/Screenshot_20161214-104326.png",
  },
  {
    title: "Classic Game",
    publisher: "EE Games",
    services: ["Game localization"],
    platforms: ["Nintendo Switch"],
    genre: ["Match3"],
    languages: ["Russian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://randomreviewzblog.files.wordpress.com/2017/02/2129213-169_wonderful101_nindirect_wiiu_ot_080913.jpg?w=1280",
  },
];

function GameModal({ children }) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleClose = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  const jsx = isOpen && (
    <Overlay>
      <Container>
        <GameInfo games={gamesData} />

        <CloseButton onClick={handleClose}>X</CloseButton>
      </Container>
    </Overlay>
  );

  return mounted ? createPortal(jsx, document.getElementById("modal-root")) : null;
}

export default GameModal;
