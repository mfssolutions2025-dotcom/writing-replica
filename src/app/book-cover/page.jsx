import React from "react";
import Navbar from "@/components/Navbar";
import HeroSectionWrapper from "@/components/HeroSectionWrapper";
import RoundedContainer from "@/components/RoundedContainer";
import Image from "next/image";
import BrandLine from "@/components/BrandLine";
import { NonShadowButton } from "@/components/ShadowButton";
import BookSlider from "@/components/BooksSlider";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonials/Testimonial";
function page() {
  return (
    <div className="overflow-x-hidden">
      {" "}
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
                  Make Impact With Book Cover Design
                </RoundedContainer>

                {/* Heading */}
                <h1 className="lg:text-[3rem] text-center lg:text-start text-text-black font-bold font-cabin line leading-[43px] text-[28px]">
                  {"With Phoenix Your Book Cover Should Stand Out"}
                </h1>
                <ul className="flex justify-center lg:justify-start flex-wrap space-x-10 gap-y-5 items-center text-text-black">
                  {[
                    "eBook",
                    "Paperback",
                    "Hardcover",
                    "Audiobook",
                    "And More!",
                  ].map((item, index) => (
                    <li
                      className="flex text-[1.31rem] font-semibold font-cabin items-end px-2"
                      key={index}
                    >
                      <Image
                        src={"/misc/tick-list-icon.png"}
                        width={25}
                        height={25}
                        alt="tick-list-icon"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            }
            right={
              <>
                {/* Right Side */}
                <Image
                  src={"/hero-section/book-cover.png"}
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
      {/* Market Offer -3 */}
      <section className="flex flex-col lg:flex-row justify-center py-[80px] bg-brown-background px-[5%] gap-x-5">
        {/* Left */}
        <div className="">
          <Image
            src={"/misc/market-offer-3.png"}
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
      {/* Book Art */}
      <section className="book-art bg-cover bg-center py-16 md:py-20 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "url('https://www.phoenixghostwriting.com/assets/images/book-art.png')",
            backgroundSize: "cover",
          }}
        />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Heading Section */}
          <div className="heading text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-cabin">
              The Power of Book Cover - <br />
              Designing a Book Cover That Sells
            </h2>
            <p className="text-white text-lg md:text-xl max-w-4xl mx-auto font-poppins">
              Designing a book cover might not be your initial focus, but it
              should be! Your book cover is often the first aspect your
              potential readers notice, and that is what attracts them to read
              the synopsis and understand the glimpse of your book. Before
              designing a book cover that attracts your target audience, Phoenix
              Ghostwriting understands who they are and what they like by
              researching the market and analyzing the trends that are popular
              within your target audience.
            </p>
          </div>

          {/* List Items */}
          <div className="row">
            <div className="w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  "Understanding the psychology of color to evoke emotions in audience",
                  "Eliminating the negative space to declutter the design",
                  "Unlimited revision until we achieve your vision",
                  "Analyzing the factors to make your book stand out",
                  "Avoiding low-quality, irrelevant and misleading covers",
                  "Cover designs optimized for both digital and print book formats",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="bg-[#71412e] text-white h-[90px] px-6 md:px-8 py-4 rounded-2xl flex items-center justify-center text-center hover:bg-opacity-90 transition-all duration-300"
                  >
                    <span className="font-medium text-base md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Illustration */}
      <section className="book-illustration bg-brown-background py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* First Row - Content + First Image Grid */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-10 lg:mb-16">
            {/* Left Column - Content */}
            <div className="w-full lg:w-6/12">
              <div className="info-ill">
                <div className="heading mb-8">
                  <h2 className="text-[26px] lg:text-[3rem] font-bold text-[#0b2240] leading-[1.2]">
                    Correlation Between Book Covers &amp; Digital Sales
                  </h2>
                </div>
                <p className="text-[1rem] text-[#010c2f] mb-8 font-normal font-poppins">
                  In the era of digital sales, your book cover has become a
                  crucial element for marketing and selling your book. Your
                  cover must distinguish itself from countless other published
                  titles to attract your audience's attention, even when
                  displayed as a small thumbnail. Therefore, it's essential to
                  ensure that your cover remains impactful when viewed on an
                  e-reader or in a reduced image size.
                </p>
                <div className="btn-block flex flex-col sm:flex-row items-center gap-4 md:gap-6">
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
                  <a
                    href="tel:+1 (415) 702-1019"
                    className="tex-cl flex items-center text-[#f5441b] text-xl md:text-2xl font-medium hover:text-[#050483] transition-colors duration-300"
                  >
                    <img
                      src="https://www.phoenixghostwriting.com/assets/images/book-phone.png"
                      alt="Phone"
                      className="mr-3 w-8 h-8"
                    />
                    +1 (415) 702-1019
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - First Image Grid */}
            <div className="w-full lg:w-6/12">
              <div className="grid grid-cols-12 gap-4 h-full">
                {/* Left Column - Food Image */}
                <div className="col-span-12 md:col-span-5">
                  <div className="img-ill relative h-full rounded-3xl overflow-hidden group">
                    <figure className="h-full m-0">
                      <img
                        src="https://www.phoenixghostwriting.com/assets/images/book-ill1.png"
                        alt="Food"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </figure>
                    <h4 className="absolute left-8 top-8 text-white text-xl md:text-2xl font-bold">
                      Food
                    </h4>
                  </div>
                </div>

                {/* Right Column - Fashion and Line-Design Images */}
                <div className="col-span-12 md:col-span-7 flex flex-col gap-4">
                  <div className="img-ill img-ill1 relative h-1/2 rounded-3xl overflow-hidden group">
                    <figure className="h-full m-0">
                      <img
                        src="https://www.phoenixghostwriting.com/assets/images/book-ill2.png"
                        alt="Fashion"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </figure>
                    <h4 className="absolute left-8 top-8 text-white text-xl md:text-2xl font-bold">
                      Fashion
                    </h4>
                  </div>

                  <div className="img-ill img-ill1 relative h-1/2 rounded-3xl overflow-hidden group">
                    <figure className="h-full m-0">
                      <img
                        src="https://www.phoenixghostwriting.com/assets/images/book-ill3.png"
                        alt="Line-Design"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </figure>
                    <h4 className="absolute left-8 top-8 text-white text-xl md:text-2xl font-bold">
                      Line-Design
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Larger Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Column 1 - Retro and Children */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="img-ill relative rounded-3xl overflow-hidden group">
                  <figure className="h-full m-0">
                    <img
                      src="https://www.phoenixghostwriting.com/assets/images/book-ill4.png"
                      alt="Retro"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </figure>
                  <h4 className="absolute left-6 top-6 text-white text-lg md:text-xl font-bold">
                    Retro
                  </h4>
                </div>

                <div className="img-ill relative rounded-3xl overflow-hidden group">
                  <figure className="h-full m-0">
                    <img
                      src="https://www.phoenixghostwriting.com/assets/images/book-ill5.png"
                      alt="Children"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </figure>
                  <h4 className="absolute left-6 top-6 text-white text-lg md:text-xl font-bold">
                    Children
                  </h4>
                </div>
              </div>
            </div>

            {/* Column 2 - Nature, Architecture, Portrait, Romance */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Left Column in this section */}
                <div className="flex flex-col gap-4">
                  <div className="img-ill img-ill1 relative rounded-3xl overflow-hidden group h-1/2">
                    <figure className="h-full m-0">
                      <img
                        src="https://www.phoenixghostwriting.com/assets/images/book-ill6.png"
                        alt="Nature"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </figure>
                    <h4 className="absolute left-6 top-6 text-white text-lg md:text-xl font-bold">
                      Nature
                    </h4>
                  </div>

                  <div className="img-ill img-ill1 relative rounded-3xl overflow-hidden group h-1/2">
                    <figure className="h-full m-0">
                      <img
                        src="https://www.phoenixghostwriting.com/assets/images/book-ill7.png"
                        alt="Architecture"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </figure>
                    <h4 className="absolute left-6 top-6 text-white text-lg md:text-xl font-bold">
                      Architecture
                    </h4>
                  </div>
                </div>

                {/* Right Column in this section */}
                <div className="flex flex-col gap-4">
                  <div className="img-ill img-ill1 relative rounded-3xl overflow-hidden group h-1/2">
                    <figure className="h-full m-0">
                      <img
                        src="https://www.phoenixghostwriting.com/assets/images/book-ill8.png"
                        alt="Portrait"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </figure>
                    <h4 className="absolute left-6 top-6 text-white text-lg md:text-xl font-bold">
                      Portrait
                    </h4>
                  </div>

                  <div className="img-ill img-ill1 relative rounded-3xl overflow-hidden group h-1/2">
                    <figure className="h-full m-0">
                      <img
                        src="https://www.phoenixghostwriting.com/assets/images/book-ill9.png"
                        alt="Romance"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </figure>
                    <h4 className="absolute left-6 top-6 text-white text-lg md:text-xl font-bold">
                      Romance
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 - Fantasy */}
            <div className="lg:col-span-2">
              <div className="img-ill relative rounded-3xl overflow-hidden group h-full">
                <figure className="h-full m-0">
                  <img
                    src="https://www.phoenixghostwriting.com/assets/images/book-ill10.png"
                    alt="Fantasy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </figure>
                <h4 className="absolute left-6 top-6 text-white text-lg md:text-xl font-bold">
                  Fantasy
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta */}
      <Cta />
      {/* Book Slider */}
      <Portfolio />
      {/* Testimonials */}
      <Testimonial />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default page;
