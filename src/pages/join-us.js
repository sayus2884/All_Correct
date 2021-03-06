import { useState, useContext } from "react";
import Nav from "../sections/Nav/Nav.js";
import JoinUsSection from "../sections/JoinUs/JoinUs.js";
import AboutTeam from "../sections/AboutTeam/AboutTeam.js";
import WhoWeLookingFor from "../sections/WhoWeLookingFor/WhoWeLookingFor.js";
import WhatToExpect from "../sections/WhatToExpect/WhatToExpect.js";
import Reviews from "../components/Reviews/Reviews.js";
import Footer from "../sections/Footer/Footer.js";

import ReviewsContext from "../context/ReviewsContext";

export default function JoinUs() {
  const { colleagueReviews } = useContext(ReviewsContext);

  return (
    <>
      <header>
        <Nav lang={true} title={"Join Us"} />
      </header>
      <JoinUsSection title={"The Allcorrect group is looking for new faces. Join us!"} />
      <AboutTeam />
      <WhoWeLookingFor />
      <WhatToExpect />
      <JoinUsSection
        title={"Join us! Send your CV"}
        description={`Introduce yourself, tell us about your specialty, and don't forget about links to your portfolio or CV so we can get to know you better :)`}
      />
      <Reviews reviews={colleagueReviews} title="What our colleagues say about us" />
      <Footer />
    </>
  );
}
