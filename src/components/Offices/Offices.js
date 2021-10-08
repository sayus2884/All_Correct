import Image from "next/image";
import {
  OfficesWrapper,
  OfficesTitle,
  OfficesCircle,
  OfficesImageContainer,
  OfficesTorontoContainer,
  OfficesPlaceTitle,
  OfficesDublinContainer,
  OfficesSamaraContainer,
  OfficesHongKongContainer,
} from "./Offices.styles";
import map from "../../../public/images/offices/offices.png";

function Offices() {
  return (
    <OfficesWrapper>
      <OfficesTitle>Our offices</OfficesTitle>
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
    </OfficesWrapper>
  );
}

export default Offices;
