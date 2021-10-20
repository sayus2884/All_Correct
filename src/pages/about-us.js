import { useState, useContext } from "react";
import Nav from "../sections/Nav/Nav.js";
import OurCompany from "../sections/OurCompany/OurCompany.js";
import Offices from "../sections/Offices/Offices.js";
import Reviews from "../components/Reviews/Reviews.js";
import GetInTouchText from "../sections/GetInTouchText/GetInTouchText.js";
import Footer from "../sections/Footer/Footer.js";

import ReviewsContext from "../context/ReviewsContext";

export default function AboutUs(props) {
  const { publisherReviews } = useContext(ReviewsContext);

  return (
    <>
      <header>
        <Nav lang={true} />
      </header>
      <OurCompany />
      <Offices />
      <Reviews reviews={publisherReviews} />
      <GetInTouchText />
      <Footer />
    </>
  );
}
