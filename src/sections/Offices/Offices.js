import Image from "next-optimized-images";
import { Section } from "./Offices.styles";
import Title from "../../components/Title/Title.js";

import map from "../../../public/images/offices/offices.png";

function Offices() {
  return (
    <Section>
      <Title>Our offices</Title>
      <Image src={map} />
    </Section>
  );
}

export default Offices;
