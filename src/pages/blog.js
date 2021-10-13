import Nav from "../components/Nav/Nav.js";
import Posts from "../components/Posts/Posts.js";
import Footer from "../components/Footer/Footer.js";
import { useState } from "react";

export default function JoinUs(props) {
  return (
    <>
      <Nav lang={true} title={"Blog"} />
      <Posts />
      <Footer />
    </>
  );
}
