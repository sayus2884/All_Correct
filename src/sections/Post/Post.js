import { useMemo } from "react";
import Image from "next-optimized-images";
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
  // NOTE: currently using dummy data. Replace with correct blog content.
  const { title, date, content, description, image } = post;
  const dateOptions = {
    hour12: true,
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const dateTimeFormat = useMemo(() => new Intl.DateTimeFormat("en", dateOptions), []);

  return (
    <Section>
      <Columns>
        <Column className={!image && "header-container"}>
          <GoBack href="/blog" scroll={false}>
            <SubText>Go Back</SubText>
          </GoBack>
          <Title>{title}</Title>
          <SubText className="date">{dateTimeFormat.format(date)}</SubText>
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
      <Content>{content ? content : description}</Content>
    </Section>
  );
}

export default Post;
