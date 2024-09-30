
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
import vscodeImage from "../../assets/vscode.png";



function Highlights() {
   console.log(pythonImage);
   return (
      
      <div className="bg-[#252525]">
         <h1 className = "pt-20 pl-20 text-[#f5f5f7] text-5xl font-bold font-['Helvetica']">Get the highlights.</h1>

         <div className="w-full overflow-x-auto ">
            <div className="flex space-x-5 w-max pl-20 pt-20 pb-20">
               {/* First rectangle */} 
               <div className="w-[88vw] h-[70vh] bg-black rounded-[30px] pl-6 pt-6">
                  <div>
                     <p className="text-white text-4xl font-bold mb-4">Skills</p>
                        <div className="grid grid-cols-4 gap-4 min-h-[55vh] justify-center items-center">
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
                              { name: "VS Code", image: vscodeImage.src },
                           ].map((skill, index) => (

                              <div key={index} className="grid justify-center items-center group transition-transform transform hover:scale-105">
                                 <div className = "w-[6vw] h-[10vh] p-2 bg-white rounded-[20px] mb-3 group-hover:scale-110 group-hover:bg-indigo-500 transition ease-in-out delay-50 duration-300 drop-shadow-md group-hover:animate-gradientPulse shadow-lg group-hover:shadow-2xl group-hover:translate-y-[-5px] border-t-4 border-l-4 border-gray-300 mt-5">
                                    <div className="w-full h-full bg-no-repeat bg-contain bg-center rounded-[15px] mb-3 "
                                       style={{ backgroundImage: `url(${skill.image})` }}></div>
                                    <span className="text-2xl font-semibold tracking-wide text-center text-white group-hover:scale-110 transition ease-in-out delay-50 duration-300 drop-shadow-md  ">
                                       {skill.name}
                                    </span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

               {/* Second rectangle */}
               <div className="w-[88vw] h-[70vh] bg-black rounded-[30px] ml-20 pl-6 pt-6">
                  <div>
                     <p className="text-white text-4xl font-bold mb-4">Projects</p>
                        <div className="grid grid-cols-3 gap-4 min-h-[55vh] justify-center items-center">
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
                                 <div className = "w-[20vw] h-[50vh] p-2 bg-black rounded-[20px] group-hover:scale-110 transition ease-in-out delay-50 duration-300 drop-shadow-md group-hover:animate-gradientPulse shadow-lg group-hover:shadow-2xl group-hover:translate-y-[-5px]   mt-5">
                                 <div className="w-full h-full bg-no-repeat bg-contain bg-center rounded-[15px] "
                                       // style={{ backgroundImage: `url(${project.image})` }}
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
               </div>
               {/* Third rectangle */}
               <div className="w-[88vw] h-[70vh] bg-black rounded-[30px] ml-20 pl-6 pt-6">
               <h2 className=" text-white text-4xl font-bold mb-4">Experience</h2>
               </div>
               {/* Fourth rectangle */}
               <div className="w-[88vw] h-[70vh] bg-black rounded-[30px] ml-20 pl-6 pt-6">
                  <h2 className=" text-white text-4xl font-bold mb-4">Credentials</h2>
               </div>
               {/* Fifth rectangle */}
               <div className="w-[88vw] h-[70vh] bg-black rounded-[30px] ml-20 pl-6 pt-6">
                  <h2 className=" text-white text-4xl font-bold mb-4">About Me</h2>
               </div>
            </div>




         </div>
      </div>



   );
}

export default Highlights;
