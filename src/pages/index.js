import { useContext } from "react";
import Nav from "../sections/Nav/Nav.js";
import GameCarousel from "../sections/GameCarousel/GameCarousel.js";
import Services from "../sections/Services/Services.js";
import Companies from "../sections/Companies/Companies";
import Pricing from "../sections/Pricing/Pricing";
import Active from "../sections/Active/Active.js";
import Reviews from "../components/Reviews/Reviews.js";
import GameModal from "../sections/GameModal/GameModal.js";
import GetInTouchText from "../sections/GetInTouchText/GetInTouchText.js";
import Footer from "../sections/Footer/Footer.js";

import ReviewsContext from "../context/ReviewsContext";

export default function Home() {
  const { publisherReviews } = useContext(ReviewsContext);

  return (
    <>
      <Nav lang={true} />
      <GameCarousel />
      <Services />
      <Companies />
      <Pricing />
      <Active />
      <Reviews reviews={publisherReviews} />
      <GameModal />
      <GetInTouchText />
      <Footer />
    </>
  );
}
