import Nav from "../components/Nav/Nav.js";
import Reviews from "../components/Reviews/Reviews.js";
import Footer from "../components/Footer/Footer.js";
import Offices from "../components/Offices/Offices.js";
import { useState } from "react";

export default function JoinUs(props) {
  return (
    <>
      <Nav lang={true} />
      <div style={{ color: "white", padding: "40px" }}>
        <h2>Add About Us Components Here</h2>
      </div>
      <Offices />
      <Footer />
    </>
  );
}
