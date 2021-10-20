import Nav from "../sections/Nav/Nav.js";
import Posts from "../sections/Posts/Posts.js";
import Footer from "../sections/Footer/Footer.js";
import { useState } from "react";

export default function Blog(props) {
  return (
    <>
      <header>
        <Nav lang={true} title={"Blog"} />
      </header>
      <Posts />
      <Footer />
    </>
  );
}
