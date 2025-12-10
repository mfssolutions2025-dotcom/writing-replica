"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

function BrandLine() {
  return (
    <div className="w-full overflow-hidden  py-8 bg-white">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="w-full"
        breakpoints={{
          // Mobile (default): 2 slides, centered
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: true,
          },
          // Small tablets
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
          },
          // Tablets
          640: {
            slidesPerView: 4,
            spaceBetween: 25,
            centeredSlides: false,
          },
          // Medium screens
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
            centeredSlides: false,
          },
          // Large screens
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
            centeredSlides: false,
          },
          // Extra large screens
          1280: {
            slidesPerView: 7,
            spaceBetween: 50,
            centeredSlides: false,
          },
        }}
      >
        {[
          "forbes",
          "es",
          "bn",
          "bookbaby",
          "lulu",
          "albirs",
          "ibookstore",
          "google",
          "ingram",
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center px-2">
              <div className="relative h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 lg:h-20 lg:w-40">
                <Image
                  src={`/brands/${item}.png`}
                  fill
                  alt={`${item} brand logo`}
                  className="object-contain"
                  sizes="(max-width: 480px) 96px, (max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 150px"
                  priority={index < 4}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BrandLine;
