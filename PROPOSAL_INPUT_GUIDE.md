# ROSS Proposal Engine Guide

## Project Goal

This project is a dynamic proposal presentation engine for ROSS Creative Agency.

The system should allow fast creation of visually strong proposal websites using reusable sections, proposal data files, and client assets.

The system must stay scalable, RTL-first, and design-consistent while still allowing creative freedom in layouts and storytelling.

---

# Core Rules

## DO NOT BREAK

- RTL layout
- Peyda font system
- Existing routing structure
- Proposal data architecture
- Existing reusable components
- Brand visual consistency
- Main branch stability

---

# Proposal Structure

Each proposal consists of:

1. Proposal content file
2. Proposal asset folder
3. Dynamic route

---

# Proposal Content Location

All proposal content files must live inside:

src/content/proposals/

Example:

src/content/proposals/chilife.ts

---

# Proposal Assets Location

All proposal images/videos/assets must live inside:

public/proposals/

Example:

public/proposals/chilife/

Example assets:

- hero.jpg
- logo.png
- product-01.png
- mockup-01.jpg

---

# Route Structure

Each proposal automatically becomes available at:

/proposals/[slug]

Example:

/proposals/chilife

---

# Allowed Creative Freedom

Codex IS ALLOWED to:

- Create new layouts
- Create new section variations
- Reorder sections
- Build new reusable proposal components
- Create unique visual storytelling
- Use assets creatively
- Create animations and transitions
- Improve responsiveness
- Improve visual hierarchy
- Improve spacing and pacing

---

# Things To Avoid

Codex SHOULD AVOID:

- Rebuilding the entire project architecture
- Breaking existing proposals
- Changing RTL behavior
- Introducing random UI libraries
- Creating inconsistent typography
- Using generic startup styles
- Overcomplicated motion everywhere
- Hardcoding proposal content directly into pages

---

# Design Direction

The visual identity should feel:

- Premium
- Minimal
- Cinematic
- Modern
- Editorial
- Human
- Organic
- Strategic
- Presentation-driven

Avoid generic SaaS aesthetics.

---

# Workflow

1. Create proposal branch
2. Add proposal content file
3. Add proposal assets
4. Build proposal layout
5. Create Pull Request
6. Review
7. Merge into main

---

# Current System Components

Current reusable sections:

- ProposalHero
- DividerSection
- StatementSection
- CardsSection
- TimelineSection
- PricingSection

More reusable sections can be added over time.

