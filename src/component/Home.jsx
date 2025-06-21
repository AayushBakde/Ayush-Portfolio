import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";

import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

import pic from "../assets/main pic.jpg"

function Home() {
  return (
    <>
      <div
        name="Home"
        className="min-h-screen bg-gradient-to-b from-[#4F46E5] to-[#6D28D9] px-4 md:px-24 pt-24 text-white"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6 order-2 md:order-1">
            <h2 className="text-xl">👋 Welcome to My Feed</h2>
            <div className="flex space-x-2 text-xl md:text-4xl font-semibold">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                strings={["Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="text-yellow-300 font-bold"
              />
            </div>
            <p className="text-justify text-sm md:text-base text-white/90">
              I'm a passionate web developer focused on creating clean, user-friendly websites using modern tools like React.js, Tailwind CSS, and Node.js. I love turning ideas into interactive experiences.
            </p>
            {/* Social links */}
            <div className="flex flex-col md:flex-row justify-between gap-8 pt-6 items-center">
              <div className="space-y-2">
                <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300 pl-5">
                  Available On
                </h3>
                <ul className="flex space-x-4 text-2xl">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/uvesh-malek-4301u/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="hover:scale-110 duration-150 text-blue-500" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareInstagram className="hover:scale-110 duration-150 text-pink-500" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/918238826843"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsappSquare className="hover:scale-110 duration-150 text-green-500" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Uvesh07"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="hover:scale-110 duration-150 text-gray-400" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-green-300">
                  Currently Working On
                </h3>
                <div className="flex space-x-6 text-3xl text-center pl-5 cursor-pointer">
                  <SiExpress className="hover:scale-110 duration-150 text-white" />
                  <SiMongodb className="hover:scale-110 duration-150 text-green-300" />
                  <FaNodeJs className="hover:scale-110 duration-150 text-lime-300" />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:order-2 flex justify-center">
            <img
              src={pic}
              alt="Profile"
              className="w-40 h-40 md:w-[400px] md:h-[400px] rounded-full object-cover border-4 border-white/30 shadow-lg"
            />
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

export default Home
