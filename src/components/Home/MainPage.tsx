"use client";

import React, { useState, useEffect } from "react";
import PreLoading from "./PreLoading";
import Hero from "./Hero";
import Services from "./Services";
import Works from "./Works";
import About from "./About";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ProcessTransition from "./ProcessTransition";
import Process from "./Process";
import FooterTransition from "./FooterTransition";
import ProcessParagraph from "./ProcessParagraph";

function MainPage() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        } else return prev - 1;
      });
    }, 1000);
  }, []);

  return (
    <>
      {count > 0 ? (
        <PreLoading count={count} />
      ) : (
        <div className="px-[6vw]">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Works />
            <Services />
            <ProcessParagraph/>
            <ProcessTransition />
            <Process/>
            <FooterTransition/>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default MainPage;
