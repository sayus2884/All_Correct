import { Wrapper, Item, Icon } from "./GameMenuItem.styles";

function GameMenuItem({ children }) {
  return (
    <Wrapper>
      <Item>{children}</Item>
      <Icon />
    </Wrapper>
  );
}

export default GameMenuItem;
