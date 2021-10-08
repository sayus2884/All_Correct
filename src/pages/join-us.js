import Nav from "../components/Nav/Nav.js";
import Reviews from "../components/Reviews/Reviews.js";
import JoinUsSection from "../components/JoinUs/JoinUs.js";
import Footer from "../components/Footer/Footer.js";
import { useState } from "react";

export default function JoinUs({ allGames }) {
  const [games, setGames] = useState(allGames);

  return (
    <>
      <Nav lang={true} />
      <JoinUsSection title={"The Allcorrect group is looking for new faces. Join us!"} />
      <JoinUsSection
        title={"Join us! Send your CV"}
        description={`Introduce yourself, tell us about your specialty, and don't forget about links to your portfolio or CV so we can get to know you better :)`}
      />
      <Footer />
    </>
  );
}
