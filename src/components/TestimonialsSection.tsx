"use client";

import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import MotionWrapper from "@/components/MotionWrapper";
import Container from "./ui/Container";

const testimonials = [
  {
    text: "The quizzes helped me truly test my knowledge, not just memorize things. It’s the most effective way I’ve found to study coding.",
    image: "/images/test1.jpg",
    name: "Sara Mohamed",
    role: "Programming Student",
  },
  {
    text: "I used the JavaScript learning path and practiced through the quizzes daily. It gave me real structure while learning on my own.",
    image: "/images/test2.jpg",
    name: "Khaled Ahmed",
    role: "Software Engineering Student",
  },
  {
    text: "The language selection quiz helped me decide between Python and JavaScript. It was spot on for my goals.",
    image: "/images/test3.jpg",
    name: "Amira Hussein",
    role: "University Student",
  },
  {
    text: "Had an issue accessing a quiz, and the support was fast and friendly. Great experience overall!",
    image: "/images/test4.jpg",
    name: "Abdullah Kareem",
    role: "Self-taught Learner",
  },
  {
    text: "I finally understood OOP principles after going through a few targeted quizzes. Much better than reading long articles!",
    image: "/images/test5.jpg",
    name: "Layla Nasser",
    role: "Computer Science Student",
  },
  {
    text: "Each topic comes with focused quizzes and helpful resource links. It made learning feel clear and manageable.",
    image: "/images/test6.jpg",
    name: "Omar Saleh",
    role: "Frontend Developer in Training",
  },
  {
    text: "I love the simplicity of the site. I can jump straight into quizzes or check the learning roadmap without distractions.",
    image: "/images/test7.jpg",
    name: "Mona Zaki",
    role: "High School Student",
  },
  {
    text: "The roadmap gave me confidence in what to focus on next. It’s like having a personal mentor guiding you.",
    image: "/images/test8.jpg",
    name: "Youssef Ali",
    role: "Junior Developer",
  },
  {
    text: "Sometimes I take the quizzes just for fun. It’s surprisingly addictive and helps reinforce what I’ve studied.",
    image: "/images/test9.jpg",
    name: "Noor Fathy",
    role: "Beginner Coder",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsPage() {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .mask-gradient {
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 25%,
            black 75%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent,
            black 25%,
            black 75%,
            transparent
          );
        }
      `}</style>

      <section className=" my-48 relative">
        <Container>
          <div className="text-center mb-10 sm:mb-16">
            <MotionWrapper animation="fade-up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                What Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  Learners Say
                </span>
              </h2>
            </MotionWrapper>
            <MotionWrapper animation="fade-up" delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
                Honest opinions from developers and students who used our
                quizzes, learning paths, and curated resources to improve their
                programming skills.
              </p>
            </MotionWrapper>
          </div>

          <div className="flex justify-center gap-6 mt-10 mask-gradient max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
