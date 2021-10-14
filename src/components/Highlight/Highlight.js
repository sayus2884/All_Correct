import { Span } from "./Highlight.styles";

function Highlight(props) {
  return <Span {...props}>{props.children}</Span>;
}

export default Highlight;
