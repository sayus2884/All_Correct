const getDate = (day = 0) => {
  let date = new Date();
  date.setDate(date.getDate() - day);

  return date;
};

export const games = [
  {
    title: "Apex Legends",
    publisher: "Electronic Arts",
    date: "2018 - Present",
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
    images: ["/images/games/apex.jpg", "/images/games/apex.jpg"],
  },
  {
    title: "Grime",
    publisher: "Clover Bite",
    date: "2018 - Present",
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
    images: ["/images/games/grime.jpg"],
  },
  {
    title: "Mordhau",
    publisher: "Triternion",
    date: "2018 - Present",
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
    images: ["/images/games/mordau.jpg"],
  },
  {
    title: "Murder In The Alps",
    publisher: "Nordcurrent Group",
    date: "2018 - Present",
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
    images: ["/images/games/murder_alps.jpg"],
  },
  {
    title: "The Crew",
    publisher: "Ubisoft",
    date: "2018 - Present",
    services: ["Game localization", "Voiceovers"],
    platforms: ["PC", "PS4", "Xbox One"],
    genre: ["Racing"],
    languages: ["Russian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: ["/images/games/crew2.jpg"],
  },
  {
    title: "Dragon Storm Fantasy",
    publisher: "Goat Games",
    date: "2018 - Present",
    services: ["Game localization"],
    platforms: ["Android", "IOS"],
    genre: ["MMORPG"],
    languages: ["Russian", "German", "Turkish"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: ["/images/games/dragon_storm_fantasy.jpg"],
  },
  {
    title: "The Long Journey Home",
    publisher: "Daedalic Entertainment",
    date: "2018 - Present",
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
    images: ["/images/games/long_journey_home.jpg"],
  },
  {
    title: "Tales of Berseria",
    publisher: "Bandai Namco",
    date: "2018 - Present",
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
    images: ["/images/games/tales_of_berseria.jpg"],
  },
  {
    title: "The Sims 4",
    publisher: "Electronic Arts",
    date: "2018 - Present",
    services: ["Game localization"],
    platforms: ["PC", "PS4", "Xbox One", "Cross-platform"],
    genre: ["City Builder"],
    languages: ["Norwegian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: ["/images/games/sims4.jpg"],
  },
  {
    title: "Turnip Boy Commits Tax Evasion",
    publisher: "Graffitti Games",
    date: "2018 - Present",
    services: ["Game localization"],
    platforms: ["PC", "Nintendo Switch", "Cross-platform"],
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
    images: ["/images/games/turnip_boy.jpg"],
  },
  {
    title: "Anthem",
    publisher: "Electronic Arts",
    date: "2018 - Present",
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
    images: ["/images/games/anthem.jpg"],
  },
  {
    title: "Crisis Action",
    publisher: "Efun",
    date: "2018 - Present",
    services: ["Game localization"],
    platforms: ["Android", "IOS", "Mobile"],
    genre: ["MMORPG", "Action"],
    languages: ["Russian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: ["/images/games/crisis_action.jpg"],
  },
  {
    title: "Cool Game",
    publisher: "EE Games",
    date: "2018 - Present",
    services: ["Game localization"],
    platforms: ["Nintendo Switch"],
    genre: ["Match3"],
    languages: ["Russian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: ["/images/games/sniper_arena.jpg"],
  },
  {
    title: "Another Cool Game",
    publisher: "EE Games",
    date: "2018 - Present",
    services: ["Game localization"],
    platforms: ["Nintendo Switch"],
    genre: ["Match3"],
    languages: ["Russian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: ["/images/games/plants_vs_zombies.jpg"],
  },
  {
    title: "Classic Game",
    publisher: "EE Games",
    date: "2018 - Present",
    services: ["Game localization"],
    platforms: ["Nintendo Switch"],
    genre: ["Match3"],
    languages: ["Russian"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: ["/images/games/wonderful101.jpg"],
  },
];

export const reviews = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    reviewer: "EA Games",
    image: "/images/review/ea.png",
    type: "publisher",
  },
  {
    description:
      "WAH! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    reviewer: "Hollow Game Entertainment",
    image: "/images/review/skull.png",

    type: "publisher",
  },
  {
    description:
      "A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    reviewer: "E E E EEEEE",
    image: "/images/review/ea.png",
  },
  {
    description:
      "To the usual room with you! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    reviewer: "Clown Skull Ltd.",
    image: "/images/review/skull.png",
  },
  {
    description: `It's elementary ain't it! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    reviewer: "Timelines Publishing",
    image: "/images/review/watson.jpg",
    type: "publisher",
  },
  {
    description: `Guh! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    reviewer: "Ripper Games",
    image: "/images/review/skull.png",
    type: "publisher",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    reviewer: "Ame #41325",
    image: "/images/review/watson.jpg",
    type: "colleague",
  },
  {
    description:
      "WAH! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    reviewer: "Nenomai Inanice",
    image: "/images/review/girl2.jpeg",
    type: "colleague",
  },
  {
    description:
      "A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    reviewer: "Gawrl Garu",
    image: "/images/review/girl.jpeg",
    type: "colleague",
  },
  {
    description:
      "To the usual room with you! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    reviewer: "Kikiriki Kiwawa",
    image: "/images/review/girl2.jpeg",
    type: "colleague",
  },
  {
    description: `It's elementary ain't it! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    reviewer: "Gawrl Garu",
    image: "/images/review/sharkie.jpg",
    type: "colleague",
  },
  {
    description: `Guh! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    reviewer: "Callie Forest",
    image: "/images/review/girl.jpeg",
    type: "colleague",
  },
];

export const posts = [
  {
    _id: "1",
    date: getDate(),
    title: "This is a very good title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image: "/images/posts/china.png",
  },
  {
    _id: "2",
    date: getDate(3),
    title: "Yubi Yubi is Key",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
  },
  {
    _id: "3",
    date: getDate(7),
    title: "Yo Dayo Meet and Greet",
    category: "game markets",
  },
  {
    _id: "4",
    date: getDate(10),
    title: "Shuba Shuba Entertainment Joins US Market",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image: "/images/posts/controller.png",
  },
  {
    _id: "5",
    date: getDate(11),
    title: "When Legendary Dragon Meets Asia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
  },
  {
    _id: "6",
    date: getDate(13),
    title: "Rocking the German Gaming Market with Nanoras",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image: "/images/posts/mobile.png",
  },
  {
    _id: "7",
    date: getDate(14),
    title: "Miko Danye Dominating Local Gamers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
  },
  {
    _id: "8",
    date: getDate(15),
    title: "Mogu Mogu Entertainment Sweeps Through Food Related Games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image: "/images/posts/team.png",
  },
  {
    _id: "9",
    date: getDate(16),
    title: "This is a very good title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "game markets",
    image: "/images/posts/mobile.png",
  },
  {
    _id: "10",
    date: getDate(17),
    title: "This is a very good title",
    category: "game markets",
  },
  {
    _id: "11",
    date: getDate(8),
    title: "Localization: When Robots Foget Their Umbrellas",
    description:
      "Who even said that localization has to be successful in the first place? There exists an opinion that certain products require a minimal level of localization — a machine translation should suffice for the target audience to decide whether the game is worth downloading, and once they’ve played it for a while, they will inevitably become sucked in. Let’s take a few steps back and analyze this issue from a critical perspective. Suppose we have a game with its own potentially great niche — it’s fun to play, well balanced, and has a suitable monetization model, for instance. Finally, it hits the virtual store shelves. Needless to say, it requires marketing. You seek the services of an ASO expert, who, after analyzing the conversion, tells you: “We must expand into new segments!” OK, then. Expansion is your next move. How do you do it though? There are two methods, which are by no means mutually exclusive — in fact, it’s quite the opposite! They complement each other extremely well.",
    category: "localization",
    image: "/images/posts/controller.png",
  },
  {
    _id: "12",
    date: getDate(5),
    title: "Localization, Seven Steps To Succcess",
    category: "localization",
  },
  {
    _id: "13",
    date: getDate(10),
    title: "Localization, Seven Steps To Succcess",
    description:
      "Who even said that localization has to be successful in the first place? There exists an opinion that certain products require a minimal level of localization — a machine translation should suffice for the target audience to decide whether the game is worth downloading, and once they’ve played it for a while, they will inevitably become sucked in. Let’s take a few steps back and analyze this issue from a critical perspective. Suppose we have a game with its own potentially great niche — it’s fun to play, well balanced, and has a suitable monetization model, for instance. Finally, it hits the virtual store shelves. Needless to say, it requires marketing. You seek the services of an ASO expert, who, after analyzing the conversion, tells you: “We must expand into new segments!” OK, then. Expansion is your next move. How do you do it though? There are two methods, which are by no means mutually exclusive — in fact, it’s quite the opposite! They complement each other extremely well.",
    category: "localization",
  },
  {
    _id: "14",
    date: getDate(8),
    title: "Outstaffing Project Management In Localization",
    description:
      "Who even said that localization has to be successful in the first place? There exists an opinion that certain products require a minimal level of localization — a machine translation should suffice for the target audience to decide whether the game is worth downloading, and once they’ve played it for a while, they will inevitably become sucked in. Let’s take a few steps back and analyze this issue from a critical perspective. Suppose we have a game with its own potentially great niche — it’s fun to play, well balanced, and has a suitable monetization model, for instance. Finally, it hits the virtual store shelves. Needless to say, it requires marketing. You seek the services of an ASO expert, who, after analyzing the conversion, tells you: “We must expand into new segments!” OK, then. Expansion is your next move. How do you do it though? There are two methods, which are by no means mutually exclusive — in fact, it’s quite the opposite! They complement each other extremely well.",
    category: "localization",
  },
  {
    _id: "15",
    date: getDate(15),
    title: "Outstaffing Project Management In Localization",
    description:
      "Who even said that localization has to be successful in the first place? There exists an opinion that certain products require a minimal level of localization — a machine translation should suffice for the target audience to decide whether the game is worth downloading, and once they’ve played it for a while, they will inevitably become sucked in. Let’s take a few steps back and analyze this issue from a critical perspective. Suppose we have a game with its own potentially great niche — it’s fun to play, well balanced, and has a suitable monetization model, for instance. Finally, it hits the virtual store shelves. Needless to say, it requires marketing. You seek the services of an ASO expert, who, after analyzing the conversion, tells you: “We must expand into new segments!” OK, then. Expansion is your next move. How do you do it though? There are two methods, which are by no means mutually exclusive — in fact, it’s quite the opposite! They complement each other extremely well.",
    category: "lqa",
    image: "/images/posts/controller.png",
  },
  {
    _id: "16",
    date: getDate(15),
    title: "Outstaffing Project Management In Localization",
    category: "lqa",
  },
  {
    _id: "17",
    date: getDate(20),
    title: "Outstaffing Project Management In Localization",
    description:
      "Who even said that localization has to be successful in the first place? There exists an opinion that certain products require a minimal level of localization — a machine translation should suffice for the target audience to decide whether the game is worth downloading, and once they’ve played it for a while, they will inevitably become sucked in. Let’s take a few steps back and analyze this issue from a critical perspective. Suppose we have a game with its own potentially great niche — it’s fun to play, well balanced, and has a suitable monetization model, for instance. Finally, it hits the virtual store shelves. Needless to say, it requires marketing. You seek the services of an ASO expert, who, after analyzing the conversion, tells you: “We must expand into new segments!” OK, then. Expansion is your next move. How do you do it though? There are two methods, which are by no means mutually exclusive — in fact, it’s quite the opposite! They complement each other extremely well.",
    category: "project managements",
    image: "/images/posts/controller.png",
  },
  {
    _id: "18",
    date: getDate(20),
    title: "Outstaffing Project Management In Localization",
    description:
      "Who even said that localization has to be successful in the first place? There exists an opinion that certain products require a minimal level of localization — a machine translation should suffice for the target audience to decide whether the game is worth downloading, and once they’ve played it for a while, they will inevitably become sucked in. Let’s take a few steps back and analyze this issue from a critical perspective. Suppose we have a game with its own potentially great niche — it’s fun to play, well balanced, and has a suitable monetization model, for instance. Finally, it hits the virtual store shelves. Needless to say, it requires marketing. You seek the services of an ASO expert, who, after analyzing the conversion, tells you: “We must expand into new segments!” OK, then. Expansion is your next move. How do you do it though? There are two methods, which are by no means mutually exclusive — in fact, it’s quite the opposite! They complement each other extremely well.",
    category: "project managements",
  },
];
