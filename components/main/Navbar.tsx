"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-3 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="hidden md:flex w-auto h-full items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-auto h-auto border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer px-2">
              About me
            </a>
            <a href="#skills" className="cursor-pointer px-2">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer px-2">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col items-center justify-center space-y-1"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black z-40 opacity-95" onClick={closeMenu}></div>

          <div className="fixed inset-x-0 top-[65px] flex flex-col items-center w-full bg-black text-gray-200 py-4 z-50">
            <button
              className="absolute top-4 right-4"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center w-full">
              <a href="#about-me" className="cursor-pointer py-1" onClick={closeMenu}>
                About me
              </a>
              <a href="#skills" className="cursor-pointer py-1" onClick={closeMenu}>
                Skills
              </a>
              <a href="#projects" className="cursor-pointer py-1" onClick={closeMenu}>
                Projects
              </a>
            </div>
            <div className="flex flex-row gap-5 mt-4">
              {Socials.map((social) => (
                <a
                  href={social.url}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={social.name === "Gmail" ? 38 : 30}
                    height={social.name === "Gmail" ? 38 : 30}
                  />
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
