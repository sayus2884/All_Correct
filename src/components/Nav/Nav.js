import { useContext } from "react";
import Link from "next/link";
import GetInTouchModal from "../GetInTouchModal/GetInTouchModal";
import { Container, Logo, Menu, Text } from "./Nav.styles";
import GetInTouchModalContext from "../../context/GetInTouchModalContext";

function Nav({ lang, title = "Game outsourcing studio", inherit }) {
  const { showModal, openModal, closeModal } = useContext(GetInTouchModalContext);
  return (
    <Container inherit={inherit}>
      <Link href="/">
        <Logo as="a">
          <Text color="blue">Allcorrect</Text>
          <Text>{title}</Text>
        </Logo>
      </Link>
      <Menu>
        <Link href="/portfolio" rel="noreferrer noopener">
          <Text as="a" className="normal">
            Portfolio
          </Text>
        </Link>
        <Link href="/about-us">
          <Text as="a" href="#" rel="noreferrer noopener" className="normal">
            About us
          </Text>
        </Link>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Services
        </Text>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Pricing
        </Text>
        <Link href="/blog">
          <Text as="a" href="#" rel="noreferrer noopener" className="normal">
            Blog
          </Text>
        </Link>
        <Link href="/join-us">
          <Text as="a" href="#" rel="noreferrer noopener" className="normal">
            Join us
          </Text>
        </Link>
        <Text className="normal" color="blue" onClick={openModal}>
          Get in touch
        </Text>
        <GetInTouchModal onClose={closeModal} showModal={showModal} />
        {lang && <Text className="normal block">Ru</Text>}
      </Menu>
    </Container>
  );
}

export default Nav;
