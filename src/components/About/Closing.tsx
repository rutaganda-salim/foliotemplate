"use client";
import React from "react";
import Header3 from "../Header3";
import { easeInOut, motion } from "framer-motion";

function Closing() {
  const line1 = "When I'm not busy coding, I enjoy";
  const line2 = "going on solo dates, from restaurants";
  const line3 = "to the movies, watching anime as a";
  const line4 = "longtime enthusiast, and listening to";
  const line5 = "music. Here's some music that I listen to";
  const line6 = "that helps me get into the zone.";

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="mt-[8vh] mb-[4vh] sm:my-[5vh] md:my-[8vh]">
      <Header3 phrase={line1} className="indent-[10%]" />
      <Header3 phrase={line2} />
      <Header3 phrase={line3} />
      <Header3 phrase={line4} />
      <Header3 phrase={line5} />
      <Header3 phrase={line6} />

      <motion.div
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex mt-10"
      >
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-[2]">
          <iframe
            title="John Mitchell's Playlist"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/34nezoDEAzvnCSREPqaurN?utm_source=generator"
            width="100%"
            height="152"
            // frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}

export default Closing;
