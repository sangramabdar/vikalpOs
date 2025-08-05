import React from "react";
import { cn } from "../../utils/cn";

export interface Props {
  text?: string;
  link?: string;
  color?: Array<string>; // Currently unused
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

const variants: Record<string, string> = {
  primary: "bg-primary-80 hover:bg-primary-100",
  secondary:
    "bg-background-primary border border-primary-60 text-primary-60 hover:bg-primary-70 hover:text-background-primary",
  tertiary: "bg-transparent hover:bg-primary-10 text-primary-70",
};
const Button: React.FC<Props> = ({
  text = "Reach us",
  link = "",
  className = "",
  variant = "primary",
}) => {
  const baseClasses =
    "text-center flex justify-center items-center h-full w-fit h-12 cursor-pointer transition-all hover:bg-primary-100 text-white px-4 py-2 rounded-sm font-semibold md:text-lg";

  const combinedClass = cn(baseClasses, variants[variant], className);

  return link ? (
    <a href={link} className={combinedClass}>
      {text}
    </a>
  ) : (
    <button className={combinedClass}>{text}</button>
  );
};

export default Button;
