import { Github, Linkedin, Twitter } from "lucide-react";
import React from 'react';
import TechNova from '../assets/Pages/TechNova.png';
const Footer = () => {
  return (
    <footer 
    >
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          
          {/* Brand */}
          <div>
            <img src={TechNova} className="h-20 w-22 ml-8"/>
            <h2
              className="text-3xl font-extrabold inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TechNova
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Empowering you with the latest tech insights, innovations, and trends.
              Stay inspired. Stay ahead.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Articles</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Let’s Connect
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Got feedback or collaboration ideas? We’d love to hear from you.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full shadow-md hover:scale-110 transition transform hover:shadow-lg"
                title="GitHub"
              >
                <Github className="w-6 h-6 text-gray-900" />
              </a>

              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full shadow-md hover:scale-110 transition transform hover:shadow-lg"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-900" />
              </a>

              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full shadow-md hover:scale-110 transition transform hover:shadow-lg"
                title="Twitter"
              >
                <Twitter className="w-6 h-6 text-gray-900" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">
          <p>&#169; 2025 TechNova. All rights reserved.</p>
          <div className="flex gap-5 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
