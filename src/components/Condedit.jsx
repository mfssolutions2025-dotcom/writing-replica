import React from "react";

function Condedit() {
  return (
    <section className="our-contedit bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column - Images - 5/12 on desktop */}
          <div className="lg:col-span-5">
            <div className="img-contedit1 mb-8">
              <img
                src="https://www.phoenixghostwriting.com//assets/images/cont-edit1.png"
                alt="Content editing 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="img-contedit2">
              <img
                src="https://www.phoenixghostwriting.com//assets/images/cont-edit3.png"
                alt="Content editing 3"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - Content - 7/12 on desktop */}
          <div className="lg:col-span-7">
            <div className="info-contedit">
              {/* Heading */}
              <div className="heading mb-8">
                <h2 className="text-[26px] lg:text-[3rem] leading-[1.2] font-bold text-[#0b2240] ">
                  Four Different Approaches <br />
                  to Writing Your Book
                </h2>
              </div>

              {/* Description */}
              <p className="text-[1rem] font-normal text-[#50545a] mb-12 font-poppins">
                Presenting your idea and concept in different ways is a creative
                approach of our team of writers. Different audiences grasp ideas
                in different ways - some prefer informative research, others
                appreciate imagery, and some resonate with poetic expression.
                Therefore, our team structures your concept the way you prefer
                it.
              </p>

              {/* Boxes Grid - 2 columns on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                {[
                  {
                    title: "Technical\nWriting",
                    desc: "A form of narrative our writers structure, focusing on conveying information about specific topics and niches. Generally, it includes instructions or technical concepts such as regulations, computer applications or medical procedures.",
                  },
                  {
                    title: "Descriptive\nWriting",
                    desc: "As implied by the term 'descriptive', the primary purpose of descriptive writing is to describe your narrative in terms of a person, and location to paint a picture in your reader's mind.",
                  },
                  {
                    title: "Narrative\nWriting",
                    desc: "Way of communicating your story, outlining actual events stated in chronological order to sustain your reader's attention. Your readers deserve to visualize a realistic experience from our written words!",
                  },
                  {
                    title: "Poetic\nWriting",
                    desc: "Express your art, experience, thoughts, feelings in a creative yet meaningful way through poems. Our team of writers use a language of poem that appeals to your target audience.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="pl-8 md:pl-10 border-l-2 border-[#b5b5b6] relative pb-10 mb-8 lg:mb-10"
                  >
                    {/* Bottom border for first 3 items */}
                    {index < 3 && (
                      <div className="absolute bottom-0 left-0 w-full h-px bg-[#b5b5b6]" />
                    )}
                    <h4 className="text-3xl md:text-4xl text-accent-primary font-medium mb-4 leading-tight whitespace-pre-line">
                      {item.title}
                    </h4>
                    <p className="text-lg text-[#50545a]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Condedit;
