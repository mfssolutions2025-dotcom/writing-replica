import BrandLine from "@/components/BrandLine";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import HeroSectionWrapper from "@/components/HeroSectionWrapper";
import Navbar from "@/components/Navbar";
import RoundedContainer from "@/components/RoundedContainer";
import { NonShadowButton } from "@/components/ShadowButton";
import Testimonial from "@/components/Testimonials/Testimonial";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className=" overflow-x-hidden">
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
                <h1 className="lg:text-[40.8px] text-text-black font-bold font-cabin line leading-[1.2] lg:leading-[43px] text-[28px] lg:text-start text-center pb-12">
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
                  src={"/hero-section/hero-about.png"}
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
      {/* Market Offer */}
      <section className="flex flex-col lg:flex-row items-center justify-center py-[80px] bg-brown-background px-0 lg:px-[5%] gird lg:grid-cols-2 gird-col-1">
        {/* Left */}
        <div className="">
          <Image
            src={"/misc/market-offer.png"}
            width={400}
            height={415}
            alt="hero-banner"
            sizes="380px"
          />
        </div>
        {/* Right */}
        <div className="w-full lg:w-[48.3%] flex flex-col gap-y-[5%] text-center lg:text-start px-4">
          <h2 className="font-cabin font-bold text-[26px] lg:text-[3rem] leading-[1.2] text-[#0B2240]">
            Crafting Excellence Through <br /> Expertise and Passion
          </h2>
          <p className="text-[#010c2f] text-[1.2rem] font-normal font-poppins">
            Phoenix Ghostwriting is a team of skilled ghostwriters, marketers,
            publishers, and other supporting professionals who have built the
            foundation of the brand. Our professionals hold diverse expertise
            while catering to challenging tasks and ensuring flawless work. Our
            wordsmiths, enthusiasts, and dedicated professionals have woven our
            passion for book writing, editing, publishing, and marketing into
            the fabric of Phoenix Ghostwriting. From writing research-based
            non-fiction books to thought-provoking novels to imaginative
            fiction, our journey has been a celebration of literature in all its
            forms.
          </p>
          <div className="centering lg:justify-start mt-5">
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

      {/* The Best */}
      <section className="flex flex-col py-[80px] items-center px-[5%] text-center">
        <h2 className="font-cabin text-[26px] lg:text-[3rem] text-text-black font-bold">
          Why Phoenix Ghostwriting is A Progressive Agency?
        </h2>
        <p className="w-[80%]  text-[#010c2f] my-10 text-[18px] font-normal font-poppins">
          {" "}
          Your ideas represent the vision that you have for your book, but our
          ghostwriters sprinkle creativity to make it more interesting and
          engaging for your readers. Our team fragments the complex concepts for
          your readers to better visualize your framework.
        </p>
        <div className="three-col gap-10 items-center">
          {[
            {
              id: 1,
              title: "Finest Literary Usage",
              description:
                "Our team is well-versed with the vocabulary and research skills, leading to producing finest literature for you.",
            },
            {
              id: 2,
              title: "Team Diversity",
              description:
                "Phoenix has a diverse group, with an experience of various cultural backgrounds to better understand the varying perceptions of clients.",
            },
            {
              id: 3,
              title: "Easy Refunds",
              description:
                "If you are not satisfied with our services, that's fine. During our feedback stage, we process easy refunds.",
            },
            {
              id: 4,
              title: "Higher Readership",
              description:
                "A book just stuffed with the words adversely impacts the readership. Therefore, we focus on creating a story for higher readership.",
            },
            {
              id: 5,
              title: "Secure Ownership",
              description:
                "With Phoenix, you don't have to worry about the ownership issues. We write for you, but you hold 100% ownership and authorization of your book.",
            },
            {
              id: 6,
              title: "Customer Retention",
              description:
                "We believe customer loyalty is priceless. Therefore, it's our obligation and responsibility to provide you with the best.",
            },
            {
              id: 7,
              title: "Payment Plan",
              description:
                "We provide a range of payment options for your ghostwriting requirements, from standard to deluxe to premium plans. Experience the ease and flexibility with Phoenix!",
            },
            {
              id: 8,
              title: "Extensive Research",
              description:
                "Research improves the content of any book - regardless of the genre. Therefore, we invest considerable time in research to outline a unique story.",
            },
            {
              id: 9,
              title: "24/7 Support",
              description:
                "With our 24/7 customer support, you have a dedicated representative available to address your concerns, offer guidance, and keep you informed throughout the ghostwriting process.",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="best-card-bg flex flex-col items-center justify-center text-center p-5 rounded-2xl border border-[#d8d4ca] space-y-4"
            >
              <Image
                src={`/thebest/${item.id}.png`}
                width={75}
                height={75}
                alt="icon"
              />
              <h3 className="font-cabin font-bold text-[#0b2240] text-[1.5rem]">
                {item.title}
              </h3>
              <p className="font-poppins font-normal text-[#010c2f] text-[1rem]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Call to Action  */}
      <Cta />
      {/* Ghostwritters */}
      <section className="ghostwriter bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Mobile: Stack in 1 column, Desktop: 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column - Mission Section - Takes 7/12 columns on desktop */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Mission Card */}
              <div className="mission bg-gradient-to-br from-[#7f3437] to-[#99493d] text-center px-8 py-12 md:px-12 md:py-16 rounded-t-2xl lg:rounded-2xl lg:rounded-br-none lg:rounded-bl-none flex flex-col items-center">
                <h3 className="text-[26px] lg:text-[3rem] font-bold text-white mb-6">
                  Our Mission Statement
                </h3>
                <p className="text-white text-lg leading-[31px] font-normal font-poppins mb-8 w-[90%]">
                  At Phoenix, we aim to outline and develop unique content for
                  your book, whether it's a narrative, poem, or video book. Our
                  commitment to integrity, accountability, and honesty
                  strengthens the core values of our agency.
                  <br />
                  <br />
                  We start by learning about the latest trends in your niche
                  through in-depth interviews and secondary research. Your
                  initial idea serves as the foundation, and our team builds
                  upon it through extensive research and development.
                </p>
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

              {/* Mission Women Image */}
              <div className="flex justify-center -mt-px">
                <img
                  src="https://www.phoenixghostwriting.com/assets/images/mission.jpg"
                  alt="Mission"
                  className="w-full max-w-full lg:rounded-lg lg:rounded-tl-none lg:rounded-tr-none rounded-b-2xl"
                />
              </div>

              {/* Blog Sections - Appears at bottom of left container in mobile */}
              <div className="mt-12 lg:hidden px-4">
                {/* First Blog */}
                <div className="blog mb-12">
                  <h2 className="text-[26px] lg:text-[3rem]  text-[#0b2240] mb-6 leading-tight font-bold">
                    Benefits of Consulting a Ghostwriting Agency
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 font-poppins">
                    In the digital age, authors need high-quality content to
                    truly connect with their audience. While, readers seek
                    engaging and insightful material that echoes within them.
                    For instance, in a romance novel, your audience may dislike
                    the cliche themes and rather expect a fresh take on love
                    stories. Therefore, our approach incorporates each book with
                    creativity, bringing a unique spark to the narrative.
                    <br />
                    <br />
                    Understandably, this task can be overwhelming for many
                    authors who are focused on their primary operations. Thus,
                    investing in a ghostwriting company for top-tier content is
                    a smart choice.
                  </p>
                </div>

                {/* Second Blog */}
                <div className="blog">
                  <h2 className="text-[26px] lg:text-[3rem]font-bold text-[#0b2240] mb-6 leading-tight font-bold">
                    Understanding Ghostwriting <br /> in Our Words
                  </h2>
                  <p className="text-gray-700 text-[1.3rem] leading-[1.4] mb-10">
                    Ghostwriting isn't just about bringing in an agency to pen
                    your book; it's like gaining a partner in narrating your
                    story. Beyond hiring a writer, you're tapping into their
                    wealth of ideas, creativity, and experience. It's a
                    collaboration where their expertise modify your vision into
                    words.
                  </p>
                  <div className="flex justify-center">
                    <img
                      src="https://www.phoenixghostwriting.com/assets/images/ghostwriter-book.png"
                      alt="Ghostwriter Book"
                      className="w-[60%] max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Blog Sections - Takes 5/12 columns on desktop */}
            <div className="lg:col-span-5 hidden lg:flex flex-col">
              {/* First Blog */}
              <div className="blog mb-12 lg:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b2240] mb-6 leading-tight">
                  Benefits of Consulting a Ghostwriting Agency
                </h2>
                <p className="text-gray-700 text-[1.2rem] leading-normal mb-6 font-poppins">
                  In the digital age, authors need high-quality content to truly
                  connect with their audience. While, readers seek engaging and
                  insightful material that echoes within them. For instance, in
                  a romance novel, your audience may dislike the cliche themes
                  and rather expect a fresh take on love stories. Therefore, our
                  approach incorporates each book with creativity, bringing a
                  unique spark to the narrative.
                  <br />
                  <br />
                  Understandably, this task can be overwhelming for many authors
                  who are focused on their primary operations. Thus, investing
                  in a ghostwriting company for top-tier content is a smart
                  choice.
                </p>
              </div>

              {/* Second Blog */}
              <div className="blog">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0b2240] mb-6 leading-tight">
                  Understanding Ghostwriting <br /> in Our Words
                </h2>
                <p className="text-gray-700 text-lg leading-normal mb-10 font-poppins">
                  Ghostwriting isn't just about bringing in an agency to pen
                  your book; it's like gaining a partner in narrating your
                  story. Beyond hiring a writer, you're tapping into their
                  wealth of ideas, creativity, and experience. It's a
                  collaboration where their expertise modify your vision into
                  words.
                </p>
                <div className="flex justify-center">
                  <img
                    src="https://www.phoenixghostwriting.com/assets/images/ghostwriter-book.png"
                    alt="Ghostwriter Book"
                    className="w-[60%] max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonial />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default page;
