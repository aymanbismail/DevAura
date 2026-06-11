/**
 * Mock data for learning resources.
 *
 * NOTE: In production, this data is served dynamically via the backend API
 * (see src/lib/api/apiResource.ts). This file provides static mock data
 * for the public/portfolio version of DevAura.
 */

import {
  Resource,
  ResourceCategory,
  PaginatedResources,
} from "@/types/resource";

export const mockResourceCategories: ResourceCategory[] = [
  { id: 1, name: "HTML5" },
  { id: 2, name: "CSS3" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "TypeScript" },
  { id: 5, name: "React" },
  { id: 6, name: "Next.js" },
  { id: 7, name: "Vue.js" },
  { id: 8, name: "Laravel" },
  { id: 9, name: "Node.js" },
  { id: 10, name: "Python" },
];

export const mockResources: Resource[] = [
  {
    id: 1,
    name: "HTML5",
    slug: "html5",
    image_url: "/icons/html5.svg",
    category_id: 1,
    category: { id: 1, name: "HTML5" },
    views_count: 2400,
    likes_count: 512,
    is_liked: false,
    resources_data: [
      {
        name: "MDN Web Docs – HTML",
        description: "The most comprehensive HTML reference on the web.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        type: "Documentation",
      },
      {
        name: "W3Schools HTML Tutorial",
        description: "Interactive HTML tutorial with live examples.",
        link: "https://www.w3schools.com/html/",
        type: "Documentation",
      },
      {
        name: "HTML Crash Course (Traversy Media)",
        description: "1-hour complete introduction to HTML5 in English.",
        link: "https://www.youtube.com/watch?v=UB1O30fR-EE",
        type: "Course",
      },
      {
        name: "HTML Reference Cheat Sheet",
        description: "Quick reference guide for HTML5 elements and attributes.",
        link: "https://htmlcheatsheet.com/",
        type: "Tool",
      },
    ],
    created_at: "2024-01-10",
  },
  {
    id: 2,
    name: "CSS3",
    slug: "css3",
    image_url: "/icons/css3.svg",
    category_id: 2,
    category: { id: 2, name: "CSS3" },
    views_count: 2100,
    likes_count: 448,
    is_liked: false,
    resources_data: [
      {
        name: "MDN Web Docs – CSS",
        description: "Complete CSS documentation and reference from Mozilla.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        type: "Documentation",
      },
      {
        name: "CSS-Tricks",
        description: "Articles, guides, and tips for modern CSS techniques.",
        link: "https://css-tricks.com/",
        type: "Documentation",
      },
      {
        name: "Flexbox Froggy",
        description: "Learn CSS Flexbox through an interactive game.",
        link: "https://flexboxfroggy.com/",
        type: "Tool",
      },
      {
        name: "Grid Garden",
        description: "Learn CSS Grid through a fun gardening game.",
        link: "https://cssgridgarden.com/",
        type: "Tool",
      },
    ],
    created_at: "2024-01-12",
  },
  {
    id: 3,
    name: "JavaScript",
    slug: "javascript",
    image_url: "/icons/javascript.svg",
    category_id: 3,
    category: { id: 3, name: "JavaScript" },
    views_count: 3200,
    likes_count: 720,
    is_liked: false,
    resources_data: [
      {
        name: "JavaScript.info",
        description:
          "The modern JavaScript tutorial — from basics to advanced.",
        link: "https://javascript.info/",
        type: "Documentation",
      },
      {
        name: "Eloquent JavaScript",
        description:
          "Free online book covering JavaScript fundamentals and browser programming.",
        link: "https://eloquentjavascript.net/",
        type: "Documentation",
      },
      {
        name: "freeCodeCamp JS Course",
        description: "Free, comprehensive JavaScript curriculum with projects.",
        link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
        type: "Course",
      },
      {
        name: "30 Days of JavaScript",
        description: "A 30-day challenge to master JavaScript concepts.",
        link: "https://github.com/Asabeneh/30-Days-Of-JavaScript",
        type: "Course",
      },
    ],
    created_at: "2024-01-15",
  },
  {
    id: 4,
    name: "TypeScript",
    slug: "typescript",
    image_url: "/icons/typescript.svg",
    category_id: 4,
    category: { id: 4, name: "TypeScript" },
    views_count: 1800,
    likes_count: 380,
    is_liked: false,
    resources_data: [
      {
        name: "TypeScript Official Docs",
        description: "The official TypeScript handbook and reference.",
        link: "https://www.typescriptlang.org/docs/",
        type: "Documentation",
      },
      {
        name: "Total TypeScript",
        description:
          "Advanced TypeScript exercises and workshops by Matt Pocock.",
        link: "https://www.totaltypescript.com/",
        type: "Course",
      },
      {
        name: "TypeScript Deep Dive",
        description: "Free book covering TypeScript in depth.",
        link: "https://basarat.gitbook.io/typescript/",
        type: "Documentation",
      },
    ],
    created_at: "2024-01-18",
  },
  {
    id: 5,
    name: "React",
    slug: "react",
    image_url: "/icons/react.svg",
    category_id: 5,
    category: { id: 5, name: "React" },
    views_count: 2900,
    likes_count: 634,
    is_liked: false,
    resources_data: [
      {
        name: "React Official Docs",
        description: "The new, interactive React documentation with examples.",
        link: "https://react.dev/",
        type: "Documentation",
      },
      {
        name: "Scrimba React Course",
        description: "Learn React with interactive coding challenges.",
        link: "https://scrimba.com/learn/learnreact",
        type: "Course",
      },
      {
        name: "Egghead.io React",
        description: "Concise, professional React video lessons.",
        link: "https://egghead.io/q/react",
        type: "Course",
      },
    ],
    created_at: "2024-01-22",
  },
  {
    id: 6,
    name: "Next.js",
    slug: "nextjs",
    image_url: "/icons/nextjs.svg",
    category_id: 6,
    category: { id: 6, name: "Next.js" },
    views_count: 2200,
    likes_count: 498,
    is_liked: false,
    resources_data: [
      {
        name: "Next.js Official Docs",
        description: "Complete documentation for the Next.js framework.",
        link: "https://nextjs.org/docs",
        type: "Documentation",
      },
      {
        name: "Next.js Learn Course",
        description: "Official interactive Next.js course by Vercel.",
        link: "https://nextjs.org/learn",
        type: "Course",
      },
      {
        name: "Vercel Platform",
        description: "Deploy Next.js applications with zero configuration.",
        link: "https://vercel.com/",
        type: "Tool",
      },
    ],
    created_at: "2024-01-25",
  },
  {
    id: 7,
    name: "Vue.js",
    slug: "vuejs",
    image_url: "/icons/vue.svg",
    category_id: 7,
    category: { id: 7, name: "Vue.js" },
    views_count: 1400,
    likes_count: 302,
    is_liked: false,
    resources_data: [
      {
        name: "Vue.js Official Docs",
        description:
          "The official Vue 3 documentation with interactive examples.",
        link: "https://vuejs.org/",
        type: "Documentation",
      },
      {
        name: "Vue Mastery",
        description: "High-quality Vue.js courses for all skill levels.",
        link: "https://www.vuemastery.com/",
        type: "Course",
      },
      {
        name: "Pinia Documentation",
        description:
          "Official documentation for the Pinia state management library.",
        link: "https://pinia.vuejs.org/",
        type: "Documentation",
      },
    ],
    created_at: "2024-02-01",
  },
  {
    id: 8,
    name: "Laravel",
    slug: "laravel",
    image_url: "/icons/laravel.svg",
    category_id: 8,
    category: { id: 8, name: "Laravel" },
    views_count: 1650,
    likes_count: 355,
    is_liked: false,
    resources_data: [
      {
        name: "Laravel Official Docs",
        description: "Complete documentation for the Laravel PHP framework.",
        link: "https://laravel.com/docs",
        type: "Documentation",
      },
      {
        name: "Laracasts",
        description: "Premium Laravel and PHP screencasts by Jeffrey Way.",
        link: "https://laracasts.com/",
        type: "Course",
      },
      {
        name: "Laravel Daily",
        description: "Practical Laravel tutorials and best practices.",
        link: "https://laraveldaily.com/",
        type: "Documentation",
      },
    ],
    created_at: "2024-02-05",
  },
  {
    id: 9,
    name: "Node.js",
    slug: "nodejs",
    image_url: "/icons/nodejs.svg",
    category_id: 9,
    category: { id: 9, name: "Node.js" },
    views_count: 1900,
    likes_count: 418,
    is_liked: false,
    resources_data: [
      {
        name: "Node.js Official Docs",
        description: "The official Node.js documentation and API reference.",
        link: "https://nodejs.org/en/docs/",
        type: "Documentation",
      },
      {
        name: "The Odin Project – Node",
        description: "Free, comprehensive Node.js curriculum.",
        link: "https://www.theodinproject.com/paths/full-stack-javascript",
        type: "Course",
      },
      {
        name: "Express.js Docs",
        description:
          "Official Express.js documentation for web and API development.",
        link: "https://expressjs.com/",
        type: "Documentation",
      },
    ],
    created_at: "2024-02-10",
  },
  {
    id: 10,
    name: "Python",
    slug: "python",
    image_url: "/icons/python.svg",
    category_id: 10,
    category: { id: 10, name: "Python" },
    views_count: 2600,
    likes_count: 578,
    is_liked: false,
    resources_data: [
      {
        name: "Python Official Docs",
        description: "The official Python 3 documentation and tutorial.",
        link: "https://docs.python.org/3/",
        type: "Documentation",
      },
      {
        name: "Real Python",
        description: "In-depth Python tutorials and articles for all levels.",
        link: "https://realpython.com/",
        type: "Documentation",
      },
      {
        name: "CS50P – Python",
        description:
          "Harvard's Introduction to Programming with Python — free on edX.",
        link: "https://cs50.harvard.edu/python/2022/",
        type: "Course",
      },
      {
        name: "Python Cheat Sheet",
        description: "Comprehensive Python quick-reference guide.",
        link: "https://www.pythoncheatsheet.org/",
        type: "Tool",
      },
    ],
    created_at: "2024-02-15",
  },
];

/** Returns a paginated response matching the shape of the real API. */
export function getMockResources(
  filters: { name?: string; category_id?: number } = {},
  page: number = 1,
  perPage: number = 9,
): PaginatedResources {
  let filtered = mockResources;

  if (filters.name?.trim()) {
    const term = filters.name.trim().toLowerCase();
    filtered = filtered.filter((r) => r.name.toLowerCase().includes(term));
  }

  if (filters.category_id) {
    filtered = filtered.filter((r) => r.category_id === filters.category_id);
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

/** Returns all resource categories. */
export function getMockResourceCategories(): ResourceCategory[] {
  return mockResourceCategories;
}
