// components/Slider.jsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { useState } from "react";
import Controls from "./Controls";

function Slider({ controlledSwiper, setControlledSwiper }) {
  const slides = [
    {
      name: "Edwin Diamond",
      review:
        "The team at Phoenix is very responsive in their communication. I’m pleased with their knowledge of sci-fi. I’m glad that I hired them!",
      image: 1,
    },
    {
      name: "James Wyatt",
      review:
        "When my partner and I decided to write a book, we interviewed several ghostwriting agencies, amongst which we were satisfied with Phoenix and their services.",
      image: 2,
    },
    {
      name: "Georgia Atwell",
      review:
        "Phoenix offered ghostwriting services that fit our budget and provided professional editing for my manuscript. I highly recommend their services.",
      image: 3,
    },
    {
      name: "Emmet Oscar",
      review:
        "All my fears of hiring an editing agency disappeared when I started working with Phoenix Ghostwriting. They are incredible with developmental editing.",
      image: 4,
    },
  ];

  return (
    <div className="w-full mx-auto px-10 py-20">
      {/* Slider */}
      <Swiper
        modules={[Controller, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
        controller={{ control: controlledSwiper, waitForTransition: true }}
        onSwiper={setControlledSwiper}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="main-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-transparent rounded-xl  overflow-hidden group flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <Image
                  src={"/testimonials/quote.png"}
                  width={40}
                  height={40}
                  className="absolute -left-5"
                  alt="quote"
                />
                <Image
                  src={`/testimonials/${index + 1}.png`}
                  alt={index}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <Image
                  src={"/testimonials/stars.png"}
                  className="my-5"
                  width={200}
                  height={50}
                  alt="stars"
                />
              </div>
              <div className="text-center">
                <p className="text-[#010c2f] text-[15px] font-poppins">
                  {slide.review}
                </p>
                <h3 className="text-[14px] font-bold text- mb-2 text-[#0B2240] font-cabin ">
                  {slide.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
