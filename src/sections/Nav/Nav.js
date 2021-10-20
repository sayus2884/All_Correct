import { useState, useContext } from "react";
import GetInTouchModal from "../../components/GetInTouchModal/GetInTouchModal";
import { Container, Title, Menu, HamburgerButton, Link } from "./Nav.styles";
import GetInTouchModalContext from "../../context/GetInTouchModalContext";

import SubText from "../../components/SubText/SubText";
import Highlight from "../../components/Highlight/Highlight";
import SideNav from "../SideNav/SideNav";

function Nav({
  lang,
  title = "Game outsourcing studio",
  footer = false,
  hamburger = false,
  inherit,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { showModal, openModal, closeModal } = useContext(GetInTouchModalContext);

  const openNav = () => {
    setIsOpen(true);
  };

  const handleCloseSideNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SideNav isOpen={isOpen} onClose={handleCloseSideNav} />
      <Container inherit={inherit}>
        <Link href="/">
          <Title>
            <Highlight>Allcorrect</Highlight>
          </Title>
          <Title>{title}</Title>
        </Link>
        <HamburgerButton className="mobile" onClick={openNav} />
        <Menu className={footer && "footer"}>
          <Link href="/portfolio" rel="noreferrer noopener">
            <SubText className="header">Portfolio</SubText>
          </Link>
          <Link href="/about-us">
            <SubText className="header">About us</SubText>
          </Link>
          <Link href="/#services">
            <SubText className="header">Services</SubText>
          </Link>
          <Link href="/#pricing">
            <SubText className="header">Pricing</SubText>
          </Link>
          <Link href="/blog">
            <SubText className="header">Blog</SubText>
          </Link>
          <Link href="/join-us">
            <SubText className="header">Join us</SubText>
          </Link>
          <SubText className="header" onClick={openModal}>
            <Highlight>Get in touch</Highlight>
          </SubText>
          <GetInTouchModal onClose={closeModal} showModal={showModal} />

          {lang && <SubText className="header block">Ru</SubText>}
        </Menu>
      </Container>
    </>
  );
}

export default Nav;
