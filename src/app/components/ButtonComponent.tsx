import React from "react";

interface ButtonComponentProps {
  onClickFunction?: () => void;
  children?: React.ReactNode;
  text?:string
  style: "menu" | "primary" | "secondary" | "expand" | 'selected' | 'unselected';
}

function ButtonComponent({
  onClickFunction,
  children,
  style,
  text
}: ButtonComponentProps) {
  const buttonStyles = {
    menu: "lg:hidden",
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-800",
    expand:"w-full p-6 flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors",
    selected:'w-full py-2 px-4 rounded-md bg-blue-600 text-white',
    unselected:'w-full py-2 px-4 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200',
  };
  return (
    <button
      onClick={onClickFunction}
      className={`cursor-pointer ${buttonStyles[style]}`}
      aria-label="Open menu"
    >
      {text}
      {children}
    </button>
  );
}

export default ButtonComponent;
