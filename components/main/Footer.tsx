import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start my-4">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://github.com/ibrahim12365"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start my-4">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://linkedin.com/in/ibrahim-benkhalifa-5910a0175"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start my-4">
            <div className="font-bold text-[16px]">About</div>
            <a
              href="mailto:ibrahim.benkhalifa.1992@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <SiGmail />
              <span className="text-[15px] ml-[6px]">
                ibrahim.benkhalifa.1992@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
