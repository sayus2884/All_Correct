import { Header } from "./SubTitle.styles";

function SubTitle(props) {
  return <Header {...props}>{props.children}</Header>;
}

export default SubTitle;
