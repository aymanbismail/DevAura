// QuizzePage.tsx
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import DonateSection from "@/components/DonateSction";
import { languages } from "@/data/quizzes";
import QuizForm from "@/components/QuizForm"; 
import MotionWrapper from "@/components/MotionWrapper";

interface QuizzesPageProps {
  params: Promise<{ slug: string }>; // تغيير النوع ليكون Promise
}

export default async function QuizzePage({ params }: QuizzesPageProps) {
  // استخدام await للحصول على القيم من params
  const { slug } = await params;
  const language = languages.find((t) => t.slug === slug);

  if (!language) return notFound();

  return (
    <>
      {/* Header */}
      <BreadcrumbSection
        title={language.name}
        items={[
          { label: "quizzes", href: "/quizzes" },
          { label: language.name },
        ]}
      />
      <section className="my-36">
        <Container>
          <div className="text-center py-12">
            <MotionWrapper animation="fade-up" delay={0.1}>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                Best Quizzes For{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  {language.name}
                </span>
              </h1>
            </MotionWrapper>
            <MotionWrapper animation="fade-up" delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
                Dive deep into the world of {language.name} with our
                comprehensive learning track. Master the skills you need to
                excel in this field.
              </p>
            </MotionWrapper>
          </div>

          {/* Quiz Selection Form */}
          <QuizForm language={language} />

          <DonateSection />
        </Container>
      </section>
    </>
  );
}
