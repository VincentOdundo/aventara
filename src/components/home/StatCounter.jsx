"use client";
import { useCounter } from "../../hooks/useScrollAnimation";

export function StatCounter({ target, suffix = "", label }) {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-headline font-bold text-savannah-gold">
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="text-sm text-safari-brown mt-2 font-body font-medium">
        {label}
      </p>
    </div>
  );
}
