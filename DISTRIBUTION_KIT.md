# DISTRIBUTION_KIT.md — Step 7 launch kit (channels, posts, UTM, measurement)

Written: 2026-08-12. Ready-to-paste distribution for the waitlist smoke test. Fill in the live URL after deployment (marked `https://everyvest.netlify.app`). Voice rules apply to posts too: honest, no hype, name the blockchain plainly.

## Revised channel plan (decided 2026-08-12): fresh-account reality

The distribution runs from brand-new accounts (dedicated project identity, no karma/followers/connections). That kills X and LinkedIn for now (zero-follower posts get zero reach) and locks the big subreddits (karma/age minimums). The plan pivots to channels where new accounts and new projects are *welcome*:

1. **Hacker News — "Show HN"** (top priority): new accounts can post, the audience is technical and skeptical, and our whole angle — an honest catalog that tells you what you *can't* buy — is exactly HN's taste. One good HN thread can outperform everything else combined.
2. **Reddit, maker-friendly subs:** r/SideProject, r/AlphaAndBetaUsers, r/EntrepreneurRideAlong (low/no karma requirements), plus crypto subs later once the account has some age. Note: create the Reddit account on day 1 even if posting waits a few days — account age matters.
3. **Indie Hackers** — new-account friendly, product-launch culture.
4. **Telegram RWA/crypto groups** — joinable immediately; post only where group rules allow project shares.
5. **X / LinkedIn / Facebook groups: postponed** until there's an account with any presence (or skipped entirely for the smoke test).

## UTM links (one per channel — this is how we know which audience converts)

```text
https://everyvest.netlify.app?utm_source=hackernews&utm_medium=social&utm_campaign=waitlist_launch
https://everyvest.netlify.app?utm_source=reddit&utm_medium=social&utm_campaign=waitlist_launch
https://everyvest.netlify.app?utm_source=indiehackers&utm_medium=social&utm_campaign=waitlist_launch
https://everyvest.netlify.app?utm_source=telegram&utm_medium=social&utm_campaign=waitlist_launch
https://everyvest.netlify.app?utm_source=twitter&utm_medium=social&utm_campaign=waitlist_launch
https://everyvest.netlify.app?utm_source=linkedin&utm_medium=social&utm_campaign=waitlist_launch
https://everyvest.netlify.app?utm_source=facebook_finance&utm_medium=social&utm_campaign=waitlist_launch
```

### Show HN post (Hacker News)

> **Title:** Show HN: An honest catalog of tokenized real-world assets — including what you can't buy
>
> I'm building Everyvest — a plain-language catalog of tokenized real-world assets (gold, real estate, commodities). Every token is mapped to one schema from its official documents: issuer, regulator, what actually backs it, custody, redemption terms, attestation dates, fees. Red flags are rule-based and published (e.g., "no attestation for 90+ days" flags automatically).
>
> The organizing idea is an accessibility grade per asset: open to everyone / via issuer KYC / restricted to qualified purchasers. Existing tools (rwa.xyz etc.) map market size for institutions; nothing maps what a regular person can actually buy. The comparison table also has a row for when a boring ETF beats the token — because for pension money it usually does.
>
> Right now it's a waitlist + a live sample of the token-card format: https://everyvest.netlify.app?utm_source=hackernews&utm_medium=social&utm_campaign=waitlist_launch
>
> Would love scrutiny on the schema — what fields would you require before trusting a gold token?

### Indie Hackers post

> **Title:** Validating an "honest catalog" for tokenized real assets — smoke test live
>
> Hypothesis: ordinary people would buy tokenized gold/real estate ($50 minimums, no annual fees) if someone translated the fine print — who issues it, what backs it, when it was last audited, and whether it's even open to them. Existing data tools serve institutions.
>
> The trust angle is the product: rule-based red flags, sources on every field, a "when the ETF is better" row, and nothing ever "recommended." Landing page + waitlist is live, measuring conversion per channel and an interest split (gold vs real estate vs comparison vs monitoring): https://everyvest.netlify.app?utm_source=indiehackers&utm_medium=social&utm_campaign=waitlist_launch — feedback on the honesty-first positioning welcome.

The two-audience experiment (open question #3): crypto channels (Reddit crypto subs, X, Telegram) vs. personal-finance channels (LinkedIn, finance Facebook groups). Compare conversion per `utm_source` **and** the Interest column split — that answers "does the ordinary person actually want this."

## Channel 1 — Reddit (crypto-native audience)

Suggested subs: r/CryptoCurrency (check self-promo rules — Saturday project threads), r/Gold, r/AlgorandOfficial (Lofty context). Post as "I built this," not as an ad.

> **Title:** I'm building an honest catalog of tokenized real-world assets — it tells you what you *can't* buy, too
>
> Comparing PAXG vs XAUT properly means hours reading legal PDFs: who the issuer is, where the metal sits, redemption terms, when the last attestation was. I'm building a catalog that extracts all of that into one comparison table, in plain language, with rule-based red flags (e.g., "no attestation for 90+ days").
>
> The angle that I think is missing elsewhere: every asset gets an *accessibility* grade — open to everyone / via issuer KYC / restricted to qualified purchasers. rwa.xyz maps market size; nobody maps what a normal person can actually buy. And when an ETF is the better tool (pension money, tax wrappers) — the table says so.
>
> No "recommended" badges, no referral bias, sources linked on every field. Free while I build the first domains (gold, commodities, some real estate).
>
> Waitlist + a live sample card: https://everyvest.netlify.app?utm_source=reddit&utm_medium=social&utm_campaign=waitlist_launch
>
> Happy to get torn apart on the schema — what fields would you demand before trusting a gold token?

## Channel 1b — Reddit, maker subs (r/SideProject, r/AlphaAndBetaUsers, r/EntrepreneurRideAlong)

Builder-audience framing: the story is "I'm validating this," not the asset class. Same UTM as Reddit.

> **Title:** I'm building an honest catalog of tokenized real-world assets — it also tells you what you *can't* buy
>
> After realizing that properly comparing two gold tokens means hours of reading legal PDFs, I started building Everyvest: a plain-language catalog of tokenized real-world assets (gold, real estate, commodities). Every token is mapped to one schema from its official documents — issuer, regulator, what actually backs it, custody, redemption terms, audit dates, fees.
>
> The twist: every asset gets an *accessibility* grade — open to everyone / via issuer KYC / restricted to qualified purchasers. Existing tools map market size for institutions; nobody tells a normal person what they can actually buy. Red flags are rule-based and published ("no attestation for 90+ days" flags automatically), sources are linked on every field, and the comparison table has a row for when a boring ETF is the better choice — because sometimes it is.
>
> Right now it's a landing page + waitlist smoke test, measuring which audience converts (crypto-native vs personal-finance) and which interest wins (gold / real estate / comparison / monitoring): https://everyvest.netlify.app?utm_source=reddit&utm_medium=social&utm_campaign=waitlist_launch
>
> Would love feedback on the honesty-first positioning — or on the landing page itself.

## Channel 2 — X / Twitter thread (crypto-native)

> 1/ Every gold token looks identical from the outside. PAXG, XAUT — same pitch, very different fine print: issuer, regulator, vault, redemption minimums, audit cadence.
>
> 2/ I'm building Everyvest: an honest catalog of tokenized real-world assets. Every token → one schema, in plain language. Red flags are rule-based and published ("attestation older than 90 days" = automatic flag).
>
> 3/ The part nobody else does: an accessibility grade per asset. 🟢 open to everyone · 🟡 via issuer KYC · 🔴 qualified purchasers only. The market maps TVL; we map what *you* can actually buy.
>
> 4/ Radical honesty as strategy: the comparison table has a row for when the boring ETF wins. Trust is the only moat this thing has.
>
> 5/ Free during build. Gold + commodities first, real estate next. Waitlist: https://everyvest.netlify.app?utm_source=twitter&utm_medium=social&utm_campaign=waitlist_launch

## Channel 3 — LinkedIn (non-crypto / personal-finance audience)

> "You can buy a fraction of vaulted, audited gold for $50, hold it yourself, and pay zero annual management fees."
>
> Most people don't know that sentence is true — and honestly, the crypto industry has earned the skepticism. The technology (tokenized real-world assets) matured much faster than the ability of a normal person to evaluate it: which tokens are actually backed, audited, redeemable — and which are open to regular investors at all.
>
> I'm building Everyvest to close that gap: a plain-language catalog of real-world assets on the blockchain — gold, real estate, commodities — with an honesty-first design: accessibility grades, published red-flag rules, sources on every fact, and a clear "when the regular ETF is the better choice" section. Research, not investment advice; nothing is ever "recommended."
>
> If "the flexibility of crypto, anchored in the real world" sounds like something you'd want vetted properly — the waitlist is open: https://everyvest.netlify.app?utm_source=linkedin&utm_medium=social&utm_campaign=waitlist_launch

## Channel 4 — Telegram groups (crypto)

> Building an honest RWA catalog — every tokenized asset (PAXG, XAUT, Lofty properties, tokenized treasuries) mapped to one schema: backing, custodian, redemption, attestation dates, fees + rule-based red flags. Includes an accessibility grade: what's actually open to retail vs. qualified-purchaser-only. No shilling, no "recommended," sources on every field. Free during build → https://everyvest.netlify.app?utm_source=telegram&utm_medium=social&utm_campaign=waitlist_launch

## Channel 5 — Personal-finance communities (Facebook/forums; adapt tone to each group's rules)

> Question for the group: did you know you can get gold exposure from $50 with no annual management fee? It's held as tokens on the blockchain, backed by audited physical gold — but comparing the options (or knowing which are even open to regular people) is genuinely hard. I'm building a free tool that maps and compares these in plain language, including when a regular ETF is the better choice. Would love feedback from people who *aren't* crypto natives: https://everyvest.netlify.app?utm_source=facebook_finance&utm_medium=social&utm_campaign=waitlist_launch

## Measurement (48–96 hours)

- **Conversion rate** = unique visitors ÷ signups × 100 (GA4: unique users per `utm_source`; Sheet: signup count).
- **Benchmarks (from the guide):** waitlist pages typically 5–15%. **>10% → Green Light, proceed to MVP. <5% → Pivot** (value proposition or audience). In between → tighten copy/audience and re-test.
- **Second dimension:** the Interest column split (gold / real estate / compare / monitor) — feeds the MVP scope decision and validates the buy-demand hypothesis.
- **Data integrity:** compare Sheet rows vs GA4 conversions; a large gap = ad blockers or a broken event.

## Rules while the test runs

- Don't spam-cross-post the same text — adapt per community and honor self-promo rules (getting banned kills the channel for the real launch).
- Reply to every comment; objections are free user research — log them.
- Don't touch the page mid-test except for breakage; changing copy mid-measurement invalidates the comparison.
