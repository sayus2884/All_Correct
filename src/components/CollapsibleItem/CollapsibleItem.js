import { useState } from "react";
import {
  Container,
  HeaderContainer,
  SubTitle,
  DropdownButton,
  Content,
} from "./CollapsibleItem.styles";

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
          <SubTitle>&#10230;</SubTitle>
        </DropdownButton>
      </HeaderContainer>

      <Content isOpen={isOpen}>{children}</Content>
    </Container>
  );
}

export default CollapsibleItem;
