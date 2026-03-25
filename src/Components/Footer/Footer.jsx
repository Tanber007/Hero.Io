import React from 'react';
import heroIcon from '../../../src/assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#001529] text-white py-10 px-6 sm:px-12 md:px-24">
  <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-6">
    <div className="flex items-center gap-2">
      <img src={heroIcon} alt="Hero.Io Logo" className="h-10 w-auto" />
      <span className="text-2xl font-bold tracking-tight">HERO.IO</span>
    </div>

    <div className="flex flex-col items-center sm:items-center gap-3">
      <h4 className="text-lg font-medium">Social Links</h4>
      <div className="flex gap-3">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <div className="w-8 h-8"><FaXTwitter /></div>
        </a>
        <a href="#" className="hover:opacity-80 transition-opacity">
          <div className="w-8 h-8"><FaLinkedin /></div>
        </a>
        <a href="#" className="hover:opacity-80 transition-opacity">
          <div className="w-8 h-8"><FaFacebook /></div>
        </a>
      </div>
    </div>
  </div>

  <hr className="border-gray-700 mb-8" />

  <div className="text-center text-sm text-gray-400">
    <p>Copyright © 2025 - All right reserved</p>
  </div>
</footer>
    );
};

export default Footer;