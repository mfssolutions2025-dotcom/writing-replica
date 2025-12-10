import React from "react";
import RoundedContainer from "./RoundedContainer";
import Image from "next/image";
import { addDashes } from "@/lib/helpers";

function Process() {
  return (
    <section className="py-20 bg-brown-background flex flex-col items-center justify-center space-y-2.5">
      <RoundedContainer
        capitalize={false}
        className={"font-cabin px-[40px] py-[10px] font-bold "}
        fontSize={"1.2rem"}
        borderColor="red"
        textColor="#0B2240"
      >
        Phoenix Book Process
      </RoundedContainer>
      <h2 className="text-text-black text-[26px] lg:text-[3rem] text-center font-cabin font-bold leading-[1.2]">
        Become a Best-Seller
        <br />
        Author in <span className="text-accent-primary">4 Simple Steps!</span>
      </h2>
      {/* Banner */}
      <div className="flex mx-[6.23%] items-center justify-center flex-col lg:flex-row">
        {/* Image */}
        <div className="w-full lg:w-[40%]">
          <Image
            src={"/process/banner.png"}
            width={400}
            height={450}
            alt="banner"
          />
        </div>
        {/* Steps */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 lg:grid-cols-2 my-[10%] gap-y-10 gap-x-10 items-center ">
          {[
            {
              title: "Order Placement",
              description:
                "Submit our brief form, detailing your vision, purpose, genre, and idea. Within 48 hours, our representatives will reach out to you to discuss further about your project.",
              image: "order placement",
            },
            {
              title: "Sparking Inspiration",
              description:
                "A book begins with a great idea; hence our team ensures to research your topic, and define your target audience.",
              image: "sparking inspiration",
            },
            {
              title: "Writing & Editing",
              description:
                "Once your narrative outline is ready, our writers begin with writing your book. As every chapter is completed, it is edited by our editors.",
              image: "writing & editing",
            },
            {
              title: "Proofreading & Publishing",
              description:
                "After completing your book, our team of experienced proofreaders review your manuscript critically to pass through the publishing stage.",
              image: "proofreading & publishing",
            },
          ].map((step, index) => (
            <div key={index}>
              {/* Image */}
              <div className="w-full flex items-center justify-center lg:justify-start">
                <Image
                  src={`/process/${addDashes(step.image)}.png`}
                  className="mb-5"
                  width={60}
                  height={60}
                  alt={step.image}
                />
              </div>
              {/* Content */}
              <div>
                <div className="text-[1.3rem] font-semibold mb-[0.68%]">
                  <span className="text-accent-primary">0{index + 1}.</span>{" "}
                  {step.title}
                </div>
                <p className="text-text-black text-[1rem] font-normal font-poppins">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
