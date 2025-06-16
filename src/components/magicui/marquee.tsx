"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  children,
  className,
  pauseOnHover = false,
  reverse = false,
  vertical = false,
  repeat = 1,
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    const handleMouseEnter = () => {
      if (pauseOnHover) setIsPaused(true);
    };

    const handleMouseLeave = () => {
      if (pauseOnHover) setIsPaused(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden",
        vertical ? "h-[400px]" : "w-full",
        className
      )}
    >
      <div
        ref={contentRef}
        className={cn(
          "flex",
          vertical ? "flex-col" : "flex-row",
          isPaused ? "pause" : "animate-marquee",
          reverse && "reverse"
        )}
        style={{
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex",
              vertical ? "flex-col" : "flex-row",
              "min-w-full"
            )}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
} 