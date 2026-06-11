"use client";

import { useState, useEffect } from "react";
import { favoritesApi } from "@/lib/api/favorites";
import { Heart, BookOpen, Layers, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Resource } from "@/types/resource";
import { Track } from "@/types/track";
import { useAuth } from "@/context/AuthContext";
import ResourceCard from "@/components/ui/ResourceCard";
import TrackCard from "@/components/ui/TrackCard";

export default function FavoritesPage() {
  const { user, loading: authLoading, updateFavoritesCount } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"resources" | "tracks">("resources");
  const [resources, setResources] = useState<Resource[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [statistics, setStatistics] = useState({
    total_liked_resources: 0,
    total_liked_tracks: 0,
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      fetchFavorites();
    }
  }, [user]);

  const fetchFavorites = async () => {
    try {
      setLoading(true);
      const response = await favoritesApi.getFavorites();
      
      if (response.success) {
        setResources(response.data.resources);
        setTracks(response.data.tracks);
        setStatistics(response.data.statistics);
      }
    } catch (error) {
      console.error("Error fetching favorites:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUnlike = async (slug: string, type: "resource" | "track") => {
    try {
      if (type === "resource") {
        await favoritesApi.toggleResourceLike(slug);
        setResources(prev => prev.filter(r => r.slug !== slug));
        setStatistics(prev => ({
          ...prev,
          total_liked_resources: Math.max(0, prev.total_liked_resources - 1)
        }));
        updateFavoritesCount('resources', false);
      } else {
        await favoritesApi.toggleTrackLike(slug);
        setTracks(prev => prev.filter(t => t.slug !== slug));
        setStatistics(prev => ({
          ...prev,
          total_liked_tracks: Math.max(0, prev.total_liked_tracks - 1)
        }));
        updateFavoritesCount('tracks', false);
      }
    } catch (error) {
      console.error("Error unliking:", error);
    }
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-10 h-10 text-red-500 fill-red-500" />
            <h1 className="text-4xl font-bold text-foreground">
              My Favorites
            </h1>
          </div>
          <p className="text-muted-foreground">
            All the resources and learning tracks you have saved
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Favorite Resources</p>
                <p className="text-3xl font-bold text-foreground">
                  {statistics.total_liked_resources}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Favorite Tracks</p>
                <p className="text-3xl font-bold text-foreground">
                  {statistics.total_liked_tracks}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("resources")}
            className={`pb-4 px-4 text-sm font-medium transition-colors relative ${
              activeTab === "resources"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Resources ({statistics.total_liked_resources})</span>
            </div>
            {activeTab === "resources" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("tracks")}
            className={`pb-4 px-4 text-sm font-medium transition-colors relative ${
              activeTab === "tracks"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Learning Tracks ({statistics.total_liked_tracks})</span>
            </div>
            {activeTab === "tracks" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            {/* Resources Tab */}
            {activeTab === "resources" && (
              <div>
                {resources.length === 0 ? (
                  <div className="text-center py-20">
                    <Layers className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No Favorite Resources Yet
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Start adding resources to your favorites to see them here. Click the heart icon on any resource to save it.
                    </p>
                    <button
                      onClick={() => router.push("/resources")}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Browse Resources
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource) => (
                      <ResourceCard
                        key={resource.id}
                        resource={resource}
                        onUnlike={() => handleUnlike(resource.slug, "resource")}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tracks Tab */}
            {activeTab === "tracks" && (
              <div>
                {tracks.length === 0 ? (
                  <div className="text-center py-20">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No Favorite Tracks Yet
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Start adding learning tracks to your favorites to see them here. Click the heart icon on any track to save it.
                    </p>
                    <button
                      onClick={() => router.push("/learning-tracks")}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Browse Learning Tracks
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tracks.map((track) => (
                      <TrackCard
                        key={track.id}
                        track={track}
                        onUnlike={() => handleUnlike(track.slug, "track")}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}