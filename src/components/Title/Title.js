import { Header } from "./Title.styles";

function Title(props) {
  return <Header {...props}>{props.children}</Header>;
}

export default Title;
