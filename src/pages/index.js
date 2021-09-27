import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer";
import Active from "../components/Active/Active.js";

export default function Home() {
  return (
    <>
      <Nav lang={true} />
      <Active />
      <Footer />
    </>
  );
}
