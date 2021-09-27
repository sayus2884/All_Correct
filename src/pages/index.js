import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer";
import Companies from "../components/Companies/Companies";

export default function Home() {
  return (
    <>
      <Nav lang={true} />

      <Companies />
      <Footer />
    </>
  );
}
