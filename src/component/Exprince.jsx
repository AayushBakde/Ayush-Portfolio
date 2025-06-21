import React from 'react';
import html from "../assets/1532556.png";
import css from "../assets/file-type-css-icon-1806x2048-r5fwjl3p.png";
import js from "../assets/javascript-logo-javascript-icon-transparent-free-png.webp";
import react from "../assets/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png";
import tailwind from "../assets/tailwind-css-icon-2048x1229-u8dzt4uh.png";
import sql from "../assets/sql-database-sql-azure-icon-1955x2048-4pmty46t.png";
import github from "../assets/github-icon-256x247-qr70800v.png";

function Exprince() {
  const carditem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: js, name: "JavaScript" },
    { id: 4, logo: react, name: "React.js" },
    { id: 5, logo: tailwind, name: "Tailwind CSS" },
    { id: 6, logo: sql, name: "SQL" },
    { id: 7, logo: github, name: "GitHub" }
  ];

  return (
    <div name="Exprince" className='max-w-screen-2xl bg-gradient-to-b from-[#4338CA] to-[#6D28D9] container mx-auto px-4 md:px-20 pt-10 pb-14'>
      
      {/* 🔥 Gradient Glass Text Heading */}
      <h2 className="text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#00DBDE] via-[#FC00FF] to-[#00DBDE] drop-shadow-xl mb-6">
        My Experience
      </h2>

      {/* 💬 Description */}
      <p className='text-center text-white/80 mb-10 px-2 max-w-2xl mx-auto'>
        Improved skills in React.js, Tailwind CSS, and GitHub during a 1.5-month internship with hands-on training and project exposure.
      </p>

      {/* 🔧 Cards */}
      <div className='flex flex-wrap justify-center gap-6 sm:gap-8'>
        {carditem.map(({ id, logo, name }) => (
          <div
            key={id}
            className='flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 
                       justify-center rounded-xl w-[130px] sm:w-[150px] md:w-[180px] 
                       shadow-lg p-4 hover:scale-105 transition duration-200 cursor-pointer'
          >
            <img
              src={logo}
              className='w-[80px] h-[80px] object-contain rounded-full'
              alt={name}
            />
            <div className='text-center mt-3 text-white font-medium'>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exprince;
