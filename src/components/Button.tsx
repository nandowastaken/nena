import React from "react";
import "../styles/Button.css";

interface ButtonProps {
  label: string;
  style?: string;
  onPress?: any;
}

const Button: React.FC<ButtonProps> = ({
  label,
  style,
  onPress,
}: ButtonProps) => {
  return (
    <button
      className={["Button", style + "-button"].join(" ")}
      onClick={onPress}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  style: "default",
};

export default Button;
