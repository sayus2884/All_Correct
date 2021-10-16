import Nav from "../sections/Nav/Nav.js";
import OurCompany from "../sections/OurCompany/OurCompany.js";
import Offices from "../sections/Offices/Offices.js";
import GetInTouchText from "../sections/GetInTouchText/GetInTouchText.js";
import Footer from "../sections/Footer/Footer.js";
import { useState } from "react";

export default function JoinUs(props) {
  return (
    <>
      <Nav lang={true} />
      <OurCompany />
      <Offices />
      <GetInTouchText />
      <Footer />
    </>
  );
}
