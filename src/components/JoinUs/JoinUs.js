import { Container, Title, Text, LinksContainer, Link } from "./JoinUs.styles";

function JoinUs({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>

      {description && <Text>{description}</Text>}
      <LinksContainer>
        <Link>For linguists &#10230;</Link>
        <Link>For artists &#10230;</Link>
      </LinksContainer>
    </Container>
  );
}

export default JoinUs;
