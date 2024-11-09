import React from "react";

function Banner({ text }: { text: string }) {
  return (
    <p
      className="text-[13px] 2xl:text-[20px] whitespace-nowrap border-[1px] px-2 py-[1px] border-lightText60 dark:border-darkText60 rounded-full"
    >
      {text}
    </p>
  );
}

export default Banner;
