// types/track.ts
type Topic = {
  name: string;
  description: string;
};

export interface Track {
  id: number;
  slug: string;
  name: string;
  description: string;
  topics: Topic[];
  image_url: string;
  views_count?: number;
  likes_count?: number;
  is_liked?: boolean;
  created_at?: string;
}

// إضافة Type للـ Pagination (مثل Resources)
export interface PaginatedTracks {
  data: Track[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
  prev_page_url: string | null;
  next_page_url: string | null;
}

export interface TracksFilters {
  name?: string;
}