import React from "react";

interface InputComponentProps {
  value: number;
  onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "number" | "text" | "password" | "email";
}

function InputComponent({value, onChangeFunction, type}: InputComponentProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === "" ? 0 : Number(e.target.value);
    e.target.value = newValue.toString();
    onChangeFunction(e);
  };

  return (
    <input
      type={type}
      min="0"
      value={value || ""}
      onChange={handleChange}
      className="p-2 w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      placeholder="Min size"
    />
  );
}

export default InputComponent;
