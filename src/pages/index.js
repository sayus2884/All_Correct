import Nav from "../components/Nav/Nav.js";
import Services from "../components/Services/Services.js";
import Active from "../components/Active/Active.js";
import Reviews from "../components/Reviews/Reviews.js";
import Footer from "../components/Footer/Footer.js";

import GameModal from "../components/GameModal/GameModal.js";
import GameInfo from "../components/GameInfo/GameInfo.js";

export default function Home() {
  return (
    <>
      <Nav lang={true} />
      <Services />
      <Active />
      <Reviews />

      <GameModal>
        <GameInfo />
      </GameModal>

      <Footer />
    </>
  );
}
