import { Paragraph } from "./Text.styles";

function Text(props) {
  return <Paragraph {...props}>{props.children}</Paragraph>;
}

export default Text;
