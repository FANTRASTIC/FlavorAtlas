# Flavor Atlas

Flavor Atlas is a single-page global recipe discovery prototype with a warm parchment atlas aesthetic, interactive cuisine map, animated prayer flags, and curated cuisine cards. It was created as a static front-end prototype that can be opened directly in a browser and later connected to a real recipe API or database.

## Live Preview

Open `index.html` directly in a browser.

No framework install, build step, package manager, or local server is required for the current prototype.

## Current Experience

- Desktop atlas-inspired homepage
- Mobile-responsive layout
- Animated prayer flag strip
- Custom Flavor Atlas logo integration
- Sticky desktop navigation
- Mobile hamburger drawer
- Search overlay with live local recipe filtering
- Watercolor world map hero
- Interactive teardrop recipe pins
- Hover tooltips on map pins
- Cuisine carousel with country flags
- Cultural decorative icons per cuisine card
- Spicy Picks carousel
- Recipe preview modal
- Scroll reveal animations
- Reduced-motion support
- Project-owned generated food and map assets

## Featured Cuisines

- Mexico: Tacos al Pastor
- Italy: Margherita Pizza
- France: Ratatouille
- Japan: Ramen
- Morocco: Chicken Tagine
- India: Butter Chicken
- Brazil: Feijoada

## File Structure

```text
.
├── index.html
├── styles.css
├── app.js
├── README.md
├── qa-desktop.png
├── qa-mobile.png
├── qa-cuisines.png
└── assets/
    ├── flavor-atlas-logo-clean.png
    ├── world-map-watercolor.png
    ├── mexico-tacos.png
    ├── italy-pizza.png
    ├── france-ratatouille.png
    ├── japan-ramen.png
    ├── morocco-tagine.png
    ├── india-butter-chicken.png
    ├── brazil-feijoada.png
    ├── thai-red-curry.png
    └── korea-kimchi-jjigae.png
```

## Tech Notes

This prototype is intentionally framework-free:

- HTML for structure
- CSS for the complete visual system, responsive layout, animation, and decorative illustration
- Vanilla JavaScript for rendering cuisine data, search, modal behavior, carousel scrolling, mobile drawer, and map interactions
- Local project-owned assets for all major food and map imagery

## UI/UX Details

The interface is designed to feel like a travel journal meets recipe discovery platform:

- Parchment background and subtle paper grain
- World-map-first discovery
- Teardrop pins with dish photos
- Country cards with flags and recipe counts
- Cultural visual accents
- Clear mobile-first navigation
- Search available from the header
- Lightweight modal previews for quick recipe inspection

## Future API Direction

The current data is local fallback data for a polished demo. The same UI can later be connected to:

- TheMealDB for no-key recipe prototyping
- Edamam for richer global recipe search
- Spoonacular for ingredient and nutrition-heavy features
- A custom PostgreSQL/Supabase database for production content ownership

Recommended production approach:

1. Keep curated Nepal-first content in your own database.
2. Add a separate global recipe search using a third-party API.
3. Cache API results server-side once the app moves into Next.js or another backend-capable stack.
4. Use owned/licensed photography for flagship recipes.

## QA

The latest local QA pass confirmed:

- 7 map pins render
- 7 cuisine cards render
- 5 spicy pick cards render
- Search returns expected results
- Recipe modal opens
- No browser console errors

Preview screenshots:

- `qa-desktop.png`
- `qa-cuisines.png`
- `qa-mobile.png`

## Deployment

For GitHub Pages:

1. Push this repository to GitHub.
2. Open repository settings.
3. Go to **Pages**.
4. Select **Deploy from a branch**.
5. Choose the `main` branch and `/root`.
6. Save and wait for GitHub Pages to publish.

Because this prototype is static, GitHub Pages can serve it directly.
