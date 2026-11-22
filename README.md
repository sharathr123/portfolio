# Sharath R. – Premium React Native Developer Portfolio

A personal portfolio website for **Sharath R.**, a React Native Developer with 3.5+ years of experience specializing in iOS and Android application engineering, clean architecture, performance optimization, and production store releases.

---

## 🎨 Visual Reference & Design Direction

This portfolio is built to match the visual direction of the provided design reference:
- **Warm Editorial Layout**: Off-white light surface (`#FAF9F6`), natural white cards (`#FFFFFF`), charcoal typography (`#252525`), refined purple (`#6650A4`) and muted teal (`#258D8B`) accents.
- **Dark Theme Mode**: Slate surface (`#171717` / `#222222`), muted lavender (`#AA97E8`), and mint teal (`#69C5BD`).
- **Interactive Smartphone Mockups**: Interactive MyCORE and Maxicon mobile phone previews with dynamic QR check-in, OTP verification, and native tab switching.
- **Architectural Pipeline Visuals**: SVG-driven systems diagrams detailing clean mobile architecture, token refresh interceptors, and automated CI/CD release pipelines.

---

## 🏗 Architecture & Clean Design Pattern

The codebase adheres strictly to **Feature-Based Architecture** combined with **Clean Architecture** and **Atomic Design**:

```
sharath-portfolio/
│
├── public/
│   ├── images/ (profile, mockups, design-reference)
│   ├── resume.pdf
│   └── favicon.svg
│
├── src/
│   ├── app/
│   │   ├── navigation/ (AppRouter, RouteConfig, navigationPaths)
│   │   ├── providers/ (AppProviders, ThemeProvider)
│   │   └── App.jsx
│   │
│   ├── core/
│   │   ├── config/ (appConfig, environment)
│   │   ├── constants/ (appConstants, themeConstants)
│   │   ├── utils/ (helpers, formatters, validators)
│   │   ├── hooks/ (useScrollPosition, useMediaQuery, useReducedMotion)
│   │   └── animations/ (variants, transitions, presets)
│   │
│   ├── features/
│   │   ├── home/ (presentation, domain, data)
│   │   ├── projects/ (presentation, domain, data)
│   │   ├── skills/ (presentation, domain, data)
│   │   ├── experience/ (presentation, domain, data)
│   │   ├── contact/ (presentation, domain, data)
│   │   └── theme/ (presentation, domain, data)
│   │
│   ├── shared/
│   │   ├── components/ (atoms, molecules, organisms)
│   │   ├── layouts/ (MainLayout, PageLayout)
│   │   └── styles/ (themes, typography, animations, global)
│   │
│   └── main.jsx
```

### Architectural Principles:
1. **Independent Features**: `home`, `projects`, `skills`, `experience`, `contact`, and `theme` are decoupled.
2. **Domain Layer Independence**: Domain models and use cases do not depend on React or presentation frameworks.
3. **Data Layer Abstraction**: Repositories provide clean interfaces for retrieving static and runtime configurations.
4. **Atomic Design System**: Reusable Atoms (Buttons, Badges, Icons, PhoneMockups), Molecules (SectionHeading, SocialLinks), and Organisms (Navbar, Footer).

---

## 🚀 Key Features

- **Flagship Production Case Studies**:
  - **MyCORE**: Google Play store link, QR attendance check-in, shift planning, JWT refresh flow, and release management.
  - **Maxicon**: Google Play store link, OTP mobile authentication, digital payslips, and HR self-service workflows.
  - **The Mind**: Real-time communication via WebSockets (Socket.IO), offline SQLite queueing, and notification payloads.
- **5 Technical Case Studies** (Problem → Investigation → Technical Approach → Solution → Result):
  1. FlatList & 60 FPS Optimization
  2. Over-The-Air (OTA) Updates & Hotfixes
  3. iOS CocoaPods & Native Module Bridging
  4. Silent Token Refresh with Hardware Keychain/Keystore
  5. Automated CI/CD Store Release Pipelines
- **Dual Themes**: Complete Light and Dark themes with LocalStorage persistence and system preference detection.
- **Performance & SEO**: Code-splitting with `React.lazy` and `Suspense`, Open Graph and Twitter meta tags, semantic HTML5 tags.

---

## 🛠 Tech Stack

- **React.js 19**
- **Vite 8**
- **Tailwind CSS v4**
- **Framer Motion**
- **React Router DOM v7**
- **Lucide React & React Icons**

---

## 💻 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Create production build
npm run build

# Preview production build
npm run preview
```
