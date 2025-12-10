import React from "react";
import Navbar from "@/components/Navbar";
import HeroSectionWrapper from "@/components/HeroSectionWrapper";
import RoundedContainer from "@/components/RoundedContainer";
import Image from "next/image";
import BrandLine from "@/components/BrandLine";
import Cta from "@/components/Cta";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials/Testimonial";
import Benefits from "@/components/Benefits";
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
                  Publishing Your Book Made Easy
                </RoundedContainer>

                {/* Heading */}
                <h1 className="lg:text-[40.8px] text-text-black font-bold font-cabin line leading-[43px] text-[28px]">
                  {"Take Your Book to Big Screen With Phoenix Publishing House"}
                </h1>
              </>
            }
            right={
              <>
                {/* Right Side */}
                <Image
                  src={"/hero-section/publishing.png"}
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
      {/* Share Story */}
      <section className="share-story bg-brown-background py-16 md:py-20">
        <div className="flex flex-col items-center mx-auto px-4 max-w-7xl">
          <RoundedContainer
            fontSize={"1.2rem"}
            borderColor="red"
            className="py-[10px] px-[40px] font-cabin font-bold"
            textColor="#0b2240"
          >
            Connect With Global Audience
          </RoundedContainer>
          {/* Heading Section */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-[26px] lg:text-[3rem] font-bold text-[#0b2240] mb-6 md:mb-8 leading-tight my-10 lg:my-0">
              Phoenix Offers Industry-Leading Publishing Alternatives With
              Contemporary Services
            </h2>
            <p className="text-[1.2rem] md:text-lg text-[#010c2f] max-w-4xl mx-auto leading-relaxed font-poppins px-[4%]">
              Have you ever thought about how book publishing evolved from
              printing books to digital publishers, and eventually to global
              agencies? Each publishing avenue requires compliance with the
              standard industry regulations, which makes it challenging for
              authors to reach their audience. As a book publishing agency,
              Phoenix Ghostwriting assists the clients in reaching their
              audience through platforms such as Amazon, Barnes & Noble, Blurb,
              Kobo, and others.
            </p>
          </div>

          {/* Main Image - Centered with negative margin */}
          <div className="flex justify-center mb-12 md:mb-20 -mt-8 md:-mt-12">
            <img
              src="https://www.phoenixghostwriting.com/assets/images/share-story.png"
              alt="Share Story Illustration"
              className="w-full max-w-4xl h-auto lg:block mx-auto hidden "
            />
          </div>

          {/* Bottom Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column - Heading (4/12 on desktop) */}
            <div className="lg:col-span-4">
              <h4 className="text-[2.5rem] text-center lg:text-start lg:text-[3rem] font-bold text-[#0b2240] leading-tight">
                What You Obtain When Publishing Your Book With Us?
              </h4>
            </div>

            {/* Right Column - List Items (8/12 on desktop) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-5">
                {[
                  {
                    text: "ISBN Acquisition",
                    hasBreak: false,
                  },
                  {
                    text: "Designing the Book Cover",
                    hasBreak: false,
                  },
                  {
                    text: "Providing consultancy on self-publication",
                    hasBreak: true,
                  },
                  {
                    text: "100% Copyrights Claim",
                    hasBreak: false,
                  },
                  {
                    text: "Planning and drafting your manuscript",
                    hasBreak: false,
                  },
                  {
                    text: "Proofreading, typesetting, and formatting, including eBook",
                    hasBreak: true,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-300 px-5 py-3 flex lg:items-start items-center  rounded-md hover:shadow-lg transition-all duration-300 "
                  >
                    <img
                      src="https://www.phoenixghostwriting.com/assets/images/list-icon.png"
                      alt="Check icon"
                      className="w-10 h-10 mt-1 flex-shrink-0"
                    />
                    <span className="text-[#0b2240] font-medium text-[1.5rem] leading-snug ml-[5%]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Journey */}
      <section className="market-offer journey bg-brown-background py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16 lg:mb-24">
            {/* Image Column */}
            <div className="w-full lg:w-5/12">
              <img
                src="https://www.phoenixghostwriting.com/assets/images/publishing-market.png"
                alt="Author publishing journey"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-7/12">
              <div className="heading mb-8">
                <h2 className="text-[26px] lg:text-[3rem] text-center lg:text-start font-bold text-[#0b2240] leading-tight mb-6">
                  How to Reach Your Next Big Milestone as an Author?
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-[1.2rem] font-poppins text-center lg:text-start text-[#50545a] leading-relaxed">
                  Book publishing, combined with the right marketing strategy,
                  helps you achieve your next big milestone as an author.
                  However, there's no such thing as a free lunch; with every
                  investment comes associated risks. Our consultants guide you
                  in choosing the right publishing strategy and platform.
                  <br />
                  <br />
                  Through our extensive research, we gain insights into real
                  data on the types of books preferred by readers and in which
                  regions. Increase your book sales by integrating the
                  following:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-3 ">
                  <li className="text-lg text-[#0b2240] font-medium px-[40%]">
                    Keyword Search
                  </li>
                  <li className="text-lg text-[#0b2240] font-medium px-[40%]">
                    Competitor Analysis
                  </li>
                  <li className="text-lg text-[#0b2240] font-medium px-[40%]">
                    Category Search
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Boxes Section */}
          <div className="boxes w-full lg:w-5/6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {[
                {
                  title: "Publishing Assistance",
                  description:
                    "Phoenix Ghostwriting offers support with various publication processes, including coordinating schedules, liaising with authors, editing manuscripts, and finding the appropriate publishing avenues.",
                  borderRight: true,
                  borderBottom: true,
                },
                {
                  title: "Ebook Cover Design",
                  description:
                    "The design team at Phoenix creates eBook cover concepts optimized for publication across all major book distributors, including Amazon KDP, Smashwords, Barnes & Noble, Apple Books, Kobo, and IngramSpark.",
                  borderRight: false,
                  borderBottom: true,
                },
                {
                  title: "Consistent eBook Formatting",
                  description:
                    "Our team organizes and formats your manuscript before publication, ensuring that your book's content is adaptable and supports readability.",
                  borderRight: true,
                  borderBottom: true,
                },
                {
                  title: "Editing and Refinement",
                  description:
                    "Our editors evaluate and assess your manuscript through copy editing, developmental editing, and proofreading to ensure it meets the highest standards before publishing.",
                  borderRight: false,
                  borderBottom: true,
                },
                {
                  title: "Amazon Kindle",
                  description:
                    "We specialize in planning and optimizing your book for Amazon Kindle, ensuring compatibility and maximizing its potential reach on one of the world's largest eBook platforms.",
                  borderRight: true,
                  borderBottom: false,
                },
                {
                  title: "Trustworthy Team",
                  description:
                    "At Phoenix Ghostwriting, we pride ourselves on our reliable and dedicated team. Our professionals bring years of experience to publish your book on your desired platforms.",
                  borderRight: false,
                  borderBottom: false,
                },
              ].map((box, index) => (
                <div
                  key={index}
                  className={`p-8 ${box.borderRight ? "border-r-2" : ""} ${
                    box.borderBottom ? "border-b-2" : ""
                  } border-[#b5b5b6]`}
                >
                  <h4 className="text-2xl md:text-3xl font-semibold text-accent-primary mb-6">
                    {box.title}
                  </h4>
                  <p className="text-lg text-[#50545a] leading-relaxed">
                    {box.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
