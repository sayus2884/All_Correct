import { useState } from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from "./Checkbox.styles";
import checkmark from "../../../public/images/checkbox/checkmark.svg";
import checkmarkBlue from "../../../public/images/checkbox/checkmarkBlue.svg";
import Image from "next/image";

function Checkbox({ colorChange, isChecked, setIsChecked }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
    isChecked ? setIsChecked(!isChecked) : null;
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
      <StyledCheckbox
        checked={checked}
        style={{ backgroundColor: colorChange ? "white" : null, border: "1px solid black" }}>
        <Image src={colorChange ? checkmarkBlue : checkmark} height={11.5} width={13.5} />
      </StyledCheckbox>
    </CheckboxContainer>
  );
}

export default Checkbox;
