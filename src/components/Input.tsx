// import React from "react";
interface propsInterface {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, placeholder, value, onChange }: propsInterface) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
