"use client";

import React, { useState } from "react";
import reactIcon from "../../public/react.svg";
import nxtIcon from "../../public/nextjs.png";
import htmlIcon from "../../public/html.png";
import cssIcon from "../../public/css.png";
import jscriptIcon from "../../public/javascript.png";
import twIcon from "../../public/tailwind.png";
import sqlIcon from "../../public/mysql.png";
import phpIcon from "../../public/PHP.png";
import fbIcon from "../../public/firebase.png";
import mapsIcon from "../../public/maps.png";
import figmsIcon from "../../public/Figma.png";
import psIcon from "../../public/psIcon.png";
import illIcon from "../../public/illIcon.png";
import Image from "next/image";
import reactLogo from "../../public/reactLogo.png";
import nextLogo from "../../public/nextLogo.png";
import htmlLogo from "../../public/htmlLogo.png";
import cssLogo from "../../public/cssLogo.png";
import javaLogo from "../../public/javaLogo.png";
import tailLogo from "../../public/tailLogo.png";
import sqlLogo from "../../public/sqlLogo.png";
import phpLogo from "../../public/phpLogo.png";
import fbLogo from "../../public/fbLogo.png";
import mapLogo from "../../public/mapLogo.png";
import nativeLogo from "../../public/reactLogo.png";
import figmaLogo from "../../public/figmaLogo.png";
import psLogo from "../../public/psLogo.png";
import illuLogo from "../../public/illuLogo.png";

const Skills = () => {
  const [hoveredImage, setHoveredImage] = React.useState(null);
  const [clickedDiv, setClickedDiv] = useState(null);
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleDivClick = (image) => {
    setClickedDiv((prevClickedDiv) =>
      prevClickedDiv === image ? prevClickedDiv : image
    );
  };

  return (
    <section
      className="h-full flex items-center justify-center "
      style={{ position: "relative" }}
    >
      <div className=" h-full md:h-full sm:h-full flex flex-col mt-20 relative z-10 ">
        <div className="flex-col   ">
          <h1 className=" text-[#BD3227] text-4xl font-bold  text-center mb-4">
            My skills
          </h1>
          <p className="text-center mx-10">
            Explore my portfolio showcasing skills in front-end and back-end<br />
            development, database management, version control, and designing.<br />
            Ready to contribute creativity and expertise to your projects!
          </p>
          <div className="flex flex-col bg-[#182339] lg:h-auto  lg:w-auto md:w-4/5 md:mx-auto sm:w-80 sm:mx-auto drop-shadow-2xl mx-10 mt-10 overflow-hidden "   style={{
            boxShadow: "14px 13px 11px -1px rgba(0,0,0,0.75)",
          }}>
            <p className="text-base pt-6 px-10 ">Framework</p>
            <div className="flex flex-row mt-2  mx-10 mr-10 z-10 ">
              <div
                className={`flex w-44 h-10 rounded-lg justify-around p-1 z-10 overflow-hidden ${
                  clickedDiv === "react" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(reactLogo);
                  setHoveredDiv("react");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("react")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "react" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="React JS Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image src={reactIcon} alt="React" width={50} height={200} />
                <p className="flex items-center justify-center lg:text-base md:text-base sm:text-xs">
                  React JS
                </p>
              </div>
              <div
                className={`flex w-44 h-10 rounded-lg justify-around p-1 ml-5 z-20 overflow-hidden ${
                  clickedDiv === "next" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(nextLogo);
                  setHoveredDiv("next");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("next")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "next" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="Next JS Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image src={nxtIcon} alt="Next logo" width={40} height={40} />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs"
                >
                  Next JS
                </p>
              </div>
            </div>
            <p className="text-base pt-4 px-10 ">Front End</p>
            <div className="lg:flex lg:flex-row mt-2 md:flex md:flex-row  lg:mx-10  sm:mx-auto md:ml-10 sm:ml-10 sm:mr-10 md:mr-10 sm:grid sm:grid-cols-2 sm:gap-y-4 ">
              <div
                className={`flex  lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around p-1   z-10 overflow-hidden ${
                    clickedDiv === "html" ? "bg-[#06A0B0]" : "bg-[#111827]"
                  }`}
                onMouseEnter={() => {
                  setHoveredImage(htmlLogo);
                  setHoveredDiv("html");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("html")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "html" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="HTML Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden mix-blend-hard-light opacity-15"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image src={htmlIcon} alt="HTML logo" width={48} height={45} />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs"
                >
                  HTML
                </p>
              </div>
              <div
                className={`flex  lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around p-2 lg:ml-5 md:ml-5 sm:ml-2  z-10 overflow-hidden ${
                  clickedDiv === "css" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(cssLogo);
                  setHoveredDiv("css");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("css")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor: hoveredDiv === "css" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="CSS Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden mix-blend-hard-light opacity-25 "
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image src={cssIcon} alt="CSS logo" width={30} height={50} />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs"
                >
                  CSS
                </p>
              </div>
              <div
                className={`flex  lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around p-2 lg:ml-5 md:ml-5  z-10 overflow-hidden ${
                  clickedDiv === "javascript" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(javaLogo);
                  setHoveredDiv("javascript");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("javascript")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "javascript" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="JavaScript Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden mix-blend-hard-light"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image
                  src={jscriptIcon}
                  alt="JavaScript logo"
                  width={30}
                  height={50}
                />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs"
                >
                  JavaScript
                </p>
              </div>
              <div
                className={`flex  lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around p-2 lg:ml-5 md:ml-5 sm:ml-2 z-10 overflow-hidden ${
                  clickedDiv === "tailwind" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(tailLogo);
                  setHoveredDiv("tailwind");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("tailwind")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "tailwind" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="Tailwind Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden mix-blend-hard-light"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image
                  src={twIcon}
                  alt="Tailwind logo"
                  width={30}
                  height={50}
                />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs"
                >
                  Tailwind
                </p>
              </div>
            </div>
            <p className="text-base pt-4 px-10">
              Back End & Third Party Services
            </p>
            <div className="lg:flex lg:flex-row mt-2 md:flex md:flex-row  lg:mx-10  sm:mx-auto md:ml-10 sm:ml-10 sm:mr-10 md:mr-10 sm:grid sm:grid-cols-2 sm:gap-y-4 ">
              <div
                className={`flex lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around  z-10 overflow-hidden ${
                  clickedDiv === "mysql" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(sqlLogo);
                  setHoveredDiv("mysql");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("mysql")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "mysql" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="MySQL Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden mix-blend-hard-light"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image src={sqlIcon} alt="MySQL logo" width={50} height={200} />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs"
                >
                  MySQL
                </p>
              </div>
              <div
                className={`flex  lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around p-2 lg:ml-5 md:ml-5 sm:ml-2  z-10 overflow-hidden ${
                  clickedDiv === "php" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(phpLogo);
                  setHoveredDiv("php");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("php")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor: hoveredDiv === "php" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="PHP Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden mix-blend-hard-light"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image src={phpIcon} alt="PHP logo" width={50} height={80} />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs"
                >
                  PHP
                </p>
              </div>
              <div
                className={`flex  lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around p-2 lg:ml-5 md:ml-5  z-10 overflow-hidden ${
                    clickedDiv === "firebase" ? "bg-[#06A0B0]" : "bg-[#111827]"
                  }`}
                onMouseEnter={() => {
                  setHoveredImage(fbLogo);
                  setHoveredDiv("firebase");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("firebase")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "firebase" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="Firebase Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden mix-blend-hard-light"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image
                  src={fbIcon}
                  alt="Firebase logo"
                  width={30}
                  height={50}
                />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs"
                >
                  Firebase
                </p>
              </div>
              <div
                className={`flex  lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around p-2 lg:ml-5 md:ml-5 sm:ml-2  z-20 overflow-hidden ${
                  clickedDiv === "maps" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(mapLogo);
                  setHoveredDiv("maps");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("maps")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "maps" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="Google Maps Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden mix-blend-hard-light"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image
                  src={mapsIcon}
                  alt="Google Maps logo"
                  width={30}
                  height={90}
                />
                <p className="flex items-center justify-center lg:text-base sm:text-xs">
                  Google Maps API
                </p>
              </div>
            </div>
            <p className="text-base pt-4 px-10">Mobile Development</p>
            <div className="lg:flex lg:flex-row mt-2 md:flex md:flex-row  lg:mx-10  sm:mx-auto md:ml-10 sm:ml-10 sm:mr-10 md:mr-10 sm:grid sm:grid-cols-2 sm:gap-y-4">
              <div
                className={`flex  lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around p-2   z-10 overflow-hidden ${
                  clickedDiv === "reactNative" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(nativeLogo);
                  setHoveredDiv("reactNative");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("reactNative")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "reactNative" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="React Native Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image
                  src={reactIcon}
                  alt="React Native"
                  width={50}
                  height={200}
                />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs"
                >
                  React Native
                </p>
              </div>
            </div>
            <p className="text-base pt-4 px-10">Others</p>
            <div className="lg:flex lg:flex-row mt-2 md:flex md:flex-row  lg:mx-10  sm:mx-auto md:ml-10 sm:ml-10 sm:mr-10 md:mr-10 sm:grid sm:grid-cols-2 sm:gap-y-4">
              <div
                className={`flex lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around p-1 z-20 overflow-hidden ${
                  clickedDiv === "figma" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(figmaLogo);
                  setHoveredDiv("figma");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("figma")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "figma" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="Figma Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden mix-blend-hard-light"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image src={figmsIcon} alt="Figma" width={40} height={50} />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs"
                >
                  Figma
                </p>
              </div>
              <div
                className={`flex  lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around p-2 lg:ml-5 md:ml-5 sm:ml-2  z-30 overflow-hidden ${
                  clickedDiv === "photoshop" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(psLogo);
                  setHoveredDiv("photoshop");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("photoshop")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "photoshop" ? "#06A0B0" : "#111827",
                }}
              >
                {hoveredImage && (
                  <Image
                    src={hoveredImage}
                    alt="Photoshop Hovered"
                    width={250}
                    height={250}
                    className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden mix-blend-hard-light"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <Image src={psIcon} alt="Photoshop" width={30} height={50} />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs"
                >
                  Photoshop
                </p>
              </div>
              <div
                className={`flex mb-5 lg:w-44 lg:h-10 md:w-36 md:h-10 sm:w-[110px] sm:h-10 rounded-lg justify-around p-1 first-line:lg:ml-5 md:ml-5 z-30 overflow-hidden ${
                  clickedDiv === "illustrator" ? "bg-[#06A0B0]" : "bg-[#111827]"
                }`}
                onMouseEnter={() => {
                  setHoveredImage(illuLogo);
                  setHoveredDiv("illustrator");
                }}
                onMouseLeave={() => {
                  setHoveredImage(null);
                  setHoveredDiv(null);
                }}
                onClick={() => handleDivClick("illustrator")}
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredDiv === "illustrator" ? "#06A0B0" : "#111827",
                }}
              >
                <div className="blend-mode-container">
                  {hoveredImage && (
                    <Image
                      src={hoveredImage}
                      alt="Illustrator Hovered"
                      width={250}
                      height={250}
                      className="absolute -bottom-10 -right-8 z-1 lg:block md:block sm:hidden opacity-20"
                      style={{
                        objectFit: "cover",
                        mixBlendMode: "hard-light",
                      }}
                    />
                  )}
                </div>
                <Image src={illIcon} alt="Illustrator" width={30} height={50} />
                <p
                  className="flex items-center justify-center lg:text-base md:text-base sm:text-xs
"
                >
                  Illustrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
