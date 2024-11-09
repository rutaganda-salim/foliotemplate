import React from "react";
import Header3 from "../Header3";

function ProcessParagraph() {
  const topline1 = "I seek to maintain a";
  const topline2 = "seamless experience for";
  const bottomline1 = "my clients, offering the best results";
  const bottomline2 = "that satisfies their business needs ";
  const bottomline3 = "and increases traffic.";
  return (
    <section className="my-[15vh]">
      <div className="w-[90%] mx-auto md:ml-auto md:mr-0">
        <div className="flex items-start gap-[8vw]">
          <p className="text-[12.5px] sm:text-[16px]">My mission</p>
          <div>
            <Header3 phrase={topline1} />
            <Header3 phrase={topline2} />
          </div>
        </div>
        <div>
          <Header3 phrase={bottomline1} />
          <Header3 phrase={bottomline2} />
          <Header3 phrase={bottomline3} />
        </div>
      </div>
    </section>
  );
}

export default ProcessParagraph;
