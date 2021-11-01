import React, { useEffect, useRef, useState, useCallback, useContext } from "react";
import ReactDOM from "react-dom";
import GetInTouchConfirm from "./GetInTouchConfirm/GetInTouchConfirm";
import GetInTouchModalInfo from "./GetInTouchModalInfo/GetInTouchModalInfo";
import { Background, ModalWrapper } from "./GetInTouchModal.styles";
import GetInTouchModalContext from "../../context/GetInTouchModalContext";
import Portal from "../Portal/Portal";
import { isEmail } from "../../utils/validator";

import { getInTouchModalAnim } from "../../styles/animations";

const GetInTouchModal = () => {
  const { showModal, closeModal } = useContext(GetInTouchModalContext);

  const modalRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  // form fields
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formFields;

  useEffect(() => {
    if (name && isEmail(email) && message) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formFields]);

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
      setFormFields({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        closeModal();
        setFormFields({
          name: "",
          email: "",
          message: "",
        });
      }
    },
    [showModal],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
    setSubmitted(true);
  };

  return (
    <Portal portalId="modal-root">
      {showModal && (
        <Background onClick={handleOutsideClick} ref={modalRef}>
          <ModalWrapper role="Form Inquiry" aria-labelledby="Form Inquiry" {...getInTouchModalAnim}>
            <div>
              {step === 1 && submitted ? (
                <GetInTouchConfirm closeModal={closeModal} />
              ) : (
                <GetInTouchModalInfo
                  buttonDisabled={buttonDisabled}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  formFields={formFields}
                  submitted={submitted}
                  closeModal={closeModal}
                />
              )}
            </div>
          </ModalWrapper>
        </Background>
      )}
    </Portal>
  );
};

export default GetInTouchModal;
