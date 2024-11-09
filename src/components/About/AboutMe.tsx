import React from "react";
import Header3 from "../Header3";

function AboutMe() {
  const line1 = "I'm Jasmine Maduafokwa, a"
  const line2 = "full stack developer with a focus"
  const line3 = "on frontend technologies"
  const line4 = "combined with a passion for"
  const line5 = "user interface design and other"
  const line6 = "design mediums that allow me"
  const line7 = "to create digital, engaging"
  const line8 = "experiences."

  return (
    <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
      <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
        <p className={`text-[14px] md:text-[18px]`}>
          About me
        </p>
        <div className="flex-1">
          <Header3 phrase={line1} className="indent-[10%]"/>
          <Header3 phrase={line2}/>
          <Header3 phrase={line3}/>
          <Header3 phrase={line4}/>
          <Header3 phrase={line5}/>
          <Header3 phrase={line6}/>
          <Header3 phrase={line7}/>
          <Header3 phrase={line8}/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
