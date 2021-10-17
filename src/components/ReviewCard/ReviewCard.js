import Image from "next/image";
import {
  Container,
  Text,
  Body,
  Logo,
  Img,
  Content,
  ImageWrapper,
  Title,
  Description,
} from "./ReviewCard.styles";

import SubText from "../SubText/SubText";

function ReviewCard({ review, onClick }) {
  const { description, reviewer, image } = review;

  return (
    <Container key={review} onClick={onClick}>
      <Text className="description">{description}</Text>
      <Logo>
        <SubText className="header">{reviewer}</SubText>
        <Img>
          <Image src={image} alt="review Image" layout="fill" priority="true" quality={25} />
        </Img>
      </Logo>
    </Container>
  );
}

export default ReviewCard;
