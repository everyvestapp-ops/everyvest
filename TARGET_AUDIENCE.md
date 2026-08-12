# TARGET_AUDIENCE.md — Target-audience segmentation (RWA concept)

Written: 2026-08-12. Guide step 2: target-audience segmentation (Ideation).
Based on PRODUCT_ANALYSIS.md (v2) and the decisions in HANDOFF.md. The product is global, in English.

---

## 1. Problem statement

An ordinary person who wants exposure to gold or real estate through tokens doesn't know it's possible, can't tell apart tokens that look identical, and doesn't know how to buy — because every existing tool speaks to crypto-natives and institutions.

## 2. Value Proposition

Our product helps the ordinary person who wants exposure to real-world assets (gold, real estate, commodities) solve the problem of "what can I actually buy, and how" through an accessibility catalog (🟢/🟡/🔴), objective plain-language comparison based on the official documents, and — later — simple purchasing from within the platform.

**Core marketing message (decided 2026-08-12):** *"You too can invest in real estate."* The message deliberately targets people who don't see themselves as investors at all — becoming an investor with almost no entry barriers, in a trustworthy, democratic, open way, without excessive management fees and middlemen. Two implications:

- **It reframes the audience:** the primary persona isn't "an investor looking for a better tool" but "a saver who never thought investing was for them." The copy converts self-image before it sells a product.
- **It partially answers open question #3 (non-crypto channels):** the natural home of this message is personal-finance, budgeting, and "first steps in investing" communities — which are large, highly engaged, skew toward audiences underrepresented in crypto (the original Hebrew phrasing, "גם את", is deliberately feminine-inclusive), and are reachable organically. Honesty guardrail: the promise is "almost no barriers," never "no barriers" — the ladder itself shows what's truly open.

---

## 3. Primary Persona

**"The Curious Saver" — Maya, 36, marketing manager at a tech company.**

- **Demographics:** ages 28–45, salaried knowledge workers in Western countries, above-average income, disposable savings of a few thousand to tens of thousands of dollars.
- **Role / core habit:** manages her own money through apps — a digital bank, Revolut, maybe a dormant eToro account. Reads popular finance content (newsletters, YouTube, personal-finance Facebook/Reddit groups). Has no crypto wallet, or one that was opened once and abandoned.
- **What she wants:** an inflation hedge and exposure to gold or real estate in small amounts, without buying a physical bar and without a down payment on an apartment.
- **Self-image:** a saver, not an "investor" — investing feels like something for people with more money and more confidence. The core message ("you too can invest") speaks precisely to that gap.
- **The alternatives she already knows:** a gold ETF in her bank account, and "maybe an apartment someday." To win her over, the product must show what the token adds beyond them (small amounts, no annual fees, self-custody) — and when the conventional route is actually better (see PRODUCT_ANALYSIS.md, section 1a).
- **Pain points:**
  1. Doesn't know you can buy tokenized gold with a credit card in minutes — the option doesn't exist on her mental map.
  2. When she is exposed to it, everything looks identical and scary: PAXG vs XAUT tells her exactly nothing, and the jargon (custody, attestation, redemption) blocks her.
  3. Fear of scams — "crypto" is associated in her mind with collapses and fraud; she has no way to know whom to trust.
  4. Doesn't know the rules that apply to her — what's allowed for a resident of her country and what requires a process.

## 4. Secondary Persona

**"The Comparing Crypto-Native" — Daniel, 29, software developer.**

- Holds stablecoins and an active wallet, lives on crypto Twitter and Telegram. Knows *how* to buy — but document-level due diligence (who the issuer is, where the gold is stored, redemption terms, the latest attestation) costs him hours of reading legal PDFs per token.
- **The value for him:** the comparison table and red flags — hours of due diligence in minutes. He is also the natural user of the "Guardian" layer (wallet monitoring and alerts).
- **His role in the funnel:** he is the audience that's easy to reach through the free channels (Twitter, Reddit, Telegram) — validates the product early and spreads it, even though the primary persona is the long-term target.

## 5. Audience profiles — three short profiles

| | Profile | Age & occupation | Digital habits | Core pain points |
|---|---|---|---|---|
| 1 | **Maya — the Curious Saver** (primary) | 36, marketing manager | Digital banking, finance newsletters, no crypto wallet | Doesn't know it's possible; jargon blocks her; fear of scams |
| 2 | **Daniel — the Crypto-Native** (secondary) | 29, software developer | Active wallet, crypto Twitter, Telegram, DeFi | Comparing tokens requires reading legal documents; no central objective source |
| 3 | **Robert — the Traditional Investor** | 52, small-business owner | Real-estate & gold investing forums, finance YouTube, desktop more than mobile | Wants real-estate income at a small ticket; doesn't understand which platforms are open to him in his country; wary of regulation |

## 6. Adoption triggers (Use Cases)

The exact situations in which a user from the core audience will seek out and choose the product:

1. **"I want gold — what can I actually buy?"** — Maya reads about inflation, considers gold, and discovers via search that gold-backed tokens exist. The catalog answers her within a minute: what's 🟢, what the differences are, and how to buy.
2. **"PAXG or XAUT?"** — Daniel wants to park profits in gold and opens the comparison table: issuer, regulator, custody, fees, redemption terms, latest attestation — instead of hours of reading PDFs.
3. **"Real estate without a down payment?"** — Robert hears about tokenized real estate on a podcast. The page tells him honestly: it's 🟡 — accessible via signup and KYC at the issuer, with geographic restrictions, and here's the guide.
4. **"I bought — who's watching my back now?"** — a user who already holds a token pastes their wallet and gets plain-language alerts on material events (contract upgrade, attestation stopped, fee change) — the "Guardian" layer, phase 1.5.
5. **"What exactly am I signing?"** — a user about to buy a token on an external platform first checks its page: what actually backs it and which red flags are open.
6. **"Why not just an ETF?"** — before buying her first gold token, Maya wants to see side by side how it differs from the ETF her bank already offers. The token/ETF/physical comparison page (pros and cons, including when the ETF wins) answers exactly that — and doubles as an SEO entry point for queries like "PAXG vs GLD."

## 7. Adoption obstacles

What could prevent the target audience from using the product or paying for it:

1. **Trust in a new brand:** an unknown site claiming to be "the objective source" — precisely the most suspicious audience (Maya) will struggle to believe it. Mitigation: published methodology, linked sources for every field, no recommendations.
2. **The crypto association:** the word itself repels the primary persona — but hiding the technology would betray the honesty brand, and users discover it at purchase time anyway. Resolution (decided 2026-08-12): **name it, framed accurately** — "real assets on the blockchain: crypto's flexibility (from $50, 24/7, self-custody) with real-world representation." Rules: always pair "blockchain" with what it concretely enables; lead with the asset, not the ticker; no hype jargon.
3. **The gap between the promise and the MVP:** the landing page presents a vision that includes buying; in practice, the first phase is information and comparison only. Careless expectation-setting will burn trust.
4. **Geographic and regulatory restrictions:** some users will discover the token they wanted isn't available in their country — built-in frustration to be softened with early transparency ("available in," "not available in").
5. **Channel mismatch:** the primary persona isn't in the crypto channels where a waitlist is easy to recruit. Risk: the waitlist fills with crypto-natives and skews demand validation. Proposed mitigation: a "what matters most to you?" segmentation question on the signup form (or two landing-page variants) to segment signups and measure demand for in-platform purchasing separately.
6. **Low willingness to pay in retail:** the standing decision — the first phase is entirely free; future monetization targets mainly issuers and B2B, so this obstacle is managed by the model.
7. **The conventional alternative is good enough:** an ETF is two clicks away in the bank account, and a REIT offers diversification and liquidity with no wallet and no new KYC. If the product doesn't answer "why a token?" honestly — when it wins (small amounts, self-custody, 24/7 trading, no management fees) and when it doesn't (diversification, tax simplicity, regulatory protections) — the core audience will stay at the bank. Mitigation: the "token vs the usual way" comparison built into every domain in the catalog (PRODUCT_ANALYSIS.md, section 1a).
