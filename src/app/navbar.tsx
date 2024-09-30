

function navbar() {
    return (
        <nav className ="sticky top-0 bg-[#8e8e8e]/20 border-b border-white/30 backdrop-blur-[50px] ">
        <div className ="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className ="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className ="h-8" alt="Flowbite Logo" />
              <span className ="self-center text-2xl font-semibold whitespace-nowrap text-white">IA</span>
          </a>

          <div className ="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className ="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse">
              <li>
                <a href="#" className ="block py-2 px-3 text-white font-light font-['Helvetica'] bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Projects</a>
              </li>
              <li>
                <a href="#" className ="block py-2 px-3 text-[#cdcdcd] font-light font-['Helvetica'] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
              </li>
              <li>
                <a href="#" className ="block py-2 px-3 text-[#cdcdcd] font-light font-['Helvetica']rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experience</a>
              </li>
              <li>
                <a href="#" className ="block py-2 px-3 text-[#cdcdcd] font-light font-['Helvetica'] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Credentials</a>
              </li>
              <li>
                <a href="#" className ="block py-2 px-3 text-[#cdcdcd] font-light font-['Helvetica'] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
 
    );
 }
 
 export default navbar;
 