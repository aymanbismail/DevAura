// privacy.tsx
import Container from "@/components/ui/Container";

export default function PrivacyPolicy() {
  return (
    <section className="my-20">
      <Container className="py-10">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight sm:mb-4 text-start mb-16">
          Privacy Policy
        </h1>

        <div className="flex flex-col items-start gap-6 mt-16">
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Do Not Collect
          </h2>
          <p className="mb-4">
            We do not collect login data, emails, quiz answers, or user
            activity.
          </p>

          <h2 className="text-xl font-semibold mb-2">2. Cookies</h2>
          <p className="mb-4">
            We use basic cookies to enhance performance and user experience.
            These cookies contain no personal identifiable information.
          </p>

          <h2 className="text-xl font-semibold mb-2">3. External Links</h2>
          <p className="mb-4">
            Our website may contain links to external sources. We are not
            responsible for their privacy practices.
          </p>

          <h2 className="text-xl font-semibold mb-2">4. Changes</h2>
          <p className="mb-4">
            We may update this Privacy Policy occasionally. Please check this
            page regularly.
          </p>

          <p>
            If you have questions about privacy, contact us via the form on the
            Contact page.
          </p>
        </div>
      </Container>
    </section>
  );
}
