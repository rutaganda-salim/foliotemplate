"use client";

import React, { useState } from "react";
import DarkLightSwitch from "./DarkLightSwitch";
import Link from "next/link";
import { rigata } from "@/fonts/font";
import Menu from "./Menu";
import { animate, motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: "0%",
      transition: {
        duration: .5,
        ease: [0.64, 0, 0.78, 0],
      },
    },
  };

  return (
    <>
      <motion.header
        variants={nav}
        initial="initial"
        animate="animate"
        className="z-[99] duration-300 sticky top-0 bg-transparent mix-blend-multiply dark:mix-blend-difference"
      >
        <div className="flex justify-between items-center">
          {/* JASMINE'S INITIAL LOGO */}
          <Link href={"/"}>
            <p className={`${rigata.className} text-[3em] 2xl:text-[5em] tracking-tighter`}>
              JM
            </p>
          </Link>
          {/* DARK MODE/LIGHT MODE TOGGLE */}
          <DarkLightSwitch />
          {/* MENU BUTTON */}
          <button onClick={() => setMenuOpen(true)} className="2xl:text-[26px]">
            Menu
          </button>
        </div>
      </motion.header>
      <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    </>
  );
}

export default Navbar;
