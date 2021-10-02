import { Wrapper, Item, Icon, DropdownMenu } from "./GameMenuItem.styles";

function GameMenuItem({ children, items, openMenu, setOpen }) {
  return (
    <Wrapper>
      <Item>{children}</Item>
      <Icon open={openMenu} onClick={() => setOpen()} />
      {items && (
        <DropdownMenu open={openMenu}>
          {items.map((e, i) => (
            <Item key={i} className={i === 0 ? "menu blue" : "black"}>
              {e}
            </Item>
          ))}
        </DropdownMenu>
      )}
    </Wrapper>
  );
}

export default GameMenuItem;
