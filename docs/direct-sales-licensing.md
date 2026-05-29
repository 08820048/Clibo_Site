# Clibo Website Direct Sales & Licensing Plan

## Goal

Clibo will first launch through direct sales on the official website. Dodo Payments will handle checkout, Merchant of Record responsibilities, tax calculation, receipts, and license key issuance. The macOS app will validate licenses and unlock Pro features.

## Recommended Sales Model

Start with one simple product:

- Product: `Clibo Pro Lifetime`
- Billing: one-time payment
- Activations: 3 Macs per license
- Expiry: none for the first lifetime product
- Delivery: Dodo Payments License Key entitlement

Future options:

- Add an annual plan only if Clibo gains recurring server-side costs such as hosted AI, sync, or collaboration.
- Add major-version paid upgrades later as separate products, for example `Clibo Pro v2`.

## Dodo Payments Setup

1. Create a one-time product in Dodo Payments.
2. Use the most accurate tax category for desktop software or digital products.
3. Add product media, concise product description, and purchase instructions.
4. Create a License Key entitlement.
5. Attach the License Key entitlement to the product under advanced settings.
6. Set activation instructions:

   `Open Clibo -> Settings -> License -> Paste your license key`

7. Configure the checkout `return_url` to point to the Clibo success page.

Dodo Payments documents that License Key products can append `license_key` to the return URL after purchase, so the success page can display the key immediately.

## Clibo App Licensing Flow

MVP implementation can call Dodo public license endpoints directly from the macOS app:

1. User buys Clibo Pro on the website.
2. Dodo redirects to the success page with the license key.
3. User opens Clibo settings and pastes the license key.
4. Clibo calls Dodo license activation with:
   - license key
   - device name
5. Dodo returns an activation instance id.
6. Clibo stores license data in Keychain.
7. Clibo validates periodically and unlocks Pro features when valid.

Important rule: never ship a Dodo secret API key inside the macOS app.

## Stored Client State

Store this in Keychain:

- license key
- activation instance id
- product or plan id
- current status
- activation timestamp
- last validation timestamp
- last validation response summary

Do not store payment API secrets or customer billing details in the app.

## Validation Policy

Suggested behavior:

- Validate immediately after activation.
- Validate in the background every 24 hours.
- Allow a 7 to 30 day offline grace period after the last successful validation.
- If validation fails because of network errors, keep the last known state until the grace period expires.
- If Dodo returns revoked, refunded, expired, or disabled, downgrade to the free plan.

## Webhook Events To Track

Configure Dodo webhooks even if the first app version directly calls public license endpoints.

Track at minimum:

- `entitlement_grant.delivered`
- `entitlement_grant.revoked`
- refund-related events
- payment succeeded or failed events

Use webhooks to reconcile purchases, refunds, revocations, customer support cases, and analytics.

## Optional License Server

The first version can avoid a custom backend. Long term, add a small license server to reduce platform lock-in and improve offline licensing.

Suggested server flow:

1. Clibo calls `POST /license/activate`.
2. Server validates against Dodo.
3. Server returns a signed entitlement token.
4. Clibo stores the token in Keychain.
5. Clibo verifies the token locally using an embedded public key.

Benefits:

- Easier to switch payment providers later.
- Central place for trials, coupons, custom grants, abuse handling, and device management.
- Better offline validation with signed tokens.

## Feature Gating

Suggested free plan:

- Recent 50 clipboard records
- Basic search
- Basic quick panel
- Basic preview

Suggested Pro plan:

- Unlimited history
- Advanced hover preview
- Markdown preview
- Code highlighting
- Sensitive content filtering
- AI actions
- Automation rules
- Future advanced workflows

## Website Requirements

The website needs:

- Product landing page
- Download button
- Buy button connected to Dodo Checkout
- Success page that shows license key
- Privacy policy
- Terms of service
- Refund policy
- Support page or support email
- Release notes page

## Sources

- Dodo Payments introduction: https://docs.dodopayments.com/introduction
- Dodo Merchant of Record: https://docs.dodopayments.com/features/mor-introduction
- Dodo One-Time Payments: https://docs.dodopayments.com/features/one-time-payment-products
- Dodo License Keys: https://docs.dodopayments.com/features/license-keys
- Dodo Checkout: https://docs.dodopayments.com/features/checkout
