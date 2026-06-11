"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Loader2 } from "lucide-react";
import Container from "./ui/Container";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import MotionWrapper from "./MotionWrapper";
import { AiToolsCategory, AiTool } from "@/types/ai-tools";
import Link from "next/link";
import { getAiTools, getAllAiCategories } from "@/lib/api/apiAiTools";

export default function AiToolsSection() {
  const [categories, setCategories] = useState<AiToolsCategory[]>([]);
  const [tools, setTools] = useState<AiTool[]>([]);
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
    loadTools();
  }, [activeFilter, searchTerm, currentPage]);

  const loadCategories = async () => {
    try {
      const data = await getAllAiCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  const loadTools = async () => {
    try {
      setSearching(true);
      
      const filters = {
        category_id: activeFilter || undefined,
        name: searchTerm || undefined,
      };

      const response = await getAiTools(filters, currentPage);
      setTools(response.data);
      setTotalPages(response.last_page);
    } catch (error) {
      console.error('Error loading tools:', error);
      setTools([]);
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
      <section className="mb-48 mt-24 pt-20" id="ai-tools-section">
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
    <section className="mb-48 mt-24 pt-20" id="ai-tools-section">
      <Container>
        <div className="text-center mb-16">
          <MotionWrapper animation="fade-up" delay={0.1}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
              Explore AI{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                Tools Collection
              </span>
            </h2>
          </MotionWrapper>
          <MotionWrapper animation="fade-up" delay={0.2}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
              Explore the top AI tools used across industries to boost
              efficiency, spark innovation, and simplify complex tasks.
            </p>
          </MotionWrapper>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search AI tools..."
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
                {/* زر All */}
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
                
                {/* باقي الكاتيجوريز */}
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
                  {tools.map((tool, index) => (
                    <MotionWrapper key={tool.id} animation="fade-up" delay={index * 0.1}>
                      <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                        <Card className="group flex flex-row items-center gap-4 p-4 relative overflow-hidden border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#3AB0FF]/30">
                          <div className="shrink-0 relative w-12 h-12">
                            <Image
                              src={tool.image_url}
                              alt={`${tool.name} logo`}
                              fill
                              sizes="48px"
                              className="rounded object-contain"
                              loading="lazy"
                              quality={75}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/images/default-logo.svg";
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg font-semibold text-foreground transition-colors duration-300 truncate">
                              {tool.name}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground text-sm truncate">
                              {tool.category?.name || "Uncategorized"}
                            </CardDescription>
                          </div>
                        </Card>
                      </Link>
                    </MotionWrapper>
                  ))}
                </div>

                {tools.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No AI tools found matching your search.
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