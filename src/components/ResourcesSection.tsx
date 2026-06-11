"use client";

import { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import Container from "./ui/Container";
import { Input } from "@/components/ui/input";
import MotionWrapper from "./MotionWrapper";
import { ResourceCategory, Resource } from "@/types/resource";
import { getAllResourceCategories, getResources } from "@/lib/api/apiResource";
import ResourceCard from "./ui/ResourceCard";

export default function ResourcesSection() {
  const [categories, setCategories] = useState<ResourceCategory[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [activeFilter, setActiveFilter] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadResources();
  }, [activeFilter, searchTerm, currentPage]);

  const loadCategories = async () => {
    try {
      const data = await getAllResourceCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  const loadResources = async () => {
    try {
      setSearching(true);
      
      const filters = {
        category_id: activeFilter || undefined,
        name: searchTerm || undefined,
      };

      const response = await getResources(filters, currentPage);
      setResources(response.data);
      setTotalPages(response.last_page);
    } catch (error) {
      console.error('Error loading resources:', error);
      setResources([]);
    } finally {
      setSearching(false);
      setLoading(false);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (categoryId: number | null) => {
    setActiveFilter(categoryId);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <section className="mb-48 mt-24 pt-20" id="resources-section">
        <Container>
          <div className="text-center mb-16">
            <div className="h-12 bg-muted animate-pulse rounded-lg mb-4"></div>
            <div className="h-6 bg-muted animate-pulse rounded-lg max-w-2xl mx-auto"></div>
          </div>
          <div className="mb-10 flex justify-center">
            <div className="h-10 bg-muted animate-pulse rounded-lg w-full max-w-md"></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4">
              <div className="space-y-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-12 bg-muted animate-pulse rounded-lg"></div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-20 bg-muted animate-pulse rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="mb-48 mt-24 pt-20" id="resources-section">
      <Container>
        <div className="text-center mb-16">
          <MotionWrapper animation="fade-up" delay={0.1}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
              Browse Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                Curated Resources
              </span>
            </h2>
          </MotionWrapper>
          <MotionWrapper animation="fade-up" delay={0.2}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
              Access the best learning materials, documentation, and tools
              carefully selected to accelerate your development journey.
            </p>
          </MotionWrapper>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search resources..."
              className="pl-10"
              onChange={(e) => handleSearchChange(e.target.value)}
              value={searchTerm}
            />
            {searching && (
              <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 animate-spin text-muted-foreground" />
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <div className="sticky top-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Categories
              </h3>
              <div className="space-y-2">
                {/* All button */}
                <button
                  onClick={() => handleFilterChange(null)}
                  className={`w-full cursor-pointer text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === null
                      ? "bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  All
                </button>
                
                {/* Category buttons */}
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleFilterChange(category.id)}
                    className={`w-full cursor-pointer text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeFilter === category.id
                        ? "bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] text-white shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            {searching ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-20 bg-muted animate-pulse rounded-lg"></div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources.map((resource, index) => (
                    <MotionWrapper key={resource.id} animation="fade-up" delay={index * 0.1}>
                      <ResourceCard resource={resource} />
                    </MotionWrapper>
                  ))}
                </div>

                {resources.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No resources found matching your search.
                    </p>
                  </div>
                )}

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
          </div>
        </div>
      </Container>
    </section>
  );
}