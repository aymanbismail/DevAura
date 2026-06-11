"use client";

import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Eye } from "lucide-react";
import { Track } from "@/types/track";
import LikeButton from "@/components/ui/LikeButton";
import { useState, useEffect } from "react";
import axios from "axios";

interface TrackCardProps {
  track: Track;
  showLike?: boolean;
  onUnlike?: () => void;
}

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  
  let sessionId = sessionStorage.getItem("track_session_id");
  
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem("track_session_id", sessionId);
  }
  
  return sessionId;
}

export default function TrackCard({ 
  track, 
  showLike = true,
  onUnlike 
}: TrackCardProps) {
  const [views, setViews] = useState(track.views_count || 0);
  const [isTracking, setIsTracking] = useState(false);
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    setSessionId(getSessionId());
  }, []);

  const handleCardClick = async () => {
    if (isTracking || !sessionId) return;
    setIsTracking(true);

    try {
      const response = await axios.post(
        `https://devapi.enjezly.com/api/website/learning-tracks/${track.slug}/view`,
        {
          session_id: sessionId,
        }
      );

      if (response.data.recorded) {
        setViews(response.data.views_count);
      }
    } catch (error) {
      console.error("Error tracking view:", error);
    } finally {
      setTimeout(() => setIsTracking(false), 1000);
    }
  };

  const formatViews = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <Link href={`/tracks/${track.slug}`} onClick={handleCardClick}>
      <Card className="group flex flex-row items-center gap-4 p-4 relative overflow-hidden border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#3AB0FF]/30">
        {/* Image */}
        <div className="shrink-0 relative w-12 h-12">
          <Image
            src={track.image_url}
            alt={`${track.name} logo`}
            width={48}
            height={48}
            quality={85}
            loading="lazy"
            className="rounded object-cover"
            sizes="48px"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjZTVlN2ViIi8+PC9zdmc+"
          />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <CardTitle className="text-lg font-semibold text-foreground transition-colors duration-300">
            {track.name}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            {track.topics?.length ?? 0} Learning Topics
          </CardDescription>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Views */}
          <div className="flex items-center gap-1 text-muted-foreground group-hover:text-[#3AB0FF] transition-colors duration-300">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium min-w-[2.1ch] text-right">
              {formatViews(views)}
            </span>
          </div>

          {/* Like Button - منع انتشار الحدث */}
          {showLike && (
            <div 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <LikeButton
                slug={track.slug}
                type="track"
                initialLiked={track.is_liked}
                initialLikesCount={track.likes_count || 0}
                showCount={true}
              />
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}