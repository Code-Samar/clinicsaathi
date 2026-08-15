# Aipitals — Vue Multi-page Website

## What changed in this version
- Removed the static/dummy chatbot screenshot from the homepage.
- Added a real interactive Vue `ChatWidget.vue` component available across the website.
- Chat supports quick replies, typing state, free-text messages, appointment-flow demo, product navigation and demo-request navigation.
- Uses the supplied Aipitals logo asset.
- Keeps the multi-page Vue Router structure.

## Run
```bash
npm install
npm run dev
```

## Important
The chatbot is a working frontend interaction layer. It is not connected to an external AI model or clinic scheduling backend because no production API/backend credentials were supplied. Connect `ChatWidget.vue`'s `send()` / `reply()` flow to your backend when the Aipitals AI API is available.
