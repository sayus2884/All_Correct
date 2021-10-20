import { useContext } from "react";
import {
  Container,
  TitleContainer,
  Title,
  Menu,
  HamburgerButton,
  Link,
  CloseButton,
} from "./SideNav.styles";
import GetInTouchModalContext from "../../context/GetInTouchModalContext";

import SubText from "../../components/SubText/SubText";
import Highlight from "../../components/Highlight/Highlight";

function SideNav({ isOpen = false, onClose }) {
  const { showModal, openModal, closeModal } = useContext(GetInTouchModalContext);

  const handleClose = (event) => {
    event.preventDefault();
    onClose();
  };

  const handleShowModal = (event) => {
    event.preventDefault();
    openModal();
    onClose();
  };

  return (
    <Container isOpen={isOpen}>
      <TitleContainer>
        <Link href="/">
          <Title>
            <Highlight>Allcorrect</Highlight>
          </Title>
        </Link>
        <CloseButton onClick={handleClose} />
      </TitleContainer>

      <Menu>
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
        <SubText className="header" onClick={handleShowModal}>
          <Highlight>Get in touch</Highlight>
        </SubText>
      </Menu>
    </Container>
  );
}

export default SideNav;
