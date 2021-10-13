import { Container, Title, Description, LinkWrapper, Highlight } from "./GetAdvice.styles";

function GetAdvice() {
  return (
    <Container>
      <Title>Allcorrect</Title>
      <Description>
        Allcorrect is an ROI-based localization company. Our approach is based on finding profitable
        markets for developers and publishers and adapting games for target audiences, taking
        particular cultural aspects into account. Our goal is to make your games popular and your
        players happy. We’ve been translating games since 2008, and we’ve localized over 840
        projects during that time. Our portfolio includes localizations of large-scale AAA projects
        as well as indie games that have dominated the international market.
      </Description>
      <LinkWrapper>
        <Highlight>Get advice</Highlight> on entering a new market &#10230;
      </LinkWrapper>
    </Container>
  );
}

export default GetAdvice;
