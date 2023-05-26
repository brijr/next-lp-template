import React from "react";

interface Props {
  children?: string;
  href?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Button = ({ children, href, onSubmit }: Props) => {
  return (
    <button
      className="bg-blue-800 text-xl text-white rounded-md block py-6 px-8 w-fit transition-all hover:scale-95"
      content={href || "/start"}
    >
      {children || "Get Started"}
    </button>
  );
};

export default Button;
