---
name: portfolio-asset-generator
description: Generate brand-consistent visual assets (images, OG cards, section illustrations) for silas-portfolio using HiggsField MCP. Use whenever Silas asks to create a new asset for the portfolio — hero images, OG/social cards, section banners, blog post thumbnails, or project illustrations. Locks down the Terminal-as-OS visual identity (palette, typography vibe, framing) so every generation feels native to the site.
---

# portfolio-asset-generator

Generate visual assets for the silas-portfolio project (`/Users/silas/silas-portfolio`) using the HiggsField MCP, keeping a consistent **Terminal-as-OS** visual identity.

## When to invoke

Invoke proactively when the user asks to:
- create / generate / make an image, banner, hero, OG card, social preview, or illustration for the portfolio
- "design something" for a new section, page, blog post, or project entry
- replace or refresh an existing asset under `public/brand/` or `public/projects/`

Do NOT invoke for: pure CSS/code styling work, screenshots, photo editing, or anything that doesn't produce a new HiggsField-generated artifact.

## Brand identity (locked)

**Palette** (use as exact hex in prompts when relevant):
- Background: `#0a0a0f` (near-black void)
- Surface glass: rgba white at 4–8% over background
- Accent purple: `#7c3aed` / light `#a78bfa`
- Accent blue: `#3b82f6` / light `#60a5fa`
- Accent mint (crypto / terminal / CTA): `#4ADE80`
- Syntax highlights inside any "code" surface: keywords `#a78bfa`, strings `#60a5fa`, fn `#4ADE80`

**Typography vibe (when text appears in the image)**: monospace, JetBrains Mono-like. Sharp, no rounded display fonts.

**Visual language**:
- Terminal-as-OS: floating glassy IDE/editor windows, file-tree sidebars, tab bars, blinking carets
- Cinematic dark void with subtle grid lines, faint floating particles, volumetric purple/blue glow
- Editorial, minimal, premium engineering studio energy (Linear / Vercel / Resend tier)
- Sharp typography, generous negative space
- **No people, no logos** unless explicitly requested

## Model defaults

| Use case | Model | Aspect | Resolution |
|---|---|---|---|
| Hero key visual / large feature image | `nano_banana_pro` | `16:9` | `2k` |
| OG / social preview | `nano_banana_pro` | `16:9` (then crop to 1.91:1) | `2k` |
| Section banner / inline illustration | `nano_banana_pro` | `3:2` | `1k` |
| Avatar / portrait of Silas | `soul_2` (requires reference) or `nano_banana_pro` | `4:5` | `2k` |
| Quick variations / exploration | `z_image` | as needed | default |

For images that must render clean text or diagrams (UI mockups, code snippets): always `nano_banana_pro`. It's the only model that handles text reliably.

## Workflow

1. **Read the request.** Identify: target placement (which page/section/file), purpose (hero vs OG vs spot illustration), constraints (must contain text? must show a specific UI? must include cripto/data motifs?).

2. **Preflight cost.** Call `mcp__claude_ai_HiggsField__generate_image` with `params.get_cost: true` first. Report cost to user if > 10 credits or if generating multiple variants.

3. **Compose the prompt.** Always include:
   - The brand identity block (palette, monospace, dark void, glass IDE)
   - The specific asset purpose ("hero for the /crypto page", "OG card for blog post about X")
   - Explicit "no people, no logos" unless the user asked for them
   - Aspect ratio matching the placement

4. **Generate.** Submit without `get_cost`. Job ID returned.

5. **Poll.** Call `job_status` with `sync: true` — server polls up to ~25s internally, returns on terminal.

6. **Download & save.** Save under `public/brand/<descriptive-name>.png` (hero/OG) or `public/projects/<project-slug>.png` (project thumbnails). Use `curl -sL <url> -o <path>`.

7. **Reference in code.** If the asset replaces an existing one, point the user to the file that needs updating (e.g. `index.html` meta tags for OG, `src/pages/<page>.js` for inline references).

## Prompt template

```
[CONTEXT] Asset for silas-portfolio — <placement>. Aesthetic: Terminal-as-OS — a futuristic IDE / code editor as a living operating system, floating in a dark cinematic void.

[SUBJECT] <describe the specific subject — e.g. "a translucent glassy editor window showing crypto.log entries with timestamps and on-chain transaction lines">

[COLORS] Background near-black #0a0a0f with subtle grid lines and faint floating particles. Volumetric glow in deep purple #7c3aed and electric blue #3b82f6. Mint accent #4ADE80 used sparingly for emphasis / crypto / status.

[TYPOGRAPHY] If text appears, render in clean monospace (JetBrains Mono style). Syntax highlighting: keywords #a78bfa, strings #60a5fa, fn / mint #4ADE80.

[STYLE] Editorial, minimal, premium engineering studio. Linear / Vercel / Resend energy. Sharp typography, soft volumetric light, photoreal render quality. Generous negative space. Cinematic composition.

[CONSTRAINTS] No people. No logos. <add specifics as needed>
```

## Credits budget awareness

- HiggsField Plus plan, workspace `3a92b6e2-cda5-49b2-a3e3-63c0f5f2fd7e`.
- Typical costs observed: `nano_banana_pro` 16:9 at 2k = ~2 credits.
- Always `get_cost` first if generating more than 1 image at once or using a model not tried before.
- Report current `balance` to the user when starting a multi-asset session.

## File conventions

- `public/brand/hero-keyvisual.png` — main hero (currently 2752×1536, 4MB; consider WebP later)
- `public/brand/og-default.png` — fallback social/OG card (1200×630 recommended)
- `public/brand/section-<page>.png` — section-specific banner
- `public/projects/<slug>.png` — per-project thumbnail (replaces emoji placeholder in `src/pages/projects.js`)

When saving, also note the original CloudFront URL in a comment near the import in case we want to regenerate at higher resolution later.

## Related memory

- [[project-rebrand]] — locked decisions on visual direction
- [[reference-higgsfield]] — MCP usage notes
