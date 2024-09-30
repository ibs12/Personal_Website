
 import Image from "next/image";
 import styles from './styles.module.css';
 import React from 'react';

 function Home() {
   return (
       <div className="flex h-screen justify-center items-center">
         <div>
           <h1 className ="Helvetica text-5xl font-semibold tracking-wide text-white">Ibrahim Allahbuksh</h1>
           <span className ="Helvetica text-xl tracking-wide text-center text-[#cdcdcd]">Software Engineer</span>
         </div>
       </div>

   );
 }
export default Home;

/*
Glow

    
  <div className="flex h-screen justify-center items-center bg-black">

    <div className="absolute inset-0 border animate-gradientPulse"></div>


    <div className="relative z-10 text-center">
      <h1 className="Helvetica text-5xl font-semibold tracking-wide text-white">
        Ibrahim Allahbuksh
      </h1>
      <span className="Helvetica text-xl tracking-wide text-[#cdcdcd]">
        Software Engineer
      </span>
    </div>
  </div>

*/