import { capitalizeAll } from "@/lib/helpers";
import React from "react";

function RoundedContainer({
  children,
  borderColor = "#000",
  textColor = "#000",
  fontSize = 12,
  className,
  capitalize = true,
}) {
  return (
    <h3
      className={`border-2   rounded-4xl w-fit bg-transparent text-wrap ${className}  `}
      style={{
        borderColor: borderColor,
        color: textColor,
        fontSize: fontSize,
      }}
    >
      {children}
    </h3>
  );
}

export default RoundedContainer;
