"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

type Props = {
  readonly children?: React.ReactNode;
};

export function Provider({children} : Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}