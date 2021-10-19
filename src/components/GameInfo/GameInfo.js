import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import {
  Title,
  CarouselContainer,
  Controller,
  ArrowButton,
  Counter,
  Date,
  TwoColumns,
  ImageWrapper,
  InfoContainer,
  Info,
  SubText,
} from "./GameInfo.styles";

function InfoItem({ type, data }) {
  return (
    <Info>
      <SubText className="header">{type}:</SubText>
      <SubText>{data}</SubText>
    </Info>
  );
}

function arrToString(arr) {
  let text = "";
  arr.forEach((item, i) => {
    text += `${item}, `;
  });

  return text.slice(0, -2);
}

function GameInfo({ game }) {
  const [index, setIndex] = useState(0);

  const { title, services, platforms, genre, languages, description, images, date } = game;

  const handlePrevButton = (event) => {
    event.preventDefault();

    if (index <= 0) {
      return;
    }

    setIndex(index - 1);
  };

  const handleNextButton = (event) => {
    event.preventDefault();

    if (index >= images.length - 1) {
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
            {images.map((src, key) => (
              <ImageWrapper key={key}>
                <Image
                  alt={game.title}
                  src={src}
                  priority={true}
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                />
              </ImageWrapper>
            ))}
          </Carousel>

          <Controller>
            <ArrowButton show={images.length > 1} onClick={handlePrevButton}>
              &#10229;
            </ArrowButton>
            <Counter>
              {index + 1}/{images.length}
            </Counter>
            <ArrowButton show={images.length > 1} onClick={handleNextButton}>
              &#10230;
            </ArrowButton>
          </Controller>
          <SubText className="date">{date}</SubText>
        </CarouselContainer>

        <InfoContainer>
          <InfoItem type="Service" data={arrToString(services)} />
          <InfoItem type="Platforms" data={arrToString(platforms)} />
          <InfoItem type="Genre" data={arrToString(genre)} />
          <InfoItem type="Languages" data={arrToString(languages)} />
          <InfoItem type="Description" data={description} />
        </InfoContainer>
      </TwoColumns>
      <SubText className="date mobile">{date}</SubText>
    </>
  );
}

export default GameInfo;
