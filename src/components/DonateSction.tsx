import Image from "next/image";
import MotionWrapper from "./MotionWrapper";
import Container from "./ui/Container";

export default function DonateSection() {
  return (
    <section className="my-48 overflow-x-hidden">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* الصورة */}
          <div className="w-full lg:w-1/2 flex justify-center mx-auto">
            <MotionWrapper
              animation="fade-left"
              delay={0.1}
              className="w-full max-w-[500px] h-auto mx-auto"
            >
              <Image
                src="/images/donate.webp"
                alt="Support the platform"
                className="rounded-2xl shadow-md dark:brightness-90"
                width={500}
                height={500}
              />
            </MotionWrapper>
          </div>

          {/* النصوص */}
          <div className="w-full lg:w-1/2 lg:text-start flex flex-col items-center lg:items-start gap-6">
            <MotionWrapper animation="fade-right" delay={0.1}>
              <span className="mb-4 inline-block font-bold uppercase text-sm tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                SUPPORT THE PLATFORM
              </span>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                Support{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  Free Learning
                </span>{" "}
                for All
              </h2>

              <p className="mb-2 max-w-lg text-base text-muted-foreground">
                This platform was built independently with no funding, ads, or
                paid plans just a pure goal to help students learn without
                limits.
              </p>
              <p className="max-w-lg text-base text-muted-foreground">
                If you believe in free education and want to support the
                mission, feel free to reach out. Every bit of help counts!
              </p>

              <a
                href="https://wa.me/+201095150417"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-xl bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition"
              >
                Contact on WhatsApp
              </a>
            </MotionWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
}
