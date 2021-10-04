import Nav from "../components/Nav/Nav.js";
import Services from "../components/Services/Services.js";
import Active from "../components/Active/Active.js";
import Reviews from "../components/Reviews/Reviews.js";
import Companies from "../components/Companies/Companies";
import Footer from "../components/Footer/Footer.js";

export default function Home() {
  return (
    <>
      <Nav lang={true} />
      <Services />
      <Companies />
      <Active />
      <Reviews />
      <Footer />
    </>
  );
}
