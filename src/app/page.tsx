"use client"; 

import React from 'react';
import Home from './home';
import Navbar from './navbar';
import Highlights from './highlights';
import Projects from './projects';
import Experience from './experience';
import ExperienceTypeC from './experienceTypeC';
import Contact from './contact';
import { useEffect, useState, RefObject, useRef } from "react";
import Head from 'next/head';


const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false);

  useEffect(() => {
    // Check if window is defined (only run on the client)
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      setMatches(mediaQueryList.matches);

      const documentChangeHandler = () => setMatches(mediaQueryList.matches);
      mediaQueryList.addEventListener('change', documentChangeHandler);

      return () => {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      };
    }
  }, [query]);

  return matches;
};

export default function App() {
  
  function useIsVisible(ref: RefObject<Element>): boolean {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4); 

  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible5 = useIsVisible(ref5); 


  const isSmallScreen = useMediaQuery('(max-width: 767px)');



  return (
    
    <div className="App">

      <Head>
        <title>Ibrahim Allahbukhsh</title>
        <meta name="description" content="Ibrahim Allahbukhsh's personal website showcasing his experience and skills as a software engineer." />
        <meta name="keywords" content="software engineer, personal portfolio, personal website" />
        <meta name="author" content="Ibrahim Allahbukhsh" />
      </Head>

        <Navbar />
        <>
        <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <><Home /></>
        </div>
        <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
          <><Highlights /></>
        </div>
        <div ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
          <><Projects /></>
        </div>
        <div ref={ref4} className={`transition-opacity ease-in duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
            {isSmallScreen ? <Experience /> : <ExperienceTypeC />}
        </div>
        <div ref={ref5} className={`transition-opacity ease-in duration-700 ${isVisible5 ? "opacity-100" : "opacity-0"}`}>
          <><Contact /></>
        </div>
        </>
    </div>




  );
}

