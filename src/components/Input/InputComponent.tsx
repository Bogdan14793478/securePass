import React from "react";
import "./styles.css";
import { InputProps } from "./types";

const InputComponent: React.FC<InputProps> = ({ value, setValue }) => {
  return (
    <input
      className="input-style"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="text"
      placeholder="enter your password"
    />
  );
};

export default InputComponent;
