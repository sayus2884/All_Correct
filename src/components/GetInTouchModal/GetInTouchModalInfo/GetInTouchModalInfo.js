import React, { useState, useEffect } from "react";
import Link from "next/link";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

import {
  Background,
  Button,
  CheckboxWrapper,
  Info,
  Text,
  Title,
  CheckItem,
} from "../GetInTouchModal.styles";
import Checkbox from "../../Checkbox/Checkbox";
import Highlight from "../../Highlight/Highlight";

const GetInTouchModalInfo = ({ handleSubmit, handleChange, formFields, buttonDisabled }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [fileName, setFileName] = useState("");

  function FileNameChangeHandler(e) {
    setFileName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
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
          style={{ position: "relative" }}
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
          <input type="file" value={fileName} onChange={FileNameChangeHandler} />
          {fileName.length === 0 ? "Add files if needed" : fileName.slice(12, 31)}
        </label>

        <CheckItem>
          <Checkbox
            name="GDPR Agreement"
            value="GDPR Agreement"
            colorChange={true}
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}
          />
          <Text as="span">GDPR Agreement</Text>
        </CheckItem>

        <Info>
          Please note that this form is strictly for project inquiries only. To apply for a job,
          please visit our{" "}
          <Link href="https://allcorrectgames.com/for-freelancers/" target="_blank" noopener="true">
            <a>
              <Highlight>career page.</Highlight>
            </a>
          </Link>
        </Info>
        <Button type="submit" disabled={!isChecked || buttonDisabled}>
          Send the form &#10230;
        </Button>
      </ErrorBoundary>
    </form>
  );
};

export default GetInTouchModalInfo;
