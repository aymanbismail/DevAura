<div align="center">

<img src="public/logo/logo.webp" alt="DevAura Logo" width="120" />

# DevAura

### Master Coding Through Interactive Learning

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Portfolio Mode](https://img.shields.io/badge/Mode-Portfolio%20Demo-orange?style=flat-square)](#api-layer)

**[Live Demo](https://devaura-beta.vercel.app)** · **[Report a Bug](https://github.com/aymanbismail/DevAura/issues)** · **[Request a Feature](https://github.com/aymanbismail/DevAura/issues)**

</div>

---

## Overview

DevAura is a **free, ad-free developer education platform** built as a graduation project to solve a common problem in Arabic-speaking tech communities: fragmented, low-quality, and paywalled learning resources.

The platform aggregates structured learning tracks, curated resources, AI tool directories, and interactive programming quizzes into a single cohesive experience. Rather than sending learners across dozens of websites, DevAura provides a guided, goal-oriented path from beginner to production-ready developer.

**The core problem:** Most Arabic-speaking developers learn from scattered YouTube playlists and random blog posts with no clear progression. DevAura replaces that chaos with curriculum-grade learning paths.

---

## Features

### 🗺 Structured Learning Tracks

Curated, topic-by-topic learning paths for major tech stacks — Frontend (Next.js, Angular, Vue), Backend (Laravel, Node.js), Data Analysis (Python), and more. Each track breaks down what to learn, in what order, and why.

### 📚 Curated Resource Library

A searchable, category-filtered library of the best tutorials, documentation links, and tools for each technology. Resources are handpicked for quality and relevance — no noise, no affiliate spam.

### 🤖 AI Tools Directory

A filterable directory of production-grade AI tools across categories: writing, image generation, code assistance, productivity, data analysis, audio, and video. Designed to keep developers informed as the AI landscape evolves.

### 🧩 Interactive Quizzes

Topic-by-topic multiple-choice quizzes with randomized question order, per-question explanations, a countdown timer, progress tracking, and a detailed review screen. Quiz state is persisted locally to allow interrupted sessions.

### 🔐 Full Authentication System _(backend-connected in production)_

- Email/password registration with 6-digit email verification
- JWT-based session management with automatic token refresh
- Google OAuth via Laravel Socialite
- Password reset with email token and expiry validation
- Copy protection on quiz question content

### ❤️ Favorites System _(backend-connected in production)_

Authenticated users can like and save resources and learning tracks to a personal favorites dashboard with statistics.

### 🎨 Polished UI/UX

- Fully responsive layout (mobile-first)
- Dark/light mode with smooth transitions
- Framer Motion animations and intersection-observer-based Lottie animations
- Aurora background, box-reveal effects, and gradient accent system
- Scroll-to-top button and breadcrumb navigation

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js 16 App Router                │
│                                                         │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │  Static     │  │  Client-side │  │  Dynamic      │  │
│  │  Pages      │  │  Components  │  │  [slug] Pages │  │
│  │  (SSG)      │  │  (React 19)  │  │  (SSR/ISR)    │  │
│  └─────────────┘  └──────────────┘  └───────────────┘  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │              Data Layer                          │   │
│  │                                                  │   │
│  │  Portfolio Mode:  src/data/mock/*                │   │
│  │  Production:      src/lib/api/*  →  Laravel API  │   │
│  └──────────────────────────────────────────────────┘   │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │           AuthContext (React Context)            │   │
│  │   JWT management · Favorites count · User state  │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Key Architecture Decisions

| Decision                     | Rationale                                                                                                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js App Router**       | Enables SSG for content pages (faster load, better SEO) and SSR for dynamic user-specific pages.                                                                  |
| **React Context for Auth**   | Auth state is globally needed (navbar, protected routes, like buttons). Context avoids prop-drilling without the overhead of a full state manager for this scope. |
| **Centralized Axios Client** | A singleton `ApiClient` with interceptors handles JWT injection, automatic 401 token refresh, and request queuing — all in one place.                             |
| **Data Layer Abstraction**   | All data access goes through `src/lib/api/*` functions. Switching between mock and live data requires changing one import, not touching UI components.            |
| **Local JSON for Quizzes**   | Quiz data is self-contained, version-controlled, and available offline. This avoids unnecessary API latency for a static dataset.                                 |
| **Tailwind CSS v4**          | PostCSS-based configuration, zero config for dark mode, and JIT compilation produce the smallest possible CSS bundle.                                             |

---

## Technology Stack

### Frontend

| Technology      | Version | Purpose                                                                    |
| --------------- | ------- | -------------------------------------------------------------------------- |
| Next.js         | 16.2    | React framework with App Router, SSG/SSR                                   |
| React           | 19      | UI component library                                                       |
| TypeScript      | 5.x     | Static typing throughout the codebase                                      |
| Tailwind CSS    | 4.x     | Utility-first styling with dark mode                                       |
| Framer Motion   | 12.x    | Page and component animations                                              |
| Lottie React    | 2.x     | JSON-based animations (About page)                                         |
| Radix UI        | latest  | Accessible headless UI primitives (Dialog, Dropdown, Select, Sheet, Label) |
| Lucide React    | latest  | Consistent icon system                                                     |
| React Hook Form | 7.x     | Performant, uncontrolled form management                                   |
| SweetAlert2     | 11.x    | Accessible alert dialogs                                                   |
| React CountUp   | 6.x     | Animated statistics counters                                               |
| next-themes     | 0.4     | Dark/light theme with SSR support                                          |

### HTTP & State

| Technology    | Purpose                                         |
| ------------- | ----------------------------------------------- |
| Axios         | HTTP client with interceptors for the API layer |
| Fetch API     | Used in non-auth data-fetching functions        |
| React Context | Auth and favorites global state                 |
| localStorage  | Quiz session persistence, auth token storage    |

### Backend _(production only)_

| Technology        | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| Laravel           | RESTful API, authentication, resource management |
| Laravel Sanctum   | API token issuance and session auth              |
| Laravel Socialite | Google OAuth integration                         |
| MySQL             | Relational data storage                          |

### Tooling

| Tool    | Purpose                                 |
| ------- | --------------------------------------- |
| pnpm    | Fast, disk-efficient package manager    |
| ESLint  | Linting with Next.js recommended config |
| PostCSS | CSS transformation pipeline             |
| Vercel  | Deployment and CDN                      |

---

## Screenshots

> Screenshots will be added as the project is deployed. Replace the placeholders below with actual screenshots.

| Page               | Preview                               |
| ------------------ | ------------------------------------- |
| Home / Landing     | `public/screenshots/home.png`         |
| Learning Tracks    | `public/screenshots/tracks.png`       |
| Track Detail       | `public/screenshots/track-detail.png` |
| Resources Library  | `public/screenshots/resources.png`    |
| AI Tools Directory | `public/screenshots/ai-tools.png`     |
| Quiz Interface     | `public/screenshots/quiz.png`         |
| Quiz Results       | `public/screenshots/quiz-results.png` |
| About / Team       | `public/screenshots/about.png`        |

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (ThemeProvider, AuthProvider)
│   ├── page.tsx                # Home page
│   ├── about/                  # About & team page
│   ├── ai-tools/               # AI tools directory
│   ├── auth/callback/          # Google OAuth token callback
│   ├── contact/                # Contact / suggestion form
│   ├── favorites/              # User favorites dashboard (auth-required)
│   ├── forgot-password/        # Password reset request
│   ├── login/                  # Email & Google login
│   ├── profile/                # User profile management (auth-required)
│   ├── quizzes/                # Quiz catalog + [slug]/[topicSlug] quiz engine
│   ├── reset-password/         # Password reset with token validation
│   ├── resources/              # Resource library + [slug] detail
│   ├── signup/                 # Registration + email verification
│   ├── tracks/                 # Learning tracks + [slug] detail
│   └── verify-email/           # Email verification OTP entry
│
├── components/                 # Shared and page-specific components
│   ├── ui/                     # Base UI primitives (Button, Card, Input, etc.)
│   │   ├── LikeButton.tsx      # Optimistic like/unlike with auth gate
│   │   ├── ResourceCard.tsx    # Resource display card
│   │   └── TrackCard.tsx       # Learning track display card
│   ├── navbar.tsx              # Responsive navigation with auth state
│   ├── Footer.tsx              # Site footer
│   ├── TracksSection.tsx       # Paginated, searchable tracks grid
│   ├── ResourcesSection.tsx    # Paginated, filterable resources grid
│   ├── AiToolsSection.tsx      # Paginated, filterable AI tools grid
│   ├── QuizForm.tsx            # Quiz engine (timer, navigation, state)
│   ├── QuizResults.tsx         # Results summary and score breakdown
│   ├── QuizReview.tsx          # Per-question answer review
│   ├── ContactSction.tsx       # Suggestion/contact form
│   └── ...                     # Additional page sections
│
├── context/
│   └── AuthContext.tsx         # Global auth state, token management
│
├── data/
│   ├── quizzes.json            # Local quiz content (100+ questions)
│   ├── quizzes.ts              # Quiz data helpers
│   └── mock/                   # ★ Portfolio mode static data
│       ├── tracks.ts           # Mock learning tracks with pagination
│       ├── resources.ts        # Mock resources with category filtering
│       ├── aiTools.ts          # Mock AI tools with category filtering
│       └── team.ts             # Mock team members
│
├── hooks/
│   ├── useAuthGuard.ts         # Redirect hook for auth-gated pages
│   └── useCopyProtection.ts    # Disable right-click/text-select on quiz content
│
├── lib/
│   └── api/                    # ★ API layer (disabled in portfolio mode)
│       ├── client.ts           # Axios singleton with JWT interceptors
│       ├── auth.ts             # Authentication endpoints
│       ├── apiTrack.ts         # Learning tracks endpoints → mock in portfolio
│       ├── apiResource.ts      # Resources endpoints → mock in portfolio
│       ├── apiAiTools.ts       # AI tools endpoints → mock in portfolio
│       ├── apiTeam.ts          # Team endpoint → mock in portfolio
│       ├── apiSuggestion.ts    # Contact form endpoint → simulated in portfolio
│       ├── favorites.ts        # Favorites/like endpoints (disabled)
│       └── profile.ts          # Profile management endpoints (disabled)
│
├── styles/
│   └── globals.css             # Global styles, CSS variables, Tailwind base
│
├── types/                      # TypeScript interface definitions
│   ├── auth.ts                 # Auth context types, login/register responses
│   ├── api.ts                  # Generic API response shapes
│   ├── track.ts                # Track and PaginatedTracks interfaces
│   ├── resource.ts             # Resource, ResourceCategory, PaginatedResources
│   ├── ai-tools.ts             # AiTool, AiToolsCategory, PaginatedAiTools
│   ├── favorites.ts            # Favorites and LikeResponse types
│   ├── user.ts                 # User profile types
│   ├── team.ts                 # Team member type
│   ├── suggestion.ts           # Contact form and API error types
│   └── quizInterfaceAndType.ts # Quiz engine state and data types
│
└── utils/
    ├── quizUtils.ts            # Question shuffling, scoring, progress calc
    └── storageManager.ts       # localStorage abstraction for quiz persistence
```

---

## Installation

### Prerequisites

- **Node.js** ≥ 18.x
- **pnpm** ≥ 8.x (`npm install -g pnpm`)

### Setup

```bash
# Clone the repository
git clone https://github.com/aymanbismail/DevAura.git
cd devaura

# Install dependencies
pnpm install

# Copy environment variables (optional — not required for portfolio mode)
cp .env.example .env.local
```

---

## Development

```bash
# Start the development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start the production server
pnpm start

# Run the linter
pnpm lint
```

---

## Environment Variables

The application runs in **portfolio mode by default** with no environment variables required. The following variable is needed only when connecting to the production backend.

```bash
# .env.local

# ─── Backend API ──────────────────────────────────────────────────────────────
# Base URL for the Laravel API.
# Omit this variable to use static mock data (portfolio mode).
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
```

> **Security note:** No secrets or API keys are required for the frontend in this version. The backend handles all authentication and authorization. Never commit real environment values to version control.

---

## API Layer

> **This repository is the public portfolio version of DevAura. All backend API integrations are intentionally disabled.**

In the production application, the frontend communicates with a custom **Laravel REST API**. This includes:

| Integration                                                    | Status       | Description                                                    |
| -------------------------------------------------------------- | ------------ | -------------------------------------------------------------- |
| Authentication (login, register, verify email, password reset) | ⛔ Disabled  | Replaced with stub functions in `AuthContext.tsx`              |
| Google OAuth (Laravel Socialite)                               | ⛔ Disabled  | `loginWithGoogle()` shows an informational alert               |
| Learning tracks (paginated, with search)                       | ✅ Mocked    | Returns data from `src/data/mock/tracks.ts`                    |
| Resources (paginated, category-filtered)                       | ✅ Mocked    | Returns data from `src/data/mock/resources.ts`                 |
| AI Tools (paginated, category-filtered)                        | ✅ Mocked    | Returns data from `src/data/mock/aiTools.ts`                   |
| Team members                                                   | ✅ Mocked    | Returns data from `src/data/mock/team.ts`                      |
| Contact/Suggestion form                                        | ✅ Simulated | Client-side validation + simulated success response            |
| Favorites (like/unlike, favorites list)                        | ⛔ Disabled  | Like button shows auth gate; favorites page redirects to login |
| User profile (update info, change password)                    | ⛔ Disabled  | Profile page redirects to login                                |
| JWT token refresh (Axios interceptor)                          | ⛔ Disabled  | `ApiClient` preserved but not invoked                          |

### Restoring Live API Connectivity

To re-enable the live backend:

1. Set `NEXT_PUBLIC_API_URL` in `.env.local`
2. In `src/context/AuthContext.tsx`, replace the stub functions with the original implementation from the comment block at the bottom of the file
3. In each `src/lib/api/api*.ts` file, swap the mock function calls with the original `fetch`-based implementations from the preserved comment blocks
4. No changes to UI components are needed — they depend only on the function signatures, not the data source

---

## Challenges & Solutions

### 1. JWT Auto-Refresh Without Cascading Failures

**Problem:** Multiple concurrent API requests could all fail with 401 when a token expired, each triggering its own refresh attempt and causing race conditions.

**Solution:** Built a request queue in the `ApiClient` singleton. When a 401 is detected, all subsequent requests are held in a `failedQueue`. A single refresh call runs, and on success, all queued requests are replayed with the new token. A `locked` flag prevents any new refresh from starting while one is in progress.

### 2. Optimistic UI for Like/Unlike

**Problem:** Toggling a like on a resource/track required a network round-trip before the UI updated, creating an unresponsive feel.

**Solution:** `LikeButton.tsx` updates the local like state and count _immediately_ on click, then fires the API request in the background. If the request fails, the previous state is restored. This pattern provides instant feedback while remaining consistent with the server.

### 3. Quiz State Persistence Across Navigation

**Problem:** Navigating away from a quiz (e.g., switching tabs) would destroy React state and lose progress.

**Solution:** Created `storageManager.ts` as a typed `localStorage` abstraction. Quiz progress (current question index, answers, time remaining) is serialized to localStorage on every state change and rehydrated on mount, enabling interrupted sessions to resume seamlessly.

### 4. Copy Protection on Quiz Content

**Problem:** Users could trivially copy quiz questions into AI tools to get answers, undermining the learning experience.

**Solution:** `useCopyProtection.ts` attaches `contextmenu`, `selectstart`, and keyboard-shortcut (`Ctrl+C`, `Ctrl+A`) event listeners to the quiz container. This is a soft deterrent — the goal is friction, not absolute enforcement.

### 5. Performant Lottie Animations

**Problem:** Lottie animations running continuously in the background wasted CPU and caused layout jank on scroll-heavy pages.

**Solution:** Used `IntersectionObserver` to conditionally set `loop` and `autoplay` props based on section visibility. The animation pauses when the section exits the viewport and resumes when it re-enters.

---

## Performance Considerations

- **Static Generation (SSG):** All content pages that don't require user-specific data are pre-rendered at build time, resulting in near-instant page loads from Vercel's CDN edge network.
- **Image Optimization:** All images use the Next.js `<Image>` component with explicit `width` and `height`. Remote images require `remotePatterns` configuration to prevent SSRF.
- **Code Splitting:** Next.js App Router automatically splits each route into its own JavaScript bundle. Heavy components are lazily imported to keep the initial bundle minimal.
- **Passive Event Listeners:** Scroll event listeners are registered with `{ passive: true }` to avoid blocking the main thread during navbar scroll transitions.
- **Tailwind CSS Purging:** Tailwind's JIT compiler scans source files and emits only the CSS classes actually used, keeping the stylesheet under 15KB gzipped.
- **Debounced Search:** Search inputs in TracksSection, ResourcesSection, and AiToolsSection update state on each keystroke; data filtering runs in a `useEffect` dependency array, batching rapid keystrokes through React's render cycle without explicit debounce timers.

---

## Learning Outcomes

Building DevAura full-stack — frontend, backend, design to deployment — produced several concrete engineering lessons:

**API Design & Authentication**
Implementing JWT with automatic refresh taught me exactly where token management breaks down. Race conditions on concurrent requests are a real failure mode that requires careful synchronization, not just a single `try/catch`.

**State Management Choices**
Starting with React Context and adding complexity only when needed kept the codebase lean. For a platform of this scope, Context + local state was the right call. Not every project needs Redux.

**The Cost of Optimistic UI**
Optimistic updates make interfaces feel fast, but they require carefully planned rollback logic. Writing `LikeButton.tsx` made clear that "undo on failure" is as important as "update immediately."

**TypeScript at the Boundary**
The most valuable TypeScript investment was defining types for API responses. When the backend shape changed, TypeScript errors in the frontend immediately pinpointed every affected consumer — far faster than runtime debugging.

**Frontend Architecture for Backend-Dependent Features**
Designing the data layer with an abstraction (`src/lib/api/*`) that could be swapped for mock data proved invaluable when preparing this public portfolio version. UI components have zero knowledge of whether they're reading from a server or a static file — this is the right separation of concerns.

---

## Author

**Ayman Ismail**  
Full-Stack Developer

- Website: [aymanismail.com](https://aymanismail.com)
- Email: [hi@aymanismail.com](mailto:hi@aymanismail.com)
- GitHub: [@aymanbismail](https://github.com/aymanbismail)
- LinkedIn: [aymanbismail](https://www.linkedin.com/in/aymanbismail)

---

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

<div align="center">

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

</div>
