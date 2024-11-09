import React from "react";

function Loading({ classNameSize }: { classNameSize: string }) {
  return (
    <div
      className={`${classNameSize} mx-auto rounded-full border-4 border-transparent group-hover:border-t-lightBg dark:group-hover:border-t-darkBg border-t-lightText dark:border-t-darkText duration-300 animate-spin`}
    ></div>
  );
}

export default Loading;
