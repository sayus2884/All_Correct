import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Container,
  Title,
  Carousel,
  Controller,
  Date,
  TwoColumns,
  Image,
  InfoContainer,
  Info,
  Type,
  Data,
} from "./GameInfo.styles";

function InfoItem({ type, data }) {
  return (
    <Info>
      <Type>{type}:</Type>
      <Data>{data}</Data>
    </Info>
  );
}

function arrToString(arr) {
  let text = "";
  arr.forEach((item, i) => {
    text += `${item}, `;
  });

  return text;
}

function GameInfo({ games }) {
  const [index, setIndex] = useState(0);

  const { title, services, platforms, genre, languages, description } = games[index];

  const handleNavigateLeft = (event) => {
    event.preventDefault();

    if (index <= 0) {
      return;
    }

    setIndex(index - 1);
  };

  const handleNavigateRight = (event) => {
    event.preventDefault();

    if (index >= games.length - 1) {
      return;
    }

    setIndex(index + 1);
  };

  return (
    <>
      <Title>{title}</Title>
      <TwoColumns>
        <Carousel>
          <Image />
          <Controller>
            <button onClick={handleNavigateLeft}>left</button>
            <p>
              {index + 1}/{games.length}
            </p>
            <button onClick={handleNavigateRight}>right</button>
          </Controller>
        </Carousel>

        <InfoContainer>
          <InfoItem type="Service" data={arrToString(services)} />
          <InfoItem type="Platforms" data={arrToString(platforms)} />
          <InfoItem type="Genre" data={arrToString(genre)} />
          <InfoItem type="Languages" data={arrToString(languages)} />
          <InfoItem type="Description" data={description} />
        </InfoContainer>
      </TwoColumns>
      <Date>Date and stuff</Date>
    </>
  );
}

export default GameInfo;
