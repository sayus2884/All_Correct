import { Paragraph } from "./Data.styles";

function Data(props) {
  return <Paragraph {...props}>{props.children}</Paragraph>;
}

export default Data;
