"use client";
import Benefits from "@/components/Benefits";
import BookSlider from "@/components/BooksSlider";
import BrandLine from "@/components/BrandLine";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import HeroSectionWrapper from "@/components/HeroSectionWrapper";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import RoundedContainer from "@/components/RoundedContainer";
import ShadowButton, { NonShadowButton } from "@/components/ShadowButton";
import Testimonial from "@/components/Testimonials/Testimonial";
import { addDashes, capitalizeAll } from "@/lib/helpers";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      {/* Hero Section & background */}
      <div className="bg-[url('/backgrounds/hero-section.png')] bg-cover">
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <section className="flex items-center lg:items-start justify-between lg:lg:px-[62.33px] px-0 lg:py-12 px-0 py-10 w-screen flex-col lg:flex-row text-center lg:text-start">
          <HeroSectionWrapper
            leftClassName="gap-y-5"
            left={
              <>
                {/* Left Side */}
                <RoundedContainer
                  className="font-cabin hidden lg:flex font-medium uppercase leading-[1.2] py-[10px] px-[25px]"
                  fontSize={"1rem"}
                >
                  Leading Book Writing Agency
                </RoundedContainer>

                {/* Heading */}
                <h1 className="lg:text-[3rem] text-[28px] text-text-black font-bold font-cabin line leading-[1.2]">
                  {
                    "Professional Ghostwriting \n Solutions Focused on Building \n Author Reputation"
                  }
                </h1>

                {/* Description */}
                <p className="lg:text-[13.6px] font-poppins text-[#010C2F] text-[1.2rem] font-normal">
                  {
                    "   Phoenix Ghostwriting has a dedicated team committed to debunking the myth that writing a book alone generates sales. Instead, we focus on creating value through a comprehensive process that includes writing, editing, proofreading, publishing, and marketing to ensure the highest level of customer satisfaction."
                  }
                </p>

                {/* Shadow button */}
                <div className="flex items-center justify-center lg:justify-start">
                  <NonShadowButton
                    paddingVertical={12}
                    paddingHorizontal={30}
                    backgroundColor="#f5441b"
                    mainColor="#fff"
                    hoverColor="#173f73"
                    borderColor="#fff"
                  >
                    request a quote
                  </NonShadowButton>
                </div>

                {/* Rating & peoples */}
                <div className="flex items-center lg:w-fit justify-center lg:justify-start gap-4 mt-[20px] flex-col lg:flex-row">
                  {/* Rating */}
                  <h5 className="text-[26px] lg:text-[3rem]">
                    4.8
                    <sub className="relative -bottom-px left-px text-[1.5rem]">
                      out of 5
                    </sub>
                  </h5>
                  {/* Peoples */}
                  <div className="shrink-0">
                    <Image
                      src={"/hero-section/hero-peoples.png"}
                      width={220}
                      height={50}
                      className="object-cover"
                      alt="review-people"
                      sizes="220px"
                    />
                  </div>
                </div>
              </>
            }
            right={
              <>
                {/* Right Side */}
                <Image
                  src={"/hero-section/hero-image.png"}
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

      {/*  Initiate Section */}
      <section className="bg-brown-background py-16 px-4 ">
        <div className=" mx-[2%]">
          <div className="bg-brown-background lg:bg-[url('/backgrounds/masterpiece.png')] bg-cover bg-bottom rounded-2xl lg:p-8  md:p-36 lg:h-[500px]">
            <div className=" lg:ml-[40%]">
              {/* Heading */}
              <h2 className="text-[26px] lg:text-[3rem] font-cabin font-bold text-text-black mb-6 leading-tight text-center lg:text-start">
                Let Us Initiate Your Book Process - Any Genre You Choose!
              </h2>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-[1.2rem] font-poppins text-[#50545A] leading-[1.2] text-center lg:text-start">
                  Whether your project is fiction, historical, sci-fi,
                  non-fiction, or any other genre, our team produces the concept
                  to create a distinctive manuscript. We avoid clichés, ensuring
                  each book features engaging plots and subplots.
                  <br />
                  <br />
                  Through initial research and outlining, we understand your
                  genre in-depth to frame a story and plot that would engage
                  your readers. The uniqueness added to your narrative is a
                  NOISE that attracts new readers and ultimately grows your book
                  sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="lg:bg-[url('/backgrounds/service.png')] lg:bg-brown-background bg-[#28263b]">
        {/* Container */}
        <div className="flex flex-col items-center text-center pt-10 lg:pt-[170px] justify-center lg:justify-center">
          {/* Rounded Container */}
          <RoundedContainer
            borderColor="red"
            textColor="white"
            capitalize={false}
            className={"font-cabin font-bold py-[10px] px-[40px]"}
            fontSize={16.4}
          >
            What Phoenix Offers
          </RoundedContainer>
          {/* Heading */}
          <h2 className="text-[26px] lg:text-[3rem] font-bold text-white font-cabin w-full lg:w-[80%] my-[2%] leading-[1.2]">
            Lead The Literary Industry With the Right Strategy and Solutions
          </h2>
          {/* Cards */}
          <div className="three-col items-center justify-center container">
            {[
              {
                heading: "Book Publishing",
                description:
                  "With Phoenix, increase the credibility and access to the audience with publishing your book on the right platform. Get your work recognized!",
              },
              {
                heading: "Book Marketing",
                description:
                  "Your author identity serves as your brand while your book is your product. With the right marketing strategy, win the targeted sales.",
              },
              {
                heading: "Author Website",
                description:
                  "Reflecting your values and concepts through your book is not sufficient. You need to showcase the following with an online presence.",
              },
              {
                heading: "Book Review & Consultation",
                description:
                  "Talented team at Phoenix reviews your manuscript and evaluates based on multiple factors to meet the industry standards.",
              },
              {
                heading: "Book Cover Design",
                description:
                  "Your book cover design is one of the factors that lets you achieve the best-selling status on publishing platforms. Let's design it and hit the best-selling list.",
              },
              {
                heading: "Book Proofreading",
                description:
                  "There's a thin line between editing and proofreading! It doesn't mean you can skip the proofreading stage, as this is the final stage before publishing your book.",
              },
            ].map((service, index) => (
              <div
                key={service.heading}
                className="bg-white lg:w-[90%] p-[30px] m-5 rounded-2xl"
              >
                {/* Image and text */}
                <div className="flex justify-center w-full lg:items-end  text-start space-x-3 mb-[5%]">
                  <div className="shrink-0">
                    <Image
                      src={`/services/${index + 1}.png`}
                      width={50}
                      height={50}
                      alt={service.heading}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-text-black text-[1.5rem] lg:text-[20px] leading-tight font-semibold w-[40%] text-center lg:text-start">
                    {service.heading}
                  </h4>
                </div>
                {/* description */}
                <p className="text-[14px] font-poppins  text-[#777777] text-center lg:text-start">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          {/* Quote Button */}
          <div className="my-[6%]">
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
      </div>
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 py-20 bg-brown-background border-b-2 border-b-text-black px-[10%]">
        {[
          {
            stat: "1800+",
            text: "Books Written",
          },
          {
            stat: "200+",
            text: "Writers & Editors",
          },
          {
            stat: "98%",
            text: "Customer Satisfaction",
          },
          {
            stat: "90%",
            text: "of Customers Return",
          },
        ].map((stat) => (
          <div key={stat.text} className="flex flex-col items-center  ">
            <h2 className="text-accent-primary text-[4rem] font-poppins">
              {stat.stat}
            </h2>
            <p className=" text-text-black text-[16px] font-poppins w-[50%] text-center">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
      {/* Our Finishes */}
      <div className="relative py-[10%] bg-brown-background px-[6%] overflow-y-hidden">
        {/* Content */}
        <div className="flex flex-col w-full lg:w-[55%] space-y-[3%]  py-10 lg:py-0">
          {/* Heading */}
          <h1 className="text-[26px] lg:text-[3rem] font-bold leading-[1.2] text-text-black">
            Ghostwriting is a matter of trust - entrenching the branches to
            integrity and confidentiality
          </h1>
          {/* Description */}
          <p className="font-poppins text-[#50545a] font-normal text-[1.2rem]">
            Choosing a ghostwriting agency is a decision that should not be
            taken hastily, as it fundamentally involves trust. Therefore, it’s
            essential to work with professionals who are not only skilled but
            also highly respectful of confidentiality. Our agency is dedicated
            to delivering exceptional and unique narratives that align with your
            requirements and vision, while considering the many factors that
            influence the author's credibility.
          </p>
          {/* List */}
          <ul className="grid grid-cols-2  gap-y-[10%]  font-poppins font-medium text-text-black text-[1.2rem] py-10 mb-10 lg:py-0">
            {[
              "Increasing Competition",
              "Stress",
              "Busy Schedules",
              "Writer's Block",
              "Financial Constraints",
              "Rejected Manuscript",
              "Lack of Productivity",
              "Creative Block",
              "Lack of Motivation",
              "Perfectionism",
            ].map((item) => (
              <li key={item} className="flex items-center">
                <Image
                  src={"/finishes/list-icon.png"}
                  width={32}
                  height={32}
                  alt="list-icon"
                />
                {item}
              </li>
            ))}
          </ul>
          {/* Quote Button */}
          <div className="mt-[10%]">
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
          </div>
        </div>

        {/* Image */}
        <div className="absolute right-0 -top-10 py-[10%] w-[40%]  pr-[3%] bg-white hidden lg:block">
          <Image
            src={"/finishes/banner-pic.png"}
            width={500}
            height={1000}
            className="-left-[3%] relative"
            alt="banner-pic"
          />
        </div>
        {/* Mobile Image */}
        <div className=" py-[10%] w-full pr-[3%] bg-white block lg:hidden">
          <Image
            src={"/finishes/banner-pic.png"}
            width={500}
            height={1000}
            className="-left-[3%] relative"
            alt="banner-pic"
          />
        </div>
      </div>
      {/* Call To Action */}
      <Cta />
      {/* Portfolio */}
      <Portfolio />
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
