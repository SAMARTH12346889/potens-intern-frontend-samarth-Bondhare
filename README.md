# Multilingual Civic-Style PWA

A mobile-first Progressive Web App (PWA) that enables users to report civic issues in a simple three-step flow. The application supports bilingual interaction (English and Hindi), works well on slow network conditions, and can be installed on supported devices.

## Features

* 📱 Mobile-first responsive design
* 🌐 Bilingual interface (English & Hindi)
* 📝 Three-step reporting flow

  * Category Selection
  * Issue Details
  * Confirmation
* 🎤 Voice input using the Web Speech API
* 📷 Photo upload with preview
* 💾 Submission persistence using localStorage
* 🔖 Automatic reference ID generation
* 📦 Installable Progressive Web App (PWA)
* ⚡ Optimized for Slow 3G networks
* ✨ Thoughtful micro-interactions for better user experience

## Tech Stack

* React
* Vite
* Tailwind CSS
* React Router
* Web Speech API
* LocalStorage
* PWA (Manifest + Service Worker)

## Project Structure

```text
src/
├── assets/
├── components/
├── context/
├── pages/
├── utils/
├── App.jsx
├── main.jsx
└── index.css

public/
├── manifest.webmanifest
├── icons/
└── service-worker.js
```

## User Flow

1. Select an issue category.
2. Provide issue details using text, photo, or optional voice input.
3. Submit the report and receive a unique reference ID.

## Design Decisions

The application was designed with simplicity and accessibility in mind. The three-screen flow minimizes cognitive load and guides users through the reporting process without unnecessary complexity. A bilingual interface improves accessibility for a broader audience, while subtle micro-interactions provide feedback without being distracting.

Performance was prioritized by keeping the UI lightweight, minimizing dependencies, and ensuring the application remains usable under Chrome DevTools Slow 3G throttling.

## Performance Considerations

* Lightweight React components
* Optimized Tailwind CSS
* Lazy-loaded routes where appropriate
* Local data storage using localStorage
* Offline caching through a service worker
* Minimal network requests
* Fast initial load for low-bandwidth users

## Accessibility

The application was built with accessibility in mind by including:

* Semantic HTML elements
* Keyboard-accessible controls
* Sufficient color contrast
* Responsive layouts
* Proper labels and placeholders
* Large touch targets for mobile devices

## PWA Features

* Installable on supported devices
* Web App Manifest
* Service Worker for asset caching
* Offline access to previously cached resources
* Home screen installation support

## Local Storage

Submitted reports are stored locally in the browser.

Each report includes:

* Reference ID
* Category
* Description
* Uploaded image (if provided)
* Timestamp

No backend or external database is required.

unfinishied work:
The core assignment requirements have been implemented, but a few stretch features remain

## AI Usage

AI was primarily used for project planning, PWA configuration, debugging, and performance optimization. It also assisted with implementation guidance and code explanations. 

## Unfinished Work or Future Improvements

* Offline submission queue with background synchronization
* Status tracker timeline
* Lighthouse WCAG 2.2 AA optimization and report
* Image compression before storage
* Better offline synchronization strategy
* Additional regional language support

## Installation

```bash
git clone <https://github.com/SAMARTH12346889/potens-intern-frontend-samarth-Bondhare.git>

cd my-react-app

npm install

npm run dev
```

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

