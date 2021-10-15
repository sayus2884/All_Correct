import { ExpectTitle, ExpectList, Text } from "./WhatToExpect.styles";
import Section from "../../components/Section/Section";

function WhatToExpect() {
  const listData = [
    {
      text: "Ongoing professional development, access to modern software, quick and objective feedback, qualified managers",
    },
    {
      text: "The chance to see your hard work come to fruition, with players all over the world celebrating game services",
    },
    {
      text: "Interesting projects from famous developers and the opportunity to get into the game credits",
    },
    {
      text: "A convenient payment system (PayPal, wire transfer) and invoice payment within 20 days",
    },
    {
      text: "A corporate portal that lets you keep track of your income online",
    },
    {
      text: "The ability to work from anywhere in the world (from home, a coffee shop, or your own office)",
    },
  ];
  return (
    <Section>
      <ExpectTitle>What you can expect</ExpectTitle>
      <ExpectList>
        {listData.map((item, i) => (
          <li key={i}>
            <Text>{item.text}</Text>
          </li>
        ))}
      </ExpectList>
    </Section>
  );
}

export default WhatToExpect;
