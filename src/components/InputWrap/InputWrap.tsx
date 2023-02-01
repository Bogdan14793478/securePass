import React, { useEffect, useState } from "react";
import FieldBlock from "../Field/FieldBlock";
import InputComponent from "../Input/InputComponent";
import "./styles.css";

const countField = [1, 2, 3];

export const InputWrapper = () => {
  const [value, setValue] = useState<string>("");
  const [variant, setVariant] = useState<number>(0);

  useEffect(() => {
    const str = /(?=.*[a-zA-Z])/.test(value);
    const num = /\d/.test(value);
    const spSymb = /(?=.*[!#$%&?/ "])/.test(value);
    if (str || num || spSymb) setVariant(1);
    if ((str && num) || (spSymb && str) || (spSymb && num)) setVariant(2);
    if (str && num && spSymb) setVariant(3);
    if (value === "") setVariant(0);
  }, [value]);
  const length = value.length;
  return (
    <div className="wrapper-inp">
      <div className="wrapper-title">Сheck your password for strength</div>
      <InputComponent value={value} setValue={setValue} />
      <div className="container-block">
        {countField.map((_, i) => (
          <div key={i}>
            <FieldBlock lng={length} variant={variant} index={i + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};
