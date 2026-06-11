import BreadcrumbSection from "@/components/BreadcrumbSection";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/ui/Container";
import { BookOpen, Lightbulb } from "lucide-react";
import Link from "next/link";
import MotionWrapper from "@/components/MotionWrapper";
import { Metadata } from "next";
import { getTrackBySlug } from "@/lib/api/apiTrack";

interface TrackPageProps {
  params: Promise<{ slug: string }>;
}

// Generate Dynamic Metadata
export async function generateMetadata({
  params,
}: TrackPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const track = await getTrackBySlug(slug);

    return {
      title: `${track.name} Learning Track - Master ${track.name} Step by Step`,
      description:
        track.description ||
        `Complete learning path for ${track.name} with ${track.topics.length} comprehensive topics. Learn from beginner to advanced level.`,
      keywords: [
        track.name,
        "learning track",
        "programming",
        "tutorial",
        "course",
        ...track.topics.map((t) => t.name),
      ],
      openGraph: {
        title: `${track.name} Learning Track`,
        description:
          track.description ||
          `Master ${track.name} with our comprehensive learning track`,
        type: "article",
        url: `https://yourdomain.com/tracks/${slug}`,
        images: [
          {
            url: track.image_url,
            width: 1200,
            height: 630,
            alt: `${track.name} Learning Track`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${track.name} Learning Track`,
        description:
          track.description ||
          `Master ${track.name} with our comprehensive learning track`,
        images: [track.image_url],
      },
      alternates: {
        canonical: `https://yourdomain.com/tracks/${slug}`,
      },
    };
  } catch (error) {
    return {
      title: "Track Not Found",
      description: "The requested learning track could not be found.",
    };
  }
}

export default async function TrackPage({ params }: TrackPageProps) {
  const { slug } = await params;

  let track;
  try {
    track = await getTrackBySlug(slug);
  } catch (error) {
    if (error instanceof Error && error.message === "NOT_FOUND") {
      notFound();
    }
    throw error;
  }

  return (
    <>
      <BreadcrumbSection
        title={track.name}
        items={[{ label: "tracks", href: "/tracks" }, { label: track.name }]}
      />

      <section className="my-48">
        <Container>
          {/* Header */}
          <div className="text-center mb-16">
            <MotionWrapper animation="fade-up" delay={0.1}>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4 max-w-3xl mx-auto">
                Best Learning Track For{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  {track.name}
                </span>
              </h1>
            </MotionWrapper>
            <MotionWrapper animation="fade-up" delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
                {track.description}
              </p>
            </MotionWrapper>
            <MotionWrapper animation="fade-up" delay={0.3}>
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3AB0FF]/10 to-[#5271FF]/10 rounded-full border border-[#3AB0FF]/20">
                <BookOpen className="w-5 h-5 mr-2 text-[#3AB0FF]" />
                <span className="text-sm font-medium text-foreground">
                  {track.topics.length} Topics to Master
                </span>
              </div>
            </MotionWrapper>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#3AB0FF] to-[#5271FF] h-full rounded-full hidden lg:block" />

            {/* Mobile Timeline Line */}
            <div className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-[#3AB0FF] to-[#5271FF] h-full rounded-full lg:hidden" />

            <div className="space-y-12">
              {track.topics.map((topic, index) => {
                const position = index % 2 === 0 ? "left" : "right";
                const stepNumber = index + 1;

                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      position === "left"
                        ? "lg:justify-start"
                        : "lg:justify-end"
                    } justify-start`}
                  >
                    {/* Desktop Timeline Circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] rounded-full items-center justify-center text-white font-bold text-xl shadow-lg z-10 hidden lg:flex">
                      {stepNumber}
                    </div>

                    {/* Mobile Timeline Circle */}
                    <div className="absolute left-8 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 lg:hidden">
                      {stepNumber}
                    </div>

                    {/* Card */}
                    <div
                      className={`w-full ${
                        position === "left"
                          ? "lg:w-5/12 lg:pr-12"
                          : "lg:w-5/12 lg:pl-12"
                      } pl-16 lg:pl-0`}
                    >
                      <Card className="group relative overflow-hidden bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3AB0FF]/5 to-[#5271FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Glowing Border Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />

                        <CardHeader className="pb-4 relative z-10">
                          <div className="flex items-start space-x-4">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] rounded-xl flex items-center justify-center shadow-lg">
                              <BookOpen className="w-7 h-7 text-white" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-xl lg:text-2xl font-bold text-card-foreground mb-2">
                                {topic.name}
                              </CardTitle>
                              <div className="w-12 h-1 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] rounded-full" />
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="relative z-10 pt-0">
                          <CardDescription className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                            {topic.description}
                          </CardDescription>

                          <div className="mt-6 flex items-center">
                            <div className="flex space-x-1">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-2 h-2 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] rounded-full opacity-20"
                                />
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Note Section */}
          <div className="mt-16 relative">
            <Card className="relative overflow-hidden bg-gradient-to-r from-[#3AB0FF]/10 via-[#4A8EFF]/10 to-[#5271FF]/10 backdrop-blur-sm border border-[#3AB0FF]/30 shadow-xl rounded-2xl">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3AB0FF]/5 to-[#5271FF]/5" />

              {/* Glowing Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] opacity-10 blur-xl" />

              <CardContent className="relative z-10 p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Left Side - Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] rounded-full flex items-center justify-center shadow-lg">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Right Side - Text Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Ready to Practice?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Now that you&apos;ve learned the theory, it&apos;s time to
                      put your skills to the test! Complete hands-on projects
                      and practical tasks to solidify your knowledge and build
                      your portfolio.
                    </p>

                    <Link
                      href="/resources"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                    >
                      <span>Explore Resources</span>
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* JSON-LD Schema for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Course",
                name: `${track.name} Learning Track`,
                description: track.description,
                provider: {
                  "@type": "Organization",
                  name: "Your Platform Name",
                  sameAs: "https://yourdomain.com",
                },
                hasCourseInstance: {
                  "@type": "CourseInstance",
                  courseMode: "online",
                  courseWorkload: `${track.topics.length} topics`,
                },
                educationalLevel: "Beginner to Advanced",
                teaches: track.topics.map((topic) => topic.name),
              }),
            }}
          />
        </Container>
      </section>
    </>
  );
}