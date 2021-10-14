import NLink from "next/link";
import { Anchor } from "./Link.styles";

// Please refer to this document for further customization
// https://nextjs.org/docs/api-reference/next/link

function Link(props) {
  const { href, replace = false, scroll = true, ...anchorProps } = props;

  return (
    <NLink href={href} passHref replace={replace} scroll={scroll}>
      <Anchor {...anchorProps}>{props.children}</Anchor>
    </NLink>
  );
}

export default Link;
