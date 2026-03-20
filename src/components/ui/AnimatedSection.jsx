import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function AnimatedSection({ children, className = "", animation = "up", delay = 0 }) {
  const { ref, isVisible } = useScrollAnimation();
  
  const animationClass = {
    up: "animate-on-scroll",
    left: "animate-on-scroll-left",
    right: "animate-on-scroll-right",
    scale: "animate-on-scroll-scale",
  }[animation] || "animate-on-scroll";

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function StaggerContainer({ children, className = "" }) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`stagger-children ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
