import BreadcrumbSection from "@/components/BreadcrumbSection";
import ContactSection from "@/components/ContactSction";


export default function ContactPage() {
  return (
    <>
       <BreadcrumbSection title="Contact Us" items={[{ label: "contact" }]} />
       <ContactSection/>
    </>
  );
}