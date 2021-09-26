import { Container, Logo, Menu, Text } from "./Nav.styles";

function Nav({ lang, inherit }) {
  return (
    <Container inherit={inherit}>
      <Logo>
        <Text color="blue">Allcorrect</Text>
        <Text>Game outsourcing studio</Text>
      </Logo>
      <Menu>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Portfolio
        </Text>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          About us
        </Text>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Services
        </Text>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Pricing
        </Text>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Blog
        </Text>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Join us
        </Text>
        <Text className="normal" color="blue">
          Get in touch
        </Text>
        {lang && <Text className="normal block">Ru</Text>}
      </Menu>
    </Container>
  );
}

export default Nav;
