import { useContext } from "react";

import Section from "../../components/Section/Section";
import { Title, OrderedList, OrderedItem, SubText, GamesContainer, Link } from "./Services.styles";

import Collapsibles from "../../components/Collapsibles/Collapsibles.js";
import CollapsibleItem from "../../components/CollapsibleItem/CollapsibleItem.js";
import GameCard from "../../components/GameCard/GameCard.js";

import GameModalContext from "../../context/GameModalContext";

function GameTesting({ games }) {
  const { setSelectedGame, openGameModal } = useContext(GameModalContext);

  return (
    <>
      <OrderedList>
        <OrderedItem>
          <SubText>1.</SubText>
          <SubText>
            Initial cosmetic testing, which involves checking the game to ensure that its text
            displays correctly. Our experts use the results of the cosmetic test to send the
            customer a detailed report which includes information about all errors and defects
            present.
          </SubText>
        </OrderedItem>
        <OrderedItem>
          <SubText>2.</SubText>
          <SubText>
            Full localization testing: checking the game for semantic, grammatical, orthographic and
            punctuation errors, typos and incorrectly displayed text. After the customer introduces
            corrections based on the report, our testers go through the game again using a set
            script to check whether all the changes were correctly introduced to the game. This
            stage is called regression testing.
          </SubText>
        </OrderedItem>
        <OrderedItem>
          <SubText>3.</SubText>
          <SubText>
            Functional testing, which determine the stability of the game or software product by
            checking the crucial functionality of the application.
          </SubText>
        </OrderedItem>
        <OrderedItem>
          <SubText>4.</SubText>
          <SubText>
            Compliance and compatibility testing. Quality assurance across multiple supported
            platforms – PC, Android, iOS. We cover more than 22 languages and more than 200
            platforms at once for you to pass any featuring tests!
          </SubText>
        </OrderedItem>
      </OrderedList>
      <GamesContainer>
        {games.slice(0, 4).map((game, i) => (
          <li key={i}>
            <GameCard
              game={game}
              width={325}
              height={221}
              onClick={() => {
                setSelectedGame(game);
                openGameModal();
              }}
            />
          </li>
        ))}
      </GamesContainer>

      <Link href="/portfolio">All localization and functional game testing projects &#10230;</Link>
    </>
  );
}

function Services(props) {
  const { games } = useContext(GameModalContext);

  const fakedata = [
    { title: "Lean game localization", content: <GameTesting games={games} /> },
    {
      title: "Localization and functional game testing",
      content: <GameTesting games={games} />,
    },
    { title: "Voiceovers", content: <GameTesting games={games} /> },
    { title: "Game art", content: <GameTesting games={games} /> },
  ];

  return (
    <Section {...props}>
      <Title>Our Services</Title>

      <Collapsibles>
        {fakedata.map((item, i) => (
          <CollapsibleItem title={item.title} key={i}>
            {item.content}
          </CollapsibleItem>
        ))}
      </Collapsibles>
    </Section>
  );
}

export default Services;
