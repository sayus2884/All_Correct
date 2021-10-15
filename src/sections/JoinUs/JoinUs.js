import { Section, Title, Text, LinksContainer } from "./JoinUs.styles";

import Link from "../../components/Link/Link.js";

function JoinUs({ title, description }) {
  return (
    <Section>
      <Title className="section-title">{title}</Title>

      {description && <Text>{description}</Text>}
      <LinksContainer>
        <Link href="#" scroll={false}>
          <Title>For linguists &#10230;</Title>
        </Link>
        <Link href="#" scroll={false}>
          <Title>For artists &#10230;</Title>
        </Link>
      </LinksContainer>
    </Section>
  );
}

export default JoinUs;
