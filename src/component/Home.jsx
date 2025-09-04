import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../assets/Ayush.jpg"

function Home() {
  return (
    <>
      <div
        name="Home"
        className="min-h-screen bg-gradient-to-b from-[#4F46E5] to-[#6D28D9] px-6 md:px-24 pt-28 text-white"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-8 order-2 md:order-1">
            <h2 className="text-2xl font-semibold tracking-wide">👋 Welcome to My Feed</h2>

            <div className="flex flex-wrap items-center gap-2 text-2xl md:text-4xl font-bold">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                strings={["Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="text-yellow-300"
              />
            </div>

            <p className="text-justify text-base md:text-lg leading-relaxed text-white/90">
              I'm a passionate web developer focused on creating clean, user-friendly websites using modern tools like React.js, Tailwind CSS, and Node.js. I love turning ideas into interactive experiences.
            </p>

            {/* Social & Tech Section */}
            <div className="flex flex-col md:flex-row justify-between gap-10 pt-6 items-center">
              {/* Social Links */}
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
                  Available On
                </h3>
                <ul className="flex justify-center md:justify-start space-x-6 text-3xl">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ayush-bakde-3b6453231/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="hover:scale-125 transform transition duration-200 text-blue-500 drop-shadow-md" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <FaSquareInstagram className="hover:scale-125 transform transition duration-200 text-pink-500 drop-shadow-md" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/918734928938" target="_blank" rel="noopener noreferrer">
                      <FaWhatsappSquare className="hover:scale-125 transform transition duration-200 text-green-500 drop-shadow-md" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/AayushBakde/Salon" target="_blank" rel="noopener noreferrer">
                      <FaSquareGithub className="hover:scale-125 transform transition duration-200 text-gray-300 drop-shadow-md" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-green-300">
                  Currently Working On
                </h3>
                <div className="flex justify-center space-x-8 text-4xl">
                  <SiExpress className="hover:scale-125 transform transition duration-200 text-white drop-shadow-md" />
                  <SiMongodb className="hover:scale-125 transform transition duration-200 text-green-300 drop-shadow-md" />
                  <FaNodeJs className="hover:scale-125 transform transition duration-200 text-lime-300 drop-shadow-md" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:order-2 flex justify-center">
            <img
              src={pic}
              alt="Profile"
              className="w-44 h-44 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-white/40 shadow-2xl hover:scale-105 transform transition duration-300"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
