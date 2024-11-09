import React from "react";
import { allProjects } from "@/utils/works";
import { motion } from "framer-motion";
import Prev from "../Prev";
import Next from "../Next";
import Link from "next/link";
import { titleConverter } from "@/utils/workTitleConverter";
import Image from "next/image";

function PrevNext({ index }: { index: number }) {
  // From 0 => 4 (length of 5) 5 % 5 = 0; 0 % 5 = 0; 4 % 5 = 4
  let prevIndex = (index + allProjects.length - 1) % allProjects.length;
  let nextIndex = (index + 1) % allProjects.length;

  const variant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <section className="mt-[6vh] mb-[4vh]">
      <motion.div
        variants={variant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row"
      >
        {/* PREVIOUS PROJECT */}
        <div className="flex-1 py-[3vw] sm:py-0 sm:px-[3vw] h-[40vh] border-b-[1px] border-b-lightText20 dark:border-b-darkText20 sm:border-b-[0px]">
          <Link href={`/works/${titleConverter(allProjects[prevIndex].title)}`}>
            <div className="relative flex flex-col justify-center items-end h-full duration-500 group">
              <h5 className="group-hover:hidden block text-right text-[9vw] sm:text-[5vw] leading-[1] tracking-tight uppercase mix-blend-multiply dark:mix-blend-exclusion">
                {/* {allProjects[prevIndex].title} */}
                Prev
              </h5>
              <h5 className="group-hover:block hidden text-right text-[9vw] sm:text-[5vw] leading-[1] tracking-tight uppercase mix-blend-multiply dark:mix-blend-exclusion">
                {allProjects[prevIndex].title}
              </h5>
              <Prev className="group-hover:translate-x-[-10px] duration-300 mt-6 w-[8vw] sm:w-[6vw] leading-[1] mix-blend-multiply dark:mix-blend-exclusion" />

              {allProjects[prevIndex].introImage ? (
                <div className="w-full h-full overflow-hidden  z-[-1] duration-300 opacity-0 group-hover:opacity-100 absolute transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 object-cover object-center">
                  <Image
                    src={allProjects[prevIndex].introImage}
                    alt=""
                    className="w-full sm:h-full"
                  />
                </div>
              ) : null}
            </div>
          </Link>
        </div>
        {/* NEXT PROJECT */}
        <div className="flex-1 h-[40vh] py-[3vw] sm:py-0 sm:px-[3vw] ">
          <Link
            className="mt-4 sm:mt-0"
            href={`/works/${titleConverter(allProjects[nextIndex].title)}`}
          >
            <div className="relative flex flex-col justify-center h-full duration-500 group">
              <div className="">
                <h5 className="group-hover:hidden block leading-[1] text-[9vw] sm:text-[5vw] tracking-tight uppercase mix-blend-multiply dark:mix-blend-exclusion">
                  {/* {allProjects[nextIndex].title} */}
                  Next
                </h5>
                <h5 className="group-hover:block hidden leading-[1] text-[9vw] sm:text-[5vw] tracking-tight uppercase mix-blend-multiply dark:mix-blend-exclusion">
                  {allProjects[nextIndex].title}
                </h5>
                <Next className="group-hover:translate-x-[10px] duration-300 mt-6 w-[8vw] sm:w-[6vw] leading-[1] mix-blend-multiply dark:mix-blend-exclusion" />
              </div>
              {allProjects[nextIndex].introImage ? (
                <div className="w-full h-full overflow-hidden z-[-1] duration-300 opacity-0 group-hover:opacity-100 absolute transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 object-cover object-center">
                  <Image
                    src={allProjects[nextIndex].introImage}
                    alt=""
                    className="w-full sm:h-full"
                  />
                </div>
              ) : null}
            </div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default PrevNext;
