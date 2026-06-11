/**
 * Mock data for learning tracks.
 *
 * NOTE: This file is used in the public/portfolio version of DevAura.
 * In production, this data is served dynamically via the backend API
 * (see src/lib/api/apiTrack.ts). The API layer is intentionally disabled
 * here to allow the project to run without a backend connection.
 */

import { Track, PaginatedTracks } from "@/types/track";

export const mockTracks: Track[] = [
  {
    id: 1,
    slug: "frontend-nextjs",
    name: "Frontend Development (Next.js)",
    description:
      "Build fast, SEO-friendly web applications using React and Next.js, from zero to production.",
    image_url: "/icons/nextjs.svg",
    views_count: 1240,
    likes_count: 318,
    is_liked: false,
    topics: [
      {
        name: "HTML5",
        description:
          "Semantic markup, forms, accessibility, and multimedia elements.",
      },
      {
        name: "CSS3",
        description:
          "Flexbox, Grid, animations, transitions, and responsive design.",
      },
      {
        name: "JavaScript",
        description:
          "ES6+ features, DOM manipulation, async/await, and event handling.",
      },
      {
        name: "TypeScript",
        description:
          "Static typing, interfaces, generics, and type-safe React components.",
      },
      {
        name: "React",
        description:
          "Components, hooks (useState, useEffect, useContext), and state management.",
      },
      {
        name: "Next.js",
        description:
          "SSR, SSG, dynamic routing, API routes, and image optimization.",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling, custom themes, and dark mode.",
      },
      {
        name: "Git & GitHub",
        description:
          "Version control, branching strategies, and collaborative workflows.",
      },
    ],
    created_at: "2024-01-15",
  },
  {
    id: 2,
    slug: "frontend-angular",
    name: "Frontend Development (Angular)",
    description:
      "Build scalable enterprise-grade single-page applications with Angular and TypeScript.",
    image_url: "/icons/angular.svg",
    views_count: 890,
    likes_count: 214,
    is_liked: false,
    topics: [
      {
        name: "HTML5",
        description: "Semantic structure and modern HTML5 features.",
      },
      {
        name: "CSS3",
        description: "Responsive layouts, component styles, and animations.",
      },
      {
        name: "TypeScript",
        description:
          "Strongly typed code with interfaces, decorators, and generics.",
      },
      {
        name: "Angular",
        description:
          "Components, services, modules, dependency injection, and CLI.",
      },
      {
        name: "RxJS",
        description: "Reactive programming with Observables and operators.",
      },
      {
        name: "Angular Routing",
        description:
          "Client-side navigation, guards, resolvers, and lazy loading.",
      },
      {
        name: "Angular Material",
        description:
          "Pre-built, accessible UI components following Material Design.",
      },
    ],
    created_at: "2024-01-20",
  },
  {
    id: 3,
    slug: "frontend-vue",
    name: "Frontend Development (Vue.js)",
    description:
      "Develop elegant, reactive UIs with Vue 3, the Composition API, and the Vue ecosystem.",
    image_url: "/icons/vue.svg",
    views_count: 760,
    likes_count: 187,
    is_liked: false,
    topics: [
      {
        name: "HTML5",
        description: "Semantic elements and modern HTML5 patterns.",
      },
      {
        name: "CSS3",
        description: "Scoped styles, CSS modules, and responsive design.",
      },
      {
        name: "JavaScript",
        description: "Fundamentals, ES6+, and async patterns.",
      },
      {
        name: "Vue 3",
        description:
          "Composition API, reactivity system, components, and directives.",
      },
      {
        name: "Vue Router",
        description: "Client-side routing with guards and nested routes.",
      },
      {
        name: "Pinia",
        description: "Modern state management for Vue 3 applications.",
      },
      {
        name: "Vite",
        description: "Lightning-fast build tooling and HMR for Vue projects.",
      },
    ],
    created_at: "2024-02-01",
  },
  {
    id: 4,
    slug: "backend-laravel",
    name: "Backend Development (Laravel)",
    description:
      "Build robust RESTful APIs and full-stack web applications with PHP and Laravel.",
    image_url: "/icons/laravel.svg",
    views_count: 1100,
    likes_count: 295,
    is_liked: false,
    topics: [
      {
        name: "PHP",
        description: "Core language features, OOP, namespaces, and Composer.",
      },
      {
        name: "Laravel",
        description:
          "MVC architecture, Eloquent ORM, middleware, and artisan CLI.",
      },
      {
        name: "RESTful APIs",
        description:
          "API design principles, resources, versioning, and authentication.",
      },
      {
        name: "MySQL",
        description:
          "Database design, migrations, seeders, and query optimization.",
      },
      {
        name: "Laravel Sanctum",
        description:
          "API token authentication and session-based SPA authentication.",
      },
      {
        name: "Queue & Jobs",
        description:
          "Background processing, job queues, and event broadcasting.",
      },
      {
        name: "Testing",
        description:
          "Feature and unit tests with PHPUnit and Laravel testing helpers.",
      },
    ],
    created_at: "2024-02-10",
  },
  {
    id: 5,
    slug: "backend-nodejs",
    name: "Backend Development (Node.js)",
    description:
      "Create high-performance server-side applications and APIs with Node.js and Express.",
    image_url: "/icons/nodejs.svg",
    views_count: 980,
    likes_count: 245,
    is_liked: false,
    topics: [
      {
        name: "JavaScript (Node.js)",
        description: "Event loop, modules, streams, and the Node.js runtime.",
      },
      {
        name: "Express.js",
        description:
          "Routing, middleware chains, error handling, and REST API design.",
      },
      {
        name: "MongoDB",
        description:
          "NoSQL data modeling, Mongoose ODM, and aggregation pipelines.",
      },
      {
        name: "JWT Authentication",
        description: "Stateless authentication with access and refresh tokens.",
      },
      {
        name: "Prisma ORM",
        description: "Type-safe database access for PostgreSQL and MySQL.",
      },
      {
        name: "Socket.io",
        description: "Real-time bidirectional communication for live features.",
      },
    ],
    created_at: "2024-02-15",
  },
  {
    id: 6,
    slug: "data-analysis-python",
    name: "Data Analysis (Python)",
    description:
      "Transform raw data into actionable insights using Python, Pandas, and visualization libraries.",
    image_url: "/icons/python.svg",
    views_count: 670,
    likes_count: 158,
    is_liked: false,
    topics: [
      {
        name: "Python",
        description:
          "Language fundamentals, data types, control flow, and functions.",
      },
      {
        name: "NumPy",
        description:
          "Numerical computing, array operations, and linear algebra.",
      },
      {
        name: "Pandas",
        description:
          "Data manipulation, cleaning, merging, and time series analysis.",
      },
      {
        name: "Matplotlib & Seaborn",
        description: "Data visualization, statistical plots, and dashboards.",
      },
      {
        name: "Jupyter Notebooks",
        description: "Interactive computing environment for data exploration.",
      },
      {
        name: "SQL for Data Analysis",
        description:
          "Querying, window functions, and aggregations for analysis.",
      },
    ],
    created_at: "2024-03-01",
  },
];

/** Returns a paginated response matching the shape of the real API. */
export function getMockTracks(
  filters: { name?: string } = {},
  page: number = 1,
  perPage: number = 6,
): PaginatedTracks {
  let filtered = mockTracks;

  if (filters.name?.trim()) {
    const term = filters.name.trim().toLowerCase();
    filtered = mockTracks.filter((t) => t.name.toLowerCase().includes(term));
  }

  const total = filtered.length;
  const lastPage = Math.max(1, Math.ceil(total / perPage));
  const from = (page - 1) * perPage;
  const paginated = filtered.slice(from, from + perPage);

  return {
    data: paginated,
    current_page: page,
    last_page: lastPage,
    per_page: perPage,
    total,
    from: from + 1,
    to: from + paginated.length,
    prev_page_url: page > 1 ? `?page=${page - 1}` : null,
    next_page_url: page < lastPage ? `?page=${page + 1}` : null,
  };
}

/** Finds a single track by slug. */
export function getMockTrackBySlug(slug: string): Track | null {
  return mockTracks.find((t) => t.slug === slug) ?? null;
}
