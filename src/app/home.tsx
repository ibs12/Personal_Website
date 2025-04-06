import React from 'react';
import profileImage from '../../assets/profileImage.png';
import StarField from './starField';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import pythonImage from "../../assets/python.png";
import cssImage from "../../assets/css.png";
import HTMLImage from "../../assets/html.png";
import JSImage from "../../assets/JavaScript.png";
import reactImage from "../../assets/react.png";
import nodeImage from "../../assets/node-js.png";

import dockerImage from "../../assets/docker-mark-blue.png";
import gitImage from "../../assets/git.png";
import mySQLImage from "../../assets/mySQL.png";
import nextJSImage from "../../assets/nextjs-icon-light-background.png";
import pandasImage from "../../assets/pandas_mark.svg";
import tailWindsImage from "../../assets/tailwindcssLogo.svg";

const Home = () => {
  
  return (
    <>
      {/* Starfield Background */}
      <div className="absolute  inset-0 z-0  overflow-hidden">
          <StarField />
      </div>


      {/* Social Media Links */}
      <div id="home" className="relative flex justify-end items-center space-x-4 sm:space-x-8 pt-4 sm:pt-10 pr-4 sm:pr-16 lg:pr-32 overflow-hidden">
        <a href="https://github.com/ibs12" className="flex items-center space-x-3 z-10 relative">
            <FaGithub size={30} className="text-white" />
        </a>
        <a href="https://www.linkedin.com/in/iallahbu/" className="flex items-center space-x-3 z-10 relative">
            <FaLinkedin size={30} className="text-white" />
        </a>
      </div>

      {/* About Section */}
      <div id="about" className="flex flex-col min-h-screen items-center relative overflow-hidden px-4">
        {/* Profile Image and Information */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center w-full">
          <div
            className="h-40 w-40 sm:h-52 sm:w-52 mb-6 sm:mb-10 mt-10 sm:mt-20 hover:scale-110 transition ease-in-out duration-300 bg-no-repeat bg-cover bg-center rounded-full"
            style={{ backgroundImage: `url(${profileImage.src})` }}
          ></div>
          <h1 className="text-3xl sm:text-5xl font-extralight tracking-wide text-white">Ibrahim Allahbuksh</h1>
          <p className="text-2xl font-semibold sm:text-2xl bg-gradient-to-r from-blue-700 via-purple-500 to-pink-600 bg-clip-text text-transparent pt-1">Junior Project Analyst @ Citi</p>

          {/* Descriptions */}
          <p className="w-11/12 sm:w-2/3 lg:w-1/2 mx-auto text-sm sm:text-lg font-semibold tracking-wide text-[#cdcdcd] pt-6 sm:pt-10">
            Data analyst and junior project analyst at Citi’s Treasury department, supporting end-to-end project execution for the Citi Treasury Investments (CTI) group. I work at the intersection of finance and technology—leveraging Python to analyze large datasets, automate data pipelines, and detect data quality issues across critical Treasury operations.          </p>
          <p className="w-11/12 sm:w-2/3 lg:w-1/2 mx-auto text-sm sm:text-lg font-semibold tracking-wide text-[#cdcdcd] pt-6 sm:pt-10">
            My role bridges project management and data engineering: tracking project progress, supporting user acceptance testing (UAT), and driving actionable insights through automation and analytics. With a foundation in software engineering and AI, I specialize in designing scalable, data-driven solutions for complex financial systems.          </p>
        </div>
        <h1 className="md:block pt-8 md:pt-20 md:pb-3 px-4 md:px-20 bg-gradient-to-r from-neutral-200 via-slate-400 to-neutral-600 bg-clip-text text-transparent text-3xl md:text-5xl font-bold font-['Helvetica'] text-center">
        Technologies
        </h1>
        <div className="w-full overflow-hidden">
          <div className="space-y-8 md:space-y-0 md:space-x-5 py-8  min-w-max">
              <div className="flex justify-center items-center flex-wrap">
                <div className="grid grid-cols-12 sm:grid-cols-3 lg:grid-cols-6 lg-xl:grid-cols-4 2xl:grid-cols-12  gap-4 justify-items-center items-center ">
                    {[
                    { name: "Python", image: pythonImage.src },
                    { name: "CSS", image: cssImage.src },
                    { name: "HTML", image: HTMLImage.src },
                    { name: "JavaScript", image: JSImage.src },
                    { name: "React", image: reactImage.src },
                    { name: "Node.js", image: nodeImage.src },
                    { name: "Docker", image: dockerImage.src },
                    { name: "Git", image: gitImage.src },
                    { name: "MySQL", image: mySQLImage.src },
                    { name: "Next.js", image: nextJSImage.src },
                    { name: "Pandas", image: pandasImage.src },
                    { name: "Tailwind", image: tailWindsImage.src },
                    ].map((skill, index) => (
                    <div key={index} className="flex flex-col group items-center transition-transform transform hover:scale-105">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 p-2 bg-black rounded-[20px] mb-3 transition ease-in-out delay-50 duration-300 drop-shadow-md group-hover:animate-gradientPulse shadow-lg group-hover:shadow-2xl group-hover:translate-y-[-5px] border-2 border-gray-300">
                          <div
                          className="w-full h-full bg-no-repeat bg-contain bg-center rounded-[15px] mb-3"
                          style={{ backgroundImage: `url(${skill.image})` }}
                          ></div>
                      </div>
                      <span className="text-lg sm:text-xl font-semibold tracking-wide text-center text-white group-hover:scale-110 transition ease-in-out delay-50 duration-300 drop-shadow-md">
                          {skill.name}
                      </span>
                    </div>
                    ))}
                </div>
                </div>
              </div>
          </div>
      </div>

    </>
  );
}

export default Home;
