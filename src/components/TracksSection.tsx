// components/TracksSection.tsx
"use client";

import { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import Container from "./ui/Container";
import { Input } from "@/components/ui/input";
import MotionWrapper from "./MotionWrapper";
import { Track } from "@/types/track";
import { getTracks } from "@/lib/api/apiTrack";
import TrackCard from "./ui/TrackCard";

export default function TracksSection() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadTracks();
  }, [searchTerm, currentPage]);

  const loadTracks = async () => {
    try {
      setSearching(true);

      const filters = {
        name: searchTerm || undefined,
      };

      const response = await getTracks(filters, currentPage);
      setTracks(response.data);
      setTotalPages(response.last_page);
    } catch (error) {
      console.error('Error loading tracks:', error);
      setTracks([]);
    } finally {
      setSearching(false);
      setLoading(false);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <section className="mb-48 mt-36 pt-20" id="languages-section">
        <Container>
          <div className="text-center mb-16">
            <div className="h-12 bg-muted animate-pulse rounded-lg mb-4"></div>
            <div className="h-6 bg-muted animate-pulse rounded-lg max-w-2xl mx-auto"></div>
          </div>
          <div className="mb-10 flex justify-center">
            <div className="h-10 bg-muted animate-pulse rounded-lg w-full max-w-md"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-20 bg-muted animate-pulse rounded-lg"></div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="mb-48 mt-36 pt-20" id="languages-section">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <MotionWrapper animation="fade-up" delay={0.1}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
              Explore Our Best{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                Learning Tracks
              </span>
            </h2>
          </MotionWrapper>
          <MotionWrapper animation="fade-up" delay={0.2}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
              Master in-demand programming skills with learning paths tailored
              to your level from beginner to pro. Sharpen your knowledge, track
              your progress, and grow faster.
            </p>
          </MotionWrapper>
        </div>

        {/* Search */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search learning tracks..."
              className="pl-10"
              onChange={(e) => handleSearchChange(e.target.value)}
              value={searchTerm}
            />
            {searching && (
              <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 animate-spin text-muted-foreground" />
            )}
          </div>
        </div>

        {/* Content */}
        {searching ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-20 bg-muted animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tracks.map((track, index) => (
                <MotionWrapper key={track.id} animation="fade-up" delay={index * 0.1}>
                  <TrackCard track={track} />
                </MotionWrapper>
              ))}
            </div>

            {tracks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No learning tracks found matching your search.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 cursor-pointer rounded-lg bg-muted disabled:opacity-50 hover:bg-muted/80 transition-colors"
                >
                  Previous
                </button>
                <span className="px-4 py-2 flex items-center text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 cursor-pointer rounded-lg bg-muted disabled:opacity-50 hover:bg-muted/80 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
}