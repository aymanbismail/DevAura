import Container from "@/components/ui/Container";

export default function TermsOfUse() {
  return (
    <section className="my-20">
      <Container className="py-10">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight sm:mb-4 text-start mb-16">
          Terms of Use
        </h1>
        <div className="flex flex-col items-start gap-6 mt-16">
          <h2 className="text-xl font-semibold mb-2">1. Educational Content</h2>
          <p className="mb-4">
            All quizzes, learning paths, and resources are for educational
            purposes only and may not be reused or copied without permission.
          </p>

          <h2 className="text-xl font-semibold mb-2">2. Acceptable Use</h2>
          <p className="mb-4">
            Do not use this site for illegal or harmful activities. Commercial
            reuse is prohibited without written consent.
          </p>

          <h2 className="text-xl font-semibold mb-2">3. Copyright</h2>
          <p className="mb-4">
            All rights reserved. Reproduction or redistribution of content
            without written approval is prohibited.
          </p>

          <h2 className="text-xl font-semibold mb-2">4. Modifications</h2>
          <p className="mb-4">
            We reserve the right to change or update these terms at any time.
          </p>
        </div>
      </Container>
    </section>
  );
}
