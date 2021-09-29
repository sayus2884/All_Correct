import Nav from "../components/Nav/Nav.js";
import Reviews from "../components/Reviews/Reviews.js";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Nav lang={true} />
      <Reviews />
      <Footer />
    </>
  );
}
