import { Resource } from "@/types/resource";
import { apiClient } from "./client";
import {
  FavoritesResponse,
  PaginatedResponse,
  LikeResponse,
} from "@/types/favorites";
import { Track } from "@/types/track";

export const favoritesApi = {
  // Get all favorites (resources + tracks + statistics)
  getFavorites: async () => {
    const response = await apiClient.get<FavoritesResponse>("/website/favorites");
    return response.data;
  },

  // Get paginated liked resources
  getLikedResources: async (page: number = 1) => {
    const response = await apiClient.get<PaginatedResponse<Resource>>(
      `/website/favorites/resources?page=${page}`
    );
    return response.data;
  },

  // Get paginated liked tracks
  getLikedTracks: async (page: number = 1) => {
    const response = await apiClient.get<PaginatedResponse<Track>>(
      `/website/favorites/tracks?page=${page}`
    );
    return response.data;
  },

  // Toggle like on resource
  toggleResourceLike: async (slug: string) => {
    const response = await apiClient.post<LikeResponse>(
      `/website/resources/${slug}/like`
    );
    return response.data;
  },

  // Toggle like on track
  toggleTrackLike: async (slug: string) => {
    const response = await apiClient.post<LikeResponse>(
      `/website/learning-tracks/${slug}/like`
    );
    return response.data;
  },
};

export default favoritesApi;