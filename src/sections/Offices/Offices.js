import Image from "next/image";
import {
  Section,
  OfficesTitle,
  OfficesCircle,
  OfficesImageContainer,
  OfficesTorontoContainer,
  OfficesPlaceTitle,
  OfficesDublinContainer,
  OfficesSamaraContainer,
  OfficesHongKongContainer,
} from "./Offices.styles";
import Title from "../../components/Title/Title.js";

import map from "../../../public/images/offices/offices.png";

function Offices() {
  return (
    <Section>
      <Title>Our offices</Title>
      <OfficesImageContainer>
        <Image src={map} />

        <OfficesTorontoContainer>
          <OfficesCircle />
          <OfficesPlaceTitle>Toronto</OfficesPlaceTitle>
        </OfficesTorontoContainer>

        <OfficesDublinContainer>
          <OfficesPlaceTitle>Dublin</OfficesPlaceTitle>
          <OfficesCircle />
        </OfficesDublinContainer>

        <OfficesSamaraContainer>
          <OfficesCircle />
          <OfficesPlaceTitle>Samara</OfficesPlaceTitle>
        </OfficesSamaraContainer>

        <OfficesHongKongContainer>
          <OfficesPlaceTitle>Hong Kong</OfficesPlaceTitle>
          <OfficesCircle />
        </OfficesHongKongContainer>
      </OfficesImageContainer>
    </Section>
  );
}

export default Offices;
