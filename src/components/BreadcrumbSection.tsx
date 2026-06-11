"use client";

import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Container from "./ui/Container";
import MotionWrapper from "./MotionWrapper";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbSectionProps {
  title: string;
  items: BreadcrumbItem[];
  className?: string;
}

export default function BreadcrumbSection({
  title,
  items,
  className = "",
}: BreadcrumbSectionProps) {
  return (
    <section className={`bg-muted py-16 ${className}`}>
      <Container>
        <div className="text-center space-y-6">
          {/* Main Title */}
          <MotionWrapper animation="fade-up" delay={0.1}>
            <h1 className="text-4xl capitalize md:text-5xl font-bold text-foreground tracking-tight">
              {title}
            </h1>
          </MotionWrapper>
          {/* Breadcrumb Navigation */}
          <MotionWrapper animation="fade-up" delay={0.2}>
            <div className="flex justify-center">
              <Breadcrumb>
                <BreadcrumbList className="text-base">
                  {/* Home Icon */}
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <Home className="w-4 h-4" />
                      <span>Home</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  {/* Dynamic Items */}
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <BreadcrumbSeparator className="text-muted-foreground/60" />
                      <BreadcrumbItem>
                        {item.href && index < items.length - 1 ? (
                          <BreadcrumbLink
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 capitalize"
                          >
                            {item.label}
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage className="text-primary font-medium capitalize">
                            {item.label}
                          </BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                    </div>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}

// Example usage component for demonstration
export function BreadcrumbExamples() {
  return (
    <div className="space-y-0">
      {/* Example 1: Simple breadcrumb */}
      <BreadcrumbSection
        title="About Us"
        items={[{ label: "about", href: "/about" }]}
      />

      {/* Example 2: Multi-level breadcrumb */}
      <BreadcrumbSection
        title="Frontend Development"
        items={[{ label: "tracks", href: "/tracks" }, { label: "frontend" }]}
      />

      {/* Example 3: Deep nested breadcrumb */}
      <BreadcrumbSection
        title="React Quiz"
        items={[
          { label: "quizzes", href: "/quizzes" },
          { label: "frontend", href: "/quizzes/frontend" },
          { label: "react quiz" },
        ]}
      />

      {/* Example 4: Blog post breadcrumb */}
      <BreadcrumbSection
        title="Understanding React Hooks"
        items={[
          { label: "blog", href: "/blog" },
          { label: "react", href: "/blog/react" },
          { label: "understanding react hooks" },
        ]}
      />
    </div>
  );
}
