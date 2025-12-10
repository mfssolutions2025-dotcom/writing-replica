import React from "react";
import Cta from "@/components/Cta";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Testimonial from "@/components/Testimonials/Testimonial";
import Footer from "@/components/Footer";
import BrandLine from "@/components/BrandLine";
import HeroSectionWrapper from "@/components/HeroSectionWrapper";
import Navbar from "@/components/Navbar";
import RoundedContainer from "@/components/RoundedContainer";
import Image from "next/image";
import { NonShadowButton } from "@/components/ShadowButton";
function page() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[url('/backgrounds/hero-section.png')] bg-cover">
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <section className="flex items-start justify-between lg:px-[62.33px] px-0 py-12 w-screen flex-col lg:flex-row">
          <HeroSectionWrapper
            leftClassName="gap-y-5"
            left={
              <>
                {/* Left Side */}
                <RoundedContainer
                  className="font-cabin hidden lg:flex font-medium uppercase leading-[1.2] py-[10px] px-[25px]"
                  fontSize={"1rem"}
                >
                  Next Step To Author Success
                </RoundedContainer>

                {/* Heading */}
                <h1 className="lg:text-[40.8px] text-text-black font-bold font-cabin line leading-[43px] text-[28px]">
                  {"Book Marketing - The Next Step To Literary Success"}
                </h1>
              </>
            }
            right={
              <>
                {/* Right Side */}
                <Image
                  src={"/hero-section/marketing.png"}
                  width={380}
                  height={415}
                  alt="hero-banner"
                  sizes="380px"
                />
              </>
            }
          />
        </section>
      </div>
      {/* Brand Line */}
      <BrandLine />
      {/* Market Offer */}
      <section className="flex flex-col lg:flex-row justify-center py-[80px] bg-brown-background px-[5%] gap-x-5">
        {/* Left */}
        <div className="">
          <Image
            src={"/misc/market-offer-5.png"}
            width={500}
            height={481}
            alt="hero-banner"
            sizes="500px"
          />
        </div>
        {/* Right */}
        <div className="w-full lg:w-[48.3%] flex flex-col gap-y-[5%] justify-center my-10 lg:my-0 text-center lg:text-start">
          <h2 className="font-cabin font-bold text-[26px] lg:text-[3rem] leading-[1.2] text-[#0B2240]">
            Executing Marketing Strategy Suggested by Forbes Books
          </h2>
          <p className="text-[#010c2f] text-[1.2rem] font-normal font-poppins my-5">
            As a leading book publisher, the marketing team at Phoenix
            Ghostwriting outlines and executes marketing strategies recommended
            by Forbes Books. While book marketing can be challenging, an
            effective plan can significantly enhance your book's visibility.
            <br />
            <br />
            Before we start writing, it's essential to assess your niche topic.
            For example, if you're a heart surgeon planning to write about heart
            health, our marketing team will analyze industry trends to identify
            both saturated and trending topics.
          </p>
          <div className="centering">
            <NonShadowButton
              paddingVertical={12}
              paddingHorizontal={30}
              backgroundColor="#f5441b"
              mainColor="#fff"
              hoverColor="#173f73"
              borderColor="#142f53"
              shadowColor="#1a3b66"
              className={"text-[1rem]"}
            >
              Request a quote
            </NonShadowButton>
          </div>
        </div>
      </section>
      {/* Mark Solution */}
      <section className="bg-brown-background text-white py-16 md:py-20 lg:h-[1223px]">
        {/* Background Container */}
        <div className="container lg:mx-[5%] lg:rounded-2xl px-4 relative bg-[#6f272c] lg:bg-[url('/backgrounds/mark-solutions.png')] bg-cover bg-no-repeat bg-center p-[20px] lg:p-[100px] h-full flex flex-col items-center">
          {/* Heading Section */}
          <div className="heading text-center mb-16">
            <h2 className="text-[26px] lg:text-[3rem] font-bold mb-6">
              How We Generate Sales <br /> For Your eBook
            </h2>
            <p className="text-lg md:text-xl w-[80%] mx-auto font-poppins">
              Regardless of how amazing your book is, it won't generate sales
              until it reaches your target audience. Effectively promoting your
              book within your audience is essential to drive sales and create
              interest.
            </p>
          </div>

          {/* List Items Grid */}
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
            {[
              "Personal Marketing Assistants",
              "Audio & Video Trailers",
              "Press Releases",
              "Social Media Set-Up",
              "Digital Postcards",
              "Social Media Marketing",
              "Business Cards",
              "Marketing Consultation",
              "Article Writing",
              "Small and Eye-Catching Posters",
              "Author Website",
            ].map((item, index) => (
              <li
                key={index}
                className="relative pl-10 text-lg font-medium before:absolute before:left-0 before:top-0 before:content-[''] before:bg-[url('/misc/mark-solution-list-icon.png')] before:bg-no-repeat before:w-6 before:h-9 font-poppins "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Market Offer - 2 */}
      <section className="flex flex-col items-center justify-center px-[5%] py-[5%] bg-brown-background ">
        <div className="w-full lg:w-[60%] text-center lg:text-start">
          <h1 className="heading leading-[1.2] text-text-black font-bold">
            Accessing Your Readers Doesn’t <br /> Have to Be Impossible
          </h1>
          <p className="my-5 font-poppins w-[90%] text-[#010c2f]">
            Publishing platforms like Amazon use algorithms that may
            disadvantage those who are unprepared. To secure the "bestselling"
            label, it’s crucial to shift focus from just the stores to directly
            connecting with your audience.
            <br />
            <br />
            Effective marketing begins with thorough research and should be
            integrated into your strategy from the start of your book process.
            Phoenix incorporates market research to reduce the risk of writing a
            book that fails to attract readers.
            <br />
            <br />
            While listing your book on Amazon and in bookstores is important,
            driving sales requires additional effort. Building an online
            presence and generating buzz about your book are essential for
            successful marketing. In today’s digital age, Phoenix helps you
            connect with audiences where they are—primarily online.
          </p>
        </div>
        <div className="w-full lg:w-[40%]">
          <Image
            src={"/misc/market-offer-6.png"}
            width={400}
            height={200}
            alt="image"
          />
        </div>
      </section>
      {/* Cta */}
      <Cta />
      {/* Process */}
      <Process />
      {/* Benefits */}
      <Benefits />
      {/* Testimonials */}
      <Testimonial />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default page;
