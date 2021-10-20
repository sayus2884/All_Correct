import { useContext } from "react";
import { Section, Title, Wrapper } from "./GetInTouchText.styles";

import GetInTouchModal from "../../components/GetInTouchModal/GetInTouchModal";
// import Title from "../../components/Title/Title.js";
import Highlight from "../../components/Highlight/Highlight.js";

import GetInTouchModalContext from "../../context/GetInTouchModalContext";

const GetInTouchForm = ({ inherit }) => {
  const { showModal, openModal, closeModal } = useContext(GetInTouchModalContext);

  return (
    <Section>
      <Wrapper onClick={openModal}>
        <Title>
          <Highlight>Get in touch </Highlight>
          to start your project &#10230;
        </Title>
      </Wrapper>
      <GetInTouchModal closeModal={closeModal} showModal={showModal} />
    </Section>
  );
};

export default GetInTouchForm;
