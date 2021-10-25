import Image from "next/image";
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
