import Image from "next/image";
import {
  Review,
  Container,
  Body,
  Logo,
  Img,
  Content,
  Text,
  ImageWrapper,
  Title,
  Description,
} from "./ReviewCard.styles";

function ReviewCard({ review, onClick }) {
  return (
    <Review key={review} onClick={onClick}>
      <Body>
        <Text className="medium">
          {`"Thank you and the entire team so, so much – just from the delivered files alone, I can see the amount of hard work, care and love that went into this project from your side.
It’s been a real pleasure working together so far, and I hope there are many more collaborations to come! It’s been a real pleasure working together so far, and I hope there are many more collaborations en a real pleasure working together so far, and I hope there are many more en a real`}
        </Text>
      </Body>
      <Logo>
        <Text className="sm">EA Games</Text>
        <Img>
          <Image
            src="/images/review/review.png"
            alt="review Image"
            layout="fill"
            priority="true"
            quality={25}
          />
        </Img>
      </Logo>
    </Review>
  );
}

export default ReviewCard;
