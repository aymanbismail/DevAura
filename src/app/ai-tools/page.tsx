import AiToolsSection from "@/components/AiToolsSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import DonateSection from "@/components/DonateSction";
import MotionWrapper from "@/components/MotionWrapper";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function AiToolsPage() {
  return (
    <>
      <BreadcrumbSection title="AI Tools" items={[{ label: "ai tools" }]} />

      <section className="my-48 overflow-x-hidden">
        <Container>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            {/* النصوص */}
            <div className="w-full lg:w-1/2 lg:text-start flex flex-col items-center lg:items-start gap-6">
              <MotionWrapper animation="fade-left" delay={0.1}>
                <span className="mb-4 inline-block font-bold uppercase text-sm tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  Unlock the Power of AI
                </span>

                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                  Explore{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                    the Smartest Tools
                  </span>{" "}
                  for Every Task
                </h2>

                <p className=" max-w-lg text-base text-muted-foreground">
                  From content creation to code generation, discover the top
                  AI-powered tools that boost your productivity and creativity.
                  Whether you&apos;re building a startup, automating daily tasks, or
                  experimenting with the latest AI trends, our curated
                  collection helps you stay ahead effortlessly.
                </p>
                <a
                  href="#ai-tools-section"
                  aria-label="Browse AI Tools"
                  className="mt-4 inline-block rounded-xl bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition scroll-smooth"
                >
                  Browse AI Tools
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
                  src="/images/ai-tools.webp"
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

      <AiToolsSection/>

      <DonateSection />
    </>
  );
}
