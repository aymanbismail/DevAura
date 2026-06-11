export interface ResourceCategory {
  id: number;
  name: string;
  created_at?: string;
}

export interface ResourceData {
  name: string;
  description?: string;
  link: string;
  type: "Course" | "Documentation" | "Tool" | string;
}

export interface Resource {
  id: number;
  name: string;
  slug: string;
  image_url: string;
  category_id: number;
  category?: {
    id: number;
    name: string;
  };
  resources_data: ResourceData[];
  views_count?: number;
    likes_count?: number;
  is_liked?: boolean;
  created_at?: string;
}

export interface PaginatedResources {
  data: Resource[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}

export interface ResourcesFilters {
  name?: string;
  category_id?: number;
}