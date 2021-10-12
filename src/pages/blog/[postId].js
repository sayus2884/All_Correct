import { useContext } from "react";
import Nav from "../../components/Nav/Nav.js";
import GetAdvice from "../../components/GetAdvice/GetAdvice.js";
import Footer from "../../components/Footer/Footer.js";

export default function Home() {
  return (
    <>
      <Nav lang={true} title={"Blog"} />
      <GetAdvice />
      <Footer />
    </>
  );
}
