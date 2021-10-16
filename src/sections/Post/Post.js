import Image from "next/image";
import {
  Section,
  GoBack,
  Columns,
  Column,
  Title,
  SubText,
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

  return (
    <Section>
      <Columns>
        <Column className={!image && "header-container"}>
          <GoBack href="/blog" scroll={false}>
            <SubText>Go Back</SubText>
          </GoBack>
          <Title>{title}</Title>
          <SubText className="date">
            {new Intl.DateTimeFormat("en", dateOptions).format(date)}
          </SubText>
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
    </Section>
  );
}

export default Post;
