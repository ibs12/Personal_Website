import { useState, useEffect } from 'react';


const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);



  // Function to determine the current active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
      const offsetY = window.scrollY;
      const buffer = 100; // Adjust this to fine-tune when sections become "active"

      const active = sections.find((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const top = sectionElement.offsetTop;
          const bottom = top + sectionElement.offsetHeight;
          return offsetY + buffer >= top && offsetY + buffer < bottom;
        }
        return false;
      });

      if (active) {
        setActiveSection(active);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll Event Listener to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 150; // Adjust for offset

      sections.forEach(section => {
        const id = section.getAttribute('id');
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(id || ''); // Use an empty string if `id` is null
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to toggle the navbar's visibility
  const toggleNavVisibility = (): void => {
    setIsNavVisible(!isNavVisible);
  };

  return (


    <>




      {/* Arrow for toggling navbar visibility */}
      {!isNavVisible && (
        <button
          className="fixed top-1/2 left-0 p-2 bg-gray-800 text-white rounded-r-lg z-50"
          onClick={toggleNavVisibility}
        >
          ➔
        </button>
      )}

      {/* Navbar */}
      <nav
        className={`nav fixed top-1/2 left-0 transform -translate-y-1/2 w-48 transition-transform duration-300 ${
          isNavVisible ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
        aria-label="In-page jump links"
      >
        <ul className="mt-16 w-max">
          <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === 'about' || activeSection === 'home' ? 'text-white group-hover:text-slate-200 group-hover:bg-slate-200 bg-black bg-opacity-40 ' : 'bg-black bg-opacity-40 '
            }`}
            href="#home"
            onClick={toggleNavVisibility}
          >
            <span
              className={`nav-indicator mr-4 h-px ${
                activeSection === 'about'
                  ? 'w-16 bg-slate-200' // Active state styles
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              } transition-all motion-reduce:transition-none`}
            ></span>
            <span
              className={`nav-text text-xs font-bold uppercase tracking-widest ${
                activeSection === 'about'
                  ? 'text-slate-200' // Active state text color
                  : 'text-slate-500 group-hover:text-slate-200'
              } group-focus-visible:text-slate-200`}
            >
              About
            </span>
          </a>
          </li>

          <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === 'projects' ? 'text-white group-hover:text-slate-200 group-hover:bg-slate-200 bg-black bg-opacity-40 ' : 'bg-black bg-opacity-40 '
            }`}
            href="#projects"
            onClick={toggleNavVisibility}
          >
            <span
              className={`nav-indicator mr-4 h-px ${
                activeSection === 'projects'
                  ? 'w-16 bg-slate-200' // Active state styles
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              } transition-all motion-reduce:transition-none`}
            ></span>
            <span
              className={`nav-text text-xs font-bold uppercase tracking-widest ${
                activeSection === 'projects'
                  ? 'text-slate-200' // Active state text color
                  : 'text-slate-500 group-hover:text-slate-200'
              } group-focus-visible:text-slate-200`}
            >
              Projects
            </span>
          </a>
          </li>
          <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === 'experience' ? 'text-white group-hover:text-slate-200 group-hover:bg-slate-200 bg-black bg-opacity-40 ' : 'bg-black bg-opacity-40 '
            }`}
            href="#experience"
            onClick={toggleNavVisibility}
          >
            <span
              className={`nav-indicator mr-4 h-px ${
                activeSection === 'experience'
                  ? 'w-16 bg-slate-200' // Active state styles
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              } transition-all motion-reduce:transition-none`}
            ></span>
            <span
              className={`nav-text text-xs font-bold uppercase tracking-widest ${
                activeSection === 'experience'
                  ? 'text-slate-200' // Active state text color
                  : 'text-slate-500 group-hover:text-slate-200'
              } group-focus-visible:text-slate-200`}
            >
              Experience
            </span>
          </a>

          </li>
          <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === 'contact' ? 'text-white group-hover:text-slate-200 group-hover:bg-slate-200 bg-black bg-opacity-40 ' : 'bg-black bg-opacity-40 '
            }`}
            href="#contact"
            onClick={toggleNavVisibility}
          >
            <span
              className={`nav-indicator mr-4 h-px ${
                activeSection === 'contact'
                  ? 'w-16 bg-slate-200' // Active state styles
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              } transition-all motion-reduce:transition-none`}
            ></span>
            <span
              className={`nav-text text-xs font-bold uppercase tracking-widest ${
                activeSection === 'contact'
                  ? 'text-slate-200' // Active state text color
                  : 'text-slate-500 group-hover:text-slate-200'
              } group-focus-visible:text-slate-200`}
            >
              Contact
            </span>
          </a>

          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
