"use client";
import { capitalizeAll } from "@/lib/helpers";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

function ShadowButton({
  children,
  shadowColor = "#000",
  mainColor = "#000",
  hoverColor = "#000",
  backgroundColor = "#fff",
  paddingVertical,
  paddingHorizontal,
  borderColor = "#000",
  className,
}) {
  return (
    <button
      className={`flex items-center rounded-lg text-[12px] border  hover:border transition-all delay-100 ease-in-out font-cabin gap-x-1 font-bold w-fit ${className}`}
      style={{
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        boxShadow: `4px 4px 0px 0px ${shadowColor}`,
        color: mainColor,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
      }}
      onMouseEnter={(e) => {
        e.target.style.color = hoverColor;
        e.target.style.borderColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.color = mainColor;
        e.target.style.borderColor = "#000";
      }}
    >
      {capitalizeAll(children)}
      <ChevronRightIcon
        style={{
          backgroundColor: mainColor,
          color: backgroundColor,
        }}
        className=" rounded-full hover:bg-green-500 transition-colors"
        size={15}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = hoverColor;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = mainColor;
        }}
      />
    </button>
  );
}

export function NonShadowButton({
  children,
  className,
  shadowColor = "#000",
  mainColor = "#000",
  hoverColor = "#212529",
  backgroundColor = "#fff",
  paddingVertical,
  paddingHorizontal,
  borderColor = "#000",
}) {
  return (
    <button
      className={`flex items-center rounded-lg  border transition-all duration-200 ease-in-out font-cabin gap-x-1 font-bold w-fit ${className} `}
      style={{
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        boxShadow: `4px 4px 0px 0px ${shadowColor}`,
        color: mainColor,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
      }}
      onMouseEnter={(e) => {
        e.target.style.boxShadow = "none";

        e.target.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = `4px 4px 0px 0px ${shadowColor}`;
        e.target.style.color = mainColor;
        e.target.style.backgroundColor = backgroundColor;
      }}
    >
      {capitalizeAll(children)}
      <ChevronRightIcon
        style={{
          backgroundColor: mainColor,
          color: backgroundColor,
        }}
        className="rounded-full transition-colors"
        size={15}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = hoverColor;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = mainColor;
        }}
      />
    </button>
  );
}

export default ShadowButton;
