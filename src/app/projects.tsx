import React from 'react';
import insightPoster from '../../assets/InsightPoster.png';
import hikeLogin from '../../assets/HikeLogin.png';
import hikeGallery from '../../assets/HikeGallery.png';
import newsMarket from '../../assets/Market.png';
import newsSearch from '../../assets/NewsSearchResult.png';
import newsHome from '../../assets/NewsHome.png';
import trekPoster from '../../assets/TrekPoster.png';
import recommendedProfessors from '../../assets/RecommendedProfessors.gif';
import rateProfessorStats from '../../assets/rateProfessorStats.gif';

import { FaGithub } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";



function Projects() {
    return (
<div id="projects" className="bg-black">
    <div className="flex justify-center">
        <div className="bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 bg-clip-text text-transparent font-bold text-7xl md:text-9xl pb-10 pt-10">
            Projects
        </div>
    </div>

    <div className="grid grid-cols-1 gap-6 p-4 sm:px-10 md:px-20">
        {/* First Project Section */}
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="space-y-4">
                <h2 className="Helvetica text-xl md:text-5xl font-semibold tracking-wide text-white  ">
                    Professor Recommender App
                </h2>
                <p className="text-neutral-500">______________________________</p>
                <div className="text-wrap pr-10">
                    <ul className="list-disc Helvetica text-lg md:text-xl font-semibold tracking-wide text-white space-y-5 pl-4 md:pl-0">
                        <li>Used agile methodology to create a web application for college students to rate professors and receive recommendations based on their learning styles as part of a Software Engineering course.</li>
                        <li>Professor teaching styles are updated in MySQL database in real time as more reviews of a professor are given.</li>
                        <li>Wrote documentation such as acceptance tests, task tests, react.js guide in detail</li>
                    </ul>
                </div>
                <div className="flex flex-wrap space-x-2">
                    <div className="flex justify-center items-center h-7 w-auto px-2 rounded-[8px] bg-gradient-to-r from-blue-700 via-sky-400 to-red-600 text-center font-semibold text-black">
                        <p>React</p>
                    </div>
                    <div className="flex justify-center items-center h-7 w-auto px-2 rounded-[8px] bg-gradient-to-r from-blue-700 via-sky-400 to-red-600 text-center font-semibold text-black">
                        <p>JavaScript</p>
                    </div>
                    <div className="flex justify-center items-center h-7 w-auto px-2 rounded-[8px] bg-gradient-to-r from-blue-700 via-sky-400 to-red-600 text-center font-semibold text-black">
                        <p>MySQL</p>
                    </div>
                    <div className="flex justify-center items-center h-7 w-auto px-2 rounded-[8px] bg-gradient-to-r from-blue-700 via-sky-400 to-red-600 text-center font-semibold text-black">
                        <p>PHP</p>
                    </div>
                </div>
                <div className="flex flex-wrap space-x-2 md:pl-1 pb-4">
                    <a href="https://github.com/ibs12/rate-professors-app" className="flex items-center space-x-2 pl-1">
                        <div className="rounded-[30px] bg-gradient-to-r from-blue-700 via-sky-400 to-red-600">
                            <FaGithub size={40} color={"black"} />
                        </div>
                        <p className="text-white font-semibold content-center pr-3">Github</p>
                    </a>

                    <div className="rounded-[10px] bg-gradient-to-r from-blue-700 via-sky-400 to-red-600">
                        <FaTrello size={40} color={"black"}/>
                    </div>
                    <p className="text-white font-semibold content-center">Trello</p>
                </div>
            </div>
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="row-span-2 col-span-1">
                    <div className="w-full h-[40vh] md:h-[60vh] hover:scale-110 drop-shadow-md transition ease-in-out delay-20 duration-300 hover:shadow-2xl bg-white bg-no-repeat bg-contain bg-center rounded-[20px]" style={{ backgroundImage: `url(${insightPoster.src})` }}></div>
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                    <div className="w-full h-[30vh]  transition ease-in-out delay-20 duration-300 bg-no-repeat bg-cover bg-center rounded-[20px]" style={{ backgroundImage: `url(${rateProfessorStats.src})` }}></div>
                    <div className="w-full h-[30vh]  transition ease-in-out delay-20 duration-300 bg-no-repeat bg-cover bg-center rounded-[20px]" style={{ backgroundImage: `url(${recommendedProfessors.src})` }}></div>
                </div>
            </div>
        </div>


                {/* Second Project Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-4">
                        <h2 className="Helvetica text-3xl md:text-5xl font-semibold tracking-wide text-white">Trek</h2>
                        <p className="text-neutral-500">______________________________</p>
                        <div className="text-wrap pr-10">
                            <p className="Helvetica text-lg md:text-xl font-semibold tracking-wide text-white">
                                Trek is a place where nature lovers will be able to gather to plan and share hiking trips.
                                Users can engage with two main sections: the &quot;gallery page&quot; and the &quot;hikes page&quot;.
                                The &quot;gallery page&quot; is a feed that allows users to post pictures/descriptions relating to hikes they are on/have been on,
                                and other users can interact with these posts (like/comment). The &quot;hikes page&quot; is a feed dedicated to posting/planning
                                hikes. On this page, posts would include the location where the user is planning to take the hike,
                                a description, tags that specify which type of hike it is, and the level of difficulty.
                                Whether You&apos;re seeking inspiration from breathtaking photos or organizing your next adventure,
                                Trek provides all the tools to make hiking more social, accessible, and enjoyable for everyone.
                            </p>
                        </div>
                        <div className="flex flex-wrap space-x-2">
                            {["React", "JavaScript", "Swagger"].map((tech) => (
                                <div key={tech} className="flex justify-center items-center h-7 w-auto px-2 rounded-[8px] bg-gradient-to-r from-orange-300 via-yellow-300-500 to-red-500 text-center font-semibold text-black">
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap space-x-2 pl-1">
                            <a href="https://github.com/ibs12/Hiking-Social-Media-App" className="flex space-x-2 pl-1">
                                <div className="rounded-[30px] bg-gradient-to-r from-orange-300 via-yellow-300-500 to-red-500">
                                    <FaGithub size={40} color={"black"} />
                                </div>
                                <p className="text-white font-semibold content-center pr-3">Github</p>
                            </a>
                            <a href="https://github.com/ibs12/Hiking-Social-Media-App" className="flex space-x-2 pl-1">
                                <div className="rounded-[10px] bg-gradient-to-r from-orange-300 via-yellow-300-500 to-red-500">
                                    <FaTrello size={40} color={"black"} />
                                </div>
                                <p className="text-white font-semibold content-center">Trello</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className=" col-span-1">
                            <div className="w-full h-[40vh] md:h-[60vh] hover:scale-110 drop-shadow-md transition ease-in-out delay-20 duration-300 hover:shadow-2xl bg-[#405644] bg-no-repeat bg-contain bg-center rounded-[20px]" style={{ backgroundImage: `url(${trekPoster.src})` }}></div>
                        </div>
                        <div className=" col-span-1 flex flex-col space-y-5">
                            <div className="w-full h-[30vh] hover:scale-110 transition ease-in-out delay-20 duration-300 bg-[#405644] bg-no-repeat bg-cover bg-center rounded-[20px]" style={{ backgroundImage: `url(${hikeLogin.src})` }}></div>
                            <div className="w-full h-[30vh] hover:scale-110 transition ease-in-out delay-20 duration-300 bg-[#405644] bg-no-repeat bg-contain bg-center rounded-[20px]" style={{ backgroundImage: `url(${hikeGallery.src})` }}></div>
                        </div>
                    </div>
                </div>

                {/* Third Project Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                        <h2 className="Helvetica text-3xl md:text-5xl font-semibold tracking-wide text-white">News Analysis</h2>
                        <p className="text-neutral-500">______________________________</p>
                        <div className="text-wrap pr-10">
                        <ul className="list-disc Helvetica text-lg md:text-xl font-semibold tracking-wide text-white space-y-5 pl-4 md:pl-0">
                            <li>Engineered a project to help users discern the truth in the news by providing a comprehensive analysis of articles on specific events.</li>
                            <li>Utilized NLP to detect biases, summarize content, analyze sentiment to present diverse perspectives, enabling users to make informed decisions.</li>
                            <li>Used News API to obtain the latest news articles, Cheerio to scrape new articles, and BERT for sentiment analysis</li>
                        </ul>
                        </div>
                        <div className="flex flex-wrap space-x-2">
                            <div className="flex justify-center items-center h-7 w-auto px-2 rounded-[8px] bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 text-center font-semibold text-black">
                                <p>React</p>
                            </div>
                            <div className="flex justify-center items-center h-7 w-auto px-2 rounded-[8px] bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 text-center font-semibold text-black">
                                <p>JavaScript</p>
                            </div>
                            <div className="flex justify-center items-center h-7 w-auto px-2 rounded-[8px] bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 text-center font-semibold text-black">
                                <p>Python</p>
                            </div>
                            <div className="flex justify-center items-center h-7 w-auto px-2 rounded-[8px] bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 text-center font-semibold text-black">
                                <p>PostgreSQL</p>
                            </div>
                            <div className="flex justify-center items-center h-7 w-auto px-2 rounded-[8px] bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 text-center font-semibold text-black mt-2 md:mt-0">
                                <p>Flask</p>
                            </div>
                        </div>


                        <a href="https://github.com/ibs12/News-Analysis" className="flex space-x-2 pl-1">
                            <div className="rounded-[30px] bg-gradient-to-r from-blue-700 via-purple-500 to-red-500">
                                <FaGithub size={40} color={"black"}/>
                            </div>
                            <p className="text-white font-semibold content-center">Github</p>
                        </a>
                    </div>

                    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="row-span-2 col-span-1">
                            <div className="w-full h-[40vh] md:h-[60vh] hover:scale-110 drop-shadow-md transition ease-in-out delay-20 duration-300 hover:shadow-2xl bg-white bg-no-repeat bg-cover bg-center rounded-[20px]" style={{ backgroundImage: `url(${newsHome.src})` }}></div>
                        </div>
                        <div className=" col-span-1 flex flex-col gap-4">
                            <div className="w-full h-[30vh] hover:scale-110 transition ease-in-out delay-20 duration-300  bg-no-repeat bg-cover bg-center rounded-[20px]" style={{ backgroundImage: `url(${newsMarket.src})` }}></div>
                            <div className="w-full h-[30vh] hover:scale-110 transition ease-in-out delay-20 duration-300  bg-no-repeat bg-cover bg-center rounded-[20px]" style={{ backgroundImage: `url(${newsSearch.src})` }}></div>
                        </div>
                    </div>
                </div>

                {/* Second Project Section */}

                {/* Third Project Section */}


            </div>
        </div>

    );
}

export default Projects;