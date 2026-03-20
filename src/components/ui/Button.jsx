import React from "react";
import { Link } from "react-router-dom";

export function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 active:scale-95";

  const variants = {
    primary: "bg-primary text-on-primary hover:bg-primary-container",
    secondary: "bg-secondary text-on-secondary hover:bg-secondary-container",
    outline: "border border-outline text-primary hover:bg-surface-variant",
    ghost: "text-primary hover:bg-primary/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
