import { Section, LookingForWrapper, LookingForList, Text, Link } from "./WhoWeLookingFor.styles";
import SubTitle from "../../components/SubTitle/SubTitle.js";

function WhoWeLookingFor() {
  const listData = [
    {
      title: "Translators",
      text: "If you have translation experience in game localization and are familiar with memoQ (or you are prepared to learn to use it), we are waiting for you!",
    },
    {
      title: "Game artists",
      text: "If you are a 2D/3D artist with experience in game development, we'll be happy to welcome you to our team! Let's create amazing game art together!",
    },
  ];

  return (
    <Section>
      <LookingForWrapper>
        <SubTitle>Who we're looking for</SubTitle>

        <LookingForList>
          {listData.map((item, i) => (
            <li key={i}>
              <Text className="header">{item.title}</Text>
              <Text>{item.text}</Text>
              <Link href="#">Apply &#10230;</Link>
            </li>
          ))}
        </LookingForList>
      </LookingForWrapper>
    </Section>
  );
}

export default WhoWeLookingFor;
