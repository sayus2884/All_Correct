import Nav from "../components/Nav/Nav.js";

import Collapsible from "../components/Collapsible/Collapsible.js";
import CollapsibleItem from "../components/CollapsibleItem/CollapsibleItem.js";

export default function Home() {

  const fakedata = ["A very good title","A title", "Meh"];

  return(
    <>
      <Nav />
      <div>
        <Collapsible>
          { fakedata.map((i) => (
            <CollapsibleItem title={i} key={i}/>
          ))}
        </Collapsible>
      </div>
    </>
  );
}
