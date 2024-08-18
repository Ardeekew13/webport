import React from "react";
import Image from "next/image";
import backgroundImage from "../../public/bg.png";
import { Typewriter } from "nextjs-simple-typewriter";
const HeroSection = () => {
  return (
    <section className="lg:h-screen md:h-96 sm:h-screen overflow-hidden relative bg-gray-900 ">
    <div className="flex flex-col h-full relative ">
        <Image
          src={backgroundImage}
          alt="Cover Image"
          layout="fill"
          SS
          className="bg-img"
        />

        <div className="absolute inset-0 flex flex-col items-left text-left  lg:ml-32 lg:mt-36  md:mx-auto sm:mx-auto sm:p-7   ">
          <p className="text-l md:block lg:hidden md:mx-auto md:mt-10 sm:text-center sm:mt-16 sm:text-xl ">
            Hi, My name is
          </p>
          <h1 className="text-5xl font-extrabold md:text-6xl md:text-center lg:text-left sm:text-center sm:text-5xl">
            Ron Derick Quilicot
          </h1>
          <h2 className="text-4xl text-secondary font-bold mb-2 md:text-center lg:text-left sm:text-center md:-text-5xl sm:text-3xl">
            I am a
            <Typewriter
              words={[" Web Developer", " Mobile Developer", " Designer"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-xs lg:text-left sm:text-center md:text-center sm:text-base">
            As a full stack developer and designer, I combine front-end and back-end expertise
            <br/> with creative design skills. I prioritize problem-solving, attention to detail, and <br/>
            innovation to deliver visually appealing and functional web applications for diverse<br/>
            industries.
          </p>
          <div className="lg:h-11 lg:w-36 bg-[#D72029] items-center justify-center flex rounded-xl mt-5 md:mx-auto lg:ml-1 md:h-20 md:w-1/2 sm:mx-auto sm:h-16 sm:w-1/2">
            <p className="text-[#D8D7D7] font-bold text-lg">See My Work</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
