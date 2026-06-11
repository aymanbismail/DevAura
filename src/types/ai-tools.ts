export interface AiToolsCategory {
  id: number;
  name: string;
  created_at?: string;
}

export interface AiTool {
  id: number;
  name: string;
  link: string;
  image_url: string;
  ai_tool_category_id: number;
  category?: {
    id: number;
    name: string;
  };
  views_count?: number;
  created_at?: string;
}

export interface PaginatedAiTools {
  data: AiTool[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}

export interface AiToolsFilters {
  name?: string;
  category_id?: number;
}