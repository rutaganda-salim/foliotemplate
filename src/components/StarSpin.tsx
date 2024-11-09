"use client";
import React, { useState, useEffect } from "react";
import Dark from "../../public/images/general/dark_star.png";
import Light from "../../public/images/general/light_star.png";
import Image from "next/image";
import { useTheme } from "next-themes";

function StarSpin({ classNameSize, ref }: { classNameSize: string, ref?: React.MutableRefObject<null> }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${classNameSize} object-cover`} ref={ref}>
      <Image
        src={theme === "light" ? Light : Dark}
        alt={theme === "light" ? "light themed star" : "dark themed star"}
        className={`w-full h-full animate-spin-slow`}
      />
    </div>
  );
}

export default StarSpin;
