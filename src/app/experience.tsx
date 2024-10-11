import React from 'react';
import externLogo from "../../assets/externhq_logo.jpeg";
import UBLogo from "../../assets/UBLogo.png";
import TeslaLogo from "../../assets/TeslaLogo.png";


function Experience() {
    return (
        <div className = "bg-black">
            <div className="flex justify-center ">
                <div className = "bg-gradient-to-r from-orange-300 via-yellow-300-500 to-red-500 bg-clip-text text-transparent font-bold text-9xl pb-6 pt-20">Experience</div>
            </div>

            
            <div className="grid grid-cols-1 gap-4">
                <div className = "col-span-1 border-l-2 border-gray-600 ml-10">
                    {/* Extern Experience */}
                        <div className="grid grid-cols-1 grid-rows-1 gap-4 mt-10">
                        <div className="row-span-1">
                                <div className= "flex flex-row ">
                                    <div className = "size-24 p-2 bg-gray-50 rounded-[20px] group-hover:scale-110 shadow-lg mt-5 bg-no-repeat bg-contain bg-center ml-5 " style={{ backgroundImage: `url(${externLogo.src})` }}>
                                    </div>
                                    <div className = "flex-col content-center">
                                        <h2 className = "Helvetica text-2xl font-semibold tracking-wide text-white ml-5">Beats by Dre Consumer Insights Data Analytics Extern</h2>
                                        <p className = "Helvetica text-2xl font-extralight tracking-wide text-neutral-500 ml-5">Extern</p>
                                    </div>
                                </div>
                                <p className = "text-neutral-500 ml-5">___________</p>
                                <p className = "Helvetica text-2xl font-extralight tracking-wide text-neutral-500 ml-5">Feb 2022 - Jun 2024</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 grid-rows-1 gap-4">
                            <div className="flex justify-center items-center row-span-1 col-span-3">
                                <div className= "pt-11 ">
                                    <h2 className = "Helvetica text-xl font-semibold subpixel-antialiased tracking-wide  text-gray-400 ml-5 mt-7">
                                    <>
                                     Developed proficiency in Python and various data science libraries to perform comprehensive <span style={{ color: "white" }}> sentiment analysis on
                                   consumer reviews</span>.
                                    </>
                                    </h2>
                                    <h2 className = " Helvetica text-xl font-semibold tracking-wide text-wrap text-gray-400 ml-5 mt-7">
                                    <>
                                    Developed proficiency in <span style={{ color: "white" }}> data visualization </span> tools to present insights that may inform <span style={{ color: "white" }}>strategic brand building</span>.
                                    </>
                                    </h2>
                                    <h2 className = "Helvetica text-xl  font-semibold tracking-wide text-gray-400 ml-5 mt-7">
                                    Applied exploratory data analysis <span style={{ color: "white" }}> (EDA) </span>techniques to <span style={{ color: "white" }}>uncover underlying patterns and trends in large datasets</span>.
                                    </h2>
                                    <h2 className = "Helvetica text-xl font-semibold tracking-wide text-gray-400 ml-5 mt-7">
                                    Utilized <span style={{ color: "white" }}>advanced natural language processing </span> tools to interpret and summarize customer feedback.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* IT Experience */}
                        <span style={{ color: "white" }}> </span>
                        <div className="grid grid-cols-1 grid-rows-1 gap-4 mt-10">
                            <div className="row-span-1">
                                <div className= "flex flex-row ">
                                    <div className = "size-24 p-2 bg-gray-50 rounded-[20px] group-hover:scale-110 shadow-lg mt-5 bg-no-repeat bg-contain bg-center ml-5 " style={{ backgroundImage: `url(${UBLogo.src})` }}>
                                    </div>
                                    <div className = "flex-col content-center">
                                        <h2 className = "Helvetica  text-3xl font-semibold tracking-wide text-white ml-5">IT Consultant</h2>
                                        <p className = "Helvetica text-2xl font-extralight tracking-wide text-neutral-500 ml-5">University at Buffalo</p>
                                    </div>
                                </div>
                                
                                <p className = "text-neutral-500 ml-5">___________</p>
                                <p className = "Helvetica text-2xl font-extralight tracking-wide text-neutral-500 ml-5">Feb 2022 - Jun 2024</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 grid-rows-1">
                            <div className="flex justify-center items-center row-span-1 col-span-3 ">
                                <div className= "pt-11 ">
                                    <h2 className = "Helvetica text-xl font-semibold tracking-wide text-pretty text-gray-400 ml-5 mt-7">
                                    <>
                                    <span style={{ color: "white" }}>Resolved 100+ technical issues</span> weekly, including software, and networking problems <span style={{ color: "white" }}>for clients</span>, ensuring swift and
                                    effective support.
                                    </>
                                    </h2>
                                    <h2 className = " Helvetica text-xl font-semibold tracking-wide text-pretty text-gray-400 ml-5 mt-7">
                                    <>
                                    Delivered a range of <span style={{ color: "white" }}>IT services</span> such as diagnostics, malware removal, system resets, and reinstallation in both 
                                    <span style={{ color: "white" }}> Windows and Mac environments</span>.
                                    </>
                                    </h2>
                                    <h2 className = "Helvetica text-xl font-semibold tracking-wide text-pretty text-gray-400 ml-5 mt-7">
                                    Streamlined issue resolution through Remedy Force, <span style={{ color: "white" }}>reducing average ticket response time by 30%</span> for students, faculty,
                                    and staff.
                                    </h2>
                                    <h2 className = "Helvetica text-xl font-semibold tracking-wide text-pretty text-gray-400 ml-5 mt-7">
                                    Created and improved <span style={{ color: "white" }}>technical documentation</span> to enhance the efficiency of support procedures.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* Tesla Experience */}
                        <div className="grid grid-cols-1 grid-rows-1 gap-4 mt-10">
                            <div className="row-span-1">
                                <div className= "flex flex-row ">
                                    <div className = "size-24 p-2 bg-gray-50 rounded-[20px] group-hover:scale-110 shadow-lg mt-5 bg-no-repeat bg-contain bg-center ml-5 " style={{ backgroundImage: `url(${TeslaLogo.src})` }}>
                                    </div>
                                    <div className = "flex-col content-center">
                                        <h2 className = "Helvetica  text-3xl font-semibold tracking-wide text-white ml-5">Data Annotation Specialist</h2>
                                        <p className = "Helvetica text-2xl font-extralight tracking-wide text-neutral-500 ml-5">Tesla</p>
                                    </div>
                                </div>
                                
                                <p className = "text-neutral-500 ml-5">___________</p>
                                <p className = "Helvetica text-2xl font-extralight tracking-wide text-neutral-500 ml-5">Jul 2022 - Aug 2022</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 grid-rows-1 gap-4">
                            <div className="flex justify-center items-center row-span-1 col-span-3">
                                <div className= "pt-11 ">
                                    <h2 className = "Helvetica text-xl font-semibold tracking-wide text-pretty text-gray-400 ml-5 mt-7">
                                    <>
                                    Utilized an autopilot labeling interface to <span style={{ color: "white" }}>train deep neural networks</span>  by accurately labeling hundreds of images
                                    </>
                                    </h2>
                                    <h2 className = "Helvetica text-xl font-semibold tracking-wide text-pretty text-gray-400 ml-5 mt-7">
                                    <>
                                    Coordinated with <span style={{ color: "white" }}>computer vision engineers</span> to optimize labeling efficiency by <span style={{ color: "white" }}>contributing feedback on interface
                                    design to 2 supervisors</span>.
                                    </>
                                    </h2>
                                    <h2 className = "Helvetica text-xl font-semibold tracking-wide text-pretty text-gray-400 ml-5 mt-7">
                                    Enhanced understanding of how labels are used by learning algorithms, was able to design a <span style={{ color: "white" }}>98% accurate machine learning model</span>
                                    </h2>
                                </div>
                            </div>
                        </div>


                </div>

            </div>


        </div>

    );
}

export default Experience;