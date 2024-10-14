// hooks.ts
import { useEffect, useState, RefObject } from 'react';

// useMediaQuery hook
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
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

// useIsVisible hook
export const useIsVisible = (ref: RefObject<Element>): boolean => {
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
};
