import {
  useRef,
  useCallback,
  useState,
  useEffect,
  cloneElement,
  isValidElement,
  Children,
} from "react";
import { Container, Icon, DropdownMenu } from "./DropDown.styles";
import Text from "../Text/Text";

function DropDown({
  title,
  children,
  defaultValue = "",
  items,
  openMenu,
  onItemSelected = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();

  // Close the dropdown menu and remove the mouse down event
  // once the user clicks outside of container
  // ref: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  // ref: https://stackoverflow.com/questions/55360736/how-do-i-window-removeeventlistener-using-react-useeffect
  const handleOnClickOutside = useCallback(() => {
    if (containerRef && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, [setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOnClickOutside);
    } else {
      document.removeEventListener("mousedown", handleOnClickOutside);
    }

    return removeEventListener("mousedown", handleOnClickOutside);
  }, [isOpen, handleOnClickOutside]);

  const toggleDropDown = (event) => {
    setIsOpen(!isOpen);
  };

  const handleOnItemSelected = (selectedItem) => {
    onItemSelected(selectedItem);
    setIsOpen(false);
  };

  const handleItemClick = (event) => {
    const selectedItem = event.currentTarget.dataset.value;
    handleOnItemSelected(selectedItem);
  };

  // Get all DropDownItem components and pass onClick handler to props so
  // DropDown component can get the selected item.
  const childrenWithOnClickHandler = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { onClick: handleItemClick });
    }
    return child;
  });

  return (
    <Container ref={containerRef} onClick={toggleDropDown}>
      <Text className="header">{title}</Text>
      <Icon isOpen={isOpen} />
      <DropdownMenu open={isOpen}>{childrenWithOnClickHandler}</DropdownMenu>
    </Container>
  );
}

export default DropDown;
