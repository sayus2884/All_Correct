import { Container, Text, Link } from "./GetAdvice.styles";

import Section from "../../components/Section/Section.js";
import Title from "../../components/Title/Title.js";
import Highlight from "../../components/Highlight/Highlight.js";

function GetAdvice() {
  return (
    <Section>
      <Title>
        <Highlight>Allcorrect</Highlight>
      </Title>
      <Text>
        Allcorrect is an ROI-based localization company. Our approach is based on finding profitable
        markets for developers and publishers and adapting games for target audiences, taking
        particular cultural aspects into account. Our goal is to make your games popular and your
        players happy. We’ve been translating games since 2008, and we’ve localized over 840
        projects during that time. Our portfolio includes localizations of large-scale AAA projects
        as well as indie games that have dominated the international market.
      </Text>
      <Link href="#">
        <Title>
          <Highlight>Get advice</Highlight> on entering a new market &#10230;
        </Title>
      </Link>
    </Section>
  );
}

export default GetAdvice;
