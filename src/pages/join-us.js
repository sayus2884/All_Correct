import Nav from "../components/Nav/Nav.js";
import Reviews from "../components/Reviews/Reviews.js";
import JoinUsSection from "../components/JoinUs/JoinUs.js";
import AboutTeam from "../components/AboutTeam/AboutTeam.js";
import WhatToExpect from "../components/WhatToExpect/WhatToExpect.js";
import Footer from "../components/Footer/Footer.js";
import { useState } from "react";

export default function JoinUs({ allGames }) {
  const [games, setGames] = useState(allGames);

  return (
    <>
      <Nav lang={true} title={"Join Us"} />
      <JoinUsSection title={"The Allcorrect group is looking for new faces. Join us!"} />
      <AboutTeam />

      <WhatToExpect />

      <JoinUsSection
        title={"Join us! Send your CV"}
        description={`Introduce yourself, tell us about your specialty, and don't forget about links to your portfolio or CV so we can get to know you better :)`}
      />
      <Footer />
    </>
  );
}
