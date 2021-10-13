import Image from "next/image";
import {
  Container,
  GoBack,
  Columns,
  Column,
  Title,
  Date,
  ImageWrapper,
  Content,
} from "./Post.styles";

function Post({ post }) {
  const { title, date, content, image } = post;
  const dateOptions = {
    hour12: true,
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  console.log(image);

  return (
    <Container>
      <Columns>
        <Column className={!image && "header-container"}>
          <GoBack>Go Back</GoBack>
          <Title>{title}</Title>
          <Date>{new Intl.DateTimeFormat("en", dateOptions).format(date)}</Date>
        </Column>

        {image && (
          <Column>
            <ImageWrapper>
              <Image
                src={image}
                alt="review Image"
                layout="fill"
                placeholder="blur"
                blurDataURL={image}
                quality={25}
                objectFit="cover"
                objectPosition="center"
              />
            </ImageWrapper>
          </Column>
        )}
      </Columns>
      <Content>{content}</Content>
    </Container>
  );
}

export default Post;
