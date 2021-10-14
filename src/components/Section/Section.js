import { Section as Div } from "./Section.styles";

function Section(props) {
  return <Div {...props}>{props.children}</Div>;
}

export default Section;
