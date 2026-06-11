"use client";
import { AboutSection } from "@/components/AboutSction";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import DonateSection from "@/components/DonateSction";
import MotionWrapper from "@/components/MotionWrapper";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Team } from "@/types/team";
import BoxReveal from "@/components/BoxReveal";
import { getAllTeam } from "@/lib/api/apiTeam";
export default function AboutPage() {
  const [team, setTeam] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchTeam = async () => {
    try {
      const data = await getAllTeam();
      setTeam(data);
    } catch (error) {
      console.error("Error loading team:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchTeam();
}, []);

  return (
    <>
      <BreadcrumbSection title="About Us" items={[{ label: "about" }]} />
      <AboutSection />

      <section className="my-48 overflow-x-hidden ">
        <Container>
          {/* Header */}
          <div className="text-center mb-24">
            <MotionWrapper animation="fade-up" delay={0.1}>
              <h2 className="text-3xl capitalize lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4 max-w-3xl mx-auto">
                How{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  DevAura
                </span>{" "}
                Works ?
              </h2>
            </MotionWrapper>
          </div>
          {/* works 1 */}
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
            {/* الصورة */}
            <div className="w-full lg:w-1/2 flex justify-center mx-auto">
              <MotionWrapper
                animation="fade-left"
                delay={0.1}
                className="w-full max-w-[500px] h-auto mx-auto"
              >
                <Image
                  src="/images/works1.webp"
                  alt="Support the platform"
                  className="rounded-2xl dark:brightness-90"
                  width={500}
                  height={500}
                />
              </MotionWrapper>
            </div>

            {/* النصوص */}
            <div className="w-full lg:w-1/2 lg:text-start flex flex-col items-center lg:items-start gap-6">
              <MotionWrapper animation="fade-right" delay={0.1}>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                  Learn at{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                    Your Own Pace
                  </span>
                </h2>

                <p className="mb-2 max-w-lg text-base text-muted-foreground">
                  Explore structured learning paths and trusted resources
                  tailored to your goals. Whether you are just starting or
                  brushing up, you’ll find everything in one place.
                </p>
              </MotionWrapper>
            </div>
          </div>
          {/* works 2 */}
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between my-10">
            {/* النصوص */}
            <div className="w-full lg:w-1/2 lg:text-start flex flex-col items-center lg:items-start gap-6">
              <MotionWrapper animation="fade-left" delay={0.1}>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                  Practice Through{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                    Interactive Quizzes
                  </span>
                </h2>

                <p className="mb-2 max-w-lg text-base text-muted-foreground">
                  Strengthen your understanding with carefully crafted quizzes.
                  Every question is randomized to give you a fresh challenge
                  each time and make learning stick.
                </p>
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
                  className="rounded-2xl  dark:brightness-90"
                  width={500}
                  height={500}
                />
              </MotionWrapper>
            </div>
          </div>
          {/* works 3 */}
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
            {/* الصورة */}
            <div className="w-full lg:w-1/2 flex justify-center mx-auto">
              <MotionWrapper
                animation="fade-left"
                delay={0.1}
                className="w-full max-w-[500px] h-auto mx-auto"
              >
                <Image
                  src="/images/works3.webp"
                  alt="Support the platform"
                  className="rounded-2xl dark:brightness-90"
                  width={500}
                  height={500}
                />
              </MotionWrapper>
            </div>

            {/* النصوص */}
            <div className="w-full lg:w-1/2 lg:text-start flex flex-col items-center lg:items-start gap-6">
              <MotionWrapper animation="fade-right" delay={0.1}>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                  Discover{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                    Trusted Resources
                  </span>
                </h2>

                <p className="mb-2 max-w-lg text-base text-muted-foreground">
                  Save time searching! We handpick valuable articles, videos,
                  and docs to support your learning journey so you focus more on
                  learning and less on digging.
                </p>
              </MotionWrapper>
            </div>
          </div>
        </Container>
      </section>

      <section className="my-48 ">
        <Container>
          {/* Header */}
          <div className="text-center mb-16">
            <MotionWrapper animation="fade-up" delay={0.1}>
              <h2 className="text-3xl capitalize lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4 max-w-3xl mx-auto">
                Who&apos;s Behind{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  DevAura ?
                </span>
              </h2>
            </MotionWrapper>
            <MotionWrapper animation="fade-up" delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
                DevAura was created with a single goal: to help learners grow
                with clarity and confidence.
              </p>
            </MotionWrapper>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            {loading ? (
              // Skeleton Loading
              Array.from({ length: 4 }).map((_, index) => (
                <BoxReveal
                  key={index}
                  animationType="slide-up"
                  delay={0.1 + index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-2xl h-[400px] bg-muted animate-pulse">
                    <div className="w-full h-full bg-gradient-to-br from-muted-foreground/10 to-muted-foreground/5" />
                  </div>
                </BoxReveal>
              ))
            ) : team.length > 0 ? (
              team.map((member, index) => (
                <BoxReveal
                  key={member.id}
                  animationType="slide-up"
                  delay={0.1 + index * 0.1}
                >
                  <div className="group relative overflow-hidden rounded-2xl cursor-pointer h-[400px]">
                    {/* الصورة */}
                    <Image
                      src={member.image_url}
                      alt={`${member.name} - ${member.job}`}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* التعتيم عند الهوفر */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

                    {/* الشريط السفلي */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {member.name}
                      </h3>
                      <p className="text-white/90 text-sm">{member.job}</p>
                    </div>
                  </div>
                </BoxReveal>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No team members available
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>

      <DonateSection />
    </>
  );
}
