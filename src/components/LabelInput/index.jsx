import React from "react";
import { Label, InputStyled } from "./style";
const LabelInput = (props) => {
  return (
    <div>
      <Label htmlFor={props.id}>{props.label}</Label>
      <InputStyled
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
        value={props.value}
      />
    </div>
  );
};
export default LabelInput;
