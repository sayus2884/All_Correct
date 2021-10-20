import Link from "next/link";
import Image from "next/image";
import { Container, Content, ImageWrapper, Title, Description } from "./PostCard.styles";

function PostCard({ post, isHeadline = false }) {
  const { title, description, image, _id } = post;

  return (
    <Link href={`/blog/${_id}`}>
      <Container hasImage={image}>
        {image && (
          <ImageWrapper className={isHeadline && "headline"}>
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
        <Content className={isHeadline && "headline"} hasImage={image}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Content>
      </Container>
    </Link>
  );
}

export default PostCard;
