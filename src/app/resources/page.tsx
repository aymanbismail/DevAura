import BreadcrumbSection from "@/components/BreadcrumbSection";
import DonateSection from "@/components/DonateSction";
import MotionWrapper from "@/components/MotionWrapper";
import ResourcesSection from "@/components/ResourcesSection";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSection title="Resources" items={[{ label: "resources" }]} />

      <section className="my-48 overflow-x-hidden">
        <Container>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            {/* النصوص */}
            <div className="w-full lg:w-1/2 lg:text-start flex flex-col items-center lg:items-start gap-6">
              <MotionWrapper animation="fade-left" delay={0.1}>
                <span className="mb-4 inline-block font-bold uppercase text-sm tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  Take the First Step
                </span>

                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                  Discover{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                    Top Learning Resources
                  </span>{" "}
                  for Every Path
                </h2>

                <p className=" max-w-lg text-base text-muted-foreground">
                  Find the best handpicked tools, documentation, and tutorials
                  to deepen your skills. Whether you are coding your first
                  website, preparing for interviews, or exploring advanced
                  frameworks our curated list of resources keeps your journey
                  smooth and focused.
                </p>
                <a
                  href="#resources-section"
                  aria-label="Browse Languages"
                  className="mt-4 inline-block rounded-xl bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition scroll-smooth"
                >
                  Browse Resources
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
                  src="/images/works3.webp"
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

      <ResourcesSection/>

      <DonateSection/>
    </>
  );
}
