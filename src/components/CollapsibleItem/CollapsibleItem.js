import { useState } from "react";
import {
  Container,
  HeaderContainer,
  // Title,
  DropdownButton,
  Content,
} from "./CollapsibleItem.styles";
import SubTitle from "../SubTitle/SubTitle";

function CollapsibleItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <HeaderContainer>
        <SubTitle>{title}</SubTitle>
        <DropdownButton onClick={handleClick} isOpen={isOpen}>
          &#10230;
        </DropdownButton>
      </HeaderContainer>

      <Content isOpen={isOpen}>{children}</Content>
    </Container>
  );
}

export default CollapsibleItem;
