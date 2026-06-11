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
import { BookOpen, FileText, Wrench, ExternalLink } from "lucide-react";
import Link from "next/link";
import DonateSection from "@/components/DonateSction";
import MotionWrapper from "@/components/MotionWrapper";
import type { Metadata } from "next";
import { getResourceBySlug } from "@/lib/api/apiResource";

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

// دالة للحصول على الأيقونة المناسبة حسب نوع المصدر
const getResourceIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "course":
      return BookOpen;
    case "documentation":
      return FileText;
    case "tool":
      return Wrench;
    default:
      return BookOpen;
  }
};

// Generate Metadata for SEO
export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const resource = await getResourceBySlug(slug);

    const title = `${resource.name} Resources - Best Learning Materials & Tools`;
    const description = `Explore ${resource.resources_data.length} carefully curated resources for ${resource.name}. Find the best courses, documentation, and tools to master ${resource.name} and advance your skills.`;
    
    // استخراج الكلمات المفتاحية من البيانات
    const resourceTypes = [...new Set(resource.resources_data.map(r => r.type))].join(", ");
    const keywords = `${resource.name}, ${resource.name} resources, ${resource.name} tutorial, ${resource.name} course, ${resource.name} learning, ${resourceTypes}, programming resources, tech learning`;

    return {
      title,
      description,
      keywords,
      authors: [{ name: "Your Platform Name" }],
      openGraph: {
        title,
        description,
        type: "website",
        url: `https://yourwebsite.com/resources/${slug}`,
        images: [
          {
            url: resource.image_url || "/default-og-image.jpg",
            width: 1200,
            height: 630,
            alt: `${resource.name} Resources`,
          },
        ],
        siteName: "Your Platform Name",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [resource.image_url || "/default-og-image.jpg"],
        creator: "@yourhandle",
      },
      alternates: {
        canonical: `https://yourwebsite.com/resources/${slug}`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch (error) {
    // Fallback metadata في حالة حدوث خطأ
    return {
      title: "Resource Not Found",
      description: "The requested resource could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  try {
    const { slug } = await params;
    const resource = await getResourceBySlug(slug);

    // JSON-LD Schema for SEO
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${resource.name} Resources`,
      description: `Curated collection of ${resource.resources_data.length} resources for learning ${resource.name}`,
      url: `https://yourwebsite.com/resources/${slug}`,
      image: resource.image_url,
      numberOfItems: resource.resources_data.length,
      about: {
        "@type": "Thing",
        name: resource.name,
      },
      itemListElement: resource.resources_data.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": item.type === "Course" ? "Course" : "CreativeWork",
          name: item.name,
          description: item.description,
          url: item.link,
        },
      })),
    };

    return (
      <>
        {/* JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <BreadcrumbSection
          title={resource.name}
          items={[
            { label: "Resources", href: "/resources" },
            { label: resource.name },
          ]}
        />

        <section className="my-48">
          <Container>
            {/* Header */}
            <div className="text-center mb-16">
              <MotionWrapper animation="fade-up" delay={0.1}>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4 max-w-3xl mx-auto">
                  Best Resources For{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                    {resource.name}
                  </span>
                </h1>
              </MotionWrapper>
              <MotionWrapper animation="fade-up" delay={0.2}>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
                  Dive deep into the world of {resource.name} with our
                  comprehensive learning track. Master the skills you need to
                  excel in this field.
                </p>
              </MotionWrapper>
              <MotionWrapper animation="fade-up" delay={0.3}>
                <div className="mt-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3AB0FF]/10 to-[#5271FF]/10 rounded-full border border-[#3AB0FF]/20">
                  <BookOpen className="w-5 h-5 mr-2 text-[#3AB0FF]" />
                  <span className="text-sm font-medium text-foreground">
                    {resource.resources_data.length} Resources Available
                  </span>
                </div>
              </MotionWrapper>
            </div>

            {/* Resources Grid */}
            {resource.resources_data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resource.resources_data.map((item, index) => {
                  const IconComponent = getResourceIcon(item.type);

                  return (
                    <MotionWrapper
                      key={index}
                      animation="fade-up"
                      delay={index * 0.1}
                    >
                      <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl border-0">
                        <CardHeader className="flex flex-row items-start justify-between gap-4">
                          {/* Icon */}
                          <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>

                          {/* Badge */}
                          <span className="text-xs font-semibold rounded-full px-3 py-1 bg-muted">
                            {item.type}
                          </span>
                        </CardHeader>

                        <CardContent className="pt-0 pb-4">
                          <CardTitle className="text-lg font-bold mb-2 group-hover:text-[#3AB0FF] transition-colors">
                            {item.name}
                          </CardTitle>
                          {item.description && (
                            <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-4">
                              {item.description}
                            </CardDescription>
                          )}

                          {/* Button */}
                          <Link
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] px-4 py-2 rounded-lg hover:shadow-md transition-all"
                          >
                            Explore Resource
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </CardContent>
                      </Card>
                    </MotionWrapper>
                  );
                })}
              </div>
            ) : (
              /* رسالة في حالة عدم وجود موارد */
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-100 to-slate-100 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-gray-400" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  No Resources Yet
                </h2>
                <p className="text-muted-foreground">
                  We&apos;re working on adding more resources for{" "}
                  {resource.name}. Check back soon!
                </p>
              </div>
            )}

            <DonateSection />
          </Container>
        </section>
      </>
    );
  } catch (error) {
    // في حالة حدوث خطأ في جلب البيانات
    if (error instanceof Error && error.message === "NOT_FOUND") {
      notFound();
    }
    
    // يمكنك إضافة صفحة خطأ مخصصة هنا
    throw error;
  }
}