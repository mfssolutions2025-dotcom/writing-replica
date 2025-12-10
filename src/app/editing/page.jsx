import BrandLine from "@/components/BrandLine";
import HeroSectionWrapper from "@/components/HeroSectionWrapper";
import Navbar from "@/components/Navbar";
import React from "react";
import RoundedContainer from "@/components/RoundedContainer";
import Image from "next/image";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials/Testimonial";
import Cta from "@/components/Cta";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import { NonShadowButton } from "@/components/ShadowButton";
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
                  Connect With Reliable Book Editors
                </RoundedContainer>

                {/* Heading */}
                <h1 className="lg:text-[40.8px] text-text-black font-bold font-cabin line leading-[43px] text-[28px]">
                  {
                    "Increase Your Possibility of Book Publishing With Phoenix Editing Process"
                  }
                </h1>
              </>
            }
            right={
              <>
                {/* Right Side */}
                <Image
                  src={"/hero-section/editing.png"}
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
            src={"/misc/market-offer-4.png"}
            width={450}
            height={481}
            alt="hero-banner"
            sizes="450px"
          />
        </div>
        {/* Right */}
        <div className="w-full lg:w-[48.3%] flex flex-col gap-y-[5%] justify-center my-10 lg:my-0 text-center lg:text-start">
          <h2 className="font-cabin font-bold text-[26px] lg:text-[3rem] leading-[1.2] text-[#0B2240]">
            Fiction vs. Nonfiction! Discover What We Offer In the Subsequent
            Genres?
          </h2>
          <p className="text-[#010c2f] text-[1.2rem] font-normal font-poppins my-5">
            With your fiction narrative, we develop the story of every character
            to create a coherent plot. From developing concepts and building
            plots to defining each character's personality, we structure the
            outline of your narrative. Your fiction narrative is woven from our
            writers' imagination, while your non-fiction narrative is crafted
            through our team's thorough research, incorporating real characters,
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
      {/* Brilliant */}
      <section className="our-brilliant bg-cover bg-center py-16 md:py-20 bg-[url('/backgrounds/brilliant.png')]">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Grid Layout: 1 column on mobile, 3 equal columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Column 1 - Info (4/12 on desktop) */}
            <div className="md:col-span-4">
              <div className="info-bri">
                <div className="heading mb-6">
                  <h2 className="text-3xl md:text-[26px] lg:text-[3rem] font-bold text-white leading-tight">
                    Write, Edit, &amp; Publish With Phoenix Ghostwriting
                  </h2>
                </div>
                <p className="text-base md:text-[1rem] text-[#b6bbc2] leading-relaxed font-poppins">
                  Each of our writers has their own approach to demonstrating
                  creativity through narrative. To add the finishing touches to
                  your story, our editors review, edit, and proofread your
                  manuscript. This process includes adding descriptive details
                  and cutting unnecessary information. Skipping the editing
                  stage can negatively impact the overall progress and success
                  of your work.
                </p>
              </div>
            </div>

            {/* Column 2 - Image (4/12 on desktop) */}
            <div className="md:col-span-4 order-first md:order-0">
              <div className="img-bri flex justify-center">
                <Image
                  src="/misc/brilliant-book.png"
                  width={400}
                  height={400}
                  alt="Brilliant illustration"
                  className="w-full max-w-sm md:max-w-full h-auto"
                />
              </div>
            </div>

            {/* Column 3 - Stats (4/12 on desktop) */}
            <div className="md:col-span-4 -ml-[30%]">
              <div className="info-bri2">
                <ul className="space-y-4">
                  {[
                    { value: "1800+", label: "Book Written" },
                    { value: "200+", label: "Writers & Editors" },
                    { value: "98%", label: "Customer Satisfaction" },
                  ].map((stat, index) => (
                    <li
                      key={index}
                      className="text-white bg-gradient-to-r from-transparent via-[#0e305c] to-[#0e305c] py-4  md:px-10 rounded-2xl"
                    >
                      <div className="flex items-center gap-x-10">
                        <span className="text-accent-primary font-semibold text-3xl md:text-4xl lg:text-5xl inline-block w-16 md:w-20 text-right mr-4 md:mr-6">
                          {stat.value}
                        </span>
                        <span className="text-base md:text-[1.5rem] font-medium">
                          {stat.label}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Condedit */}
      <Condedit />

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
