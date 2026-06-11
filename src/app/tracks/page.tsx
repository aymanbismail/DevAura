import BreadcrumbSection from "@/components/BreadcrumbSection";
import ContactSection from "@/components/ContactSction";
import MotionWrapper from "@/components/MotionWrapper";
import TracksSection from "@/components/TracksSection";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function TracksPage() {
  return (
    <>
      <BreadcrumbSection
        title="Learning Tracks"
        items={[{ label: "tracks" }]}
      />
      <section className="my-48 overflow-x-hidden">
        <Container>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            {/* النصوص */}
            <div className="w-full lg:w-1/2 lg:text-start flex flex-col items-center lg:items-start gap-6">
              <MotionWrapper animation="fade-left" delay={0.1}>
                <span className="mb-4 inline-block font-bold uppercase text-sm tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  START YOUR JOURNEY
                </span>

                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                  Explore{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                    Curated Learning Paths
                  </span>{" "}
                  for Every Skill Level
                </h2>

                <p className=" max-w-lg text-base text-muted-foreground">
                  Want to learn web development, data structures, or master a
                  new language? Our structured learning paths guide you
                  step-by-step through handpicked resources and practice tools.
                  Whether you are just getting started or aiming to go pro, each
                  path is crafted to keep you focused and progressing. Skip the
                  overwhelm follow a clear, goal-oriented roadmap tailored to
                  your interests.
                </p>
                <a
                  href="#languages-section"
                  aria-label="Browse Languages"
                  className="mt-4 inline-block rounded-xl bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition scroll-smooth"
                >
                  Browse Learning Paths
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
                  src="/images/works1.webp"
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

      <TracksSection />
      <ContactSection />
    </>
  );
}
