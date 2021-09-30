import Nav from "../components/Nav/Nav.js";
import Services from "../components/Services/Services.js";
import Reviews from "../components/Reviews/Reviews.js";
import Footer from "../components/Footer/Footer.js";

export default function Home() {
  return (
    <>
      <Nav lang={true} />
      <Services />
      <Reviews />
      <Footer />
    </>
  );
}
