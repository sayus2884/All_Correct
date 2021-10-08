import Nav from "../components/Nav/Nav.js";
import Reviews from "../components/Reviews/Reviews.js";
import Footer from "../components/Footer/Footer.js";
import { useState } from "react";

export default function JoinUs(props) {
  return (
    <>
      <Nav lang={true} title={"Blog"} />
      <div style={{ color: "white", padding: "40px" }}>
        <h2>Add Blog Components Here</h2>
      </div>
      <Footer />
    </>
  );
}
