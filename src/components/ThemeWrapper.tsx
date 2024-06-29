'use client';

import { useTheme } from "@/components/ThemeContext";
import { ReactNode } from "react";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return (
    <div className={`${theme} transition-colors duration-200`}>
      {children}
    </div>
  );
}