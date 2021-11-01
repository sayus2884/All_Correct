import Link from "next/link";
import { useState } from "react";
import {
  Title,
  PricingForm,
  TextWrapper,
  CheckWrapper,
  CheckItem,
  EmailWrapper,
  EmailInput,
  FormButton,
  ThankYouText,
} from "./Pricing.styles";
import Checkbox from "../../components/Checkbox/Checkbox";
import Section from "../../components/Section/Section";
import Text from "../../components/Text/Text";

function Pricing(props) {
  const [isSubmittted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <Section {...props}>
      {isSubmittted ? (
        <div>
          <ThankYouText>Thank You!</ThankYouText>
          <ThankYouText>We’ll send the price list to your email in a minute</ThankYouText>
        </div>
      ) : (
        <PricingForm onSubmit={handleFormSubmit}>
          <Title className="section-title">Pricing</Title>
          <TextWrapper>
            <Text className="price-text">
              Our pricing depends on the type of services we provide. We have detailed PDFs with the
              pricing breakdown. Leave your eamil and we will send them back to you!
            </Text>
            <CheckWrapper>
              <Text className="price-text">
                Please, select which services you are interested in:
              </Text>
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
            <EmailInput placeholder="Your email" required />
            <FormButton>
              <Title>Inquire price &#10230;</Title>
            </FormButton>
          </EmailWrapper>
        </PricingForm>
      )}
    </Section>
  );
}

export default Pricing;
