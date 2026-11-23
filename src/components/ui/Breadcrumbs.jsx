import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * Visible breadcrumb trail. Matches breadcrumbLd() 1:1.
 * `tone="light"` is for use over dark hero images.
 */
export function Breadcrumbs({ crumbs, tone = "dark", className = "" }) {
  if (!crumbs || crumbs.length < 2) return null;
  const light = tone === "light";
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-body ${
          light ? "text-sand-cream/85" : "text-safari-brown/75"
        }`}
      >
        {crumbs.map((crumb, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {last ? (
                <span
                  aria-current="page"
                  className={`font-bold ${
                    light ? "text-sunrise-yellow" : "text-safari-brown"
                  }`}
                >
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    href={crumb.path}
                    className={`underline-offset-2 hover:underline ${
                      light ? "hover:text-sand-cream" : "hover:text-sunset-orange"
                    }`}
                  >
                    {crumb.name}
                  </Link>
                  <ChevronRight size={12} aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
