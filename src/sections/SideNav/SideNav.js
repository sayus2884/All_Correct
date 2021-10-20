import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const routes = [
    { name: "", route: "/" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "About Us", route: "/about-us" },
    { name: "Services", route: "/#services" },
    { name: "Pricing", route: "/#pricing" },
    { name: "Blog", route: "/blog" },
    { name: "Join Us", route: "/join-us" },
  ];

  // prefetch pages for faster page transitions
  useEffect(() => {
    routes.forEach(({ route }) => {
      router.prefetch(route);
    });
  }, []);

  const handleShowModal = (event) => {
    event.preventDefault();
    openModal();
    onClose();
  };

  const handleRoute = (event) => {
    event.preventDefault();
    const route = event.currentTarget.dataset.route;

    onClose();
    router.push(route);
  };

  return (
    <Container isOpen={isOpen}>
      <TitleContainer>
        <Link onClick={handleRoute} data-route="/">
          <Title>
            <Highlight>Allcorrect</Highlight>
          </Title>
        </Link>
        <CloseButton onClick={onClose} />
      </TitleContainer>

      <Menu>
        {routes.slice(1).map(({ name, route }) => (
          <Link onClick={handleRoute} data-route={route}>
            <SubText className="header">{name}</SubText>
          </Link>
        ))}

        <Link onClick={handleShowModal}>
          <SubText className="header">
            <Highlight>Get in touch</Highlight>
          </SubText>
        </Link>
      </Menu>
    </Container>
  );
}

export default SideNav;
