import React from "react";
import { NonShadowButton } from "./ShadowButton";

function Cta() {
  return (
    <div className="bg-[url('/backgrounds/cta.png')] flex py-20 lg:py-20 flex-col items-center justify-center text-center bg-cover bg-no-repeat bg-center ">
      <h2 className="text-white text-[24px] lg:text-[4rem]  font-medium leading-[1.2] mx-0 lg:mx-[6%]">
        Join the community of
        <span className="text-[#fcb017]  font-cabin"> 12,000+ </span>
        authors
        <br />& become the best-seller
      </h2>
      <p className="text-white font-poppins mt-5 text-[1.2rem] lg:text-[1.5rem] w-full lg:w-[50%]">
        Call
        <a href="tel:+1 (415) 702-1019" className="mx-1 text-accent-primary">
          +1 (415) 702-1019
        </a>
        or fill out our online brief form for
        <br />
        representatives to contact you.
      </p>

      <div className="flex flex-wrap py-5 space-x-5 justify-center items-center w-screen ">
        <NonShadowButton
          paddingVertical={12}
          paddingHorizontal={30}
          backgroundColor="#f5441b"
          mainColor="#fff"
          hoverColor="#173f73"
          borderColor="#fff"
          className={"text-[1rem]"}
        >
          request a quote
        </NonShadowButton>
        <NonShadowButton
          paddingHorizontal={30}
          hoverColor="#173f73"
          paddingVertical={12}
          backgroundColor="black"
          mainColor="white"
          borderColor="white"
        >
          Live Chat
        </NonShadowButton>
      </div>
    </div>
  );
}

export default Cta;
