import Link from "next/link";

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
    "inline-flex items-center justify-center gap-2 font-body rounded-full transition-all duration-300 active:scale-95 cursor-pointer";

  const variants = {
    primary:
      "btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-bold hover:brightness-105",
    secondary:
      "btn-destinations bg-gradient-to-r from-midnight-black to-safari-brown text-sand-cream font-semibold border border-savannah-gold/30 hover:border-sunrise-yellow/60 hover:brightness-110",
    dark:
      "btn-destinations bg-gradient-to-r from-midnight-black to-safari-brown text-sand-cream font-semibold border border-savannah-gold/30 hover:border-sunrise-yellow/60 hover:brightness-110",
    outline:
      "btn-plan bg-transparent border-2 border-savannah-gold text-midnight-black font-bold hover:bg-savannah-gold/15 hover:border-sunset-orange",
    danger:
      "bg-crane-red text-sand-cream font-bold editorial-shadow hover:brightness-110",
    crane:
      "bg-crane-red text-sand-cream font-bold editorial-shadow hover:brightness-110",
    ghost:
      "text-safari-brown font-semibold hover:text-sunset-orange hover:bg-savannah-gold/15",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-3.5 text-lg",
  };

  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;
  const classes = `${baseStyles} ${variantClasses} ${sizeClasses} ${className}`;

  if (to) {
    return (
      <Link href={to} className={classes} {...props}>
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
