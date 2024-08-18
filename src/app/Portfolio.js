import React from "react";
import portProj from "../../public/portproj1.png";
import portProj2 from "../../public/proj2.png";
import Image from "next/image";
import reactIcon from "../../public/react.svg";
import cssIcon from "../../public/css.png";
import javaIcon from "../../public/javascript.png";
import fbIcon from "../../public/firebase.png";
import phpIcon from "../../public/PHP.png";
const Portfolio = () => {
  return (
    <section className="h-full relative flex justify-center mt-20">
      <div className="flex-col">
        <h1 className="text-4xl  text-[#BD3227] font-bold text-center mb-10   ">
          Projects
        </h1>
        <div className="flex flex-row justify-center space-x-8">
       
        <div
          className="bg-[#182339] w-1/3 h-72 ml-20"
          style={{
            boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
          }}
        >
            <Image
              src={portProj}
              alt="Cover Image"
              className="bg-img rounded-2xl"
            />
          </div>
          <div>
            <h1 className="font-bold mb-5  "> Reservation System</h1>
            <p className="mb-5">
              I contributed as a freelancer to a  student&apos;s capstone project,
              tasked with addressing <br />
              specific issues and implementing requested features in the event
              reservation system.
              <br />
              My role involved fixing code issues and adding functionalities
              based on the project
              <br />
              requirements. While not the project initiator, this experience
              showcases my ability to <br />
              deliver targeted solutions and provide valuable contributions as a
              freelancer.
            </p>
            <div className="grid grid-cols-4 gap-2">
            <div className="flex w-36 h-11 rounded-lg justify-around p-2   bg-[#182339]">
            <Image src={reactIcon} alt="React" width={50} height={200} />
            <p className="flex items-center justify-center lg:text-base md:text-base sm:text-xs">
              React JS
            </p>
          </div>
          <div className="flex w-36 h-11 rounded-lg justify-around p-2  bg-[#182339]">
          <Image src={cssIcon} alt="React" width={30} height={50} />
          <p className="flex items-center justify-center lg:text-base md:text-base sm:text-xs">
            CSS
          </p>
        </div>
        <div className="flex w-36 h-11 rounded-lg justify-around p-2   bg-[#182339]">
          <Image src={javaIcon} alt="React" width={30} height={50} />
          <p className="flex items-center justify-center lg:text-base md:text-base sm:text-xs">
            Javascript
          </p>
        </div>
        <div className="flex w-36 h-11 rounded-lg justify-around p-2  bg-[#182339]">
        <Image src={phpIcon} alt="React" width={50} height={50} />
        <p className="flex items-center justify-center lg:text-base md:text-base sm:text-xs">
          PHP
        </p>
      </div>
      <div className="flex w-36 h-11 rounded-lg justify-around p-2  bg-[#182339]">
      <Image src={fbIcon} alt="React" width={50} height={50} />
      <p className="flex items-center justify-center lg:text-base md:text-base sm:text-xs">
        Firebase 
      </p>
    </div>
        </div>
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-8 mt-20">
        <div
        className="bg-[#182339] w-1/3 h-72 ml-20"
        style={{
          boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
        }}
      >
          <Image
            src={portProj2}
            alt="Cover Image"
            className="bg-img rounded-2xl mx-auto my-8"
            height={300}
            width={150}
          />
          
        </div>
        <div>
        <h1 className="font-bold mb-5 ">Crime Monitoring System</h1>
        <p>
          Built on React Native and Expo Go, this Crime Monitoring System provides users with a<br/>
          comprehensive set of features. It enables individuals to report crimes, file complaints, and<br/>
          instantly send SOS location alerts to the police. The application leverages the Google Maps API<br/>
           for accurate and efficient navigation, offering real-time directions to reported crime locations. <br/>
           Firebase is employed for data storage, ensuring seamless and secure management of crime<br/> reports and complaints. This mobile app, blending powerful technologies, delivers a user-friendly <br/>
           and responsive platform for effective crime monitoring and quick law enforcement response.
        </p>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Portfolio;
