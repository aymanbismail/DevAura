"use client";

import { useEffect, useRef, useState } from "react";
import MotionWrapper from "./MotionWrapper";
import Container from "./ui/Container";
import Lottie from "lottie-react";
import aboutAnimation from "./aboutAnimation.json";

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const current = containerRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);
  return (
    <section className="my-48 overflow-x-hidden" ref={containerRef}>
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* النصوص */}
          <div className="w-full lg:w-1/2 lg:text-start flex flex-col items-center lg:items-start gap-8">
            <MotionWrapper animation="fade-left" delay={0.1}>
              <span className="mb-4 inline-block font-bold uppercase text-sm tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                ABOUT US
              </span>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
                Master Coding Through{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]">
                  Interactive Learning
                </span>
              </h2>

              <p className="mb-4 max-w-lg  lg:mx-0 text-base text-muted-foreground">
                We believe that real learning happens when you apply what you
                know. That’s why our platform offers carefully crafted quizzes
                and professional learning paths designed to boost your
                programming skills one challenge at a time.
              </p>
              <p className="max-w-lg  lg:mx-0 text-base text-muted-foreground">
                Whether you are just starting out or aiming to go pro, our
                content helps you build confidence, stay motivated, and grow
                step-by-step in your tech journey.
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
              <Lottie
                animationData={aboutAnimation}
                loop={isVisible}
                autoplay={isVisible}
                className="w-full max-w-[500px] h-auto dark:brightness-90"
                style={{ willChange: "transform" }}
              />
            </MotionWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
};
