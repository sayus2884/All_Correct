import Nav from "../components/Nav/Nav.js";
import OurCompany from "../components/OurCompany/OurCompany.js";
import Footer from "../components/Footer/Footer.js";
import { useState } from "react";

export default function JoinUs(props) {
  return (
    <>
      <Nav lang={true} />
      <OurCompany />
      <Footer />
    </>
  );
}
