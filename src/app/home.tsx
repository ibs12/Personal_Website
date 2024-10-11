
 import React from 'react';

 function Home() {
   return (
    <div>
      <div className="grid grid-cols-1  justify center items-center">
      <nav className="nav hidden lg:block grid-span-1" aria-label="In-page jump links">
        <ul className="mt-16 w-max">
          <li>
            <a className="group flex items-center py-3" href="#about">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
              </span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                About
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3 active" href="#experience">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
              </span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Experience
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3" href="#projects">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
              </span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Projects
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
       <div className="flex h-screen justify-center items-center">
         <div>
           <h1 className ="Helvetica text-5xl font-semibold tracking-wide text-white">Ibrahim Allahbuksh</h1>
           <span className ="Helvetica text-xl tracking-wide text-center text-[#cdcdcd]">Software Engineer</span>
         </div>
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