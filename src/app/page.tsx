"use client"; 

import React from 'react';
import Home from './home';
import Navbar from './navbar';
import Highlights from './highlights';
import Projects from './projects';

import { useEffect, useState, RefObject, useRef } from "react";


export function useIsVisible(ref: RefObject<Element>): boolean {
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

export default function App() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  return (
    <div className="App">
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
      </>
    </div>




  );
}

