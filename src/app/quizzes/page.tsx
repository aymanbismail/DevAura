import BreadcrumbSection from "@/components/BreadcrumbSection";
import LanguagesSection from "@/components/LanguagesSection";
import MotionWrapper from "@/components/MotionWrapper";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Brain, BookOpen, Target } from "lucide-react";
import TestimonialsPage from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSction";

export default function QuizzesPage() {
  const features = [
    {
      title: "Assess Your Real Skill Level",
      description:
        "Put your knowledge to the test and identify gaps you might not notice by just reading or watching tutorials.",
      icon: Brain,
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      title: "Learn by Practicing Not Just Reading",
      description:
        "Hands-on practice helps reinforce what you've learned and builds confidence through active recall.",
      icon: BookOpen,
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "Prepare for Technical Interviews & Exams",
      description:
        "Sharpen your skills and get comfortable with the types of questions you'll face in real-world assessments.",
      icon: Target,
      iconBg: "bg-gradient-to-br from-green-500 to-green-600",
    },
  ];
  return (
    <>
      <BreadcrumbSection title="Quizzes" items={[{ label: "quizzes" }]} />
      <section className="my-48 overflow-x-hidden">
        <Container>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            {/* النصوص */}
            <div className="w-full lg:w-1/2 lg:text-start flex flex-col items-center lg:items-start gap-6">
              <MotionWrapper animation="fade-left" delay={0.1}>
                <span className="mb-4 inline-block font-bold uppercase text-sm tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  EXPLORE AND LEARN
                </span>

                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                  Discover{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                    Interactive Quizzes
                  </span>{" "}
                  in Programming
                </h2>

                <p className=" max-w-lg text-base text-muted-foreground">
                  Ready to test your programming knowledge? Our platform offers
                  a wide range of interactive quizzes designed to help you
                  strengthen your understanding of coding concepts. Whether
                  you&apos;re a complete beginner or brushing up on advanced
                  topics, you&apos;ll find tailored questions for every level —
                  in multiple languages like JavaScript, Python, C++, and more.
                  Practice anytime, challenge yourself, and learn by doing — all
                  for free, no ads, no distractions.
                </p>
                <a
                  href="#languages-section"
                  aria-label="Browse Languages"
                  className="mt-4 inline-block rounded-xl bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition scroll-smooth"
                >
                  Browse Languages
                </a>
              </MotionWrapper>
            </div>
            {/* الصورة */}
            <div className="w-full lg:w-1/2 flex justify-center mx-auto">
              <MotionWrapper
                animation="fade-right"
                delay={0.1}
                className="w-full max-w-[500px] h-auto mx-auto"
              >
                <Image
                  src="/images/works2.webp"
                  alt="Support the platform"
                  className="rounded-2xl shadow-md dark:brightness-90"
                  width={500}
                  height={500}
                />
              </MotionWrapper>
            </div>
          </div>
        </Container>
      </section>
      <LanguagesSection />
      <section className="my-48 ">
        <Container>
          {/* Header */}
          <div className="text-center mb-16">
            <MotionWrapper animation="fade-up" delay={0.1}>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                Why Take{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  These Quizzes
                </span>
              </h2>
            </MotionWrapper>
            <MotionWrapper animation="fade-up" delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
                Boost your learning with practical, focused quizzes designed to
                help you grow faster and smarter.
              </p>
            </MotionWrapper>
          </div>

          {/* Why Take Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <MotionWrapper
                  key={index}
                  animation="fade-up"
                  delay={index * 0.2}
                >
                  <Card className="group relative overflow-hidden border rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                    <div className="flex flex-col items-center text-center p-8 h-full">
                      <div className="flex justify-center mb-6">
                        <div
                          className={`p-4 rounded-xl ${feature.iconBg} shadow-md transform transition-transform duration-300`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-[#5271FF] transition-colors duration-300 mb-4">
                        {feature.title}
                      </CardTitle>

                      <CardDescription className="text-muted-foreground leading-relaxed text-sm flex-1 flex items-center">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </Card>
                </MotionWrapper>
              );
            })}
          </div>
        </Container>
      </section>
      <TestimonialsPage />
      <ContactSection />
    </>
  );
}
