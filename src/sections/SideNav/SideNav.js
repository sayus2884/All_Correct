import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import {
  Container,
  ContainerWrapper,
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

import { sideNavAnim, easeInBottomAnim, staggerOptions, variants } from "../../styles/animations";

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

  useEffect(() => {}, [isOpen]);

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
    <AnimatePresence exitBeforeEnter>
      <Container
        initial={false}
        animate={isOpen ? variants.OPEN : variants.CLOSED}
        exit={sideNavAnim[variants.CLOSED]}
        {...sideNavAnim}>
        <ContainerWrapper>
          <TitleContainer>
            <Link onClick={handleRoute} data-route="/" {...easeInBottomAnim}>
              <Title>
                <Highlight>Allcorrect</Highlight>
              </Title>
            </Link>
            <CloseButton onClick={onClose} {...easeInBottomAnim} />
          </TitleContainer>

          <Menu variants={staggerOptions}>
            {routes.slice(1).map(({ name, route }, i) => (
              <Link onClick={handleRoute} data-route={route} key={i} {...easeInBottomAnim}>
                <SubText className="header">{name}</SubText>
              </Link>
            ))}

            <Link onClick={handleShowModal} key={routes.length} {...easeInBottomAnim}>
              <SubText className="header">
                <Highlight>Get in touch</Highlight>
              </SubText>
            </Link>
          </Menu>
        </ContainerWrapper>
      </Container>
    </AnimatePresence>
  );
}

export default SideNav;
