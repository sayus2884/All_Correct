import { Btn } from "./Button.styles";

function Button(props) {
  return <Btn {...props}>{props.children}</Btn>;
}

export default Button;
