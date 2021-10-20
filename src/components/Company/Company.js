import { Container, Link, ImageWrapper } from "./Company.styles";
import Image from "next/image";

function Company({ url, src, alt }) {
  return (
    <Container>
      <Link href={url} target="_blank" rel="noreferrer noopener">
        <ImageWrapper>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            blurDataURL={src}
            priority={true}
            objectFit="cover"
            objectPosition="center"
          />
        </ImageWrapper>
      </Link>
    </Container>
  );
}

export default Company;
