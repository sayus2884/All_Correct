import Link from "next/link";
import Image from "next/image";
import { Container, Content, ImageWrapper, Title, Description } from "./PostCard.styles";

function PostCard({ post }) {
  const { title, description, image, _id } = post;

  return (
    <Link href={`/blog/${_id}`}>
      <Container image={image}>
        {image && (
          <ImageWrapper>
            <Image
              src={image}
              alt={title}
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
    </Link>
  );
}

export default PostCard;
