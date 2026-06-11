import Image from "next/image";
import Container from "./ui/Container";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { languages } from "@/data/quizzes";
import Link from "next/link";
import MotionWrapper from "./MotionWrapper";
export default function LanguagesSection() {
  //     const languages = [
  //   {
  //     name: "HTML",
  //     logo: "/icons/html.svg",
  //     topics: 15,
  //   },
  //   {
  //     name: "CSS",
  //     logo: "/icons/css.svg",
  //     topics: 25,
  //   },
  //   {
  //     name: "JavaScript",
  //     logo: "/icons/javascript.svg",
  //     topics: 37,
  //   },
  //   {
  //     name: "Java",
  //     logo: "/icons/java.svg",
  //     topics: 45,
  //   },
  //   {
  //     name: "Python",
  //     logo: "/icons/python.svg",
  //     topics: 30,
  //   },
  //   {
  //     name: "C++",
  //     logo: "/icons/cplusplus.svg",
  //     topics: 42,
  //   },
  //   {
  //     name: "C#",
  //     logo: "/icons/csharp.svg",
  //     topics: 16,
  //   },
  //   {
  //     name: "php",
  //     logo: "/icons/php.svg",
  //     topics: 8,
  //   },
  // ];
  return (
    <section className="mb-48 mt-36 pt-20" id="languages-section">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <MotionWrapper animation="fade-up" delay={0.1}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4 max-w-3xl mx-auto">
              Explore Our Supported{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                Programming Languages
              </span>
            </h2>
          </MotionWrapper>
          <MotionWrapper animation="fade-up" delay={0.2}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
              Our quizzes cover a wide range of popular programming languages
              designed to boost your skills whether you are just starting out or
              looking to level up.
            </p>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {languages.map((language, index) => (
             <MotionWrapper key={index} animation="fade-up" delay={0.1 * index}>
            <Link  href={`/quizzes/${language.slug}`}>
              <Card
                className="group flex flex-row items-center gap-4 p-4 relative overflow-hidden border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#3AB0FF]/30"
              >
                {/* الصورة على اليسار */}
                <div className="shrink-0">
                  <Image
                    src={language.logo}
                    alt={`${language.name} logo`}
                    width={48}
                    height={48}
                    className="rounded"
                    priority
                  />
                </div>

                {/* النصوص على اليمين */}
                <div>
                  <CardTitle className="text-lg font-semibold text-foreground  transition-colors duration-300">
                    {language.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {language.topics.length ?? 0} Topics Available
                  </CardDescription>
                </div>
              </Card>
            </Link>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
