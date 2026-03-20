import React from "react";

export function Section({
  children,
  className = "",
  containerClass = "",
  id = "",
}) {
  return (
    <section id={id} className={`py-20 md:py-32 w-full ${className}`}>
      <div className={`max-w-screen-2xl mx-auto px-8 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
}
