// components/SplitLayout.jsx
import React from "react";

export default function HeroSectionWrapper({
  left,
  right,
  className = "",
  containerClassName = "",
  leftClassName = "",
  rightClassName = "",
  reverseOnMobile = false,
  paddingHorizontal = "62px",
  paddingVertical = "12",
}) {
  return (
    <section
      className={`flex items-center justify-between lg:px-[${paddingHorizontal}] lg:py-[${paddingVertical}] px-0 py-0 w-screen flex-col ${
        reverseOnMobile ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${className}`}
    >
      {/* Left Side */}
      <div
        className={`w-full lg:w-1/2 flex flex-col gap-y-5 px-[15px] text-center lg:text-start ${leftClassName}`}
      >
        {left}
      </div>

      {/* Right Side */}
      <div
        className={`w-full lg:w-1/2 flex justify-center px-0 lg:px-[15px] mt-[5px] ${rightClassName} items-center py-10 lg:py-0`}
      >
        {right}
      </div>
    </section>
  );
}
