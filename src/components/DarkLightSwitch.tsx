'use client'
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

function DarkLightSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }

  return (
    <div className="scale-95 xs:scale-100 2xl:scale-125 p-1 flex items-center gap-1 border-[1px] border-lightText dark:border-darkText rounded-full">
      <div onClick={() => setTheme('light')} className="cursor-pointer rounded-full p-1 bg-lightText dark:bg-transparent">
        <SunIcon className="text-lightBg dark:text-darkText w-5"/>
      </div>
      <div onClick={() => setTheme('dark')} className="cursor-pointer rounded-full p-1 bg-transparent dark:bg-darkText">
        <MoonIcon className="text-lightText dark:text-darkBg w-5"/>
      </div>
    </div>
  );
}

export default DarkLightSwitch