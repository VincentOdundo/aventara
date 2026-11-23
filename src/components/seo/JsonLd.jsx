/**
 * Server-rendered JSON-LD script block. Safely escapes `<` to prevent script-tag breakouts.
 */
export function JsonLd({ data, id }) {
  if (!data) return null;
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
