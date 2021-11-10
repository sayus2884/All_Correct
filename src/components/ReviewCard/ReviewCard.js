import Image from "next-optimized-images";
import {
  Container,
  Text,
  Body,
  Logo,
  Img,
  Content,
  ImageWrapper,
  SubText,
  Description,
} from "./ReviewCard.styles";

function ReviewCard({ review, onClick }) {
  const { description, reviewer, image } = review;

  return (
    <Container key={review} onClick={onClick}>
      <Text className="description">{description}</Text>
      <Logo>
        <SubText className="header">{reviewer}</SubText>
        <Img>
          <Image
            src={image}
            alt="review Image"
            layout="fill"
            placeholder="blur"
            blurDataURL={image}
            priority="true"
            quality={25}
            objectFit="cover"
            objectPosition="center"
          />
        </Img>
      </Logo>
    </Container>
  );
}

export default ReviewCard;
