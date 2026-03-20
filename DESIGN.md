# Design System Specification: Neo-Brutalist Light / Bento Box

## 1. Overview & Creative North Star

### Creative North Star: "Vibrant & Unapologetic"

The Aventara Safaris design system has pivoted from a muted, traditional "Safari-Chic" aesthetic to a highly modern, energetic **Neo-Brutalist Light Bento Box** layout. This is designed to appeal to modern adventurers, tech-forward travelers, and those who appreciate cutting-edge digital experiences.

The UI is defined by massive typography, high-contrast bright colors, strict grid systems, and large, friendly border-radii (`2rem` / `32px`) on almost every block-level element. It feels less like a traditional travel agency and more like a high-end, disruptive startup.

---

## 2. Colors

Our palette abandons earth tones in favor of bright, pure, high-contrast hues that signify energy, action, and modernism.

### Strict Neo-Brutalist Palette

- **Base Layer (Surface):** Utterly clean White (`#ffffff`).
- **Surface Containers:** We use a very cool grey (`#f3f4f6` and `#fafafa`) for backgrounds holding our white cards, ensuring the white pops visually.
- **Aventara Sunset Orange (`primary` - `#f97316`):** The primary brand color. Unapologetic, vibrant, and used for massive hero elements and typography highlights.
- **Emerald Green (`tertiary` - `#10b981`):** Used strictly for high-conversion CTAs (Book Now, WhatsApp). It provides incredible contrast against the orange.
- **Cool Blue (`secondary` - `#0ea5e9`):** A secondary accent used for statistics and minor UI elements.
- **Text (`on_surface`):** Deep Slate (`#0f172a`), avoiding pure black to maintain a sophisticated contrast level.

### Glassmorphism & UI Layers

- **Glass Overlays:** Moving to a modern frosted glass aesthetic (`rgba(255, 255, 255, 0.85)` with a `24px` backdrop blur).
- **Dark Glass (for image overlays):** Used when placing text over bright safari imagery (`rgba(15, 23, 42, 0.8)`). 

---

## 3. Typography

The typographic tension is created by pairing a thick, geometric trendy Display font with an ultra-clean, functional sans-serif.

- **Display & Headlines (Syne):** Our unapologetic voice. Used for all major headlines (e.g., "WILD. FREE."). Syne is extremely geometric and slightly edgy. We type it often in all-caps or title-case with negative letter-spacing for impact.
- **Body & Labels (Inter):** The ultimate functional sans-serif for UI. It is highly legible, precise, and gets out of the way so the user can read itineraries and pricing easily.
- **Scale:** We over-index on size. Hero headlines reach up to `text-8xl`. If it isn't massive, it doesn't belong in the hero.

---

## 4. Elevation & Shapes ("Bento Box")

We have removed subtle, organic shapes in favor of strict, structural architecture.

- **The Primary Shape:** The `2rem` (32px) rounded rectangle is our core structural unit. Everything from hero containers to safari cards uses this shape.
- **The "Bento" Grid:** Information is chunked into distinct square or rectangular containers, laid out in a tight CSS Grid with small gaps (`gap-4`). This creates a dashboard-like feeling of total control and exploration.
- **Shadows:** We do not use muddy drop shadows. Shadows are clean, light, and architectural (`0 4px 20px rgba(0,0,0,0.05)`).
- **Interactions:** Cards hover with a physical "push" or "lift" effect (`scale-[0.98]` or `scale-110`).

---

## 5. Do's and Don'ts

### Do:
- **Use Massive Shapes:** Wrap content in large, colorful, heavily rounded containers.
- **Over-scale Text:** If you think a headline is big enough, make it one size larger.
- **Maintain Grid Rigidity:** Keep gaps tight and consistent across the bento sections.

### Don't:
- **Don't use subtle borders or borders with complex outlines.**
- **Don't use muddy or earthy tones like olive or beige** — stick to crisp whites, slates, and vivid neon-adjacent accents.
- **Don't use Serif fonts.** The brand is exclusively geometric sans-serif and grotesque typefaces.
