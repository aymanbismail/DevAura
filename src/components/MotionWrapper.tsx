"use client";

import { motion, useInView, useAnimation, domAnimation, LazyMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface MotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "zoom-out";
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MotionWrapper = ({
  children,
  delay = 0,
  duration = 0.6,
  animation = "fade-up",
  once = true,
  className = "",
  style = {},
}: MotionWrapperProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-left": {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    "fade-right": {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    "zoom-in": {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    "zoom-out": {
      hidden: { opacity: 0, scale: 1.05 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants[animation]}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
};

export default MotionWrapper;
