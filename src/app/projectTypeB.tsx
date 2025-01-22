import insightPoster from '../../assets/InsightPoster.png';
import hikeLogin from '../../assets/HikeLogin.png';
import hikeGallery from '../../assets/HikeGallery.png';
import newsMarket from '../../assets/Market.png';
import newsSearch from '../../assets/NewsSearchResult.png';
import newsHome from '../../assets/NewsHome.png';
import trekPoster from '../../assets/TrekPoster.png';
import recommendedProfessors from '../../assets/RecommendedProfessors.gif';
import rateProfessorStats from '../../assets/rateProfessorStats.gif';
import buyTrade from '../../assets/BuyTrade.png';
import sellTrade from '../../assets/SellTrade.png';
import trade from '../../assets/Trade.png';
import personalDevelopmentThumbnail from '../../assets/Personal-Development-Thumbnail-Image.png';
import personalDevelopmentAction from '../../assets/Personal-Development-Action-Steps.png';
// import personalDevelopmentExample from '../../assets/Personal-Development-Examples.png';
  

import personalDevelopmentGif from '../../assets/Personal-Development-Example-Gif.gif';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaGithub, FaTrello, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";


// Types
interface Media {
    type: "image" | "video";
    src: string;
  }
  
  interface Project {
    title: string;
    description: string;
    skills: string[];
    github: string;
    trello?: string;
    media: Media[];
  }
  
  interface ProjectCardProps {
    project: Project;
    onMediaClick: (media: Media[]) => void;
  }
  
  interface ImageGalleryProps {
    media: Media[];
    currentIndex: number;
    onClose: () => void;
    onPrev: (e: React.MouseEvent) => void;
    onNext: (e: React.MouseEvent) => void;
  }
  
  // Updated ProjectCard
  const ProjectCard: React.FC<ProjectCardProps> = ({ project, onMediaClick }) => (
    <div className="flex flex-row gap-4 bg-neutral-900 rounded-lg p-6 w-full">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
  
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 rounded-full text-sm text-white"
            >
              {skill}
            </span>
          ))}
        </div>
  
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          )}
          {project.trello && (
            <a
              href={project.trello}
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <FaTrello size={20} />
              <span>Trello</span>
            </a>
          )}
        </div>
      </div>
  
      <div
        className="relative w-64 h-48 cursor-pointer rounded-lg"
        onClick={() => onMediaClick(project.media)}
      >
        {project.media.slice(0, 3).map((media, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform hover:scale-105 shadow-lg rounded-lg`}
            style={{
              backgroundImage: media.type === "image" ? `url(${media.src})` : "",
              zIndex: project.media.length - index,
              transform: `translateX(${index * 8}px) rotate(${index * 3}deg) scale(${
                1 - index * 0.05
              })`,
            }}
          >
            {media.type === "video" && (
              <video
                src={media.src}
                className="w-full h-full object-cover rounded-lg"
                muted
                autoPlay
                loop
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
  
  // Updated ImageGallery
  const ImageGallery: React.FC<ImageGalleryProps> = ({
    media,
    currentIndex,
    onClose,
    onPrev,
    onNext,
  }) => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="relative max-w-7xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
        {media[currentIndex].type === "image" ? (
          <Image
            src={media[currentIndex].src}
            alt="Gallery"
            width={1600} 
            height={1200} 
            className="max-w-full max-h-[80vh] object-contain rounded-xl"
          />
        ) : (
          <video
            src={media[currentIndex].src}
            controls
            autoPlay
            className="max-w-full max-h-[80vh] object-contain rounded-xl"
          />
        )}
  
        {media.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
            >
              <FaArrowLeft size={24} />
            </button>
  
            <button
              onClick={onNext}
              className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
            >
              <FaArrowRight size={24} />
            </button>
          </>
        )}
  
        <button
          onClick={onClose}
          className="absolute top-[-50px] right-0 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
        >
          <FaTimes size={24} />
        </button>
      </div>
    </div>
  );
  
  // Updated Projects Component
  const Projects: React.FC = () => {
    const [selectedMedia, setSelectedMedia] = useState<Media[] | null>(null);
    const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0);
  
    const handleMediaClick = (media: Media[]): void => {
      setSelectedMedia(media);
      setCurrentMediaIndex(0);
    };
  
    const handleClose = (): void => {
      setSelectedMedia(null);
      setCurrentMediaIndex(0);
    };
  
    const handlePrev = (e: React.MouseEvent): void => {
      e.stopPropagation();
      setCurrentMediaIndex((prev) =>
        prev === 0 ? (selectedMedia?.length ?? 1) - 1 : prev - 1
      );
    };
  
    const handleNext = (e: React.MouseEvent): void => {
      e.stopPropagation();
      setCurrentMediaIndex((prev) =>
        prev === (selectedMedia?.length ?? 1) - 1 ? 0 : prev + 1
      );
    };
  
    const projects: Project[] = [
      {
        title: "Professor Recommender App",
        description: "Web application for college students to rate professors and receive recommendations based on their learning styles.",
        skills: ["React", "JavaScript", "MySQL", "PHP"],
        github: "https://github.com/ibs12/rate-professors-app",
        // trello: "#",
        // images: [rateProfessorStats.src, insightPoster.src, recommendedProfessors.src],
        media: [
            { type: "image", src: rateProfessorStats.src },
            { type: "image", src: insightPoster.src },
            { type: "image", src: recommendedProfessors.src},
          ],
      },
      {
        title: "Trek",
        description: "Social platform for hikers to share experiences and plan hiking trips with interactive galleries and trip planning features.",
        skills: ["React", "JavaScript", "Swagger"],
        github: "https://github.com/ibs12/Hiking-Social-Media-App",
        // trello: "#",
        // images: [hikeGallery.src, hikeLogin.src,trekPoster.src ],
        media: [
            { type: "image", src: hikeGallery.src},
            { type: "image", src: hikeLogin.src },
            { type: "image", src: trekPoster.src },
          ],
      },
      {
        title: "News Analysis",
        description: "News analysis tool using NLP to detect biases and analyze sentiment in articles, helping users make informed decisions.",
        skills: ["React", "JavaScript", "Python", "PostgreSQL", "Flask"],
        github: "https://github.com/ibs12/News-Analysis",
        // images: [newsMarket.src, newsHome.src , newsSearch.src],
        media: [
            { type: "image", src: newsMarket.src},
            { type: "image", src: newsHome.src},
            { type: "image", src: newsSearch.src},
          ],
      },
      {
        title: "Stock Trade Recommendation",
        description: "Stock prediction app using reinforcement learning with Deep Q-Network, achieving 12% ROI on real trades.",
        skills: ["Python", "Reinforcement Learning", "Deep Q-Network"],
        github: "https://github.com/ibs12/Trade-Recommendation-App",
        // images: [buyTrade.src, sellTrade.src, trade.src ],
        media: [
            { type: "image", src: buyTrade.src},
            { type: "image", src: sellTrade.src},
            { type: "image", src: trade.src},
          ],
      },
      {
        title: "Personal Development Video Analyzer",
        description: "Custom action extraction module integrating ASR transcription and NLP-based segmentation for video content analysis.",
        skills: ["React", "JavaScript", "MySQL", "PHP"],
        github: "https://github.com/ibs12/Personal-Development-Video-Analyzer",
        // trello: "#",
        // images: [personalDevelopmentGif.src, personalDevelopmentThumbnail.src, personalDevelopmentAction.src],
        media: [
            { type: "image", src: personalDevelopmentGif.src },
            { type: "image", src: personalDevelopmentThumbnail.src },
            { type: "image", src: personalDevelopmentAction.src}
          ],
      }
    ];
  
    return (
        <div id="projects" className="bg-black py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <h1 className="text-center bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 bg-clip-text text-transparent font-bold text-7xl md:text-9xl pb-10 inline-block">
              Projects
            </h1>
          </div>
    
          <div className="max-w-6xl mx-auto space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} onMediaClick={handleMediaClick} />
            ))}
          </div>
    
          {selectedMedia && (
            <ImageGallery
              media={selectedMedia}
              currentIndex={currentMediaIndex}
              onClose={handleClose}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}
        </div>
      );
    };
    
    export default Projects;