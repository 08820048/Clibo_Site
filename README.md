# Clibo Site

Official website for Clibo.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

- `index.html` - landing page
- `src/styles.css` - site styles
- `public/assets/` - static assets served from `/assets`
- `docs/direct-sales-licensing.md` - Dodo Payments direct-sales licensing plan

## Payment Integration Notes

The current Pro purchase link opens Dodo Payments hosted checkout. Confirm the live Dodo product, License Key entitlement, activation limit, and `/success` return URL in the Dodo dashboard before sending paid traffic.
