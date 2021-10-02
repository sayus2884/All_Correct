import { Container, Link } from "./Company.styles";
import Image from "next/image";

function Company({ url, src, alt }) {
  return (
    <Container>
      <Link href={url} target="blank" rel="noreferrer">
        <Image src={src} alt={alt} width={149} height={149} />
      </Link>
    </Container>
  );
}

export default Company;
