// ClientApp.tsx
'use client';

import React, { useRef } from 'react';
import Navbar from './navbar';
import Home from './home';
import Highlights from './highlights';
import Projects from './projects';
import Experience from './experience';
import ExperienceTypeC from './experienceTypeC';
import Contact from './contact';
import { useMediaQuery, useIsVisible } from './hooks';

export default function ClientApp() {
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
      <Navbar />
      <>
        <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}>
          <Home />
        </div>
        <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? 'opacity-100' : 'opacity-0'}`}>
          <Highlights />
        </div>
        <div ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? 'opacity-100' : 'opacity-0'}`}>
          <Projects />
        </div>
        <div ref={ref4} className={`transition-opacity ease-in duration-700 ${isVisible4 ? 'opacity-100' : 'opacity-0'}`}>
          {isSmallScreen ? <Experience /> : <ExperienceTypeC />}
        </div>
        <div ref={ref5} className={`transition-opacity ease-in duration-700 ${isVisible5 ? 'opacity-100' : 'opacity-0'}`}>
          <Contact />
        </div>
      </>
    </div>
  );
}
