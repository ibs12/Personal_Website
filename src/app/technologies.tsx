
import React from 'react';
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




function Technologies() {
   console.log(pythonImage);


  
   return (
      
      <div className="md:bg-[#161617] min-h-screen">
      <h1 className="hidden md:block pt-8 md:pt-20 px-4 md:px-20 text-[#f5f5f7] text-3xl md:text-5xl font-bold font-['Helvetica'] text-center">
        Technologies
      </h1>
      <div className="w-full overflow-x-auto">
         <div className="space-y-8 md:space-y-0 md:space-x-5 py-8 md:py-20 min-w-max">
            <div className="flex justify-center items-center">
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-12 gap-4 justify-evenly ">
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
   );
}

export default Technologies;


         {/* <div className= "flex justify-center items-center pb-5">
               <div className = "flex justify-center items-center space-x-6  w-[10vw] h-[5vh] bg-black rounded-[30px]">
                  <div className = "size-4 bg-white rounded-[30px] cursor-pointer" onClick={() => scrollToSection('section1')}></div>
                  <div className = "size-4 bg-white rounded-[30px] cursor-pointer" onClick={() => scrollToSection('section2')}></div>
                  <div className = "size-4 bg-white rounded-[30px] cursor-pointer" onClick={() => scrollToSection('section3')}></div>
               </div>
         </div> */}                 
         
         {/* Fourth rectangle */}
                  {/* <div className="w-[88vw] h-[70vh] bg-black rounded-[30px] ml-20 pl-6 pt-6">
                     <h2 className=" text-white text-4xl font-bold mb-4">Credentials</h2>
                  </div> */}
                  {/* Fifth rectangle */}
                  {/* <div className="w-[88vw] h-[70vh] bg-black rounded-[30px] ml-20 pl-6 pt-6">
                     <h2 className=" text-white text-4xl font-bold mb-4">About Me</h2>
                  </div> */}

   // function scrollToSection(sectionId: string) {
   //    const targetSection = document.getElementById(sectionId);
   //    if (targetSection) {
   //      targetSection.scrollIntoView({ behavior: 'smooth' });
   //    }
   //  }
    
    

      // const containerRef = useRef<HTMLDivElement | null>(null);
    
      // useEffect(() => {
      //   const container = containerRef.current;
    
      //   if (!container) return;
    
      //   const autoScroll = () => {
      //     container.scrollBy({ left: 2300, behavior: 'smooth' });
      //   };
    
      //   const scrollInterval = setInterval(autoScroll, 3000); // scrolls every 3 seconds
    
      //   return () => clearInterval(scrollInterval); // cleanup on unmount
      // }, []);

                                                {/* <p className='text-xl font-semibold text-neutral-400'>{project.time}</p> */}
                                          // style={{ backgroundImage: `url(${project.image})` }}
                              {/* <div className="col-start-6 row-start-2 justify-self-center	"><FaArrowRight color={"white"}size={60}/></div> */}
                  {/* Second rectangle */}
                  {/* <div className="hidden lg:flex justify-center items-center px-4">
                     <div id="section2" className="w-full h-auto max-w-6xl bg-black rounded-[30px] p-6">
                        <p className="text-white text-2xl md:text-4xl font-bold mb-4">Projects</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {[
                                 { name: "New Analysis", image: pythonImage.src, description:  (
                                    <>
                                    Web app to help users
                                    <span style={{ color: "white" }}> discern the truth in the news</span> by providing
                                    a comprehensive analysis of articles on specific events, enabling users to
                                    make informed decisions.
                                    </>
                                 ),
                              },
                                 { name: "Professor Recommender", image: cssImage.src, description: (
                                    <>
                                    Web application for college students to <span style={{ color: "white" }}>rate professors and receive recommendations based on their learning style</span> as part of a Software Engineering course.
                                    </>
                                 )
                              },

                                 { name: "Hiking Social Media App", image: HTMLImage.src, description: (
                                 <>
                                 Social media app for <span style={{ color: "white" }}>hikers to share experiences and plan trips</span>, enhancing outdoor adventure coordination as part of a Human Computer Interaction Course.
                                 </>
                                 )
                              },
                              ].map((project, index) => (

                                 <div key={index} className="grid justify-center items-center group transition-transform transform hover:scale-105">
                                    <div className = "w-[20vw] h-[50vh] p-2 bg-black rounded-[20px]  transition ease-in-out duration-300 drop-shadow-md group-hover:animate-gradientPulse mt-5">
                                    <div className="w-full h-full bg-no-repeat bg-contain bg-center rounded-[15px] "
                                          >
                                       <span className="text-4xl font-semibold tracking-wide text-white group-hover:scale-110 transition ease-in-out delay-50 duration-300  ">
                                             {project.name}
                                       </span>
                                       <br></br>
                                       <p className='text-neutral-400'>_____________________</p>
                                       <p className='pt-5 text-xl font-semibold text-neutral-400'>{project.description}</p>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                     </div>
                  </div> */}
                  {/* Third rectangle */}
                  {/* <div className="hidden lg:flex justify-center items-center px-4">
                     <div id="section2" className="w-full max-w-6xl bg-black rounded-[30px] p-6">
                        <p className="text-white text-2xl md:text-4xl font-bold mb-4">Projects</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {[
                                 { company: "Extern", image: pythonImage.src,  time: "Jul 2024 - Sep 2024", role: "Beats by Dre Data Analytics Extern", description: "Performed sentiment analysis and exploratory data analysis on consumer reviews using Python, NLP, and data visualization tools to uncover patterns and provide insights for strategic brand building."
                              },
                              { company: "University at Buffalo", image: pythonImage.src, time: "Feb 2022 - Jun 2024", role: "Tech Consultant", description: "Provided IT support by resolving 100+ technical issues weekly, reducing ticket response time by 30%, delivering diagnostics and system services for Windows and Mac, and improving technical documentation."
                              },
                              { company: "Tesla", image: pythonImage.src, time: "Jul 2024 - Sep 2024", role: "Data Annotation Specialist", description: "Trained deep neural networks by labeling images, collaborated with computer vision engineers to optimize the labeling process, and designed a machine learning model with 98% accuracy."
                              },

                              ].map((project, index) => (

                                 <div key={index} className="grid justify-center items-center group transition-transform transform hover:scale-105">
                                    <div className = "w-[20vw] h-[50vh] p-2 bg-black rounded-[20px] transition ease-in-out  duration-300 drop-shadow-md group-hover:animate-gradientPulse ">
                                    <div className="w-full h-full bg-no-repeat bg-contain bg-center rounded-[15px] "
                                          >
                                       <span className="text-4xl font-semibold tracking-wide text-white group-hover:scale-110 transition ease-in-out delay-50 duration-300  ">
                                             {project.role}
                                       </span>
                                       <br></br>
                                       <p className='text-neutral-400'>_____________________</p>
                                       <div className = "flex flex-row justify-between">
                                          <p className='text-xl font-semibold text-neutral-400'>{project.company}</p>
                                       </div>
                                       <p className='text-xl font-semibold text-neutral-400 pt-5'>{project.description}</p>

                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                     </div>
                  </div> */}