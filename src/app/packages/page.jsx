import React from "react";
import BrandLine from "@/components/BrandLine";
import Cta from "@/components/Cta";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Testimonial from "@/components/Testimonials/Testimonial";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSectionWrapper from "@/components/HeroSectionWrapper";
import RoundedContainer from "@/components/RoundedContainer";
import Image from "next/image";
import { NonShadowButton } from "@/components/ShadowButton";
function ServiceCard({ service }) {
  return (
    <div className="flex  justify-center items-center lg:justify-between flex-col lg:flex-row my-5 ">
      {/* Image */}
      <Image
        src={`/price-section/${service.id}.png`}
        alt={service.alt}
        width={350}
        height={235}
      />
      <div className="w-full flex lg:ml-[5%]  border-b border-b-black justify-center lg:justify-between items-center flex-col">
        <h1 className="lg:whitespace-break-spaces text-[2rem] text-accent-primary font-bold py-5 lg:my-0">
          {service.title}
        </h1>
        <p className="whitespace-break-spaces w-full text-center lg:text-start mb-5 lg:mb-0 lg:w-[70%] text-[1.125rem] font-poppins text-[#010c2f]">
          {service.description}
        </p>
      </div>
    </div>
  );
}
const PackageItem = ({ packageItem }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-2 py-6 w-full my-5 lg:my-0 lg:w-1/3 rounded-2xl shadow-2xl group hover:scale-[104%] transition-all delay-200 ease-in-out hover:border-4 hover:border-accent-primary relative">
      {/* Text Section */}
      <h2 className="text-center font-bold text-[#10223f] text-[1.8rem] mt-5 group-hover:text-accent-primary transition-all delay-200">
        {packageItem.name}
      </h2>
      <h3 className=" mb-5 text-center text-[1.3rem] leading-[35px] group-hover:text-accent-primary transition-all delay-200">
        Package
      </h3>
      <div className="h-[550px] flex flex-col overflow-y-scroll text-center my-2 custom-scrollbar w-full">
        {packageItem.features.map((feature, index) => (
          <span
            key={index}
            className="px-[15px] py-[20px] border-y border-[#b7b7b7] font-poppins text-[#0b2240] text-[1.125rem] font-medium"
          >
            {feature}
          </span>
        ))}
      </div>
      {/* CTA Button */}
      <div className="w-full flex justify-center my-5">
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
      {/* Best Seller */}
      {packageItem.isBestSeller && (
        <Image
          src={"/misc/price-offer.png"}
          width={100}
          height={50}
          alt="price-offer"
          className="absolute top-0 right-0"
        />
      )}
    </div>
  );
};

function page() {
  const pricingPackages = [
    {
      id: 1,
      name: "Standard",
      packageType: "Package",
      features: [
        "Professional Review & Insights",
        "Outline Discussion & Finalization",
        "Complete Manuscript Writing/Editing",
        "Creative Author Introduction",
        "Professional Formatting & Typesetting",
        "Unlimited Images/Photos",
        "Full Content Ownership",
        "Unlimited Revisions",
        "Team of 3 Experts",
        "2-3 Months Completion",
        "Personalized Online Portal",
        "24/7 Premium Support",
        "100% Money-Back Guarantee",
      ],
      isBestSeller: false,
      buttonText: "Request A Quote",
    },
    {
      id: 2,
      name: "Signature",
      packageType: "Package",
      features: [
        "Professional Review & Insights",
        "Outline Discussion & Finalization",
        "Complete Manuscript Writing/Editing",
        "Creative Author Introduction",
        "Professional Formatting & Typesetting",
        "Unlimited Images/Photos",
        "Conceptual Cover Design",
        "Publishing on Major Platforms",
        "eBook, Paperback, & Hardcover",
        "Premium Publishing Benefits",
        "Full Content Ownership",
        "Unlimited Revisions",
        "Team of 5 Experts",
        "2-3 Months Completion",
        "Personalized Online Portal",
        "24/7 Premium Support",
        "100% Money-Back Guarantee",
      ],
      isBestSeller: false,
      buttonText: "Request A Quote",
    },
    {
      id: 3,
      name: "Elite",
      packageType: "Package",
      features: [
        "Professional Review & Insights",
        "Outline Discussion & Finalization",
        "Complete Manuscript Writing/Editing",
        "Creative Author Introduction",
        "Professional Formatting & Typesetting",
        "Unlimited Images/Photos",
        "Conceptual Cover Design",
        "Publishing on Major Platforms",
        "eBook, Paperback, & Hardcover",
        "Setting Up POD and Free Shipping Worldwide",
        "Full Content Ownership",
        "Strategic Marketing Plan",
        "Interactive Author Website",
        "Social Media Marketing",
        "Video Teasers & Trailers",
        "Book Launch Planning & Strategy",
        "Guaranteed Bestseller",
        "Guaranteed ROI",
        "Unlimited Revisions",
        "Team of 7 Experts",
        "Personalized Online Portal",
        "24/7 Premium Support",
        "100% Money-Back Guarantee",
      ],
      isBestSeller: true,
      buttonText: "Request A Quote",
    },
  ];
  const servicesData = [
    {
      id: 1,
      image: "/assets/images/prsec1.png",
      alt: "Book Cover Design",
      title: "Book Cover \nDesign",
      description:
        "Our approach to book cover design has evolved from mere protection to active promotion. With the rise of digital publishing, your book cover now plays a crucial role in showcasing your content through vibrant colors and engaging graphics.",
    },
    {
      id: 2,
      image: "/assets/images/prsec2.png",
      alt: "Premium Book Video",
      title: "Premium \nBook Video",
      description:
        "As digitization has taken over, many people now prefer watching visuals over reading traditional books—especially the younger generation. Therefore, we offer a visually engaging alternative to conventional books.",
    },
    {
      id: 3,
      image: "/assets/images/prsec3.png",
      alt: "Author Website",
      title: "Author \nWebsite",
      description:
        "Publishing your book under your name is just the beginning of connecting with your audience. Developing your author website is essential for presenting the full picture of your values and establishing a strong online presence.",
    },
    {
      id: 4,
      image: "/assets/images/prsec4.png",
      alt: "Professional Audio Book",
      title: "Professional \nAudio Book",
      description:
        "Our audiobooks truly speak to the audience! At Phoenix, we believe that audiobooks are a valuable tool in today's world, allowing people to absorb content while multitasking—something traditional books cannot offer.",
    },
    {
      id: 5,
      image: "/assets/images/prsec5.png",
      alt: "Custom Book Illustrations",
      title: "Custom Book \nIllustrations",
      description:
        "Illustrations can significantly enhance a book, making it more appealing to readers. This is especially effective in children's literature to engage young readers, cookbooks to inspire the audience, and sci-fi to clarify complex concepts.",
    },
    {
      id: 6,
      image: "/assets/images/prsec6.png",
      alt: "Book Publishing",
      title: "Book \nPublishing",
      description:
        "We are not just an ordinary book publishing agency. We are your partners, guiding you towards becoming a successful author by providing comprehensive support throughout the publishing process.",
    },
    {
      id: 7,
      image: "/assets/images/prsec7.png",
      alt: "Book Marketing",
      title: "Book \nMarketing",
      description:
        "After launching your book, it's crucial to maintain its prominence and nurture a sense of community with your audience. Our marketing strategy ensures ongoing visibility and engagement, so your book remains memorable.",
    },
  ];
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
                  Affordable Pricing Options
                </RoundedContainer>

                {/* Heading */}
                <h1 className="lg:text-[40.8px] text-text-black font-bold font-cabin line leading-[43px] text-[28px]">
                  {
                    "Maintain Your Financial Budget While Achieving Success With Our Budget-friendly Ghostwriting Services"
                  }
                </h1>
              </>
            }
            right={
              <>
                {/* Right Side */}
                <Image
                  src={"/hero-section/packages.png"}
                  width={380}
                  height={415}
                  alt="hero-banner"
                  sizes="380px"
                />
              </>
            }
          />
        </section>
      </div>{" "}
      {/* Brand Line */}
      <BrandLine />
      {/* Pricing */}
      <section className="flex items-start justify-between px-[5%] py-[2%] bg-brown-background gap-x-5 flex-col lg:flex-row">
        {pricingPackages.map((packageItem, index) => (
          <PackageItem key={index} packageItem={packageItem} />
        ))}
      </section>
      {/* Price Section */}
      <section className="py-32 bg-brown-background">
        <div className="container mx-auto px-4 flex flex-col gap-y-5">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
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
