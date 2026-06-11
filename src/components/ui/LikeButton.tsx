"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { favoritesApi } from "@/lib/api/favorites";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface LikeButtonProps {
  slug: string;
  type: "resource" | "track";
  initialLiked?: boolean;
  initialLikesCount?: number;
  showCount?: boolean;
  className?: string;
}

export default function LikeButton({
  slug,
  type,
  initialLiked = false,
  initialLikesCount = 0,
  showCount = true,
  className = "",
}: LikeButtonProps) {
  const { user, updateFavoritesCount } = useAuth();
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [likesCount, setLikesCount] = useState(initialLikesCount);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const handleLikeClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // تحقق إذا كان المستخدم مسجل دخول
    if (!user) {
      setShowLoginDialog(true);
      return;
    }

    if (isLoading) return;

    setIsLoading(true);
    const previousLiked = isLiked;
    const previousCount = likesCount;

    // تحديث متفائل للواجهة
    const willBeLiked = !isLiked;
    setIsLiked(willBeLiked);
    setLikesCount(prev => willBeLiked ? prev + 1 : Math.max(0, prev - 1));
    updateFavoritesCount(type === "resource" ? "resources" : "tracks", willBeLiked);

    try {
      const response = type === "resource"
        ? await favoritesApi.toggleResourceLike(slug)
        : await favoritesApi.toggleTrackLike(slug);

      if (response.success) {
        setIsLiked(response.data.liked);
        setLikesCount(response.data.likes_count);

        if (response.data.liked !== willBeLiked) {
          updateFavoritesCount(
            type === "resource" ? "resources" : "tracks", 
            response.data.liked
          );
        }
      } else {
        // إعادة القيم القديمة عند الفشل
        setIsLiked(previousLiked);
        setLikesCount(previousCount);
        updateFavoritesCount(type === "resource" ? "resources" : "tracks", previousLiked);
      }
    } catch {
      setIsLiked(previousLiked);
      setLikesCount(previousCount);
      updateFavoritesCount(type === "resource" ? "resources" : "tracks", previousLiked);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowLoginDialog(false);
    router.push("/login");
  };

  const handleCancelDialog = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowLoginDialog(false);
  };

  const formatCount = (count: number): string => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <>
      <button
        onClick={handleLikeClick}
        disabled={isLoading}
        className={`flex cursor-pointer items-center gap-1.5 transition-all duration-200 ${
          isLiked
            ? "text-red-500"
            : "text-muted-foreground hover:text-red-500"
        } ${isLoading ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
        aria-label={isLiked ? "Unlike" : "Like"}
      >
        <Heart
          className={`w-5 h-5 transition-all duration-200 ${
            isLiked ? "fill-current scale-110" : "hover:scale-110"
          }`}
        />
        {showCount && (
          <span className="text-sm font-medium min-w-[2ch]">
            {formatCount(likesCount)}
          </span>
        )}
      </button>

      {/* Login Required Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent
          className="sm:max-w-md"
          onPointerDownOutside={(e) => {
            e.preventDefault();
            e.stopPropagation(); // يمنع الضغط من التسرب للخلفية
          }}
          onInteractOutside={(e) => {
            e.preventDefault();
            e.stopPropagation(); // يمنع الضغط من التسرب للخلفية
          }}
        >
          <DialogHeader>
            <DialogTitle>Login Required</DialogTitle>
            <DialogDescription>
              You need to be logged in to like {type === "resource" ? "resources" : "tracks"}.
              Please login or create an account to continue.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-4">
            <Button
              variant="outline"
              onClick={handleCancelDialog}
              className="flex-1 cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={handleLoginRedirect}
              className="flex-1 cursor-pointer"
            >
              Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
