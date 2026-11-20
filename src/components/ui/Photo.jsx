import React from "react";
import { PHOTO_META } from "../../data/photos";

/**
 * <img> that keeps the subject in frame. Looks the photo up in the registry
 * (src/data/photos.js) and applies its focal point as object-position, so the
 * same picture stays correctly cropped in a wide hero, a square card and a
 * narrow phone viewport. `alt` and `focus` can still be overridden per use.
 */
export function Photo({ src, alt, focus, className = "", style, ...rest }) {
  const meta = PHOTO_META.get(src);
  return (
    <img
      src={src}
      alt={alt ?? meta?.alt ?? ""}
      className={`object-cover ${className}`}
      style={{ objectPosition: focus ?? meta?.focus ?? "50% 50%", ...style }}
      {...rest}
    />
  );
}

export default Photo;
