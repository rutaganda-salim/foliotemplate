"use client";
import React, { useState, useEffect } from "react";
import DarkPrev from "@/../../public/images/general/dark_prev.png";
import LightPrev from "@/../../public/images/general/light_prev.png";
import Image from "next/image";
import { useTheme } from "next-themes";

function Prev({ className }: { className: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${className} object-cover`}>
      <Image
        src={theme === "dark" ? DarkPrev : LightPrev}
        alt={`${theme} next arrow`}
        className="w-full h-full"
      />
    </div>
  );
}

export default Prev;
