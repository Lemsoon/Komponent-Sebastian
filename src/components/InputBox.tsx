import { useRef, useState } from "react";
import "../sass/components/_InputBox.scss";

type placeholderText = {
  children: string;
};

type animate = {
  animate: boolean;
};

export const InputBox = ({ children, animate }: placeholderText & animate) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeInput, setActiveInput] = useState<string>();
  const changeActive = (c: string) => setActiveInput(c);

  const submitText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      console.log("Send: ", inputRef.current.value);
    }
  };

  console.log(animate);
  return (
    <input
      type="text"
      placeholder={children}
      className={`inactive-input ${animate ? activeInput : ""}`}
      ref={inputRef}
      onFocus={() => changeActive("active-input")}
      onBlur={() => changeActive("inactive-input")}
      onKeyDown={(e) => submitText(e)}
    />
  );
};
