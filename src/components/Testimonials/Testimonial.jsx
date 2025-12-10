"use client";
import React, { useState } from "react";
import Slider from "./Slider";
import Image from "next/image";
import Controls from "./Controls";
import RoundedContainer from "../RoundedContainer";

function Testimonial() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className="relative z-20 flex flex-col-reverse lg:flex-row px-0 py-[0.6%]  lg:px-[3%] bg-brown-background">
      <Image
        src={"/testimonials/before.png"}
        width={300}
        height={200}
        className="absolute -z-10 top-0 left-0"
        alt="leaf"
      />
      <Image
        src={"/testimonials/after.png"}
        width={250}
        height={150}
        className="absolute right-0 -z-10 bottom-0"
        alt="leaf"
      />
      {/* Left Side */}
      <div className="lg:w-[75%] w-full">
        <Slider
          controlledSwiper={controlledSwiper}
          setControlledSwiper={setControlledSwiper}
        />
        <span className="flex w-full justify-center items-center lg:hidden">
          <Controls swiper={controlledSwiper} />
        </span>
      </div>
      {/* Right Side */}
      <div className="lg:w-[25%] w-full py-20 px-4 flex flex-col lg;items-start items-center text-center lg:text-start">
        <RoundedContainer
          borderColor="red"
          className={"font-bold font-cabin overflow-clip py-[10px] px-[40px]"}
          textColor="#0b2240"
          fontSize={"1.2rem"}
        >
          Feedback About Phoenix
        </RoundedContainer>
        <h3 className="text-text-black text-[1.9rem] leading-[1.2] font-cabin font-bold lg:mt-[25%] mt-2">
          1000+ Positive Reviews Reflecting Customer Satisfaction
        </h3>
        <span className="hidden lg:block">
          <Controls swiper={controlledSwiper} />
        </span>
      </div>
    </div>
  );
}

export default Testimonial;
