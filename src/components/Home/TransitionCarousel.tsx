import React, { Fragment } from "react";
import { spectralBridgeRegular } from "@/fonts/font";

function TransitionCarousel({
  classNameRotate,
  array,
  className
}: {
  classNameRotate?: string;
  array: string[];
  className?: string;
}) {
  const allTerms: string[] = [];

  let x = 0;

  while (x < 8) {
    array.forEach((term) => {
      allTerms.push(term);
    });

    x++;
  }

  return (
    <div className={`${className}`}>
      <div
        className={`${classNameRotate} mt-auto px-6 w-[120%] overflow-hidden`}
      >
        <div className="flex items-center flex-nowrap gap-x-[6vw] w-fit animate-carousel-slower">
          {allTerms.map((term, i) => {
            return (
              <Fragment key={`${term}_${i}`}>
                <h4
                  className={`text-[12vw] leading-[1] uppercase tracking-tighter whitespace-nowrap`}
                >
                  {term}
                </h4>
                <h4
                  className={`text-[8vw] uppercase tracking-tighter whitespace-nowrap leading-[1]`}
                >
                  &#9910;
                </h4>
                {/* <StarSpin classNameSize="w-[6vw]" /> */}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TransitionCarousel;
