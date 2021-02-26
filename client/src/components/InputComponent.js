import React from "react";
import "./InputComponent.css";

const InputComponent = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="inputComponent"
    />
  );
};

export default InputComponent;
