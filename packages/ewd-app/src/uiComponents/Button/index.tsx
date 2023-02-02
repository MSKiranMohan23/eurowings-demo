import React from "react";
import './Button.scss'

interface Props {
  label: string;
  addClass: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ label, addClass, onClick }) => {
  return (
    <button className={`button ${addClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
