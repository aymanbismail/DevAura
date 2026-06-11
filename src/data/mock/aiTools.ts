/**
 * Mock data for AI tools.
 *
 * NOTE: In production, this data is served dynamically via the backend API
 * (see src/lib/api/apiAiTools.ts). This file provides static mock data
 * for the public/portfolio version of DevAura.
 */

import { AiTool, AiToolsCategory, PaginatedAiTools } from "@/types/ai-tools";

export const mockAiToolCategories: AiToolsCategory[] = [
  { id: 1, name: "Writing & Editing" },
  { id: 2, name: "Image Generation" },
  { id: 3, name: "Video & Animation" },
  { id: 4, name: "Code Assistance" },
  { id: 5, name: "Productivity" },
  { id: 6, name: "Audio & Speech" },
  { id: 7, name: "Data & Research" },
];

export const mockAiTools: AiTool[] = [
  // Writing & Editing
  {
    id: 1,
    name: "ChatGPT",
    link: "https://chat.openai.com",
    image_url: "/icons/chatgpt.svg",
    ai_tool_category_id: 1,
    category: { id: 1, name: "Writing & Editing" },
    views_count: 8400,
    created_at: "2024-01-10",
  },
  {
    id: 2,
    name: "Claude",
    link: "https://claude.ai",
    image_url: "/icons/claude.svg",
    ai_tool_category_id: 1,
    category: { id: 1, name: "Writing & Editing" },
    views_count: 5200,
    created_at: "2024-01-12",
  },
  {
    id: 3,
    name: "Grammarly",
    link: "https://www.grammarly.com",
    image_url: "/icons/grammarly.webp",
    ai_tool_category_id: 1,
    category: { id: 1, name: "Writing & Editing" },
    views_count: 4100,
    created_at: "2024-01-14",
  },
  {
    id: 4,
    name: "Copy.ai",
    link: "https://www.copy.ai",
    image_url: "/icons/copy-ai.svg",
    ai_tool_category_id: 1,
    category: { id: 1, name: "Writing & Editing" },
    views_count: 3200,
    created_at: "2024-01-16",
  },
  // Image Generation
  {
    id: 5,
    name: "Midjourney",
    link: "https://www.midjourney.com",
    image_url: "/icons/midjourney.svg",
    ai_tool_category_id: 2,
    category: { id: 2, name: "Image Generation" },
    views_count: 6800,
    created_at: "2024-01-18",
  },
  {
    id: 6,
    name: "DALL-E 3",
    link: "https://openai.com/dall-e-3",
    image_url: "/icons/chatgpt.svg",
    ai_tool_category_id: 2,
    category: { id: 2, name: "Image Generation" },
    views_count: 5500,
    created_at: "2024-01-20",
  },
  {
    id: 7,
    name: "Leonardo AI",
    link: "https://leonardo.ai",
    image_url: "/icons/leonardo.svg",
    ai_tool_category_id: 2,
    category: { id: 2, name: "Image Generation" },
    views_count: 4200,
    created_at: "2024-01-22",
  },
  // Video & Animation
  {
    id: 8,
    name: "Runway ML",
    link: "https://runwayml.com",
    image_url: "/icons/runwayml.svg",
    ai_tool_category_id: 3,
    category: { id: 3, name: "Video & Animation" },
    views_count: 3800,
    created_at: "2024-01-24",
  },
  {
    id: 9,
    name: "Pika Labs",
    link: "https://pika.art",
    image_url: "/icons/pika-labs.svg",
    ai_tool_category_id: 3,
    category: { id: 3, name: "Video & Animation" },
    views_count: 3100,
    created_at: "2024-01-26",
  },
  {
    id: 10,
    name: "Synthesia",
    link: "https://www.synthesia.io",
    image_url: "/icons/synthesia.svg",
    ai_tool_category_id: 3,
    category: { id: 3, name: "Video & Animation" },
    views_count: 2700,
    created_at: "2024-01-28",
  },
  // Code Assistance
  {
    id: 11,
    name: "GitHub Copilot",
    link: "https://github.com/features/copilot",
    image_url: "/icons/github.svg",
    ai_tool_category_id: 4,
    category: { id: 4, name: "Code Assistance" },
    views_count: 7200,
    created_at: "2024-02-01",
  },
  {
    id: 12,
    name: "Cursor",
    link: "https://cursor.sh",
    image_url: "/icons/cursor.svg",
    ai_tool_category_id: 4,
    category: { id: 4, name: "Code Assistance" },
    views_count: 5900,
    created_at: "2024-02-03",
  },
  {
    id: 13,
    name: "Tabnine",
    link: "https://www.tabnine.com",
    image_url: "/icons/tabnine.svg",
    ai_tool_category_id: 4,
    category: { id: 4, name: "Code Assistance" },
    views_count: 3400,
    created_at: "2024-02-05",
  },
  // Productivity
  {
    id: 14,
    name: "Notion AI",
    link: "https://www.notion.so/product/ai",
    image_url: "/icons/notion.svg",
    ai_tool_category_id: 5,
    category: { id: 5, name: "Productivity" },
    views_count: 4600,
    created_at: "2024-02-07",
  },
  {
    id: 15,
    name: "Perplexity AI",
    link: "https://www.perplexity.ai",
    image_url: "/icons/perplexity.svg",
    ai_tool_category_id: 5,
    category: { id: 5, name: "Productivity" },
    views_count: 4100,
    created_at: "2024-02-09",
  },
  // Audio & Speech
  {
    id: 16,
    name: "ElevenLabs",
    link: "https://elevenlabs.io",
    image_url: "/icons/elevenlabs.svg",
    ai_tool_category_id: 6,
    category: { id: 6, name: "Audio & Speech" },
    views_count: 3200,
    created_at: "2024-02-11",
  },
  {
    id: 17,
    name: "Whisper",
    link: "https://openai.com/research/whisper",
    image_url: "/icons/chatgpt.svg",
    ai_tool_category_id: 6,
    category: { id: 6, name: "Audio & Speech" },
    views_count: 2800,
    created_at: "2024-02-13",
  },
  // Data & Research
  {
    id: 18,
    name: "Julius AI",
    link: "https://julius.ai",
    image_url: "/icons/julius.svg",
    ai_tool_category_id: 7,
    category: { id: 7, name: "Data & Research" },
    views_count: 2400,
    created_at: "2024-02-15",
  },
  {
    id: 19,
    name: "Consensus",
    link: "https://consensus.app",
    image_url: "/icons/consensus.svg",
    ai_tool_category_id: 7,
    category: { id: 7, name: "Data & Research" },
    views_count: 1900,
    created_at: "2024-02-17",
  },
];

/** Returns a paginated response matching the shape of the real API. */
export function getMockAiTools(
  filters: { name?: string; category_id?: number } = {},
  page: number = 1,
  perPage: number = 9,
): PaginatedAiTools {
  let filtered = mockAiTools;

  if (filters.name?.trim()) {
    const term = filters.name.trim().toLowerCase();
    filtered = filtered.filter((t) => t.name.toLowerCase().includes(term));
  }

  if (filters.category_id) {
    filtered = filtered.filter(
      (t) => t.ai_tool_category_id === filters.category_id,
    );
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

/** Returns all AI tool categories. */
export function getMockAiToolCategories(): AiToolsCategory[] {
  return mockAiToolCategories;
}
