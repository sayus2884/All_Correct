import { Container, Link } from "./Company.styles";
import Image from "next/image";

function Company({ url, src, alt }) {
  return (
    <Container>
      <Link href={url} target="_blank" rel="noreferrer noopener">
        <Image src={src} alt={alt} width={149} height={149} priority={true} />
      </Link>
    </Container>
  );
}

export default Company;
