import React from 'react';
import react from "../assets/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png";
import js from "../assets/javascript-logo-javascript-icon-transparent-free-png.webp";
import tailwind from "../assets/tailwind-css-icon-2048x1229-u8dzt4uh.png";

function Project() {
  const carditem = [
    { id: 1, logo: react, name: "React" },
    { id: 2, logo: js, name: "JavaScript" },
    { id: 3, logo: tailwind, name: "Tailwind CSS" }
  ];

  return (
    <div name="Project" className='max-w-screen-2xl bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] container mx-auto px-4 md:px-20 py-12'>
      
      {/* Gradient heading same as other sections */}
      <h2 className="text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#00DBDE] via-[#FC00FF] to-[#00DBDE] drop-shadow-xl mb-8">
        🚀 Projects
      </h2>

      <div className='flex flex-wrap justify-center gap-10'>
        {carditem.map(({ id, logo, name }) => (
          <div
            key={id}
            className='md:w-[300px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 hover:scale-105 transition duration-200 cursor-pointer'
          >
            <img
              src={logo}
              className='w-[100px] h-[100px] mx-auto rounded-full border-2 p-2'
              alt={name}
            />
            <div className='text-center mt-5'>
              <div className='font-bold text-xl text-white mb-2'>{name}</div>
              <p className='text-sm text-white/70 px-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ut laborum alias deserunt possimus!
              </p>
              <div className='flex justify-center mt-4'>
                <a
                  href="https://github.com/Uvesh07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='bg-gradient-to-r from-green-400 to-lime-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-90 transition'
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />
      <br />
    </div>
  );
}

export default Project;
