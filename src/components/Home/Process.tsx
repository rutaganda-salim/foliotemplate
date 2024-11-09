"use client";
import React, { SetStateAction, useState } from "react";
import { processes } from "@/utils/process";
import { spectralBridgeRegular } from "@/fonts/font";
import Image from "next/image";
import Test from "../../../public/images/general/home/test.jpg";
import { easeInOut, motion } from "framer-motion";

function Process() {
  const [index, setIndex] = useState<number | undefined>();

  const curve = {
    initial: {
      borderTopLeftRadius: "0%",
    },
    animate: {
      borderTopLeftRadius: "100%",
      transition: {
        ease: [0.83, 0, 0.17, 1],
        duration: 1,
        delay: 0.7,
      },
    },
  };

  return (
    <section className="my-[20vh]">
      <div className="w-full md:w-[90%] mx-auto gap-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <motion.div
          variants={curve}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="px-8 py-4 rounded-xl rounded-tl-[100%] flex items-end bg-lightText text-lightBg dark:bg-darkText dark:text-darkBg h-[30vh] sm:h-auto lg:h-[55vh]"
        >
          <h5 className="text-[40px] 2xl:text-[60px]">PROCESS</h5>
        </motion.div>
        {processes.map((item, i) => {
          return item.title !== null ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.6, ease: easeInOut, delay: i * 0.06 },
              }}
              viewport={{ once: true }}
              key={item.title}
            >
              <ProcessList
                key={item.title}
                i={i}
                item={item}
                // click={changeIndex}
                setIndex={setIndex}
                index={index}
              />
            </motion.div>
          ) : (
            <div key={`item_${i}`} className="hidden xl:block"></div>
          );
        })}
        <div className="rounded-xl rounded-br-[100%] bg-lightText text-lightBg dark:bg-darkText dark:text-darkBg h-[30vh] sm:h-auto lg:h-[55vh]"></div>
      </div>
    </section>
  );
}

export default Process;

type List = {
  setIndex?: React.Dispatch<SetStateAction<number | undefined >>;
  index: number | undefined;
  i: number;
  click?: (i: number) => void;
  item: {
    title: string | null;
    description: string | null;
  };
};

function ProcessList({ setIndex, i, click, index, item }: List) {

  return (
    <div
      onMouseEnter={() => setIndex && setIndex(i)}
      onMouseLeave={() => setIndex && setIndex(undefined)}
      className={`${
        index === i
          ? "bg-lightText text-lightBg dark:bg-darkText dark:text-darkBg"
          : "bg-transparent text-lightText dark:text-darkText"
      } hover:bg-lightText dark:hover:bg-darkText hover:text-lightBg dark:hover:text-darkBg duration-300 rounded-xl lg:h-[55vh] p-6 2xl:p-10 flex flex-col border-[1.5px] border-lightText dark:border-darkText`}
    >
      <h6 className="text-[26px] 2xl:text-[48px] mb-[6vh] lg:mb-0">{item.title}</h6>
      <div className={`${i === index ? "opacity-1" : "opacity-0"} duration-300 mt-auto`}>
        <p className="text-[15px] sm:text-[16px] 2xl:text-[24px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}
