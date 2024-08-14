import React from "react";
import { FaTwitter, FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">UserMart</h2>
          <p className="text-gray-400 mt-2">Your one-stop solution for all your product needs</p>
        </div>
        <div className="flex gap-6 mb-4">
          <a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          <a href="#privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
        </div>
        <div className="flex gap-4 mb-4">
          <a href=" https://x.com/Sombhudas2023?t=ms9j_bbn6H4Wj_GO_lJlGQ&s=08" className="text-gray-400 hover:text-blue-500 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sombhu-das-21176823a" className="text-gray-400 hover:text-blue-700 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600 transition-colors">
            <FaFacebookF size={24} />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition-colors">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Sombhu Das. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
