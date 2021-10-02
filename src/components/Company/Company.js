import { Container, Link, Image } from "./Company.styles";

function Company({ url, src }) {
  return (
    <Container>
      <Link href={url} target="blank" rel="noreferrer">
        <Image src={src} alt="" />
      </Link>
    </Container>
  );
}

export default Company;
