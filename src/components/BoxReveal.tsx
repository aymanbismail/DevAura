"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useMemo } from "react";

type AnimationType =
  | "slide-right"
  | "slide-left"
  | "slide-up"
  | "slide-down"
  | "fade"
  | "scale";

interface BoxRevealProps {
  children: React.ReactNode;
  width?: string;
  boxColor?: string;
  duration?: number;
  delay?: number;
  animationType?: AnimationType;
  once?: boolean;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor = "#5271FF",
  duration = 0.5,
  delay = 0,
  animationType = "slide-right",
  once = true,
  threshold = 0.1,
  className = "",
  style = {},
  disabled = false,
}: BoxRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: "-50px 0px",
    amount: threshold,
  });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const animationVariants = useMemo(() => {
    const variants = {
      "slide-right": {
        main: {
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        },
        slide: {
          hidden: { left: 0 },
          visible: { left: "100%" },
        },
      },
      "slide-left": {
        main: {
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        },
        slide: {
          hidden: { right: 0 },
          visible: { right: "100%" },
        },
      },
      "slide-up": {
        main: {
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        },
        slide: {
          hidden: { bottom: 0 },
          visible: { bottom: "100%" },
        },
      },
      "slide-down": {
        main: {
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        },
        slide: {
          hidden: { top: 0 },
          visible: { top: "100%" },
        },
      },
      fade: {
        main: {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        },
        slide: {
          hidden: { opacity: 1 },
          visible: { opacity: 0 },
        },
      },
      scale: {
        main: {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        },
        slide: {
          hidden: { scale: 1 },
          visible: { scale: 0 },
        },
      },
    };

    return variants[animationType] || variants["slide-right"];
  }, [animationType]);

  const transitionConfig = useMemo(
    () => ({
      duration,
      delay: delay + 0.25,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    }),
    [duration, delay]
  );

  const slideTransitionConfig = useMemo(
    () => ({
      duration: duration * 0.8,
      delay,
      ease: [0.76, 0, 0.24, 1] as const,
    }),
    [duration, delay]
  );

  useEffect(() => {
    if (disabled || !ref.current) return;

    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, disabled]);

  if (disabled) {
    return (
      <div className={className} style={{ width, ...style }}>
        {children}
      </div>
    );
  }

  const getSlidePosition = () => {
    const baseStyle: React.CSSProperties = {
      position: "absolute",
      zIndex: 20,
      background: boxColor,
      borderRadius: "inherit",
    };

    switch (animationType) {
      case "slide-left":
        return { ...baseStyle, top: 4, bottom: 4, right: 0, left: 0 };
      case "slide-up":
        return { ...baseStyle, left: 4, right: 4, bottom: 0, top: 0 };
      case "slide-down":
        return { ...baseStyle, left: 4, right: 4, top: 0, bottom: 0 };
      case "fade":
      case "scale":
        return { ...baseStyle, inset: 0 };
      default: // slide-right
        return { ...baseStyle, top: 4, bottom: 4, left: 0, right: 0 };
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={ref}
        className={`relative overflow-hidden ${className}`}
        style={{ width, ...style }}
      >
        <m.div
          variants={animationVariants.main}
          initial="hidden"
          animate={mainControls}
          transition={transitionConfig}
          className="relative z-10"
        >
          {children}
        </m.div>

        <m.div
          variants={animationVariants.slide}
          initial="hidden"
          animate={slideControls}
          transition={slideTransitionConfig}
          style={getSlidePosition()}
        />
      </div>
    </LazyMotion>
  );
};

export default BoxReveal;
