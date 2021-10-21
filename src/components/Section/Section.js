import { Section as Div } from "./Section.styles";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import { sectionAnim } from "../../styles/animations";

function Section(props) {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();
  const { initial, animate, transition } = sectionAnim;

  if (inView) {
    console.log("in view");
    animationControl.start({
      transition: { ...transition },
      ...animate,
    });
  }

  return (
    <Div {...props} ref={ref} animate={animationControl} initial={initial}>
      {props.children}
    </Div>
  );
}

export default Section;
