import React from "react";
import Testimonials from "./componets/Testimonials";
import { useState } from "react";
import reviews from "./data";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";


const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className={`flex flex-col w-[100vw] h-[100vh] justify-center items-center ${darkMode ? 'bg-black text-white' : 'bg-gray-200 text-center'}`}>

      {/* Dark Mode Button */}
      {/* <button onClick={toggleDarkMode} className={`top-2 transition-all duration-200 cursor-pointer px-4 py-2 font-bold text-lg text-[2rem]
      ${(darkMode) ? 'hover:bg-yellow-400 rounded-full' : 'hover:bg-gray-500 text-black rounded-full'}`}>
        {darkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
      </button> */}

      <button onClick={toggleDarkMode} className={`absolute top-2 right-3 transition-all duration-200 cursor-pointer px-4 py-2 font-bold text-lg text-[2rem]
        ${(darkMode) ? 'hover:bg-yellow-400 rounded-full' : 'hover:bg-gray-500 text-black rounded-full'}`}>
        {darkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
      </button>

      <h1 className="text-4xl font-bold">Our Testimonials</h1>
      <div className={`${darkMode ? 'bg-yellow-400' : 'bg-violet-400'} h-[4px] w-1/5 mt-1 mx-auto`}></div>

      <div>
        <Testimonials reviews={reviews} darkMode={darkMode}/>
      </div>

    </div>
  );
};

export default App;
