import Image from "next/image";
import { PHOTO_META } from "../../data/photos";

/**
 * Next.js Image wrapper that keeps the wildlife subject framed cleanly across
 * viewports using each photo's registered focal point (`focus`).
 */
export function Photo({
  src,
  alt,
  focus,
  fill,
  sizes,
  priority,
  fetchPriority,
  decoding: _decoding,
  loading: _loading,
  className = "",
  style,
  ...rest
}) {
  const meta = PHOTO_META.get(src);
  const imgSrc = meta?.image ?? src;
  const resolvedAlt = alt ?? meta?.alt ?? "";
  const resolvedFocus = focus ?? meta?.focus ?? "50% 50%";
  const isPriority = Boolean(priority || fetchPriority === "high");
  const isFill = Boolean(fill || /\b(?:absolute|inset-0)\b/.test(className));
  const hasBlur = Boolean(typeof imgSrc === "object" && imgSrc?.blurDataURL);

  if (isFill) {
    return (
      <Image
        src={imgSrc}
        alt={resolvedAlt}
        fill
        sizes={sizes || "100vw"}
        priority={isPriority}
        placeholder={hasBlur ? "blur" : "empty"}
        className={`object-cover ${className}`}
        style={{ objectPosition: resolvedFocus, ...style }}
        {...rest}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={resolvedAlt}
      width={typeof imgSrc === "object" ? imgSrc.width || 1200 : 1200}
      height={typeof imgSrc === "object" ? imgSrc.height || 800 : 800}
      sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
      priority={isPriority}
      placeholder={hasBlur ? "blur" : "empty"}
      className={`object-cover ${className}`}
      style={{ objectPosition: resolvedFocus, ...style }}
      {...rest}
    />
  );
}

export default Photo;
