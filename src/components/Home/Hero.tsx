"use client";
import React, { useRef } from "react";
import Header1 from "../Header1";
import Header6 from "../Header6";
import Image from "next/image";
import StarSpin from "../StarSpin";
import Paragraph from "../Paragraph";
import HeroImage from "../../../public/images/general/home/hero_image.jpg";
import MainButton from "../MainButton";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const star = useRef(null);

  useGSAP(() => {
    gsap.to(star.current, {
      y: "30%",
      rotate: 270,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: star.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  const headerVariant1 = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.1,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const headerVariant2 = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.25,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.6,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const appear2 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.7,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const appear3 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.8,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const flash = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.9,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  return (
    <section className="py-[8vh]">
      <div className="flex flex-col items-center">
        <div className="overflow-hidden">
          <motion.div
            variants={headerVariant1}
            initial="initial"
            animate="animate"
            className=""
          >
            <Header1 text="Jasmine" />
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            variants={headerVariant2}
            initial="initial"
            animate="animate"
            className=""
          >
            <Header1 text="Maduafokwa" />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={appear}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center md:justify-end gap-[5em] xs:gap-[8em] mt-5 md:pr-[6em]"
      >
        <Header6 text="Frontend Developer" />
        <Header6 text="UI Designer" />
      </motion.div>
      <div className="mt-6 flex flex-col-reverse md:flex-row gap-[8vw] items-start">
        <motion.div
          variants={flash}
          initial="initial"
          animate="animate"
          className="flex-1 flex justify-end origin-center"
        >
          <div className="w-fit" ref={star}>
            <StarSpin
              classNameSize="w-[30vw] xs:w-[20vw] sm:w-[15vw] md:w-[12vw]"
            />
          </div>
        </motion.div>
        <div className="md:flex-[2.5] lg:flex-[1.5] flex flex-col xs:flex-row xs:mt-[4vh] md:mt-0 gap-8">
          <motion.div
            variants={appear2}
            initial="initial"
            animate="animate"
            className="translate-x-[10vw] xs:translate-x-0 md:pl-0 max-w-[40vw] md:flex-[1.5] object-cover"
          >
            <Image
              src={HeroImage}
              alt="chairs and tables in a cozy room with plants"
              className="w-full h-full"
              placeholder="blur"
            />
          </motion.div>
          <motion.div
            variants={appear3}
            initial="initial"
            animate="animate"
            className="flex-[3] flex justify-end xs:items-end md:items-baseline xs:py-[4vh] md:py-0"
          >
            <div className="w-[80%] xs:w-full">
              <div className="w-[90%] sm:w-[80%] md:w-[60%]">
                <Paragraph text="My full stack development and design expertise allows me to build projects from the ground up, transforming ideas into powerful, user-centric solutions that elevate my clients&apos; brands and drive their success." />
              </div>
              <div className="mt-3">
                <MainButton text="Learn More" link="/about" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
