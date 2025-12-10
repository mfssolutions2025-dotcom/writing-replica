import React from "react";
import RoundedContainer from "./RoundedContainer";
import BookSlider from "./BooksSlider";
function Portfolio() {
  return (
    <section className="flex flex-col  justify-center bg-[url('/backgrounds/portfolio.png')] pt-28 pb-20  lg:bg-contain  w-screen bg-no-repeat lg:bg-repeat bg-cover">
      <div className="w-full flex justify-center">
        <RoundedContainer
          capitalize={false}
          className={"font-cabin px-[40px] py-[10px] font-bold "}
          fontSize={"1.2rem"}
          borderColor="red"
          textColor="#0B2240"
        >
          Our Portfolio
        </RoundedContainer>
      </div>
      <h2 className="text-text-black text-[2.5rem] font-bold text-center">
        Explore the Bestsellers Produced
        <br className="hidden lg:block" />
        by Phoenix Ghostwriting
      </h2>
      {/* Books Slider */}
      <div className="pt-[70px]">
        <BookSlider />
      </div>
    </section>
  );
}

export default Portfolio;
