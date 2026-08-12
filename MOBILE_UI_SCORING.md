# MOBILE_UI_SCORING.md — Step 4: mobile concepts & Audience Fit scoring

Written: 2026-08-12. Guide step 4: three mobile design concepts for the core page (waitlist landing page), scored by the Target Audience Fit engine (0–100 weighted), iterated until ≥ 90.
All variants implement DESIGN_SYSTEM.md (Lexend/Source Sans 3/Plex Mono) and were verified live in a browser at 375×812.
**Addendum 2026-08-12 (after scoring):** per an explicit product decision, all three variants were re-skinned **dark-first** ("a private bank at night" — deep navy-black + warm gold, same tokens as the updated DESIGN_SYSTEM.md), the H1 was replaced with the approved headline ("The flexibility of crypto, anchored in the real world"), and the app-definition subheadline was added. Structure, components, and interactions — the things the scores measured — are unchanged.
**Working brand name: "Everyvest" — placeholder, open decision.**

## The three concepts

| | Concept & vibe | Above the fold | Signature elements | File |
|---|---|---|---|---|
| **A** | **"The Honest Bank"** — calm, classic, linear narrative | H1 ("You too can invest…") + value sub + fact chips; form card immediately after | Trust fact-strip, 3 asset cards with ladder chips, comparison table, "When the old way wins" section, FAQ | `design-concepts/variant-a.html` |
| **B** | **"Proof First"** — show the product before asking for anything | Compact H1 + a **real token card** (PAXG) with plain-language schema rows; asset tabs (Gold/Real estate/Bonds); sticky bottom CTA | Interactive catalog preview incl. an honest 🔴 "Restricted" card, comparison table with a "when the ETF wins" row, Guardian teaser | `design-concepts/variant-b.html` |
| **C** | **"Choose Your Path"** — conversational, one question | H1 "What would you like to own?" + three large choice cards (Gold / Real estate / Everything) | Choice reveals a tailored panel + prefills the segmentation question in the form; per-path "Honesty first" notes | `design-concepts/variant-c.html` |

## Scoring — round 1

Criteria and weights per the assignment: Usability & Ergonomics 30% · Cognitive Load & Clarity 25% · CRO & CTA 25% · Brand & Emotional Fit 20%.

| Criterion (weight) | A | B | C |
|---|---|---|---|
| Usability & Ergonomics (30%) | 84 — solid targets/labels, but no sticky CTA and the comparison table's payoff column ("Gold token") requires horizontal scroll | 90 — sticky thumb-zone CTA, 44px+ tabs, sticky first table column; row label "What backs it" wrapped awkwardly; no desktop header CTA | 87 — large 64px choice targets, minimal page; content gated behind a required interaction |
| Cognitive Load & Clarity (25%) | 88 — clean linear story, one idea per section; text-heavy in places | 85 — real data up front is credible but denser for a novice; ladder grades appear before they're explained | 91 — lowest load: one question, chunked reveal, tailored content |
| CRO & CTA (25%) | 82 — form near fold + header CTA, but nothing persistent while scrolling | 89 — always-visible CTA; proof-before-ask builds the trust that converts *this* skeptical persona | 84 — engagement-first helps commitment and yields segmentation data, but a non-clicking visitor sees little value; no persistent CTA |
| Brand & Emotional Fit (20%) | 86 — fully on-brand trust banking; somewhat generic fintech look | 92 — literally "the fine print on the front page": an honest catalog card, including what's *restricted*, before any ask | 89 — warmest and most personal ("you too"); honesty notes per path |
| **Weighted total** | **85** | **89** | **88** |

**Winner: Variant B ("Proof First"), 89 — below the 90 threshold → optimization loop.**

## Optimization loop (B → v2)

Fixes applied, each targeting a scored weakness:

1. **Ladder legend added under the hero sub** (three labeled dots: Open / Via issuer / Restricted) — grades are now explained before the first card. *(Cognitive Load)*
2. **Desktop header CTA added** (mobile keeps the sticky bottom bar; no duplication). *(CRO)*
3. **Segmentation question merged in from Variant C** — "What matters most to you? (optional)" select in the form; feeds the waitlist-audience split measurement defined in TARGET_AUDIENCE.md. *(CRO + research value)*
4. **Row label fixed** ("What backs it" → "Backed by") — no more two-line wrap; select styling unified with inputs. *(Usability)*
5. **Visible `:focus-visible` outlines on tabs, buttons, and links.** *(Usability/accessibility)*

## Scoring — round 2 (B v2)

| Criterion (weight) | B v2 | What changed the score |
|---|---|---|
| Usability & Ergonomics (30%) | 92 | Label wrap fixed, focus states, desktop CTA |
| Cognitive Load & Clarity (25%) | 89 | Legend explains the ladder before the data |
| CRO & CTA (25%) | 92 | CTA persistent on all breakpoints; optional segmentation adds research value at negligible friction |
| Brand & Emotional Fit (20%) | 93 | Unchanged core + legend reinforces the honesty language |
| **Weighted total** | **91.4 → 91** | **≥ 90 — threshold passed** ✅ |

**Verified in browser (375×812):** tab switching works, panels render, sticky CTA sits in the thumb zone, form labels visible, table scrolls inside its container only.

## Strengths & watch-outs of the chosen design

- **Core strength:** proof-before-ask. The skeptical primary persona (Maya) is shown the honest product — including a 🔴 "Restricted" asset — before any email is requested. That *is* the brand.
- **Watch-out 1:** sample data on the landing page must be real and verified before launch (it will be quoted back at us).
- **Watch-out 2:** for the non-crypto persona the PAXG ticker means nothing — the plain-language rows carry the load; keep them first-person and short.
- **Carried into step 5:** legend chips, token-card row pattern, sticky CTA bar, honest-table row ("when the ETF wins"), segmentation select.

## Next

Step 5 — extract the winning design's language into UPDATED_DESIGN_SYSTEM.md and extend to the remaining pages (About/How it works, token/comparison pages, waitlist/thanks) — **after human approval of the threshold score** (per the guide: extension starts only after sign-off).
