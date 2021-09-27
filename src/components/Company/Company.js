import { Container, Image } from "./Company.styles";

function Company({ url, src }) {

  return (
    <Container>
      <a href={url} target="blank" rel="noreferrer">
        <Image src={src} alt=""/>
      </a>
    </Container>
  )
}

export default Company;
