import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row reverse justify-between items-center gap-8">
      {/* text here */}
        <div className="md:w-1/2">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug loading-snug">
            Meet the MLH Top 50 Class of 2021!
            </h2>
            <p className="text-md">In the last year, Major League Hacking (MLH) has reached more hackers 
            than ever before through digital events, impacting over 135,000 hackers worldwide. 
            During a time where we were all told to isolate, we came together in the one way we knew how: 
            through technology. With a community so full of talent and drive, we are constantly inspired by 
            the work and events created. We launched the MLH Top 50 to highlight a few of the most inspiring 
            stories from the last year with the hope they’ll inspire you too. <span className='text-cyan-500'>Read more →</span></p>
        </div>

        {/* Image here */}
        <div className="md:w-1/2">
            <img src="/img/pic1.jpg "/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
