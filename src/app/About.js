import React from "react";
import Image from "next/image";
import profPic from "../../public/Prof1.png";
const About = () => {
  return (
    <section className="lg:h-full lg:mb-40 md:h-min relative md:mb-20"
    >
    <div className="  ">
      <div className="flex lg:flex-row md:flex-col md:justify-center md:items-center md:mx-10 sm:flex-col sm:justify-center sm:items-center  ">
        <div className=" relative lg:h-96 lg:w-72 md:h-64 md:w-64 lg:items-center lg:justify-center mt-10 ">
          <Image
            src={profPic}
            alt="Cover Image"
            layout="fill"
            className="bg-img rounded-2xl"
          />
        </div>
        <div className="flex flex-col  lg:ml-10 lg:mx-10    ">
          <h1 className="text-4xl  text-[#BD3227] font-bold lg:text-left md:text-center sm:text-center lg:mt-2 lg:mb-2 md:my-6 ">About Me</h1>
          <p className="lg:mt-3 md:justify-center md:items-center  text-[#EDEDED] lg:text-left md:text-center md:mx-auto  sm:text-left sm:mx-10  ">
            Graduate of Information Technology from Holy Name University with a
            passion for technology and innovation. <br />
            My journey began with an internship at Pedicab, where I gained
            practical experience. <br />
            Since then, I&apos;ve been actively involved in freelancing, applying my
            skills and creativity to various projects. <br />
            Explore my portfolio to discover the intersection of my education,
            internship, and freelance work in the dynamic world of IT.
          </p>
          <h1 className="text-4xl  text-[#BD3227] font-bold lg:text-left md:text-center sm:text-center lg:mt-2 md:my-6">
            Career Goals
          </h1>
          <p className="lg:mt-3 md:justify-center md:items-center  text-[#EDEDED] lg:text-left md:text-center md:mx-auto  sm:text-left sm:mx-10">
          Passionate Information Technology graduate dedicated to continuous
          improvement. <br /> Committed to gaining hands-on experience,
          expanding knowledge, and contributing to the success of
          companies and clients. <br />Aspiring to not only meet but exceed
          expectations, my goal is to create innovative solutions that
          positively impact <br /> the ever-
          evolving IT landscape. Explore my portfolio to see the
          practical application of my skills
          <br /> across diverse projects, showcasing adaptability and a drive
          for excellence.
          </p>
        </div>
        
      </div>
      <div className="flex flex-row  mt-20 lg:gap-20 md:gap-20 sm:gap-2 ml-5 justify-center mx-10 q  ">
        <div className="flex-col text-center">
          <h1 className="text-7xl text-[#BD3227]">1+</h1>
          <p className="text-[#EDEDED] text-lg font-bold">
            Years of Experience
          </p>
        </div>
        <div className="flex-col text-center">
          <h1 className="text-7xl text-[#BD3227]">2+</h1>
          <p className="text-[#EDEDED] text-lg font-bold">Projects Completed</p>
        </div>
        <div className="flex-col text-center">
          <h1 className="text-7xl text-[#BD3227]">2+</h1>
          <p className="text-[#EDEDED] text-lg font-bold">Client Satisfied</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
