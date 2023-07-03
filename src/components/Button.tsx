import React from "react";
import "../styles/Button.css";

interface ButtonProps {
  label: string;
  width?: number;
  height?: number;
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
  borderRadius?: number;
  backgroundColor?: string;
  onPress?: any;
}

const Button: React.FC<ButtonProps> = ({
  label,
  width,
  height,
  fontSize,
  fontWeight,
  fontColor,
  borderRadius,
  backgroundColor,
  onPress,
}: ButtonProps) => {
  return (
    <button
      className="Button"
      onClick={onPress}
      style={{
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        color: fontColor,
        fontWeight: fontWeight,
        borderRadius: borderRadius,
        width: width,
        height: height,
      }}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: "#FF61F9",
  fontColor: "#000000",
  fontWeight: 600,
  fontSize: 20,
  borderRadius: 20,
  width: 145,
  height: 45,
};

export default Button;
