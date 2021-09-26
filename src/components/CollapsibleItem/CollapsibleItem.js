import { useState } from 'react';
import { Container, HeaderContainer, Title, DropdownButton, Content } from "./CollapsibleItem.styles";

function CollapsibleItem({ title }) {

  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
    console.log('handling click');
  }

  return (

        <Container>
          <HeaderContainer>
            <Title>{title}</Title>
            <DropdownButton onClick={handleClick} isOpen={isOpen}>&#10230;</DropdownButton>
          </HeaderContainer>

          <Content className="content" isOpen={isOpen}>
            <p className='text'>This is a dummy texts</p>
          </Content>
        </Container>
  );
}

export default CollapsibleItem;
