import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Container from "@/components/ui/Container";
import MotionWrapper from "@/components/MotionWrapper";
import Link from "next/link";
import BlurText from "./ui/BlurText";

export function AuroraBackgroundDemo() {


  return (
    <AuroraBackground>
      <Container>
        <div className="relative flex flex-col gap-6 items-center justify-center px-4 text-center">
          {/* Title with BlurText */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
            <BlurText
              text="Your Smart Start to "
              delay={100}
              animateBy="words"
              direction="top"
              className="text-foreground inline"
            />
            <BlurText
              text="the World of Code"
              delay={200}
              animateBy="words"
              direction="top"
              className=" text-[#5271FF] inline"
            />
          </div>

          {/* Subtitle */}
          <MotionWrapper animation="fade-up" delay={0.4}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Zero distractions, smart quizzes, smart skill evaluations, and tailored
              learning paths to help you discover your ideal field in tech.
            </p>
          </MotionWrapper>

          {/* CTA Button */}
          <MotionWrapper animation="fade-up" delay={0.5}>
            <Link href="/quizzes">
              <span
                className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white font-medium transition-all text-sm sm:text-base
                bg-gradient-to-r from-[#3AB0FF] to-[#5271FF]
                hover:from-[#2F9BE8] hover:to-[#435FED]
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3AB0FF]"
              >
                Test Your Knowledge
              </span>
            </Link>
          </MotionWrapper>
        </div>
      </Container>
    </AuroraBackground>
  );
}