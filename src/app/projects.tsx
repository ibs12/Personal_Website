import React from 'react';
import htmlImage from '../../assets/html.png';
import insightPoster from '../../assets/InsightPoster.png';



function Projects() {
    return (
        <div className = "bg-black">
            <div className="flex justify-center ">
                <div className = "bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 bg-clip-text text-transparent font-bold text-9xl pb-6 pt-20">Projects</div>
            </div>

            <div className = "grid grid-cols-1 gap-9 p-4 pl-20">  
                {/* First Project Section */}
                <div className = "grid grid-cols-3">
                    <div className=" space-y-4">
                        <h2 className = "Helvetica text-5xl font-semibold tracking-wide text-white ">New Analysis</h2>
                        <p className = "text-neutral-500">______________________________</p>
                        <div className = "text-wrap pr-10">
                            <p className = "Helvetica text-2xl font-semibold tracking-wide text-white "> Trek is a place where nature lovers will be able to gather to plan and share hiking trips.
						Users can engage with two main sections: the "gallery page" and the “hikes page”. The "gallery page" is a
						feed that allows users to post pictures/descriptions relating to hikes they are on/have been on, and other
						users can interact with these posts (like/comment). The “hikes page” is a feed dedicated to posting/planning
						hikes. On this page, posts would include the location where the user is planning to take the hike, a
						description, tags that specify which type of hike is it, and the level of difficulty. Whether you're seeking inspiration from breathtaking photos or organizing your next adventure, Trek provides all the tools to make hiking more social, accessible, and enjoyable for everyone.</p>
                        </div>
                        <div className="flex space-x-2">
                            <i className="fab fa-github"></i>
                            <i className="fab fa-js"></i>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <div className = "row-span-2 col-span-1">
                            <div className = "w-[30vw] h-[60vh] p-2 bg-white bg-no-repeat bg-contain bg-center rounded-[20px] group-hover:scale-110 shadow-lg mt-5" style={{ backgroundImage: `url(${insightPoster.src})` }}></div>
                        </div>
                        <div className = "row-span-2 col-span-1">
                            <div className = "w-[30vw] h-[35vh] p-2 bg-gray-50 rounded-[20px] group-hover:scale-110 shadow-lg mt-5" ></div>
                            <div className = "w-[30vw] h-[35vh] p-2 bg-gray-50 rounded-[20px] group-hover:scale-110 shadow-lg mt-5"></div>
                        </div>

                    </div>
                </div>
                {/* Second Project Section */}
                <div className = "grid grid-cols-3">
                    <div className="space-y-4">
                        <h2 className = "Helvetica text-5xl font-semibold tracking-wide text-white ">Hiking Social Media App</h2>
                        <p className = "text-neutral-500">______________________________</p>
                        <div className = ""></div>
                        <p className = "Helvetica text-3xl font-extralight tracking-wide text-white">Informing the public the truth.</p>
                        <div className="flex space-x-2">
                            <i className="fab fa-github text-white">hello</i>
                            <i className="fab fa-js"></i>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <div className = "row-span-2 col-span-1">
                            <div className = "w-[30vw] h-[60vh] p-2 bg-gray-50 rounded-[20px] group-hover:scale-110 shadow-lg mt-5"></div>
                        </div>
                        <div className = "row-span-2 col-span-1">
                            <div className = "w-[30vw] h-[35vh] p-2 bg-gray-50 rounded-[20px] group-hover:scale-110 shadow-lg mt-5"></div>
                            <div className = "w-[30vw] h-[35vh] p-2 bg-gray-50 rounded-[20px] group-hover:scale-110 shadow-lg mt-5"></div>
                        </div>

                    </div>

                </div>
                <div className = "grid grid-cols-3">
                    <div className="space-y-4">
                        <h2 className = "Helvetica text-5xl font-semibold tracking-wide text-white ">Professor Recommendation</h2>
                        <p className = "text-neutral-500">______________________________</p>
                        <div className = ""></div>
                        <p className = "Helvetica text-3xl font-extralight tracking-wide text-white"></p>
                        <div className="flex space-x-2">
                            <i className="fab fa-github text-white">hello</i>
                            <i className="fab fa-js"></i>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <div className = "row-span-2 col-span-1">
                            <div className = "w-[30vw] h-[60vh] p-2 bg-gray-50 rounded-[20px] group-hover:scale-110 shadow-lg mt-5"></div>
                        </div>
                        <div className = "row-span-2 col-span-1">
                            <div className = "w-[30vw] h-[35vh] p-2 bg-gray-50 rounded-[20px] group-hover:scale-110 shadow-lg mt-5"></div>
                            <div className = "w-[30vw] h-[35vh] p-2 bg-gray-50 rounded-[20px] group-hover:scale-110 shadow-lg mt-5"></div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    );
}

export default Projects;