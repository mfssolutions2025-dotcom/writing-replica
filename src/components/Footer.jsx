import Image from "next/image";
import React from "react";
import ShadowButton, { NonShadowButton } from "./ShadowButton";
import { Facebook, InstagramIcon, Linkedin, TwitterIcon } from "lucide-react";

function Footer() {
  return (
    <div className="bg-brown-background relative pt-5 ">
      {/* Get Started Part */}
      <div className="flex flex-col lg:flex-row bg-white mx-[6%] lg:px-[90px] lg:py-[80px] rounded-2xl relative z-2 ">
        {/* Left Side  */}
        <div className="flex flex-col w-full lg:w-[60%] border-0 lg:border-r-2 lg:border-r-accent-[#d4d4d4] px-[15px] justify-between space-y-[1.1%] h-[650px]">
          <h2 className="text-[2.5rem] font-cabin font-bold text-[#0b2240] leading-[47px] text-center lg:text-start">
            Learn How Our Professionals <br />
            Write and Publish <br />
            Your Book
          </h2>
          <p className="text-[18px] text-[#0b2240] text-center lg:text-start">
            We’d be delighted to address any queries you may have or provide
            additional information. We look forward to collaborating with you!
          </p>
          {/* Form */}
          <form action="" className="flex flex-col w-full space-y-5 mb-[20px]">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 bg-brown-background text-black font-poppins text-[16px] font-medium w-full focus:outline-blue-300 border-b-2 border-accent-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-2 bg-brown-background text-black font-poppins text-[16px] font-medium w-full focus:outline-blue-300 border-b-2 border-accent-primary"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="p-2 bg-brown-background text-black font-poppins text-[16px] font-medium w-full focus:outline-blue-300 border-b-2 border-accent-primary"
            />
            <textarea
              name=""
              id=""
              placeholder="How can we help you?"
              className="p-2 bg-brown-background text-black font-poppins text-[16px] font-medium w-full focus:outline-blue-300 border-b-2 border-accent-primary h-32"
            ></textarea>
          </form>
          {/* Shadow Button */}
          <div className="align-bottom">
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
              submit a request
            </NonShadowButton>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center px-5 mt-5 lg:mt-0">
          <Image
            src={"/footer/footer.png"}
            width={275}
            height={280}
            alt="footer"
          />
          <h3 className="text-[2.5rem]  font-bold text-center text-[#0b2240] ">
            Reach Out <br /> To Us
          </h3>
          <p className="text-center text-[18px] font-poppins">
            By expanding our network of ghostwriters and authors, we can connect
            your book with your audience. Reach out to us today to begin the
            book writing and publishing process.{" "}
            <a href="tel:" className="text-accent-primary underline">
              Contact us
            </a>{" "}
            to learn more about what we offer.
          </p>
          {/* Phone Number */}
          <div className="flex items-center space-x-2">
            <div>
              <Image
                src={"/footer/call-icon.png"}
                width={50}
                height={50}
                alt="phone"
              />
            </div>
            <h1 className="text-[1.8rem] font-semibold my-10 text-accent-primary hover:text-accent-secondary">
              +1 (415) 702-1019
            </h1>
          </div>
        </div>
      </div>
      {/* Footer  */}
      <footer>
        <div className="bg-[#313133] mx-auto px-4 relative -mt-[10%] pt-[9%] z-1  w-screen">
          {/* Image */}
          <div className="absolute top-0 -left-10 w-full h-[90%] lg:w-[40%] lg:h-[85%] -z-2 bg-transparent opacity-25 lg:opacity-100">
            <Image
              src={"/footer/footer-books.png"}
              fill
              alt="footer-books"
              sizes="220px"
            />
          </div>
          {/* Footer Content */}
          <div className="pl-0 lg:pl-[35%] my-[5%]">
            {/* Desktop: Services + Company + Contact in one row */}
            <div className="hidden lg:grid grid-cols-12 gap-8 mb-12">
              {/* Services - 4 columns */}
              <div className="col-span-4 px-4">
                <h4 className="font-cabin text-white font-bold text-[1.5rem] mb-5">
                  Services
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.phoenixghostwriting.com//ghostwriting"
                      className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                    >
                      Ghostwriting
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.phoenixghostwriting.com//editing"
                      className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                    >
                      Editing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.phoenixghostwriting.com//publishing"
                      className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                    >
                      Publishing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.phoenixghostwriting.com//book-cover"
                      className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                    >
                      Book Cover
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.phoenixghostwriting.com//marketing"
                      className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                    >
                      Marketing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company - 4 columns */}
              <div className="col-span-4 px-4">
                <h4 className="font-cabin text-white font-bold text-[1.5rem] mb-5">
                  Company
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.phoenixghostwriting.com/"
                      className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.phoenixghostwriting.com//pricing"
                      className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                    >
                      Packages
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.phoenixghostwriting.com//about-us"
                      className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.phoenixghostwriting.com//contact-us"
                      className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact - 4 columns */}
              <div className="col-span-4 px-4">
                <ul className="info mb-8 ml-5 space-y-4">
                  <li className="text-white font-poppins text-[1.2rem]">
                    <span className="block font-semibold text-[13px] mb-1 ">
                      Telephone
                    </span>
                    +1 (415) 702-1019
                  </li>
                  <li className="text-white font-poppins text-[1.2rem]">
                    <span className="block font-semibold text-[13px] mb-1 ">
                      E-mail
                    </span>
                    support@phoenixghostwriting.com
                  </li>
                  <li className="text-white font-poppins text-[1.2rem]">
                    <span className="block font-semibold text-[13px] mb-1 ">
                      Address
                    </span>
                    50 Mission St, San Francisco, CA 94105, USA
                  </li>
                </ul>

                <ul className="socialtp flex space-x-4 ml-5">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/phoenixghostwriting/"
                      className="text-white hover:text-[#ee2e29] transition-colors duration-300"
                    >
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://x.com/PhoenixGhostW"
                      className="text-white hover:text-[#ee2e29] transition-colors duration-300"
                    >
                      <TwitterIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/phoenix-ghostwriting/"
                      className="text-white hover:text-[#ee2e29] transition-colors duration-300"
                    >
                      <Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/phoenixghostwriting/"
                      className="text-white hover:text-[#ee2e29] transition-colors duration-300"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.pinterest.com/Phoenixghostwriting/"
                      className="text-white hover:text-[#ee2e29] transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              {/* Mobile Row 1: Services and Company side by side */}
              <div className="grid grid-cols-2 justify-center -mx-4 mb-8">
                {/* Services */}
                <div className="flex flex-col items-center px-4">
                  <h4 className="font-cabin text-white font-bold text-[1.5rem] mb-5">
                    Services
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.phoenixghostwriting.com//ghostwriting"
                        className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                      >
                        Ghostwriting
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.phoenixghostwriting.com//editing"
                        className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                      >
                        Editing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.phoenixghostwriting.com//publishing"
                        className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                      >
                        Publishing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.phoenixghostwriting.com//book-cover"
                        className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                      >
                        Book Cover
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.phoenixghostwriting.com//marketing"
                        className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                      >
                        Marketing
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Company */}
                <div className="flex flex-col items-center px-4">
                  <h4 className="font-cabin text-white font-bold text-[1.5rem] mb-5">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.phoenixghostwriting.com/"
                        className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.phoenixghostwriting.com//pricing"
                        className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                      >
                        Packages
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.phoenixghostwriting.com//about-us"
                        className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.phoenixghostwriting.com//contact-us"
                        className="text-white text-[] hover:text-[#ee2e29] transition-colors duration-300 font-poppins"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mobile Row 2: Contact takes full width */}
              <div className="flex flex-col items-center text-center px-4">
                <ul className="info mb-8 ml-5 space-y-4">
                  <li className="text-white font-poppins text-[1.2rem]">
                    <span className="block font-semibold text-[13px] mb-1 ">
                      Telephone
                    </span>
                    +1 (415) 702-1019
                  </li>
                  <li className="text-white font-poppins text-[1.2rem]">
                    <span className="block font-semibold text-[13px] mb-1 ">
                      E-mail
                    </span>
                    support@phoenixghostwriting.com
                  </li>
                  <li className="text-white font-poppins text-[1.2rem]">
                    <span className="block font-semibold text-[13px] mb-1 ">
                      Address
                    </span>
                    50 Mission St, San Francisco, CA 94105, USA
                  </li>
                </ul>

                <ul className="socialtp flex space-x-4 ml-5">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/phoenixghostwriting/"
                      className="text-white hover:text-[#ee2e29] transition-colors duration-300"
                    >
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://x.com/PhoenixGhostW"
                      className="text-white hover:text-[#ee2e29] transition-colors duration-300"
                    >
                      <TwitterIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/phoenix-ghostwriting/"
                      className="text-white hover:text-[#ee2e29] transition-colors duration-300"
                    >
                      <Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/phoenixghostwriting/"
                      className="text-white hover:text-[#ee2e29] transition-colors duration-300"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.pinterest.com/Phoenixghostwriting/"
                      className="text-white hover:text-[#ee2e29] transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Bottom Row */}
          <div className="border-t border-[#575757] bg-[#313133] text-center text-white py-5">
            <p>
              {" "}
              Online Dispute Resolution (ODR) |
              <a href="#" className="hover:text-accent-secondary">
                Privacy Policy
              </a>
              |
              <a href="#" className="hover:text-accent-secondary">
                Terms & Conditions
              </a>
              <br />
              <br />© 2025 Phoenix Ghostwriting All Right Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
