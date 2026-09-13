"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}

export default function ScrollReveal({ as = "section", className = "", children }: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as any;

  return (
    <Tag ref={ref} className={`scroll-reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
