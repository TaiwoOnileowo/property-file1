import type React from "react";
interface DashboardHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({
  heading,
  text,
  children,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center mb-6 justify-between px-2">
      <div className="grid gap-1">
        <h1 className="font-bold text-3xl md:text-4xl font-helios-bold text-white">
          {heading}
        </h1>
        {text && <p className="text-lg text-gray-400">{text}</p>}
      </div>
      {children}
    </div>
  );
}
