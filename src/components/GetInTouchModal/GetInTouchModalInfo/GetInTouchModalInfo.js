import React, { useState } from "react";
import Link from "next/link";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { Button, CheckboxWrapper, Info, Text, Title } from "../GetInTouchModal.styles";

const GetInTouchModalInfo = ({ handleSubmit, handleChange, formFields, buttonDisabled }) => {
  const [checked, setChecked] = useState(false);
  const [buttonStyle, setButtonStyle] = useState(true);
  // const [buttonDisabled, setButtonDisabled] = React.useState(true);

  // React.useEffect(() => {
  //   if (formFields.name && formFields.message && formFields.email && checked) {
  //     setButtonDisabled(false);
  //   }
  // }, [formFields.name, formFields.message, formFields.email, checked]);

  React.useEffect(() => {
    console.log(checked);
    console.log(buttonDisabled);
    if (checked === true && buttonDisabled === false) {
      setButtonStyle(false);
    } else {
      setButtonStyle(true);
    }
  }, [checked, buttonDisabled]);


  return (
    <>
      <Title>Get in Touch</Title>
      <ErrorBoundary>
        <input
          type="text"
          name="name"
          value={formFields.name}
          onChange={handleChange}
          placeholder="Name"
          minLength="2"
          maxLength="40"
          required
        />
        <textarea
          type="text"
          name="message"
          value={formFields.message}
          onChange={handleChange}
          placeholder="Project Description"
          minLength="2"
          maxLength="200"
          required
        />
        <input
          type="email"
          name="email"
          value={formFields.email}
          onChange={handleChange}
          placeholder="Email*"
          required
        />
        <label className="custom-file-upload">
          <input type="file" />
          Add files if needed
        </label>
        <CheckboxWrapper>
          <input
            type="checkbox"
            name="GDPR Agreement"
            value="GDPR Agreement"
            onChange={() => setChecked(!checked)}
          />
          <Text>GDPR Agreement</Text>
        </CheckboxWrapper>
        <Info>
          Please note that this form is strictly for project inquiries only. To apply for a job,
          please visit our{" "}
          <Link href="https://allcorrectgames.com/for-freelancers/" target="_blank" noopener="true">
            <a>career page.</a>
          </Link>
        </Info>
        <Button
          handleDisabledStyled={buttonStyle}
          onClick={handleSubmit}
          disabled={buttonDisabled}
        >Send the form –></Button>
      </ErrorBoundary>
    </>
  );
};

export default GetInTouchModalInfo;
