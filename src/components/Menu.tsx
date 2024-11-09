"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { spectralBridgeRegular } from "@/fonts/font";
import { motion, AnimatePresence } from "framer-motion";

type Open = {
  readonly menuOpen: boolean;
  readonly setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Menu({ menuOpen, setMenuOpen }: Open) {
  const navLinks = [
    {
      route: "/",
      title: "home",
    },
    {
      route: "/about",
      title: "about",
    },
    {
      route: "/#works",
      title: "works",
    },
    {
      route: "/#services",
      title: "services",
    },
    {
      route: "/contact",
      title: "contact",
    },
  ];

  const primaryEasing = [0.83, 0, 0.17, 1];
  const secondaryEasing = [0.65, 0, 0.35, 1];

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.section
          initial={{
            scaleY: 0,
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
          }}
          animate={{
            scaleY: 1,
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            transition: { duration: 0.7, ease: primaryEasing },
          }}
          exit={{
            scaleY: 0,
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            transition: { delay: 1 },
          }}
          className={`${
            menuOpen
              ? "visible bg-lightText dark:bg-darkText"
              : "invisible bg-lightBg dark:bg-darkBg"
          } origin-top-right z-[100] fixed top-0 left-0 w-full h-screen `}
        >
          <motion.div
            initial={{
              scaleY: 0,
              borderBottomLeftRadius: "0%",
              borderBottomRightRadius: "0%",
            }}
            animate={{
              scaleY: 1,
              transition: {
                duration: 0.7,
                borderBottomLeftRadius: "50%",
                borderBottomRightRadius: "50%",
                delay: 0.5,
                ease: primaryEasing,
              },
            }}
            exit={{
              scaleY: 0,
              borderBottomLeftRadius: "0%",
              borderBottomRightRadius: "0%",
              transition: { delay: 0.9 },
            }}
            className={`${
              menuOpen ? "visible" : "invisible"
            } origin-top-right bg-lightBg dark:bg-darkBg flex justify-center items-center flex-col w-full h-full`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.4,
                  delay: 0.5,
                  ease: secondaryEasing,
                },
              }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              className="flex justify-center"
            >
              <XMarkIcon
                onClick={() => setMenuOpen(false)}
                className="w-[12vw] sm:w-[10vw] md:w-[8vw] lg:w-[6vw] text-lightText dark:text-darkText cursor-pointer"
                strokeWidth={0.8}
              />
            </motion.div>
            <nav className="mt-10">
              <ul>
                {navLinks.map((link, i) => {
                  return (
                    <div
                      key={link.title}
                      className="flex items-start justify-center hover:gap-7 duration-300 gap-5"
                    >
                      {/* EVEN NUMBERS ON THE LEFT */}
                      <div className="overflow-hidden">
                        {i % 2 === 0 ? (
                          <motion.p
                            initial={{ y: "100%" }}
                            animate={{
                              y: 0,
                              transition: {
                                duration: 1,
                                delay: 0.9,
                                ease: [0.83, 0, 0.17, 1],
                              },
                            }}
                            exit={{
                              y: "100%",
                            }}
                            className={`${spectralBridgeRegular.className} text-[20px]`}
                          >{`( ${i + 1} )`}</motion.p>
                        ) : null}
                      </div>
                      {/* THE NAVIGATION TEXTS */}
                      <Link href={link.route}>
                        <motion.li
                          initial={{ visibility: "hidden" }}
                          animate={{
                            visibility: "visible",
                            transition: {
                              duration: 0.01,
                              ease: secondaryEasing,
                            },
                          }}
                          exit={{ visibility: "hidden" }}
                          className={`${spectralBridgeRegular.className} relative px-3 text-[16vw] overflow-hidden sm:text-[13vw]  md:text-[10vw]
                    lg:text-[8vw] xl:text-[6vw] leading-[1] uppercase text-lightText dark:text-darkText text-center
                    hover:after:scale-x-100 after:duration-700 after:origin-left after:absolute after:scale-x-0 
                    after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:top-1/2 after:left-1/2 after:content-lightSlash 
                    dark:after:content-darkSlash after:scale-y-50 after:  `}
                          onClick={() => setMenuOpen(false)}
                        >
                          <motion.span
                            initial={{ y: "100%" }}
                            animate={{
                              y: 0,
                              transition: {
                                duration: 1,
                                delay: 0.8,
                                ease: [0.83, 0, 0.17, 1],
                              },
                            }}
                            exit={{
                              y: "100%",
                            }}
                            className="inline-block"
                          >
                            {link.title}
                          </motion.span>
                        </motion.li>
                      </Link>
                      {/* ODD NUMBERS ON THE RIGHT */}
                      <div className="overflow-hidden">
                        {i % 2 !== 0 ? (
                          <motion.p
                            initial={{ y: "100%" }}
                            animate={{
                              y: 0,
                              transition: {
                                duration: 1,
                                delay: 0.9,
                                ease: [0.83, 0, 0.17, 1],
                              },
                            }}
                            exit={{
                              y: "100%",
                            }}
                            className={`${spectralBridgeRegular.className} text-[20px]`}
                          >{`( ${i + 1} )`}</motion.p>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Menu;
