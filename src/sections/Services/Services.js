import {
  Container,
  Title,
  OrderedList,
  OrderedItem,
  GamesContainer,
  Link,
} from "./Services.styles";
import Collapsibles from "../../components/Collapsibles/Collapsibles.js";
import CollapsibleItem from "../../components/CollapsibleItem/CollapsibleItem.js";
import GameCard from "../../components/GameCard/GameCard.js";

const allGames = [
  {
    images: ["/images/games/apex.jpg", "/images/games/apex.jpg"],
    caption: {
      white: "by Deadalic Entertainment",
      blue: "Gragon Strom",
    },
  },
  {
    images: ["/images/games/apex.jpg", "/images/games/apex.jpg"],
    caption: {
      white: "by Deadalic Entertainment",
      blue: "Gragon Strom",
    },
  },
  {
    images: ["/images/games/apex.jpg", "/images/games/apex.jpg"],
    caption: {
      white: "Deadalic Entertainment",
      blue: "Battle Arena Heroes Adventure by",
    },
  },
  {
    images: ["/images/games/apex.jpg", "/images/games/apex.jpg"],
    caption: {
      white: "Deadalic Entertainment",
      blue: "Battle Arena Heroes Adventure by",
    },
  },
];

function Localization() {
  return (
    <>
      <div>Localization</div>
    </>
  );
}

function GameTesting() {
  return (
    <>
      <OrderedList>
        <OrderedItem>
          <p>1.</p>
          <p>
            Initial cosmetic testing, which involves checking the game to ensure that its text
            displays correctly. Our experts use the results of the cosmetic test to send the
            customer a detailed report which includes information about all errors and defects
            present.
          </p>
        </OrderedItem>
        <OrderedItem>
          <p>2.</p>
          <p>
            Full localization testing: checking the game for semantic, grammatical, orthographic and
            punctuation errors, typos and incorrectly displayed text. After the customer introduces
            corrections based on the report, our testers go through the game again using a set
            script to check whether all the changes were correctly introduced to the game. This
            stage is called regression testing. 
          </p>
        </OrderedItem>
        <OrderedItem>
          <p>3.</p>
          <p>
            Functional testing, which determine the stability of the game or software product by
            checking the crucial functionality of the application. 
          </p>
        </OrderedItem>
        <OrderedItem>
          <p>4.</p>
          <p>
            Compliance and compatibility testing. Quality assurance across multiple supported
            platforms – PC, Android, iOS. We cover more than 22 languages and more than 200
            platforms at once for you to pass any featuring tests!
          </p>
        </OrderedItem>
      </OrderedList>
      <GamesContainer>
        {allGames.map((game, i) => (
          <li key={i}>
            <GameCard game={game} width={325} height={221} />
          </li>
        ))}
      </GamesContainer>

      <Link>All localization and functional game testing projects &#10230;</Link>
    </>
  );
}

function Voiceovers() {
  return (
    <>
      <div>Voiceovers</div>
    </>
  );
}

function Art() {
  return (
    <>
      <div>GameTesting</div>
    </>
  );
}

function Services() {
  const fakedata = [
    { title: "Learn game localization", content: <GameTesting /> },
    { title: "Localization and functional game testing", content: <GameTesting /> },
    { title: "Voiceovers", content: <GameTesting /> },
    { title: "Game art", content: <GameTesting /> },
  ];

  return (
    <Container>
      <Title>Our Services</Title>

      <Collapsibles>
        {fakedata.map((item, i) => (
          <CollapsibleItem title={item.title} key={i}>
            {item.content}
          </CollapsibleItem>
        ))}
      </Collapsibles>
    </Container>
  );
}

export default Services;
