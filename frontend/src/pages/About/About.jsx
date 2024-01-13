import React from "react";

const About = () => {
  return (
    <>
      <div className="ml-20 mr-20 mt-20">
        <h2 className="md:text-5xl text-4xl text-center font-bold md:leading-snug loading-snug">
        Our mission is to Empower Hackers.
        </h2>
        <p className="text-md text-center ">With a community so full of talent and drive, we are
              constantly inspired by the work and events created. We launched
              the MLH Top 50 to highlight a few of the most inspiring stories
              from the last year with the hope they’ll inspire you too.{" "}
              <span className="text-cyan-500">Read more →</span></p>
      </div>
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-24 flex flex-col md:flex-row reverse justify-between items-center gap-8">
          {/* Image here */}
          <div className="md:w-1/2">
            <img src="/img/pic1.jpg " />
          </div>
          {/* text here */}
          <div className="md:w-1/2">
            <h4 className="md:text-2xl text-2xl font-bold md:leading-snug loading-snug">
            Why do hackers love MLH powered Hackathons?
            </h4>
            <p className="text-md">
            MLH is an organization for hackers, by hackers. Whether you{''} re a complete beginner or a returning veteran, you ll feel right at home at MLH powered events.

We believe that hackers should have access to the latest and greatest technology. That’s why we partner up with the world’s leading brands to get their products and devices into the hands of hackers. At MLH powered Hackathons, students can expect to have access to everything from microcontrollers to free web hosting and domains. Don’t have a laptop? Don’t worry! We probably have one you can hack on for the weekend!
              <span className="text-cyan-500">Read more →</span>
            </p>
          </div>
        </div>
      </div>
      <div className="py-40 flex flex-col  items-center justify-center gap-8">
          {/* text here */}
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug loading-snug">
            What is Major League Hacking?
            </h2>
            <p className=" text-xl md:w-7/5 max-auto">
            Major League Hacking (MLH) is the official student hackathon league. Each year, we power over 300 weekend-long invention competitions that inspire innovation, cultivate communities and teach computer science skills to more than 500,000 developers around the world. MLH is an engaged and passionate maker community, consisting of the next generation of technology leaders and entrepreneurs.

B corp
MLH has been a community first, mission driven organization from the beginning. We measure our success by the number of hackers we empower, and we want to keep it that way. That’s why we made it official and became a Certified B Corporation in 2016. B Corps are for-profit enterprises that are legally required to consider the impact of their decisions on their community, not just their shareholders.
            </p>
          </div>
        </div>
    </>
  );
};

export default About;
