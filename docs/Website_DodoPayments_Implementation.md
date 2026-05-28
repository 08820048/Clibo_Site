# Website Dodo Payments Implementation

This document describes the current Clibo website checkout plan for Dodo Payments.

The chosen launch path is intentionally static:

- No server.
- No database.
- No webhook endpoint.
- No secret Dodo API key on the website.

The macOS app already supports Dodo license activation, validation, and deactivation through Dodo public license endpoints. For the website, Dodo hosts checkout and returns license information to a static success page.

## Current Launch Flow

1. User clicks `Buy Clibo for $8` on the website.
2. The link opens Dodo hosted checkout.
3. User completes payment.
4. Dodo redirects to `/success` with return URL parameters.
5. The static success page parses the parameters in browser JavaScript.
6. The success page shows the license key, copy action, download link, and activation instructions.
7. Refunds, revokes, payment lookup, and license lookup are handled in the Dodo Dashboard.

## Why No Backend Is Needed For Launch

Dodo can generate and deliver License Key entitlements during hosted checkout. For a one-time direct-sale app, the website does not need to store orders or license keys before launch.

This keeps the launch surface small:

- Dodo stores payments, customers, refunds, and license entitlements.
- Clibo validates and activates licenses against Dodo.
- The website only shows the checkout button and success page.

The tradeoff is operational:

- Support lookup happens in Dodo Dashboard, not a custom admin panel.
- Refund/revoke state is not mirrored into a Clibo-owned database.
- The website cannot run custom entitlement reconciliation until a backend exists.

That is acceptable for the first launch.

## Dodo Dashboard Setup

Configure these in Dodo before sending real traffic:

- Product: one-time purchase for Clibo.
- Price: `$8` early bird until July 1, 2026.
- Regular price: `$13` from July 2, 2026.
- Entitlement: License Key entitlement attached to the product.
- Activation limit: `3` Macs per license.
- Return URL: `https://clibo.us/success`.
- Test and live products: keep separate product IDs and checkout links.

Do not expose Dodo secret API keys in browser code. The static site does not need `DODO_API_KEY` or `DODO_WEBHOOK_SECRET`.

## Checkout Link

The current website button uses Dodo hosted checkout:

```txt
https://checkout.dodopayments.com/buy/REPLACE_WITH_DODO_PRODUCT_ID?quantity=1&redirect_url=https%3A%2F%2Fclibo.us%2Fsuccess
```

Before launch, replace `REPLACE_WITH_DODO_PRODUCT_ID` in `index.html` with the live Dodo product/payment link ID.

Recommended process:

1. Create the Dodo product in test mode.
2. Replace the placeholder with the test product ID.
3. Run a test purchase.
4. Confirm `/success` receives `license_key`, `email`, and `payment_id`.
5. Switch to the live product ID only after the test flow works.

## Success Page

The static page is `success.html`, served as `/success` by Vercel clean URLs.

It handles these query parameters:

- `license_key`: generated license key. If quantity is greater than 1, this may contain comma-separated license keys.
- `email`: customer email.
- `payment_id`: one-time payment ID.
- `subscription_id`: ignored unless Clibo ever adds subscription products.

Required UI already implemented:

- Purchase success state.
- Customer email when present.
- Payment ID when present.
- Each license key in a copyable field.
- Copy button for each license key.
- `Download Clibo` button.
- Activation instructions:
  - Open Clibo.
  - Go to `Settings -> License`.
  - Paste the license key.
  - Click `Activate`.
- Fallback state when `license_key` is missing.

Security behavior:

- The success page has `robots` `noindex,nofollow`.
- The success page has `Referrer-Policy: no-referrer`.
- Vercel sends `X-Robots-Tag: noindex, nofollow` for `/success`.
- Vercel sends `Referrer-Policy: no-referrer` for `/success`.
- The page removes query parameters from browser history with `history.replaceState()` after parsing.
- No analytics should be added to this page while license keys are rendered.

## Download Link

The success page currently points `Download Clibo` to:

```txt
https://xuyi.dev
```

Before paid launch, replace this with the stable notarized release URL.

Recommended final shape:

- Public stable URL: `https://clibo.app/download`.
- The URL redirects to the latest notarized `.zip` or `.dmg`.
- The same build is present in the Sparkle appcast.
- Only update the website after Developer ID signing, notarization, and Gatekeeper validation pass.

## Support Without A Database

For launch, use Dodo Dashboard for support tasks.

Support should search by:

- Customer email.
- Dodo payment ID.
- License key.

Use Dodo Dashboard for:

- Payment status.
- Refunds.
- License entitlement lookup.
- License revoke/deactivation workflows.

Do not manually store customer license keys in spreadsheets unless absolutely necessary. If support notes are needed, store only payment ID and customer email, not full license keys.

## Optional Future Backend

Add webhook + database only when one of these becomes true:

- Support lookup in Dodo Dashboard becomes too slow.
- Refund/revoke reconciliation needs to show inside Clibo-owned tools.
- You need internal revenue reports outside Dodo.
- You need a custom support admin view.

Future backend scope:

- `/api/dodo/webhook`
- raw body signature verification
- webhook idempotency by `webhook-id`
- stored event payloads
- `orders` table
- `licenses` table
- support admin lookup

Do not build this until the operational need is real.

## Static Test Plan

Run this in Dodo test mode first:

1. Create a test product with License Key entitlement.
2. Set activation limit to `3`.
3. Set return URL to `https://clibo.us/success`.
4. Replace the website checkout placeholder with the test product ID.
5. Deploy the website.
6. Complete a test purchase from the website.
7. Confirm redirect reaches `/success`.
8. Confirm `license_key`, `email`, and `payment_id` render.
9. Confirm the URL query string is removed after page load.
10. Copy the license key from the success page.
11. Download and run Clibo.
12. Open `Settings -> License`.
13. Activate the license successfully.
14. Quit and reopen Clibo; license state should persist.
15. Click `Validate`; it should remain licensed.
16. Click `Deactivate This Mac`; the activation slot should be released.
17. Reactivate the same license.
18. Test `/success` with no `license_key`; the fallback state should still show download/support guidance.

Production smoke test:

1. Switch the checkout link to the live Dodo product ID.
2. Deploy the website.
3. Use a real low-risk purchase.
4. Confirm success page license display.
5. Activate Clibo against the live Dodo environment.
6. Confirm Dodo Dashboard can find the payment and license by email/payment/license.
7. Refund the test purchase if appropriate and verify Dodo license state.

## Launch Gate

Do not send paid traffic until all are true:

- Dodo product is live.
- Dodo License Key entitlement is attached.
- Activation limit is `3`.
- Checkout button uses the live Dodo product ID.
- Return URL is `/success`.
- Success page handles license present, multiple licenses, and missing license states.
- Download link points to a Developer ID signed and notarized build.
- Sparkle appcast is hosted and an update from one signed version to the next has been tested.
- Test-mode purchase passes.
- Live-mode smoke purchase passes.
