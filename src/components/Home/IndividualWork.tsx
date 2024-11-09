"use client";

import React, { Fragment, useState } from "react";
import { Projects } from "@/types/type";
import Image from "next/image";
import { satoshiLight, spectralBridgeRegular } from "@/fonts/font";
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "../Banner";

type Work = {
  readonly work: Projects;
};

function IndividualWork({ work }: Work) {
  const [isHovered, setIsHovered] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function windowMouse(e: React.MouseEvent<HTMLDivElement>) {
    setX(e.clientX);
    setY(e.clientY);
  }
  // ${
  //     work.id === 0 || work.id === 3
  //     ? "md:translate-x-[-2vw]"
  //     : "md:translate-x-[4vw]"
  // }

  return (
    <div
      className={`flex justify-center ${
        work?.id === 1 ? "md:justify-start" : work?.position
      } ${work.id === 0 || work.id === 3 ? "mb-[10vw]" : "mb-[15vw]"}`}
    >
      <div
        className={`w-full sm:max-w-[60vw] md:max-w-[30vw] 
        
        `}
      >
        <Link href={`/works/${work?.title?.toLowerCase()}`}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={windowMouse}
            className={`${
              isHovered ? "cursor-none" : "cursor-default"
            } relative w-full object-cover overflow-hidden group`}
          >
            <WorkHover x={x} y={y} isHovered={isHovered} />
            {work?.mainImage && (
              <Image
                src={work?.mainImage}
                alt={`${work?.title} project`}
                className="w-full group-hover:scale-105 duration-500"
                placeholder="blur"
              />
            )}
          </div>
        </Link>
        <div className="flex flex-row-reverse justify-between items-start mt-1">
          <p className="">{work?.year}</p>
          <h5 className={`${spectralBridgeRegular.className} text-[36px]`}>
            {work?.title}
          </h5>
        </div>
        <div className="flex gap-x-3 gap-y-2 items-center flex-wrap mt-[-5px]">
          {work?.roles?.map((role) => {
            return (
              <div key={role} className="capitalize">
                <Banner text={role}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function WorkHover({
  isHovered,
  x,
  y,
}: {
  isHovered: boolean;
  x: number;
  y: number;
}) {
  return (
    <motion.div
      initial={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.5 : 1 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        scale: isHovered ? 1 : 0.5,
        x: x,
        y: y,
      }}
      transition={{ duration: 0.5 }}
      className={`${
        isHovered ? "visible" : "invisible"
      } z-[88] fixed top-0 left-0 pointer-events-none flex justify-center items-center w-[9em] h-[9em] rounded-full bg-lightText text-lightBg dark:bg-darkText dark:text-darkBg`}
    >
      <div className="overflow-hidden">
        <div className="flex flex-nowrap gap-8 animate-carousel">
          {[
            "View Work",
            "View Work",
            "View Work",
            "View Work",
            "View Work",
            "View Work",
            "View Work",
            "View Work",
            "View Work",
          ].map((word, i) => {
            return (
              <p
                key={`${word}_${i}`}
                className={`${satoshiLight.className} whitespace-nowrap text-[20px]`}
              >
                {word}
              </p>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default IndividualWork;
