import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1f2937] to-[#111827] py-8 text-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/uvesh-malek-4301u/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} className="hover:text-blue-500 duration-200" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} className="hover:text-pink-500 duration-200" />
          </a>
          <a
            href="https://wa.me/918238826843"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} className="hover:text-green-400 duration-200" />
          </a>
          <a
            href="https://github.com/Uvesh07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} className="hover:text-gray-400 duration-200" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2025 All rights reserved.</p>
          <p className="text-white mt-1">
            Developed with ❤️ by <span className="font-semibold">Uvesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
