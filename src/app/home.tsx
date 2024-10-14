import React from 'react';
import profileImage from '../../assets/profileImage.png';
import StarField from './starField';
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Home = () => {
  return (
    <>
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
      <div id="about" className="flex flex-col h-screen items-center relative overflow-hidden px-4">
        {/* Profile Image and Information */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center w-full">
          <div
            className="h-40 w-40 sm:h-52 sm:w-52 mb-6 sm:mb-10 mt-10 sm:mt-20 hover:scale-110 transition ease-in-out duration-300 bg-no-repeat bg-cover bg-center rounded-full"
            style={{ backgroundImage: `url(${profileImage.src})` }}
          ></div>
          <h1 className="text-3xl sm:text-5xl font-extralight tracking-wide text-white">Ibrahim Allahbuksh</h1>
          <p className="text-xl sm:text-2xl bg-gradient-to-r from-blue-700 via-purple-500 to-pink-600 bg-clip-text text-transparent pt-1">Software Engineer</p>

          {/* Descriptions */}
          <p className="w-full sm:w-2/3 lg:w-1/2 mx-auto text-sm sm:text-lg font-semibold tracking-wide text-[#cdcdcd] pt-6 sm:pt-10">
            Software engineer with a passion for building full stack applications that solve real-world problems. With experience across both front-end and back-end development, I bring expertise in technologies like React, Node.js, Python, and PostgreSQL.
          </p>
          <p className="w-full sm:w-2/3 lg:w-1/2 mx-auto text-sm sm:text-lg font-semibold tracking-wide text-[#cdcdcd] pt-6 sm:pt-10">
            My work spans from developing web apps to leveraging data for insightful analytics, with a focus on clean, scalable solutions. I thrive in collaborative environments and am always eager to learn and contribute to innovative projects. Let’s connect and explore how I can bring value to your team!
          </p>
        </div>
      </div>

    </>
  );
}

export default Home;
