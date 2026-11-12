# Cima Brava Adventures — Official Design System Specification (`theme.png`)

## 1. Overview & Creative North Star

### Creative North Star: *"Wild by Nature. Guided by Heart."*

The **Cima Brava Adventures** design system embodies the golden warmth, timeless elegance, and raw majesty of the East African savannah at sunrise and sunset. Anchored strictly to `theme.png`, it uses **only** the 7 official brand colors via `@theme` design tokens, pairing classic editorial authority (`Trajan Pro` / `Cinzel`) with modern digital readability (`Inter` / `Montserrat`).

---

## 2. Official Color Palette (`theme.png`)

| Swatch Name | Hex Code | CSS Token | Tailwind Utility Prefix | Role & Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Midnight Black** | `#0A0906` | `--color-midnight-black` | `*-midnight-black` | Deepest dark surface, primary text on light/gold surfaces, footer/hero backdrop |
| **Safari Brown** | `#2A1500` | `--color-safari-brown` | `*-safari-brown` | Secondary dark CTA surface, rich espresso card/header surface, secondary body text |
| **Sunset Orange** | `#C2410C` | `--color-sunset-orange` | `*-sunset-orange` | Warm burnt-orange accent, gradient stop, active tags & badges |
| **Savannah Gold** | `#F59E0B` | `--color-savannah-gold` | `*-savannah-gold` | Primary brand gold, outline CTA border (`#F59E0B`), primary gradient bottom stop |
| **Sunrise Yellow** | `#FFD34D` | `--color-sunrise-yellow` | `*-sunrise-yellow` | Luminous golden-yellow highlight, primary CTA top stop, script underline brush stroke |
| **Sand Cream** | `#FDF6E3` | `--color-sand-cream` | `*-sand-cream` | Primary page canvas (`bg-surface` / `bg-sand-cream`), text on dark Safari Brown/Midnight Black |
| **Crane Red** | `#D91E18` | `--color-crane-red` | `*-crane-red` | High-urgency accents, limited-spot alerts, error states, and Crowned Crane crest highlight |

### Semantic Token Mapping (`src/index.css`)
All semantic tokens map strictly via `var(--color-...)` to the 7 official palette tokens above:
- `--color-primary`: `var(--color-savannah-gold)` (`#F59E0B`)
- `--color-primary-container`: `var(--color-sunrise-yellow)` (`#FFD34D`)
- `--color-on-primary`: `var(--color-midnight-black)` (`#0A0906`)
- `--color-on-primary-container`: `var(--color-safari-brown)` (`#2A1500`)
- `--color-secondary`: `var(--color-sunset-orange)` (`#C2410C`)
- `--color-secondary-container`: `var(--color-sunrise-yellow)` (`#FFD34D`)
- `--color-on-secondary`: `var(--color-sand-cream)` (`#FDF6E3`)
- `--color-tertiary`: `var(--color-safari-brown)` (`#2A1500`)
- `--color-tertiary-container`: `var(--color-sand-cream)` (`#FDF6E3`)
- `--color-on-tertiary`: `var(--color-sand-cream)` (`#FDF6E3`)
- `--color-error`: `var(--color-crane-red)` (`#D91E18`)
- `--color-background` / `--color-surface`: `var(--color-sand-cream)` (`#FDF6E3`)
- `--color-surface-dim`: `var(--color-midnight-black)` (`#0A0906`)
- `--color-on-surface` / `--color-on-background`: `var(--color-midnight-black)` (`#0A0906`)
- `--color-on-surface-variant`: `var(--color-safari-brown)` (`#2A1500`)
- `--color-outline`: `var(--color-savannah-gold)` (`#F59E0B`)
- `--color-outline-variant`: `var(--color-safari-brown)` (`#2A1500`)

---

## 3. Typography (`theme.png`)

### Heading / Logo Font: **Trajan Pro**
- **Character:** Bold · Elegant · Timeless
- **CSS Stack (`--font-headline`):** `"Trajan Pro", "Cinzel", "Cormorant Garamond", Georgia, serif`
- **Usage:** Hero titles, section headings, destination titles, brand wordmark, and editorial callouts.

### Body & UI Font: **Inter / Montserrat**
- **Character:** Clean · Modern · Readable
- **CSS Stack (`--font-body` / `--font-label`):** `"Inter", "Montserrat", sans-serif`
- **Usage:** Body copy, itineraries, pricing tables, navigation links, buttons, and metadata badges.

### Script / Signature Accent Font: **Caveat**
- **Character:** Expressive · Handcrafted · Warm
- **CSS Stack (`--font-script`):** `"Caveat", "Satisfy", cursive`
- **Usage:** Signature brand motto *"Wild by Nature. Guided by Heart."* paired with a Sunrise Yellow (`var(--color-sunrise-yellow)`) brush-stroke underline.

---

## 4. UI Components (Website) from `theme.png`

### 1. Primary CTA — `"Explore Trips →"` (`.btn-explore`)
- **Shape:** Pill (`rounded-full`)
- **Background:** Golden vertical gradient `linear-gradient(180deg, var(--color-sunrise-yellow) 0%, var(--color-savannah-gold) 100%)`
- **Typography:** Bold `Inter`/`Montserrat`, `var(--color-midnight-black)` text with right arrow icon (`→`)

### 2. Secondary Dark CTA — `"View Destinations →"` (`.btn-destinations`)
- **Shape:** Pill (`rounded-full`)
- **Background:** Rich Safari Brown horizontal gradient `linear-gradient(90deg, var(--color-midnight-black) 0%, var(--color-safari-brown) 100%)`
- **Typography:** Semi-bold/Bold `Inter`/`Montserrat`, `var(--color-sand-cream)` text with right arrow icon (`→`)

### 3. Outline CTA — `"Plan Your Adventure"` (`.btn-plan`)
- **Shape:** Pill (`rounded-full`)
- **Background:** Transparent or `bg-sand-cream`
- **Border:** `1.5px solid var(--color-savannah-gold)`
- **Typography:** Bold `Inter`/`Montserrat`, `text-midnight-black` (on light surfaces) or `text-sand-cream` (on dark surfaces)

### 4. Media CTA — `"Watch Our Story"` (`.btn-story-play`)
- **Play Badge:** Circular button (`rounded-full`) with sunrise-to-sunset gradient `linear-gradient(135deg, var(--color-sunrise-yellow) 0%, var(--color-savannah-gold) 55%, var(--color-sunset-orange) 100%)` and solid `text-midnight-black` play triangle.
- **Label:** Bold `"Watch Our Story"` text in `text-midnight-black` or `text-sand-cream`.

### 5. Hero / Banner Card (`"Wild by Nature. Guided by Heart."`)
- **Container:** Rounded panoramic card (`rounded-2xl` / `rounded-3xl`) featuring local East African safari photography from `src/assets/` with a rich `from-midnight-black` / `via-safari-brown` vignette.
- **Quote Overlay:** Script typography (`font-script`, `text-sand-cream`) reading *"Wild by Nature. Guided by Heart."* underscored by a hand-drawn `text-sunrise-yellow` brush stroke.

---

## 5. Brand Assets & Contact Links

- **Logo (`/cima_logo.svg`):** Uses an SVG luminance mask over embedded artwork. Display on `bg-midnight-black` or `bg-safari-brown` dark surfaces so the white emblem and typography remain crisp.
- **Local Safari Photography (`src/assets/**`):** Always use the repository's authentic local safari photos in `src/assets/*.jpeg`, `src/assets/*.jpg`, and `src/assets/nairobi/*.jpeg`.
- **Email:** `cimabravaadventures@gmail.com`
- **TikTok:** `https://www.tiktok.com/@cima_brava_adventures`
- **Instagram:** `https://www.instagram.com/cima_brava_adventures?mdxt=MWQ1OHpkOWQ1bHZoaQ%3D%3D&utm_source=qr`
