import Link from "next/link";
import {
  LookingForWrapper,
  LookingForTitle,
  LookingForList,
  LookingForListItem,
  LookingForListTitle,
  LookingForListText,
} from "./WhoWeLookingFor.styles";

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
    <LookingForWrapper>
      <LookingForTitle>Who we're looking for</LookingForTitle>

      <LookingForList>
        {listData.map((item, i) => (
          <LookingForListItem key={i}>
            <LookingForListTitle>{item.title}</LookingForListTitle>
            <LookingForListText>{item.text}</LookingForListText>
            <Link href="#">Apply &#10230;</Link>
          </LookingForListItem>
        ))}
      </LookingForList>
    </LookingForWrapper>
  );
}

export default WhoWeLookingFor;
