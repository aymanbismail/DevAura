"use client";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, MapPin, RefreshCw, Send } from "lucide-react";
import Container from "@/components/ui/Container";
import { AboutSection } from "@/components/AboutSction";
import { Search, BookOpen, Trophy, Rocket, Users } from "lucide-react";
import TestimonialsPage from "@/components/TestimonialsSection";
import DonateSection from "@/components/DonateSction";
import LanguagesSection from "@/components/LanguagesSection";
import MotionWrapper from "@/components/MotionWrapper";
import BoxReveal from "@/components/BoxReveal";
export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "Interactive Quizzes",
      description:
        "Challenge your skills with carefully crafted quizzes across various programming languages and levels.",
      iconBg: "bg-[#3AB0FF]",
      cardBg: "bg-gradient-to-br from-[#3AB0FF]/5 to-[#5271FF]/5",
      darkCardBg:
        "dark:bg-gradient-to-br dark:from-[#3AB0FF]/10 dark:to-[#5271FF]/10",
    },
    {
      icon: MapPin,
      title: "Professional Tracks",
      description:
        "Follow clear, structured paths designed to take you from beginner to advanced with hands-on learning.",
      iconBg: "bg-[#5271FF]",
      cardBg: "bg-gradient-to-br from-[#5271FF]/5 to-[#3AB0FF]/5",
      darkCardBg:
        "dark:bg-gradient-to-br dark:from-[#5271FF]/10 dark:to-[#3AB0FF]/10",
    },
    {
      icon: BookOpen,
      title: "Best Resources",
      description:
        "Explore curated resources, tutorials, and tools tailored to your learning path in programming and tech.",
      iconBg: "bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]",
      cardBg: "bg-gradient-to-br from-[#3AB0FF]/5 to-[#5271FF]/5",
      darkCardBg:
        "dark:bg-gradient-to-br dark:from-[#3AB0FF]/10 dark:to-[#5271FF]/10",
    },
    {
      icon: RefreshCw,
      title: "Fresh Content",
      description:
        "Stay ahead with content that's regularly updated to reflect the latest programming trends and technologies.",
      iconBg: "bg-gradient-to-r from-[#5271FF] to-[#3AB0FF]",
      cardBg: "bg-gradient-to-br from-[#5271FF]/5 to-[#3AB0FF]/5",
      darkCardBg:
        "dark:bg-gradient-to-br dark:from-[#5271FF]/10 dark:to-[#3AB0FF]/10",
    },
  ];

  const timelineSteps = [
    {
      id: 1,
      title: "Browse Learning Paths",
      description:
        "Explore a wide range of structured programming paths tailored to different levels. Choose the path that matches your goals and current skills to start your journey with clarity.",
      icon: Search,
      position: "left",
    },
    {
      id: 2,
      title: "Select Curated Learning Resources",
      description:
        "Access carefully selected tutorials, coding guides, and videos within each path. Choose the materials that suit your learning style and help you stay consistent and focused.",
      icon: BookOpen,
      position: "right",
    },
    {
      id: 3,
      title: "Test and Improve Your Knowledge",
      description:
        "Challenge yourself with interactive quizzes and programming assessments designed to reinforce your understanding and track your progress in real time.",
      icon: Trophy,
      position: "left",
    },
    {
      id: 4,
      title: "Build Real-World Coding Projects",
      description:
        "Apply what you've learned through hands-on projects after each module. Gain practical experience and strengthen your portfolio with real-world challenges.",
      icon: Rocket,
      position: "right",
    },
    {
      id: 5,
      title: "Join Our Developer Community",
      description:
        "Connect with a vibrant community of learners and developers. Share your journey, get support, and grow together in a positive and collaborative environment.",
      icon: Users,
      position: "left",
    },
  ];

  return (
    <>
      <AuroraBackgroundDemo />

      <section className="mb-48 mt-24 ">
        <Container>
          {/* Header */}
          <div className="text-center mb-16">
            <MotionWrapper animation="fade-up" delay={0.1}>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                Everything You Need{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  to Start
                </span>
              </h2>
            </MotionWrapper>
            <MotionWrapper animation="fade-up" delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
                Discover powerful features designed to accelerate your learning
                journey and help you master programming skills effectively.
              </p>
            </MotionWrapper>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <BoxReveal
                  key={index}
                  animationType="slide-right"
                  delay={index * 0.2}
                >
                  <Card
                    className={`group relative overflow-hidden border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-[#3AB0FF]/30`}
                  >
                    <CardHeader className="text-start">
                      <div className="flex justify-start mb-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] shadow-md transform group-hover:scale-105 transition-transform duration-300`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-[#5271FF] transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </BoxReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <AboutSection />

      <LanguagesSection />
      <section className="my-48 ">
        <Container>
          {/* Header */}
          <div className="text-center mb-16">
            <MotionWrapper animation="fade-up" delay={0.1}>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4 max-w-3xl mx-auto">
                How to Benefit from{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  DevAura
                </span>
              </h2>
            </MotionWrapper>
            <MotionWrapper animation="fade-up" delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
                Follow our structured approach to maximize your learning
                experience and accelerate your development journey with DevAura
                comprehensive platform.
              </p>
            </MotionWrapper>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#3AB0FF] to-[#5271FF] h-full rounded-full hidden lg:block" />

            {/* Mobile Timeline Line */}
            <div className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-[#3AB0FF] to-[#5271FF] h-full rounded-full lg:hidden" />

            <div className="space-y-12">
              {timelineSteps.map((step) => (
                <div
                  key={step.id}
                  className={`relative flex items-center ${
                    step.position === "left"
                      ? "lg:justify-start"
                      : "lg:justify-end"
                  } justify-start`}
                >
                  {/* Desktop Timeline Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 hidden lg:flex">
                    {step.id}
                  </div>

                  {/* Mobile Timeline Circle */}
                  <div className="absolute left-8 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 lg:hidden">
                    {step.id}
                  </div>

                  {/* Card */}

                  <div
                    className={`w-full ${
                      step.position === "left"
                        ? "lg:w-5/12 lg:pr-12"
                        : "lg:w-5/12 lg:pl-12"
                    } pl-16 lg:pl-0`}
                  >
                    <BoxReveal
                      animationType="slide-right"
                      delay={step.id * 0.1}
                    >
                      <Card className="relative overflow-hidden bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3AB0FF]/5 to-[#5271FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Glowing Border Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />

                        <CardHeader className="pb-4 relative z-10">
                          <div className="flex items-start space-x-4">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] rounded-xl flex items-center justify-center shadow-lg">
                              <step.icon className="w-7 h-7 text-white" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-xl lg:text-2xl font-bold text-card-foreground mb-2">
                                {step.title}
                              </CardTitle>
                              <div className="w-12 h-1 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] rounded-full" />
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="relative z-10 pt-0">
                          <CardDescription className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                            {step.description}
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
                    </BoxReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="my-48 bg-muted py-24 ">
        <Container>
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <MotionWrapper animation="fade-up" delay={0.1}>
              <h2 className="text-3xl capitalize lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4 max-w-3xl mx-auto">
                Are you passionate about{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  tech and innovation?
                </span>
              </h2>
            </MotionWrapper>
            <MotionWrapper animation="fade-up" delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4 mb-6">
                Join our Telegram channel{" "}
                <span className="font-semibold text-[#5271FF]">TechAura</span>{" "}
                where we share valuable content about technology, tools, and
                powerful AI resources to boost your knowledge and productivity.
              </p>
            </MotionWrapper>
             <MotionWrapper animation="fade-up" delay={0.3}>
            <a
              href="https://t.me/TechAura0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="my social"
              className="group bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-lg cursor-pointer flex items-center justify-center gap-3"
            >
              <Send className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Join TechAura on Telegram
            </a>
            </MotionWrapper>
          </div>
        </Container>
      </section>

      <TestimonialsPage />

      <DonateSection />
    </>
  );
}
