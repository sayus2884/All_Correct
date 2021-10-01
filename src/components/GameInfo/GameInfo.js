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

function InfoItem(props) {
  return (
    <Info>
      <Type>title</Type>
      <Data>data</Data>
    </Info>
  );
}

function GameInfo(props) {
  return (
    <>
      <Title>The Title</Title>
      <TwoColumns>
        <Carousel>
          <Image />
          <Controller>
            <button>left</button>
            <p>1/10</p>
            <button>right</button>
          </Controller>
        </Carousel>

        <InfoContainer>
          <InfoItem />
          <InfoItem />
          <InfoItem />
          <InfoItem />
          <InfoItem />
        </InfoContainer>
      </TwoColumns>
      <Date>Date and stuff</Date>
    </>
  );
}

export default GameInfo;
