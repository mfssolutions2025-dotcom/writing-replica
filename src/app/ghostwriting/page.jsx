import Navbar from "@/components/Navbar";
import HeroSectionWrapper from "@/components/HeroSectionWrapper";
import RoundedContainer from "@/components/RoundedContainer";
import Image from "next/image";
import BrandLine from "@/components/BrandLine";
import Cta from "@/components/Cta";
import React from "react";
import ShadowButton, { NonShadowButton } from "@/components/ShadowButton";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials/Testimonial";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Condedit from "@/components/Condedit";

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
                  Who We Are
                </RoundedContainer>

                {/* Heading */}
                <h1 className="lg:text-[40.8px] text-text-black font-bold font-cabin line leading-[43px] text-[28px]">
                  {
                    "Communicate Your Values & Concepts With Our Ghostwriting Solutions"
                  }
                </h1>
              </>
            }
            right={
              <>
                {/* Right Side */}
                <Image
                  src={"/hero-section/hero-ghostwriting.png"}
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
      {/* BrandLine */}
      <BrandLine />
      {/* Market Offer -2 */}
      <section className="flex flex-col lg:flex-row justify-center py-[80px] bg-brown-background px-[5%]  gap-x-5">
        {/* Left */}
        <div className="">
          <Image
            src={"/misc/market-offer-2.png"}
            width={450}
            height={481}
            alt="hero-banner"
            sizes="450px"
          />
        </div>
        {/* Right */}
        <div className=" w-full lg:w-[48.3%] flex flex-col gap-y-[5%]  justify-center my-10 lg:my-0 text-center lg:text-start">
          <h2 className="font-cabin font-bold text-[26px] lg:text-[3rem] leading-[1.2] text-[#0B2240]">
            Fiction vs. Nonfiction! Discover What We Offer In the Subsequent
            Genres?
          </h2>
          <p className="text-[#010c2f] text-[1.2rem] font-normal font-poppins my-5">
            With your fiction narrative, we develop the story of every character
            to create a coherent plot. From developing concepts and building
            plots to defining each character’s personality, we structure the
            outline of your narrative. Your fiction narrative is woven from our
            writers' imagination, while your non-fiction narrative is crafted
            through our team’s thorough research, incorporating real characters,
            events, or information. Whether you require a fiction or non-fiction
            narrative, our skilled writers and editors are prepared to meet your
            needs across any genre!
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
      {/* Ghost Cta */}
      <section className="relative mt-42">
        {/* Real Content */}
        <div className="bg-[url('/backgrounds/ghost-cta.png')] bg-cover text-white p-[150px] mx-[5%] relative z-2">
          <p className="text-[1.2rem] font-normal font-poppins leading-[30px]">
            Do you seek to inspire your readers with your ideas, knowledge and
            concepts?
          </p>
          <h2 className="text-[26px] lg:text-[3rem] font-bold font-cabin">
            Phoenix Ghostwriting has a dedicated team <br /> striving to achieve
            customer satisfaction <br /> & meet your requirements.
          </h2>
          {/* Buttons */}
          <div className="flex gap-x-5 my-10">
            <NonShadowButton
              paddingVertical={12}
              paddingHorizontal={30}
              backgroundColor="#f5441b"
              mainColor="#fff"
              hoverColor="#173f73"
              borderColor="#fff"
              shadowColor="#1a3b66"
              className={"text-[1rem]"}
            >
              Request a quote
            </NonShadowButton>

            <NonShadowButton
              paddingVertical={12}
              paddingHorizontal={30}
              backgroundColor="#000"
              mainColor="#fff"
              hoverColor="#173f73"
              borderColor="#fff"
              shadowColor="#1a3b66"
              className={"text-[1rem]"}
            >
              Live Chat
            </NonShadowButton>
          </div>
        </div>
        {/* Gray Area */}
        <div className="w-screen bg-[#7c8ea9] h-[50%] absolute -bottom-10 - z-1"></div>
      </section>
      {/* Contedit */}
      <Condedit />
      {/* Top Level */}
      <section className="relative bg-brown-background py-[80px] px-[5%] ">
        {/* Heading  */}
        <div className="flex flex-col items-center justify-center text-center ">
          <h2 className="text-[26px] lg:text-[3rem] font-bold font-cabin text-text-black mb-[30px]">
            Why Should You Opt For <br /> Phoenix Ghostwriting Process?
          </h2>
          <p className="mb-[70px] w-[80%] font-poppins text-[18px] text-[#010c2f]">
            At Phoenix Ghostwriting, we build your author journey, creating the
            most unique plots that leave your readers amused. Our team of
            writers, editors, illustrators, and publishers work diligently to
            meet the expectations of our valued clients.
          </p>
          {/* Cards */}
          <ul className="self-start grid grid-cols-2 w-[66%] gap-5">
            {[
              "Rigorous proofreading to review  all \n minor and major errors",
              "Reviewing your manuscript according \n to standard guidelines",
              "Planning the outline for your manuscript",
              "Zero plagiarism in your manuscript",
              "Research and analysis of your concept",
              "Designing an appealing book cover",
              "Get unlimited revisions",
              "Providing consultancy for the type of narrative",
              "High-quality assurance",
              "Offering more than ten genres",
            ].map((item, index) => (
              <li
                className="flex items-center border border-[#cccccc] bg-white text-start whitespace-break-spaces py-[5px] px-[20px] font-poppins text-[1.2rem] text-text-black"
                key={index}
              >
                <Image
                  src="/finishes/list-icon.png"
                  width={35}
                  height={35}
                  alt="list-icon"
                  className="mx-5"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 right-0 h-[65%] w-[70%]">
          <Image
            src={"/backgrounds/top-level.png"}
            fill
            alt="top-level"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </section>
      {/* Call to Action  */}
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
