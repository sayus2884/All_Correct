import { Paragraph } from "./SubText.styles";

function SubText(props) {
  return <Paragraph {...props}>{props.children}</Paragraph>;
}

export default SubText;
