import { Container, Column, Description, Text, Link } from "./OurCompany.styles";

function OurCompany() {
  return (
    <Container>
      <Column>
        <Description>
          <Text>
            Allcorrect Games is a division of Allcorrect Group which provides translation,
            voiceovers, localization testing and video game localization
          </Text>
          <Text>
            Allcorrect Games works with the majority of Russian developers and publishers, along
            with major international game publishers. The company has participated in the
            localization of over 829 games, as well as the testing of over 100 games. Allcorrect
            Games works in more than 23 language pairs, partners with 6 voice studios, and employs
            highly competent native and Russian speakers to test games on the iOS, Android, and PC
            platforms.
          </Text>
        </Description>
      </Column>
      <Column>
        <Description>
          <Text>
            Allcorrect is an associate member of the Globalization and Localization Association
            (GALA). Allcorrect’s Founding Partner Demid Tishin is a member of the IGDA game
            developers’ association. Since 2013, Allcorrect has been numbered among the top 20
            largest translation companies of Eastern Europe according to the CSA agency.
          </Text>
          <Text>
            Since 2010, we have been introducing lean production technology into the company
            management.
          </Text>
        </Description>
      </Column>
      <Column className="links">
        <Link>Portfolio &#10230;</Link>
        <Link>Work with us &#10230;</Link>
      </Column>
    </Container>
  );
}

export default OurCompany;
