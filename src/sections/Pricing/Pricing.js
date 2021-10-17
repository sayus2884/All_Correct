import Link from "next/link";
import {
  Title,
  TextWrapper,
  CheckWrapper,
  CheckItem,
  EmailWrapper,
  EmailInput,
  FormButton,
} from "./Pricing.styles";
import Checkbox from "../../components/Checkbox/Checkbox";
import Section from "../../components/Section/Section";
import Text from "../../components/Text/Text";

function Pricing(props) {
  return (
    <Section {...props}>
      <Title className="section-title">Pricing</Title>
      <TextWrapper>
        <Text className="price-text">
          Our pricing depends on the type of services we provide. We have detailed PDFs with the
          pricing breakdown. Leave your eamil and we will send them back to you!{" "}
        </Text>
        <CheckWrapper>
          <Text className="price-text">Please, select which services you are interested in:</Text>
          <CheckItem>
            <Checkbox />
            <Text as="span">Lean game localization</Text>
          </CheckItem>
          <CheckItem>
            <Checkbox />
            <Text as="span">Localization and functional game testing</Text>
          </CheckItem>
          <CheckItem>
            <Checkbox />
            <Text as="span">Voiceovers</Text>
          </CheckItem>
          <CheckItem>
            <Checkbox />
            <Text as="span">Game art</Text>
          </CheckItem>
        </CheckWrapper>
      </TextWrapper>

      <CheckItem>
        <Checkbox />
        <Text>
          I agree with the{" "}
          <Link href="#" target="_blank" rel="noopener">
            terms of use
          </Link>
        </Text>
      </CheckItem>

      <EmailWrapper>
        <EmailInput placeholder="Your email" />
        <FormButton>
          <Title>Inquire price &#10230;</Title>
        </FormButton>
      </EmailWrapper>
    </Section>
  );
}

export default Pricing;
