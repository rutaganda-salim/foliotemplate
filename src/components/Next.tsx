"use client";
import React, { useState, useEffect } from "react";
import DarkNext from "@/../../public/images/general/dark_next.png";
import LightNext from "@/../../public/images/general/light_next.png";
import Image from "next/image";
import { useTheme } from "next-themes";

function Next({ className }: { className: string }) {
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
        src={theme === "dark" ? DarkNext : LightNext}
        alt={`${theme} next arrow`}
        className="w-full h-full"
      />
    </div>
  );
}

export default Next;
