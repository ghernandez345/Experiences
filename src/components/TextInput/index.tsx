import classnames from "classnames";
import React, { useCallback } from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
}

const TextInput = ({ placeholder, className }: InputProps) => {
  const classNames = classnames(className);

  const handleEnterPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        console.log("enter pressed");
      }
    },
    []
  );

  return (
    <input
      className={`${classNames} p-2 border-2 border-charcoal rounded focus:outline-none
      focus:border-turquoise transition-colors`}
      placeholder={placeholder}
      onKeyDown={handleEnterPress}
      type="text"
    />
  );
};

export default TextInput;
