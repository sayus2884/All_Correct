import { Item } from "./DropDownItem.styles";

function DropDownItem({ children, value, onClick }) {
  return (
    <Item onClick={onClick} data-value={value}>
      {value}
    </Item>
  );
}

export default DropDownItem;
