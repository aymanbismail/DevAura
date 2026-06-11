import { Resource } from "./resource";
import { Track } from "./track";


// Favorites Response Types
export interface FavoritesStatistics {
  total_liked_resources: number;
  total_liked_tracks: number;
}

export interface FavoritesData {
  resources: Resource[];
  tracks: Track[];
  statistics: FavoritesStatistics;
}

export interface FavoritesResponse {
  success: boolean;
  data: FavoritesData;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface LikeResponse {
  success: boolean;
  message: string;
  data: {
    liked: boolean;
    likes_count: number;
  };
}