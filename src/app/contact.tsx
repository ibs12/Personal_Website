import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import StarField from "./starField";

function Contact() {


    
    return (
        <>
            <div id="contact" className="min-h-[50vh] flex flex-col items-center relative overflow-hidden">
            {/* Contact Header */}
            <div className="text-center pt-20 pb-6 relative z-10">
                <h1 className="bg-gradient-to-r from-neutral-200 via-slate-400 to-neutral-600 bg-clip-text text-transparent text-6xl md:text-9xl font-bold">
                Contact
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-gray-400 mt-4">
                Let’s get in touch!
                </p>
            </div>

            {/* Icons */}
            <div className="flex space-x-8 mt-10 relative z-10">
                <a
                href="https://github.com/ibs12"
                className="transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub size={50} className="text-white hover:text-gray-400 transition ease-in-out duration-300" />
                </a>
                <a
                href="https://www.linkedin.com/in/iallahbu/"
                className="transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaLinkedin size={50} className="text-white hover:text-gray-400 transition ease-in-out duration-300" />
                </a>
                <a
                href="mailto:ibrahimallahb@gmail.com"
                className="transition-transform transform hover:scale-110"
                >
                <IoMail size={50} className="text-white hover:text-gray-400 transition ease-in-out duration-300" />
                </a>
            </div>

            {/* Starfield Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <StarField />
            </div>
            </div>


        </>
    );
}

export default Contact;
