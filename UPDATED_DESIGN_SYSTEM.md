# UPDATED_DESIGN_SYSTEM.md — Final design system, extracted from the winning design

Written: 2026-08-12. Guide step 5: the winning mobile design (Variant B "Proof First", score 91, human-approved) is the source of truth; this document extracts its language and extends it to every remaining page.
Supersedes DESIGN_SYSTEM.md (kept as history). Working brand name: **Everyvest** (open decision).

---

## 1. Brand snapshot

- **H1 / brand line:** "The flexibility of crypto, anchored in the real world."
- **App definition (hero subline, one breath):** "Everyvest shows you which real assets — gold, real estate, commodities — you can actually buy as tokens on the blockchain, compares them in plain language, and guides your purchase end to end. No crypto background needed."
- **Three verbs = three product phases:** Discover → Compare → Buy.
- **Voice rules:** name the blockchain openly, always paired with what it enables; honesty as a feature ("when the ETF wins — we say so"); no hype, no "recommended."
- **Visual metaphor:** a private bank at night — deep navy-black, warm gold, calm. Never neon, never casino.

## 2. Color palette (final HEX — dark, the default and only launch mode)

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#0B1220` | Page background |
| `--surface` | `#151E31` | Cards, table cells, header |
| `--surface-2` | `#101A2E` | Form fields, table zebra (`#111B30`), inner wells (`#1B2337`) |
| `--ink` | `#F8FAFC` | Headings, key values |
| `--text` | `#F1F5F9` | Body |
| `--text2` | `#A3B0C5` | Captions, helper, meta |
| `--primary` | `#93C5FD` | Links, active tab text/border, section accents |
| `--primary-strong` | `#1E3A8A` | Filled navy elements (step numbers, tags) with white text |
| `--selected-bg` | `#1C2A47` | Active tab/choice fill |
| `--cta` | `#F59E0B` | Primary buttons; **text on CTA is always `#0F172A`** (`--on-cta`), never white |
| `--cta-hover` | `#FBBF24` | Hover (brighter, not darker, on dark) |
| `--border` | `#263349` | Borders, dividers |
| `--danger` | `#F87171` | Errors, red-flag accents |
| `--footer` | `#080D18` | Footer (deepest layer) |
| `--shadow` | `0 1px 3px rgba(0,0,0,.45), 0 4px 16px rgba(0,0,0,.35)` | Only elevation; no glows |

**Accessibility-ladder semantic tokens** (chips = SVG dot + label + tint; never color alone):

| Tier | Text/icon | Chip bg |
|---|---|---|
| Open to everyone | `#34D399` | `#0B2B22` |
| Via issuer (KYC) | `#FCD34D` | `#2E2508` |
| Restricted | `#F87171` | `#341418` |

Red-flag callout: bg `#341418`, right/left border 3px `#F87171`. Positive ("no open flags"): bg `#0B2B22`, border `#34D399`.

## 3. Typography (as implemented in B)

Fonts: **Lexend** (headings, buttons, table headers) · **Source Sans 3** (body) · **IBM Plex Mono** (numbers, dates, tickers, addresses; `tabular-nums` in tables).

| Element | Mobile | Desktop | Weight / family | Line height |
|---|---|---|---|---|
| H1 | 30px | 44px | 700 Lexend | 1.15 |
| H2 | 24px | 30px | 600 Lexend | 1.2 |
| H3 / card title | 17px | 17–20px | 600 Lexend | 1.3 |
| Body / hero sub | 16–16.5px | 16.5–17px | 400 Source Sans 3 | 1.55 |
| Data rows, table | 14.5px | 14.5–15px | 500–600 values, 400 keys | 1.45 |
| Meta ("as of", legend, micro) | 12.5–13.5px | same | 400 | 1.5 |

Sentence case everywhere. Prose `max-width: 65ch`; content `max-width: 1120px`.

## 4. Core components (extracted from B)

- **Primary button:** `--cta` fill, `--on-cta` text, Lexend 600 16px, min-height 48px, radius 10px, full-width on mobile; hover `--cta-hover` (200ms ease-out). One per screen.
- **Sticky mobile CTA bar:** fixed bottom, `--surface` bg, top border, 12px padding, shadow up; hidden ≥768px where the header CTA takes over. Body gets `padding-bottom:76px`.
- **Header:** sticky, `--surface`, 52px, logo (Lexend 700; "vest" in `--cta`), meta "Data as of `<mono date>`", desktop-only CTA button.
- **Token card** (the signature component): `--surface`, radius 12px, 18px padding. Head: 36px asset disc (gradient) + name + ticker (mono, `--text2`) + ladder chip. Body: key–value rows separated by `--border` (key `--text2` left, value `--ink` 600 right). Then: flag callout (red or positive), plain-language explainer well (`#1B2337`, 13px), footer row "As of `date`" + "Every fact → its source" link.
- **Tabs (asset switcher):** pill buttons, min-height 44px, 1.5px border; active = `--primary` text/border on `--selected-bg`. Always preceded by the **ladder legend** (three labeled dots).
- **Comparison table:** wrapper `overflow-x:auto`, radius 12px border; first column sticky (`--surface`, `--ink` 600); zebra `#111B30`; winning values in `--green` 600; numbers mono right-aligned; last row reserved for an honesty row ("Better for pension money — usually the ETF"); methodology footnote under every table.
- **Forms:** labels above (600, 14px), fields 48px `#101A2E` with `--border`, focus ring `rgba(147,197,253,.35)`; optional segmentation select ("What matters most to you?"); success status chip green tint; error text `--danger` next to the field.
- **Trust strip (footer):** `--footer` bg; brand line, links (`#93C5FD`): Methodology · Sources · Contact; legal line 13px `#94A3B8`: "research, not investment advice…".
- **Focus:** `:focus-visible` outline `rgba(147,197,253,.45)` 3px, offset 2px — on all interactive elements.
- **Icons:** Lucide outline 1.5px, 20/24px; ladder dots are inline SVG circles. No emoji in UI.
- **Motion:** 150–300ms micro only; card hover lift 2px; `prefers-reduced-motion` respected.

## 5. Page blueprints (extending B to the full site)

Every page ends with the trust strip; every data view carries "as of" + source links; one primary CTA per screen (waitlist at launch).

### 5.1 Landing (exists — Variant B)
Hero (H1 + definition + legend) → live token card w/ tabs → "token vs the usual way" table → three-pillar row (blockchain-is-the-point / no-recommendations / Guardian) → waitlist form → footer. Sticky CTA on mobile.

### 5.2 Domain catalog page (e.g., /gold)
- Header breadcrumb (Domain), H2 + one-line domain summary in plain language.
- Ladder summary bar: counts per tier ("4 open · 2 via issuer · 3 restricted").
- Grid of token cards (the B component, condensed to 3 rows) — sorted by tier, then name; filter chips: tier, country availability.
- Bottom: domain-level "token vs the usual way" table + methodology link.

### 5.3 Token page (e.g., /gold/paxg)
- Full token card as page header (disc, name, ticker, chip, "as of").
- Sections in order: **What backs it** (custodian, location, attestation cadence + auditor + last date) → **Your rights** (redemption terms, minimums) → **Costs** (all-in per buying route, mono table) → **Red flags** (open flags as callouts; else positive callout + rule list link) → **How to buy** (🟢 direct walkthrough / 🟡 "Start at the issuer" guided steps) → **Documents** (source list, each linked + dated).
- Every schema field: value + plain-language one-liner beneath (the "explain well" pattern).

### 5.4 Comparison page (per domain)
- Full-width comparison table: tokens as columns, schema fields as rows; first column (field names) sticky; mobile: swipeable columns, token mini-headers (disc + ticker + chip) frozen.
- Row groups match token-page sections. No "winner" styling — green highlights only objective bests (lowest fee, most recent attestation).

### 5.5 About / Methodology (the trust page)
- H2 "How we work"; the three verbs; admission criteria (accessibility, public documents); the red-flag rulebook, published in full; "money never touches the data" revenue principles; who we are; disclaimer long-form.

### 5.6 Waitlist / thank-you
- Thank-you: confirmation, "what happens next" (one email at launch), share link, and the segmentation question if skipped earlier.

### 5.7 Global navigation
- **Mobile:** header (logo + CTA) + hamburger → full-screen sheet (`--bg`), links: Gold · Real estate · Commodities · Methodology · About; sticky CTA bar persists on content pages until form submitted.
- **Desktop:** header inline nav (domains left, Methodology/About right, CTA button far right); footer columns: Domains / Company / Legal.
- Scroll: sticky header always; no scroll-jacking; back-to-top after 3 screens on long token pages.

## 6. Hard bans (unchanged)

Neon/glow/purple web3 gradients; hype language, urgency timers; emoji as icons; gray-on-gray below 4.5:1; placeholder-only forms; "recommended" styling near data; white text on the gold CTA.

---

*Next (guide step 6): build the production landing page (waitlist.html) from Variant B, wire the form to Google Sheets via Apps Script, add GA4, deploy — requires the user's Google account for Sheet/Apps Script/GA4 setup.*
