# DESIGN_SYSTEM.md — Visual language & design system (v1)

Written: 2026-08-12. Guide step 3: define the visual language, color palette, typography, and continuation components.
Inputs: primary persona (Maya — "the Curious Saver," see TARGET_AUDIENCE.md) and the brand positioning ("You too can invest" — democratization with honesty, see PRODUCT_ANALYSIS.md).
Grounding: ui-ux-pro-max database — "Banking/Traditional Finance" palette family (trust navy + premium gold, WCAG-adjusted) and the "Corporate Trust" font pairing (Lexend + Source Sans 3). The auto-suggested "Fintech/Crypto" dark gold-purple palette was **deliberately rejected** — it is exactly the aesthetic this brand must not have.

---

## 1. Design principles

1. **Trust is the product — dark, calm, spacious.** Dark-first design (decided 2026-08-12, replacing the earlier light-first choice): deep navy-black, warm gold, generous space — **"a private bank at night," not a neon casino.** The differentiation from crypto sites isn't lightness; it's the *quality* of the dark: calm, airy, zero hype. A light theme remains specified as the secondary mode.
2. **Warm democratization, not corporate coldness.** The message is "you belong here." Warm gold accents, friendly rounded type, human photography/illustration — a modern bank lobby, not a trading terminal.
3. **The fine print on the front page.** Honesty is a visual feature: "as of" dates, source links, and red flags are designed as first-class UI, never hidden in footers.
4. **Calm over hype.** No rockets, no confetti, no countdowns, no neon gradients. Motion is subtle and purposeful. If an element could appear on a meme-coin site, it's out.
5. **Plain language everywhere.** Every technical term (attestation, custody, redemption) is always accompanied by a plain-language explanation. Jargon never stands alone.

## 2. Color psychology

The persona is a skeptical saver whose mental model of "safe money" is her bank — and whose fear is "crypto scam." The palette borrows the trust codes of *premium* banking — deep navy-black (vault, night sky, private banking) warmed with gold, which is simultaneously the premium-finance accent *and* the literal first product (tokenized gold). The brand also names the blockchain openly ("crypto's flexibility, real-world anchoring"), and the dark canvas supports that honesty — what separates us from crypto casinos is restraint: no neon, no glows, no purple gradients. Green is reserved for "open/positive" semantics, red for warnings — never decoratively.

## 3. Color palette

### Dark mode (default — decided 2026-08-12)

| Role | Hex | CSS variable | Usage |
|---|---|---|---|
| Background | `#0B1220` | `--bg` | Page background (deep navy-black) |
| Surface | `#151E31` | `--surface` | Cards, table rows; form fields `#101A2E` |
| Headings | `#F8FAFC` | `--ink` | H1–H3, emphasized values |
| Text | `#F1F5F9` | `--text` | Body text |
| Text-secondary | `#A3B0C5` | `--text2` | Captions, helper text |
| Primary (links/accents) | `#93C5FD` | `--primary` | Links, active tabs, section accents |
| Primary-strong | `#1E3A8A` | `--primary-strong` | Filled navy elements (step numbers, badges) with white text |
| Accent / CTA | `#F59E0B` | `--cta` | Primary buttons — **dark text `#0F172A`** (`--on-cta`), never white |
| CTA hover | `#FBBF24` | `--cta-hover` | Hover lightens (on dark, hover goes brighter) |
| Border | `#263349` | `--border` | Card and input borders, dividers |
| Destructive | `#F87171` | `--danger` | Errors, red flags |
| Footer | `#080D18` | — | Deepest layer |
| Shadow | `0 1px 3px rgba(0,0,0,.45), 0 4px 16px rgba(0,0,0,.35)` | `--shadow` | Soft depth, no glows |

### Light mode (secondary, specified for future toggle)

| Role | Hex |
|---|---|
| Background / Surface | `#F8FAFC` / `#FFFFFF` |
| Text / Secondary | `#0F172A` / `#475569` |
| Primary / Primary-strong | `#1E3A8A` (both) |
| Accent / CTA | `#B45309` (white text) · hover `#92400E` |
| Border | `#E2E8F0` · Destructive `#B91C1C` |

### Semantic tokens — the accessibility ladder (dark values)

The ladder is data, not decoration. Chips always combine **icon + label + color** (never color alone — WCAG 1.4.1, and ~8% of men are colorblind).

| Tier | Label (EN) | Text/icon | Chip background (dark) | Light-mode pair |
|---|---|---|---|---|
| 🟢 Open | "Open to everyone" | `#34D399` | `#0B2B22` | `#047857` / `#ECFDF5` |
| 🟡 Via issuer | "Via issuer (KYC)" | `#FCD34D` | `#2E2508` | `#854D0E` / `#FEF9C3` |
| 🔴 Restricted | "Restricted" | `#F87171` | `#341418` | `#B91C1C` / `#FEF2F2` |

Note: the emoji 🟢🟡🔴 are for documents and marketing copy; in product UI the chips use SVG dot + label (no emoji as UI icons).

## 4. Typography

Pairing: **Lexend** (headings — designed for reading proficiency; friendly but serious) + **Source Sans 3** (body — neutral, highly readable) + **IBM Plex Mono** (numbers & data: fees, dates, addresses — with `font-variant-numeric: tabular-nums` in tables).

```css
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
```

| Element | Mobile | Desktop | Weight | Line height |
|---|---|---|---|---|
| H1 | 32px / 2rem | 48px / 3rem | 700 (Lexend) | 1.15 |
| H2 | 24px / 1.5rem | 32px / 2rem | 600 (Lexend) | 1.2 |
| H3 | 20px / 1.25rem | 24px / 1.5rem | 600 (Lexend) | 1.3 |
| Body | 16px / 1rem | 17px | 400 (Source Sans 3) | 1.55 |
| Small / captions | 14px | 14px | 400 | 1.5 |
| Data (tables, figures) | 14–15px | 15px | 400–500 (Plex Mono) | 1.45 |

Rules: body never below 14px; line length 60–75 characters (`max-width: 65ch` on prose); headings in sentence case (Title Case reads salesy); numbers in running text may use Plex Mono for scannability ("from **$50**").

## 5. Spacing, layout, shape

- **Base unit 4px.** Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.
- **Mobile-first.** Breakpoints: 375 / 768 / 1024 / 1440. Content max-width 1120px; prose max-width 65ch.
- **Section rhythm:** 48px vertical on mobile, 80–96px on desktop. Air is a trust signal.
- **Corner radius:** 12px cards and inputs, 10px buttons, 999px chips. Soft but not toy-like.
- **Elevation:** one soft shadow only — `0 1px 3px rgba(15,23,42,.06), 0 4px 16px rgba(15,23,42,.06)`. No glows, no neon.

## 6. Core components

- **Primary button (CTA):** solid `--color-cta`, white text, 10px radius, min-height 48px (44px absolute minimum), full-width on mobile. One primary CTA per screen. Label = verb + outcome ("Join the waitlist"), never "Submit."
- **Secondary button:** navy outline on surface, same dimensions.
- **Token card:** surface, 12px radius, 16–20px padding; top row: asset icon + token name + ladder chip; middle: 2–3 schema facts in plain language; bottom: "as of" date + source link. Whole card tappable, `cursor: pointer`, visible hover/focus state.
- **Comparison table:** first column sticky on mobile (horizontal scroll inside the table container only), zebra rows `#F8FAFC`/white, numbers in Plex Mono right-aligned, header row Lexend 600. Every cell sourced; a footnote row links methodology.
- **Red-flag callout:** left border 3px `--color-danger`, background `#FEF2F2`, icon + plain-language rule ("No attestation published for 94 days — the rule: over 90 is flagged"). Never a naked exclamation mark.
- **Form fields:** visible labels above the field (never placeholder-only), 48px height, inline validation on blur with the error next to the field, helper text in `--color-text-2`.
- **Trust strip (footer of every page):** methodology link, "research, not investment advice" disclaimer, data "as of" timestamp.

## 7. Iconography & imagery

- Icons: **Lucide** (outline, 1.5px stroke, 20/24px). No emoji as UI icons.
- Imagery: real assets (vault gold, actual houses) and warm human photography — never rocket ships, coins raining, or 3D blockchain cubes. Illustration style if used: flat, warm-toned, human-centered.

## 8. Motion

- Durations 150–300ms, `ease-out` for entries, `ease-in` for exits. Micro-interactions only: button hover, card lift 2px, chip fade-in, smooth accordion.
- Scroll reveals: single subtle fade-up (no stagger choreography). Numbers may count up once on first view (600ms max) — that's the ceiling of playfulness.
- `prefers-reduced-motion: reduce` disables all non-essential motion.

## 9. UX guidelines critical for this persona

1. **Translate, don't simplify away (Maya):** every term keeps its real name plus a one-line plain explanation — "Attestation — an independent accountant's periodic check that the gold is really there." Builds competence, not dependence.
2. **Trust microcopy at every decision point:** near every CTA and every data point — where the data comes from, when it was checked, what we don't know. "Almost no barriers," never "no barriers."
3. **Low cognitive load:** one idea per section, one primary action per screen, progressive disclosure ("See the full schema" expands). The landing page must be understood in one thumb-scroll.
4. **Data density with legibility (Daniel):** comparison tables are the power feature — tabular numbers, sticky headers, sortable columns; depth available but folded by default.
5. **Never color alone; contrast ≥ 4.5:1 text, ≥ 3:1 UI; visible focus rings; 44×44px touch targets with 8px gaps.**

## 10. Anti-patterns (hard bans)

Neon/casino aesthetics (the brand is dark, but *calm* dark — no glows, no purple-blue web3 gradients, no glassmorphism); hype language and urgency timers; emoji as icons; gray-on-gray text (verify 4.5:1 on every dark surface); placeholder-only forms; recommendation styling ("Best pick!") anywhere near data — the objectivity discipline applies to pixels too.

---

*Next (guide step 4): three mobile design-concept variants built on this language, scored by the Audience Fit engine until ≥ 90; the winning variant's language is then extracted into UPDATED_DESIGN_SYSTEM.md (step 5).*
