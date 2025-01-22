import React from 'react';
import Image from 'next/image';

import externLogo from "../../assets/externhq_logo.jpeg";
import UBLogo from "../../assets/UBLogo.png";
import TeslaLogo from "../../assets/TeslaLogo.png";


interface Experience {
    company: string;
    role: string;
    logoUrl: string;
    period: string;
    responsibilities: JSX.Element[];
}

function Experience() {
    const experiences = [
        {
            company: "Extern",
            role: "Beats by Dre Consumer Insights Data Analytics Extern",
            logoUrl: externLogo,
            period: "Jul 2024 - Sep 2024",
            responsibilities: [
                <>Developed proficiency in <span className = "text-white">Python</span> and various <span className = "text-white">data science</span> libraries to perform <span className = "text-white">sentiment analysis</span> on <span className = "text-white">1500+ consumer reviews</span> and <span className = "text-white">17 competitor products</span>.</>,
                <>Applied <span className = "text-white">exploratory data analysis (EDA)</span> techniques to <span className = "text-white">uncover 6 underlying patterns</span> and trends in <span className = "text-white">large datasets</span>.</>,
                <>Utilized advanced <span className = "text-white">natural language processing</span> tools to interpret and summarize 1500+ consumer reviews.</>,
                <>Utilized <span className="text-white">advanced natural language processing</span> tools to interpret and summarize customer feedback.</>
            ]
        },
        {
            company: "University at Buffalo",
            role: "IT Consultant",
            logoUrl: UBLogo,
            period: "Feb 2022 - Jun 2024",
            responsibilities: [
                <><span className="text-white">Resolved 100+ technical issues</span> weekly, including software, and networking problems <span className="text-white">for clients</span>, ensuring swift and effective support.</>,
                <>Delivered a range of <span className="text-white">IT services</span> such as diagnostics, malware removal, system resets, and reinstallation in both <span className="text-white">Windows and Mac environments</span>.</>,
                <>Streamlined issue resolution through Remedy Force, <span className="text-white">reducing average ticket response time by 30%</span> for students, faculty, and staff.</>,
                <>Created and improved <span className="text-white">technical documentation</span> to enhance the efficiency of support procedures.</>
            ]
        },
        {
            company: "Tesla",
            role: "Data Annotation Specialist",
            logoUrl: TeslaLogo,
            period: "Jul 2022 - Aug 2022",
            responsibilities: [
                <>Utilized an autopilot labeling interface to <span className="text-white">train deep neural networks</span> by accurately labeling hundreds of images</>,
                <>Coordinated with <span className="text-white">computer vision engineers</span> to optimize labeling efficiency by <span className="text-white">contributing feedback on interface design to 2 supervisors</span>.</>,
                <>Enhanced understanding of how labels are used by learning algorithms, was able to design a <span className="text-white">98% accurate machine learning model</span></>
            ]
        }
    ];

    return (
    <div id="experience" className="bg-black min-h-screen px-4 py-12 md:px-8 lg:px-16">
        <div className="flex justify-center ">
            <div className = "bg-gradient-to-r from-orange-300 via-yellow-300-500 to-red-500 bg-clip-text text-transparent font-bold text-9xl pb-6 pt-10">Experience</div>
        </div>
    
    <div className="max-w-6xl mx-auto pt-10">
        {experiences.map((exp, index) => (
            <div key={index} className="mb-16 border-l-2 border-gray-600 pl-8">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    <Image
                        src={exp.logoUrl}
                        alt={`${exp.company} logo`}
                        className="w-16 h-16 md:w-24 md:h-24 bg-gray-50 rounded-[20px] shadow-lg mb-4 md:mb-0 mr-0 md:mr-5 object-contain"
                        width={96}
                        height={96}
                    />
                    <div className="md:mr-5">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">{exp.role}</h2>
                        <p className="text-lg md:text-xl font-light text-neutral-500">{exp.company}</p>
                        <p className="text-lg md:text-xl font-light text-neutral-500 mt-2">{exp.period}</p>
                    </div>
                </div>
                <div className="mt-6">
                    {exp.responsibilities.map((resp, idx) => (
                        <p key={idx} className="text-base md:text-lg font-semibold text-gray-400 mb-4">
                            {resp}
                        </p>
                    ))}
                </div>
            </div>
        ))}
    </div>
</div>

    );
}

export default Experience;