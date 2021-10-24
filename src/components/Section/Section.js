import { Section as Div } from "./Section.styles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { sectionAnim } from "../../styles/animations";

function Section({ noAnimation, ...props }) {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();
  const { initial, animate, transition } = sectionAnim;

  if (inView && !noAnimation) {
    animationControl.start({
      transition: { ...transition },
      ...animate,
    });
  }

  const animationOptions = noAnimation ? {} : { animate: animationControl, initial };

  return (
    <Div {...props} ref={ref} {...animationOptions}>
      {props.children}
    </Div>
  );
}

export default Section;
