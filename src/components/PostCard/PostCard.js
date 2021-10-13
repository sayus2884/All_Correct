import Image from "next/image";
import { Container, Content, ImageWrapper, Title, Description } from "./PostCard.styles";

function PostCard({ post }) {
  const { title, description, image } = post;

  return (
    <Container image={image}>
      {image && (
        <ImageWrapper>
          <Image
            src={image}
            alt={title}
            height={280}
            layout="fill"
            blurDataURL={image}
            objectFit="cover"
            objectPosition="center"
          />
        </ImageWrapper>
      )}
      <Content image={image}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
}

export default PostCard;
