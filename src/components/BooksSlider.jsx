"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

function BookSlider() {
  return (
    <div className="w-full mx-auto bg-transparent relative">
      <Swiper
        slidesPerView={5}
        spaceBetween={40}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: false,
            centeredSlides: false,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: false,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
            navigation: true,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
            navigation: true,
            centeredSlides: true,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 60,
            navigation: true,
            centeredSlides: true,
          },
        }}
      >
        {[...Array(15)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-fit flex items-center justify-center px-2">
              <Image
                src={`/books/${index + 1}.png`}
                alt={`Book ${index + 1}`}
                width={220}
                height={460}
                className="hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 120px, (max-width: 1024px) 180px, 220px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons
      <div
        className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10
        w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center
        cursor-pointer hover:bg-gray-50 transition-all duration-200"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <div
        className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10
        w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center
        cursor-pointer hover:bg-gray-50 transition-all duration-200"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div> */}
    </div>
  );
}

export default BookSlider;
