import { useContext } from "react";
import GetInTouchModal from "../../components/GetInTouchModal/GetInTouchModal";
import { Container, Logo, Menu, Link } from "./Nav.styles";
import GetInTouchModalContext from "../../context/GetInTouchModalContext";

import Title from "../../components/Title/Title";
import SubText from "../../components/SubText/SubText";
import Highlight from "../../components/Highlight/Highlight";

function Nav({ lang, title = "Game outsourcing studio", inherit }) {
  const { showModal, openModal, closeModal } = useContext(GetInTouchModalContext);
  return (
    <Container inherit={inherit}>
      <Link href="/">
        <Title>
          <Highlight>Allcorrect</Highlight>
        </Title>
        <Title>{title}</Title>
      </Link>
      <Menu>
        <Link href="/portfolio" rel="noreferrer noopener">
          <SubText>Portfolio</SubText>
        </Link>
        <Link href="/about-us">
          <SubText>About us</SubText>
        </Link>
        <Link href="/#services">
          <SubText>Services</SubText>
        </Link>
        <Link href="/#pricing">
          <SubText>Pricing</SubText>
        </Link>
        <Link href="/blog">
          <SubText>Blog</SubText>
        </Link>
        <Link href="/join-us">
          <SubText>Join us</SubText>
        </Link>
        <SubText className="normal" color="blue" onClick={openModal}>
          <Highlight>Get in touch</Highlight>
        </SubText>
        <GetInTouchModal onClose={closeModal} showModal={showModal} />

        {lang && <SubText className="block">Ru</SubText>}
      </Menu>
    </Container>
  );
}

export default Nav;
