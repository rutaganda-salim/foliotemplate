"use client";

import React, { useState } from "react";
import { satoshiLight, satoshiLightItalic } from "@/fonts/font";
import Link from "next/link";

type Button = {
  text: string;
  fontSize?: string;
  email?: string;
  link?: string;
  classNameWidth?: string;
};

function MainButton({ text, fontSize, link, email, classNameWidth }: Button) {
  const [isHovered, setIsHovered] = useState(false);
  return (  
    link ? <Link href={link}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`cursor-pointer duration-500 flex justify-center items-center rounded-full border-[1px] text-[15px] border-lightText dark:border-darkText hover:text-lightBg hover:bg-lightText dark:hover:text-darkBg dark:hover:bg-darkText bg-transparent ${classNameWidth ? classNameWidth : 'w-[12em]'} h-[2.5em]`}
      >
        <div className="overflow-hidden">
          {isHovered ? (
            <div className="flex flex-nowrap gap-8 animate-carousel">
              {[text, text, text, text, text, text, text, text, text].map(
                (word, i) => {
                  return (
                    <p
                      key={`${word}_${i}`}
                      className={`${satoshiLightItalic.className} ${fontSize} whitespace-nowrap`}
                    >
                      {word}
                    </p>
                  );
                }
              )}
            </div>
          ) : (
            <p className={`${satoshiLight.className} ${fontSize}`}>{text}</p>
          )}
        </div>
      </div>
    </Link>
    :
    <a href={`mailto:${email}`}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`cursor-pointer duration-500 flex justify-center items-center rounded-full border-[1px] border-lightText dark:border-darkText hover:text-lightBg hover:bg-lightText dark:hover:text-darkBg dark:hover:bg-darkText bg-transparent outline-none ${classNameWidth ? classNameWidth : 'w-[12em]'} h-[2.5em]`}
      >
        <div className="overflow-hidden">
          {isHovered ? (
            <div className="flex flex-nowrap gap-8 animate-carousel">
              {[text, text, text, text, text, text, text, text, text].map(
                (word, i) => {
                  return (
                    <p
                      key={`${word}_${i}`}
                      className={`${satoshiLightItalic.className} ${fontSize} whitespace-nowrap`}
                    >
                      {word}
                    </p>
                  );
                }
              )}
            </div>
          ) : (
            <p className={`${satoshiLight.className} ${fontSize}`}>{text}</p>
          )}
        </div>
      </div>
    </a>
  );
}

export default MainButton;
