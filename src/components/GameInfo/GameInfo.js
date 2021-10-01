import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { Carousel } from "react-responsive-carousel";

import {
  Container,
  Title,
  CarouselContainer,
  Controller,
  ArrowButton,
  Counter,
  DateText,
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

  const handlePrevButton = (event) => {
    event.preventDefault();

    if (index <= 0) {
      return;
    }

    setIndex(index - 1);
  };

  const handleNextButton = (event) => {
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
        <CarouselContainer>
          <Carousel
            style={{ margin: 0 }}
            selectedItem={index}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}>
            {games.map((game, i) => (
              <Image src={game.image} key={i} alt={game.title} />
            ))}
          </Carousel>

          <Controller>
            <ArrowButton onClick={handlePrevButton}>&#10229;</ArrowButton>
            <Counter>
              {index + 1}/{games.length}
            </Counter>
            <ArrowButton onClick={handleNextButton}>&#10230;</ArrowButton>
          </Controller>
        </CarouselContainer>

        <InfoContainer>
          <InfoItem type="Service" data={arrToString(services)} />
          <InfoItem type="Platforms" data={arrToString(platforms)} />
          <InfoItem type="Genre" data={arrToString(genre)} />
          <InfoItem type="Languages" data={arrToString(languages)} />
          <InfoItem type="Description" data={description} />
        </InfoContainer>
      </TwoColumns>
      <DateText>DateText and stuff</DateText>
    </>
  );
}

export default GameInfo;
